import { colors } from './uiConstants';

export const getScrollValues = (e) => {
    let scrollTop = e.target.scrollTop;
    let scrollBottom = e.target.scrollBottom;
    let scrollRight = e.target.scrollRight;
    let scrollLeft = e.target.scrollLeft;
    return {
        scrollTop,
        scrollBottom,
        scrollRight,
        scrollLeft,
    }
}

export const getWindowWidth = (e) => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    return  windowWidth
}
export const SortWithInsertion = (arr) => {
    
}
export const checkIfArray = (arr) => {
   let isArr =  Array.isArray(arr)
   if(isArr) return true
   return false
}

export const cssModules = styleObject => (classList) => {
    const generateClassString=(list, myClass)=>{
        let output = list;
        if (output) {
          output += ' '; // appends a space if list is not empty
        }
        if (Array.isArray(myClass)) {
          output += myClass.reduce(generateClassString, ''); // recursion to deal with Arrays
        } else if (styleObject[myClass]) {
          output += styleObject[myClass];
          // append styleObject['myClass'] value to the list if it is defined in styleObject
        } else if (typeof myClass === 'string') {
          output += myClass; // append 'myClass' directly to the list
        }
        return output;
    }
    let classArray = classList.split(' ');
    return classArray.reduce(generateClassString, '');
}

// export const localStorageGet = (index) => {
//   try {
//     const serializedData = localStorage.getItem(index);
//     if (serializedData === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedData);
//   } catch (err) {
//     return undefined;
//   }
// };

// export const localStorageSave = (data,index) => {
//   try {
//     const serializedData = JSON.stringify(data);
//     localStorage.setItem(index, serializedData);
//   }catch (err) {
//     return err;
//   }
// };

export const getAsObjectFromSession = (index) => {
  try{
    const serializedData  = sessionStorage.getItem(index) 
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
    }catch (err) {
      return err;
    }
}
export const  saveObjectInSession = (key, value) => {
  try{
    const serializedData = JSON.stringify(value);
    sessionStorage.setItem(key, serializedData);    
  }catch (err){
      return err;
  }
}
export const getAsObjectFromLocalStorage = (index) => {
  try{
    const serializedData  = localStorage.getItem(index) 
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
    }catch (err) {
      return err;
    }
}
export const  saveObjectInLocalStorage = (key, value) => {
  try{
    const serializedData = JSON.stringify(value);
    localStorage.setItem(key, serializedData);    
  }catch (err){
      return err;
  }
}



export const sessionSave = (key,value) => {
  sessionStorage.setItem(key, value);    
}
export const sessionGet = (key) => {
  const value = localStorage.getItem(key) 
  return value
}
export const localStorageSave = (key,value) => {
  localStorage.setItem(key, value);    
}
export const localStorageGet = (key) => {
  const value = localStorage.getItem(key) 
  return value
}
export const checkIfLoggedIn = () => {
  let userStateFromSession = localStorage.getItem('isActive') 
  console.log(userStateFromSession)
  let userState = parseInt(userStateFromSession)
  if(userState === 1){
      return true
  }
  else {
      return false;
  }
}
export const CheckIfInSight  = (callback,element) => {
  let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
  }
  const callBack = (element) => {
    if (element.intersectionRatio <= 0) return 0;
    return 1;
    }
    let observer = new IntersectionObserver(callBack, options);
    observer.observe(element)
}

export const LoadMoreObserver  = (callback,element) => {

  let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
  }
  const callBack = (element) => {
    // console.log(element)
    if (element.intersectionRatio <= 0) return;
      if(typeof callback === "function"){
        callback()
        console.log("working")
      }
      else {
        console.log("Error: No call back function passed")
      }
      // callback===undefined||callback===null?alert("Error: No call back function passed"):callback()
    }
    let observer = new IntersectionObserver(callBack, options);
    observer.observe(element)
}


export const  readyForMapping = (array) => {
  //If it's not an array, return FALSE.
  if (!Array.isArray(array)) {
      return false;
  }
  //If it is an array, check its length property
  if (array.length == 0) {
      //Return TRUE if the array is empty
      return false;
  }
  //Otherwise, return FALSE.
  return true;
}

export const sliceArrayInIntervals = (objectToSlice, lowerlimit, upperlimit) => {
  let slicedData = objectToSlice.slice(lowerlimit, upperlimit)
  return slicedData;
}
// export const searchArray = function(arr, regex) {
//   let matches=[], i;
//   for (i=0; i<arr.length; i++) {
//     if (arr[i].match(regex)) matches.push(arr[i]);
//   }
//   return matches;
// };

export const checkRegex = (myString,pattern,fieldName)=>{
  if(pattern===null){
    return undefined;
  }
  else{
    let regex = new RegExp(pattern);
    let regexState = regex.test(myString);
    if(regexState){
      return true
    }
    else{
      return false
    }
  }
    
}
export const regexCheck = (fieldName,myString, pattern)=>{
  let regex = new RegExp(pattern);
  let regexState = regex.test(myString);
  return regexState;   
}
export const regexChecker = (value,pattern) => {
    const re = pattern
    return re.test(value);
}
export const convertToJson = (myObj) => {
  let obj = JSON.stringify(myObj)
  return obj;
}
export const searchContains = (dataToSearchIn,searchValue,property) => {
  let reg = new RegExp("[^,]*"+searchValue+"[^,]*",'ig')     
  // console.log(dataToSearchIn)
  const searchResults = dataToSearchIn.filter(item => item[property].match(reg));
  return searchResults;
}
export const ifContainsWord = (value) => {
  let reg = new RegExp("[^,]*"+value+"[^,]*",'ig')     
  const regexState = value.match(reg);
  return regexState;
}
export const searchArrayWithRegex = (dataToSearchIn, regex, property) => {
  const searchResults = dataToSearchIn.filter(item => item[property].match(regex));
  return searchResults;
}
export const deleteValueFromArray = (arr,value) => {
  let newArr = arr.filter(item => item !== value)
  return newArr;
}
export const removeDuplicatesFromArray = (arr,value) => {
    var seen = {};
    return arr.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}
export const removeDuplicatesFromArrayOfObjects = (arr,value) => {
    var prims = {"boolean":{}, "number":{}, "string":{}}, objs = [];
    return arr.filter(function(item) {
        var type = typeof item;
        if(type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
}
export const searchArrayForWord = (dataToSearchIn, searchValue, property) => {
  const searchResults = dataToSearchIn.filter(item => { return item[property].includes(searchValue)});
  return searchResults;
}
export const getRandomStringKey = (limit = 9999999) => {
  return Math.random(limit).toString();
};
export const checkIfObjectExistInArray = (arrayOfObject, objectToCheck) => {
  let checkIfExits = arrayOfObject.indexOf(objectToCheck)
  if(checkIfExits !== -1){
    return true
  }
  return false
}
export const getRandomColor = () => {
      let selectedColor =  colors[Math.floor(Math.random() * colors.length)]
      return selectedColor;
  }
export const getRandomFromArray= (arr) => {
      let selected =  arr[Math.floor(Math.random() * arr.length)]
      return selected;
  }
  export const isEmpty =  (obj) => {
    return Object.keys(obj).length === 0;
  }
  export const objectIsEmpty = (obj)  => {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}
// If any prop is empty return 
  export const noPropIsEmpty = (obj)  => {
    for(var prop in obj) {//obj has property and non of the properties are empty, return true
      if((obj.hasOwnProperty(prop))&&(obj[prop]===null||obj[prop]===undefined||obj[prop]===""||obj[prop]===" ")){
        console.log('2',false)
        return true;
      }
      else{
        return false;
      }
    }
}
export const anyPropertyIsEmptyOrNull = (obj,property) => {
  for(var prop in obj){
    if(obj[prop]===""||obj[prop]===null||obj[prop]===undefined){
      console.log(obj[prop])
      return prop
    }else{
      return 'success'
    }
  }
}
export const clearSessionStorage = () => {
  let value = sessionStorage.clear()
  return value
}
export const clearLocalStorage = () => {
  let value = localStorage.clear();

  return value
}
export const removeItemFromLocalStorage = (item) => {
  let value = localStorage.removeItem(item);
  return value
}

export const randomDate = (start, end) => {
  return new Date(+(new Date()) - Math.floor(Math.random()*10000000000));
}
// export const randomMomentDat = () => 
// randomDate(new Date(2012, 0, 1), new Date())
export const randomDOB = () => {
  let dob;

//set a range of years
let min = 1900;
let max = 2004;

// Math.ceil prevents the value from being 0;
let month = Math.ceil(Math.random() * 12);
let day = Math.ceil(Math.random() * 28);
let year = Math.floor(Math.random() * (max - min) + min);

//this ensures that the format will stay mm/dd/yyyy;
if(month < 10) {
	month = "0" + month;
}
if(day < 10) {
	day = "0" + day;
}
//concatenates random dob in mm/dd/yyyy format;
dob = month + "/" + day + "/" + year;

return dob;
}
export const getRandomInt = (max=20)  => {
  return Math.floor(Math.random() * max);
}
const startingYear = parseInt((new Date()).getFullYear());
const endYear = startingYear - 100

export const generateYears = (start=startingYear,stop=endYear,step=1) =>{ 
  let objects = []
  let startYear = start+1;

  for (let i=start; i>=stop; i--){
    startYear -= step;
    objects.push({year:`${startYear}`})
  }
  return objects
}
export const generateRandomString = (length=20, chars ="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")  => {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  // console.log(result.toUpperCase())
  return result.toUpperCase();
}


let i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
var length = 0;

export const typeWriter = (text="Some text", speed = 50, element)  =>{
  if(element===undefined) return
  console.log(element)
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
}
export const makeObjectFromArrayOfObjects = (arrOfObjects, answers=undefined) => {
  let combinedObjects  = {}
  arrOfObjects.map((item,index) => {
      for(let property in item ){
          combinedObjects[property] = item[property]
      }
  })
  if(answers === undefined) return combinedObjects
  for(let property in answers) {
      combinedObjects[property] = answers[property]
  }
  return combinedObjects
}
export const getFirstLetter = (str) => {
  let str1 = ''
  try{
    str1 = str.charAt(0).toUpperCase();
  }catch{
  }
  return str1
}
export const capitalizeFirstLetter = (str) => {
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  return str2
}
export const cloneObject = (obj) => {
  let deepClone = JSON.parse(JSON.stringify(obj));
  return deepClone
}
export const getTodaysDate = (obj,format,delimeter='-') => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  if(format === 'YYYY-MM-DD'){
    today =   yyyy + delimeter + mm + delimeter + dd;
  }
  else if(format === 'YYYY-MM-DD'){
    today = yyyy + delimeter + mm+ delimeter + dd;
  }
  else if(format === 'MM-DD-YYYY'){
    today = mm + delimeter + dd+ delimeter + yyyy;
  }
  else {
    today = yyyy + delimeter + mm+ delimeter+ dd;
  }
  return today;
}
export const getTodaysDateWithoutDash = (obj,format,delimeter='-') => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  if(format === 'YYYY-MM-DD'){
    today =   yyyy + mm + dd;
  }
  else if(format === 'YYYY-MM-DD'){
    today = yyyy  + mm + dd;
  }
  else if(format === 'MM-DD-YYYY'){
    today = mm  + dd +  yyyy;
  }
  else {
    today = yyyy + mm +  dd;
  }
  return today;
}
export const getTommorowsDate = (obj,format,delimeter='-') => {
  var today = new Date();
  var day = `${parseInt(today.getDate()) + 1}`
  var dd = String(day).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  if(format === 'YYYY-MM-DD'){
    today =   yyyy + delimeter + mm + delimeter + dd;
  }
  else if(format === 'YYYY-MM-DD'){
    today = yyyy + delimeter + mm+ delimeter + dd;
  }
  else if(format === 'MM-DD-YYYY'){
    today = mm + delimeter + dd+ delimeter + yyyy;
  }
  else {
    today = yyyy + delimeter + mm+ delimeter+ dd;
  }
  return today;
}

export const makeRandomId = (length) => {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
  }
  return result;
}
export const getFormData = (object) => {
  const formData = new FormData();
  Object.keys(object).forEach(key => formData.append(key, object[key]));
  return formData;
}
export const getFormData2 = object => Object.keys(object).reduce((formData, key) => {
    formData.append(key, object[key]);
    return formData;
}, new FormData());

export const convertToUrlEncoded = (objs) => {
  let value = new URLSearchParams(Object.entries(objs)).toString();
  return value 
}
export const getTime = () => {
  var d = new Date(); // for now
  let hours = d.getHours(); // => 9
  let minutes =  d.getMinutes(); // =>  30
  let seconds =  d.getSeconds(); // => 51
  let time = `${hours}:${minutes}:${seconds}`
  return time;
}
export const getDateAndTime = () => {
  var d = new Date(); // for now
  let hours = d.getHours(); // => 9
  let minutes =  d.getMinutes(); // =>  30
  let seconds =  d.getSeconds(); // => 51
  let time = `${getTodaysDate()},${hours}:${minutes}:${seconds}`
  return time;
}
export const deleteObjFromArrayOfObjects = (arr,property,value) => {
  let newArr = arr.filter(person => person[property] != value);
  return newArr;

}
export const allEmojis = {
    smilyAndPeople:["😀","😃","😄","😁","😆","😅","😂","🤣","☺️","😊","😇","🙂","🙃","😉","😌","😍","😘","😗","😙","😚","😋","😜","😝","😛","🤑","🤗","🤓","😎","🤡","🤠","😏","😒","😞","😔","😟","😕","🙁","☹️","😣","😖","😫","😩","😤","😠","😡","😶","😐","😑","😯","😦","😧","😮","😲","😵","😳","😱","😨","😰","😢","😥","🤤","😭","😓","😪","😴","🙄","🤔","🤥","😬","🤐","🤢","🤧","😷","🤒","🤕","😈","👿","👹","👺","💩","👻","💀","☠️","👽","👾","🤖","🎃","😺","😸","😹","😻","😼","😽","🙀","😿","😾","👐","🙌","👏","🙏","🤝","👍","👎","👊","✊","🤛","🤜","🤞","✌️","🤘","👌","👈","👉","👆","👇","☝️","✋","🤚","🖐","🖖","👋","🤙","💪","🖕","✍️","🤳","💅","💍","💄","💋","👄","👅","👂","👃","👣","👁","👀", "🧠","🗣","👤","👥","👶","👦","👧","👨","👩","👱‍♀","👱","👴","👵","👲","👳‍♀","👳","👮‍♀","👮","👷‍♀","👷","💂‍♀","💂","🕵️‍♀️","🕵","👩‍⚕","👨‍⚕","👩‍🌾","👨‍🌾","👩‍🍳","👨‍🍳","👩‍🎓","👨‍🎓","👩‍🎤","👨‍🎤","👩‍🏫","👨‍🏫","👩‍🏭","👨‍🏭","👩‍💻","👨‍💻","👩‍💼","👨‍💼","👩‍🔧","👨‍🔧","👩‍🔬","👨‍🔬","👩‍🎨","👨‍🎨","👩‍🚒","👨‍🚒","👩‍✈","👨‍✈","👩‍🚀","👨‍🚀","👩‍⚖","👨‍⚖","🤶","🎅","👸","🤴","👰","🤵","👼","🤰","🙇‍♀","🙇","💁","💁‍♂","🙅","🙅‍♂","🙆","🙆‍♂","🙋","🙋‍♂","🤦‍♀","🤦‍♂","🤷‍♀","🤷‍♂","🙎","🙎‍♂","🙍","🙍‍♂","💇","💇‍♂","💆","💆‍♂","🕴","💃","🕺","👯","👯‍♂","🚶‍♀","🚶","🏃‍♀","🏃","👫","👭","👬","💑","👩‍❤️‍👩","👨‍❤️‍👨","💏","👩‍❤️‍💋‍👩","👨‍❤️‍💋‍👨","👪","👨‍👩‍👧","👨‍👩‍👧‍👦","👨‍👩‍👦‍👦","👨‍👩‍👧‍👧","👩‍👩‍👦","👩‍👩‍👧","👩‍👩‍👧‍👦","👩‍👩‍👦‍👦","👩‍👩‍👧‍👧","👨‍👨‍👦","👨‍👨‍👧","👨‍👨‍👧‍👦","👨‍👨‍👦‍👦","👨‍👨‍👧‍👧","👩‍👦","👩‍👧","👩‍👧‍👦","👩‍👦‍👦","👩‍👧‍👧","👨‍👦","👨‍👧","👨‍👧‍👦","👨‍👦‍👦","👨‍👧‍👧","👚","👕","👖","👔","👗","👙","👘","👠","👡","👢","👞","👟","🧣","🧤","🧥","🧦","🧢","👒","🎩","🎓","👑","⛑","🎒","👝","👛","👜","💼","👓","🕶","🌂","☂️"],
    animalsAndNature:["🐶","🐻","🐱","🐭","🐹","🐰","🦊","🐼","🐨","🐯","🦁","🐮","🐷","🐽","🐸","🐵","🙈","🙉","🙊","🐒","🐔","🐧","🐦","🐤","🐣","🐥","🦆","🦅","🦉","🦇","🐺","🐗","🐴","🦄","🐝","🐛","🦋","🐌","🐚","🐞","🐜","🕷","🕸","🐢","🐍","🦎","🦂","🦀","🦑","🐙","🦐","🐠","🐟","🐡","🐬","🦈","🐳","🐋","🐊","🐆","🐅","🐃","🐂","🐄","🦌","🐪","🐫","🐘","🦏","🦍","🐎","🐖","🐐","🐏","🐑","🐕","🐩","🐈","🐓","🦃","🕊","🐇","🐁","🐀","🐿","🐾","🐉","🐲","🌵","🎄","🌲","🌳","🌴","🌱","🌿","☘️","🍀","🎍","🎋","🍃","🍂","🍁","🍄","🌾","💐","🌷","🌹","🥀","🌻","🌼","🌸","🌺","🌎","🌍","🌏","🌕","🌖","🌗","🌘","🌑","🌒","🌓","🌔","🌚","🌝","🌞","🌛","🌜","🌙","💫","⭐️","🌟","✨","⚡️","🔥","💥","☄","☀️","🌤","⛅️","🌥","🌦","🌈","☁️","🌧","⛈","🌩","🌨","☃️","⛄️","❄️","🌬","💨","🌪","🌫","🌊","💧","💦","☔️","🦓","🦒","🦔","🦕","🦖"],
    foodAndDrink:["🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🍍", "🥝", "🥑", "🍅", "🍆", "🥒", "🥕", "🌽", "🌶", "🥔", "🍠", "🌰", "🥜", "🍯", "🥐", "🍞", "🥖", "🧀", "🥚", "🍳", "🥓", "🥞", "🍤", "🍗", "🍖", "🍕", "🌭", "🍔", "🍟", "🥙", "🌮", "🌯", "🥗", "🥘", "🍝", "🍜", "🍲", "🍥", "🍣", "🍱", "🍛", "🍚", "🍙", "🍘", "🍢", "🍡", "🍧", "🍨", "🍦", "🍰", "🎂", "🍮", "🍭", "🍬", "🍫", "🍿", "🍩", "🍪", "🥛", "🍼", "☕️", "🍵", "🍶", "🍺", "🍻", "🥂", "🍷", "🥃", "🍸", "🍹", "🍾", "🥄", "🍴", "🍽", "🥥","🥦","🥨","🥩","🥪","🥣","🥫","🥟","🥠","🥡","🥧","🥤","🥢"],
    objects:["📁", "📂", "⌚", "📱", "📲", "💻", "⌨️", "🖥", "🖨", "🖱", "🖲", "🕹", "🗜", "💽", "💾", "💿", "📀", "📼", "📷", "📸", "📹", "🎥", "📽", "🎞", "📞", "☎️", "📟", "📠", "📺", "📻", "🎙", "🎚", "🎛", "⏱", "⏲", "⏰", "🕰", "⌛️", "⏳", "📡", "🔋", "🔌", "💡", "🔦", "🕯", "🗑", "🛢", "💸", "💵", "💴", "💶", "💷", "💰", "💳", "💎", "⚖️", "🔧", "🔨", "⚒", "🛠", "⛏", "🔩", "⚙️", "⛓", "🔫", "💣", "🔪", "🗡", "⚔️", "🛡", "🚬", "⚰️", "⚱️", "🏺", "🔮", "📿", "💈", "⚗️", "🔭", "🔬", "🕳", "💊", "💉", "🌡", "🚽", "🚰", "🚿", "🛁", "🛀", "🛎", "🔑", "🗝", "🚪", "🛋", "🛏", "🛌", "🖼", "🛍", "🛒", "🎁", "🎈", "🎏", "🎀", "🎊", "🎉", "🎎", "🏮", "🎐", "✉️", "📩", "📨", "📧", "💌", "📥", "📤", "📦", "🏷", "📪", "📫", "📬", "📭", "📮", "📯", "📜", "📃", "📄", "📑", "📊", "📈", "📉", "🗒", "🗓", "📆", "📅", "📇", "🗃", "🗳", "🗄", "📋", "📁", "📂", "🗂", "🗞", "📰", "📓", "📔", "📒", "📕", "📗", "📘", "📙", "📚", "📖", "🔖", "🔗", "📎", "🖇", "📐", "📏", "📌", "📍", "✂️", "🖊", "🖋", "✒️", "🖌", "🖍", "📝", "✏️", "🔍", "🔎", "🔏", "🔐", "🔒", "🔓"],
    flags:["🏳️", "🏴", "🏁", "🚩", "🏳️‍🌈", "🇦🇫", "🇦🇽", "🇦🇱", "🇩🇿", "🇦🇸", "🇦🇩", "🇦🇴", "🇦🇮", "🇦🇶", "🇦🇬", "🇦🇷", "🇦🇲", "🇦🇼", "🇦🇺", "🇦🇹", "🇦🇿", "🇧🇸", "🇧🇭", "🇧🇩", "🇧🇧", "🇧🇾", "🇧🇪", "🇧🇿", "🇧🇯", "🇧🇲", "🇧🇹", "🇧🇴", "🇧🇶", "🇧🇦", "🇧🇼", "🇧🇷", "🇮🇴", "🇻🇬", "🇧🇳", "🇧🇬", "🇧🇫", "🇧🇮", "🇨🇻", "🇰🇭", "🇨🇲", "🇨🇦", "🇮🇨", "🇰🇾", "🇨🇫", "🇹🇩", "🇨🇱", "🇨🇳", "🇨🇽", "🇨🇨", "🇨🇴", "🇰🇲", "🇨🇬", "🇨🇩", "🇨🇰", "🇨🇷", "🇨🇮", "🇭🇷", "🇨🇺", "🇨🇼", "🇨🇾", "🇨🇿", "🇩🇰", "🇩🇯", "🇩🇲", "🇩🇴", "🇪🇨", "🇪🇬", "🇸🇻", "🇬🇶", "🇪🇷", "🇪🇪", "🇪🇹", "🇪🇺", "🇫🇰", "🇫🇴", "🇫🇯", "🇫🇮", "🇫🇷", "🇬🇫", "🇵🇫", "🇹🇫", "🇬🇦", "🇬🇲", "🇬🇪", "🇩🇪", "🇬🇭", "🇬🇮", "🇬🇷", "🇬🇱", "🇬🇩", "🇬🇵", "🇬🇺", "🇬🇹", "🇬🇬", "🇬🇳", "🇬🇼", "🇬🇾", "🇭🇹", "🇭🇳", "🇭🇰", "🇭🇺", "🇮🇸", "🇮🇳", "🇮🇩", "🇮🇷", "🇮🇶", "🇮🇪", "🇮🇲", "🇮🇹", "🇯🇲", "🇯🇵", "🎌", "🇯🇪", "🇯🇴", "🇰🇿", "🇰🇪", "🇰🇮", "🇽🇰", "🇰🇼", "🇰🇬", "🇱🇦", "🇱🇻", "🇱🇧", "🇱🇸", "🇱🇷", "🇱🇾", "🇱🇮", "🇱🇹", "🇱🇺", "🇲🇴", "🇲🇰", "🇲🇬", "🇲🇼", "🇲🇾", "🇲🇻", "🇲🇱", "🇲🇹", "🇲🇭", "🇲🇶", "🇲🇷", "🇲🇺", "🇾🇹", "🇲🇽", "🇫🇲", "🇲🇩", "🇲🇨", "🇲🇳", "🇲🇪", "🇲🇸", "🇲🇦", "🇲🇿", "🇲🇲", "🇳🇦", "🇳🇷", "🇳🇵", "🇳🇱", "🇳🇨", "🇳🇿", "🇳🇮", "🇳🇪", "🇳🇬", "🇳🇺", "🇳🇫", "🇲🇵", "🇰🇵", "🇳🇴", "🇴🇲", "🇵🇰", "🇵🇼", "🇵🇸", "🇵🇦", "🇵🇬", "🇵🇾", "🇵🇪", "🇵🇭", "🇵🇳", "🇵🇱", "🇵🇹", "🇵🇷", "🇶🇦", "🇷🇪", "🇷🇴", "🇷🇺", "🇷🇼", "🇧🇱", "🇸🇭", "🇰🇳", "🇱🇨", "🇵🇲", "🇻🇨", "🇼🇸", "🇸🇲", "🇸🇹", "🇸🇦", "🇸🇳", "🇷🇸", "🇸🇨", "🇸🇱", "🇸🇬", "🇸🇽", "🇸🇰", "🇸🇮", "🇸🇧", "🇸🇴", "🇿🇦", "🇬🇸", "🇰🇷", "🇸🇸", "🇪🇸", "🇱🇰", "🇸🇩", "🇸🇷", "🇸🇿", "🇸🇪", "🇨🇭", "🇸🇾", "🇹🇼", "🇹🇯", "🇹🇿", "🇹🇭", "🇹🇱", "🇹🇬", "🇹🇰", "🇹🇴", "🇹🇹", "🇹🇳", "🇹🇷", "🇹🇲", "🇹🇨", "🇹🇻", "🇺🇬", "🇺🇦", "🇦🇪", "🇬🇧", "🇺🇸", "🇻🇮", "🇺🇾", "🇺🇿", "🇻🇺", "🇻🇦", "🇻🇪", "🇻🇳", "🇼🇫", "🇪🇭", "🇾🇪", "🇿🇲", "🇿🇼", "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "🏴󠁧󠁢󠁷󠁬󠁳󠁿"],
    symbols :["❤️","💛","💚","💙","💜","🖤","💔","❣️","💕","💞","💓","💗","💖","💘","💝","💟","☮️","✝️","☪️","🕉","☸️","✡️","🔯","🕎","☯️","☦️","🛐","⛎","♈️","♉️","♊️","♋️","♌️","♍️","♎️","♏️","♐️","♑️","♒️","♓️","🆔","⚛️","🉑","☢️","☣️","📴","📳","🈶","🈚️","🈸","🈺","🈷️","✴️","🆚","💮","🉐","㊙️","㊗️","🈴","🈵","🈹","🈲","🅰️","🅱️","🆎","🆑","🅾️","🆘","❌","⭕️","🛑","⛔️","📛","🚫","💯","💢","♨️","🚷","🚯","🚳","🚱","🔞","📵","🚭","❗️","❕","❓","❔","‼️","⁉️","🔅","🔆","〽️","⚠️","🚸","🔱","⚜️","🔰","♻️","✅","🈯️","💹","❇️","✳️","❎","🌐","💠","Ⓜ️","🌀","💤","🏧","🚾","♿️","🅿️","🈳","🈂️","🛂","🛃","🛄","🛅","🚹","🚺","🚼","🚻","🚮","🎦","📶","🈁","🔣","ℹ️","🔤","🔡","🔠","🆖","🆗","🆙","🆒","🆕","🆓","0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣","🔟","🔢","#️⃣","*️⃣","▶️","⏸","⏯","⏹","⏺","⏭","⏮","⏩","⏪","⏫","⏬","◀️","🔼","🔽","➡️","⬅️","⬆️","⬇️","↗️","↘️","↙️","↖️","↕️","↔️","↪️","↩️","⤴️","⤵️","🔀","🔁","🔂","🔄","🔃","🎵","🎶","➕","➖","➗","✖️","💲","💱","™️","©️","®️","〰️","➰","➿","🔚","🔙","🔛","🔝","🔜","✔️","☑️","🔘","⚪️","⚫️","🔴","🔵","🔺","🔻","🔸","🔹","🔶","🔷","🔳","🔲","▪️","▫️","◾️","◽️","◼️","◻️","⬛️","⬜️","🔈","🔇","🔉","🔊","🔔","🔕","📣","📢","👁‍🗨","💬","💭","🗯","♠️","♣️","♥️","♦️","🃏","🎴","🀄️","🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚","🕛","🕜","🕝","🕞","🕟","🕠","🕡","🕢","🕣","🕤","🕥","🕦","🕧"],
    travelAndPlaces:[ "🚗", "🚕", "🚙", "🚌", "🚎", "🏎", "🚓", "🚑", "🚒", "🚐", "🚚", "🚛", "🚜", "🛴", "🚲", "🛵", "🏍", "🚨", "🚔", "🚍", "🚘", "🚖", "🚡", "🚠", "🚟", "🚃", "🚋", "🚞", "🚝", "🚄", "🚅", "🚈", "🚂", "🚆", "🚇", "🚊", "🚉", "🚁", "🛩", "✈️", "🛫", "🛬", "🚀", "🛰", "💺", "🛶", "⛵️", "🛥", "🚤", "🛳", "⛴", "🚢", "⚓️", "🚧", "⛽️", "🚏", "🚦", "🚥", "🗺", "🗿", "🗽", "⛲️", "🗼", "🏰", "🏯", "🏟", "🎡", "🎢", "🎠", "⛱", "🏖", "🏝", "⛰", "🏔", "🗻", "🌋", "🏜", "🏕", "⛺️", "🛤", "🛣", "🏗", "🏭", "🏠", "🏡", "🏘", "🏚", "🏢", "🏬", "🏣", "🏤", "🏥", "🏦", "🏨", "🏪", "🏫", "🏩", "💒", "🏛", "⛪️", "🕌", "🕍", "🕋", "⛩", "🗾", "🎑", "🏞", "🌅", "🌄", "🌠", "🎇", "🎆", "🌇", "🌆", "🏙", "🌃", "🌌", "🌉", "🌁","🦗","🛸","🛷","🥌"],
    activity:["⚽️", "🏀", "🏈", "⚾️", "🎾", "🏐", "🏉", "🎱", "🏓", "🏸", "🥅", "🏒", "🏑", "🏏", "⛳️", "🏹", "🎣", "🥊", "🥋", "⛸", "🎿", "⛷", "🏂", "🏋️‍♀️", "🏋", "🤺", "🤼‍♀", "🤼‍♂", "🤸‍♀", "🤸‍♂", "⛹️‍♀️", "⛹", "🤾‍♀", "🤾‍♂", "🏌️‍♀️", "🏌", "🏄‍♀", "🏄", "🏊‍♀", "🏊", "🤽‍♀", "🤽‍♂", "🚣‍♀", "🚣", "🏇", "🚴‍♀", "🚴", "🚵‍♀", "🚵", "🎽", "🏅", "🎖", "🥇", "🥈", "🥉", "🏆", "🏵", "🎗", "🎫", "🎟", "🎪", "🤹‍♀", "🤹‍♂", "🎭", "🎨", "🎬", "🎤", "🎧", "🎼", "🎹", "🥁", "🎷", "🎺", "🎸", "🎻", "🎲", "🎯", "🎳", "🎮", "🎰"],
}

    // stop all tracks
export const stopAllTracks =  (stream)  => {
  stream.getTracks().forEach(track => track.stop())
}


export const convertPercentToDegree= (value) => {
  let converted  = value/100 ;
  converted = converted * 360 ;
  return converted;
}
export const convertDegreeToPercent= (value) => {
  let converted  = value/360 ;
  converted = converted * 100 ;
  return converted;
}
export const getParameterByName = (name, url = window.location.href) => {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
export const encodeToB64 = (string) => {
  return btoa(string) 
}
export const decodeFromB64 = (string) => {
  return atob(string) 
}
