import ReadMoreIcon from '@mui/icons-material/ReadMore';
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { randomImages } from '../dummydata/dummyData';
import potBelly from '../assets/images/potbellyBack.jpeg';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';
import { REGEX_PATTERNS } from './generalContants';
import cape from '../assets/images/cape.jpeg'
import mole from '../assets/images/mole.jpeg'
import museums from '../assets/images/museums.jpeg'
import elmina from '../assets/images/Elmina.jpeg'
import kempinsky from '../assets/images/kempinski.jpeg'
import holiday from '../assets/images/holiday.jpeg'
import food1 from '../assets/images/food.png'
import food2 from '../assets/images/foodagain.jpeg'
import food3 from '../assets/images/foodplate.png'
import food4 from '../assets/images/foodsss.jpeg'
import food5 from '../assets/images/foods.jpeg'
import food6 from '../assets/images/foodssss.jpeg'
import food7 from '../assets/images/fooood burg.jpeg'
import food8 from '../assets/images/fooood burg.jpeg'
import food9 from '../assets/images/output-onlinegiftools (1).gif'
import potbellys1 from '../assets/images/pot1.jpeg'
import potbellys2 from '../assets/images/pot2.jpeg'
import potbellys3 from '../assets/images/pot3.jpeg'
import potbellys4 from '../assets/images/pot4.jpeg'
import potbellys5 from '../assets/images/pot6.jpeg'
import potbellys6 from '../assets/images/pot6.jpeg'
import potbellys7 from '../assets/images/pot7.jpeg'
import potbellys8 from '../assets/images/pot8.jpeg'
import potbellys9 from '../assets/images/pot9.jpeg'
import potbellys10 from '../assets/images/pot10.jpeg'
import potbellys11 from '../assets/images/pot11.jpeg'
import potbellys12 from '../assets/images/pot12.jpeg'
import potbellys13 from '../assets/images/pot13.jpeg'
import potbellys14 from '../assets/images/pot14.jpeg'
import dineIn from '../assets/images/dineine2.jpeg'
import delivery22 from '../assets/images/delivery22.jpeg'
import takeout22 from '../assets/images/takeout22.jpeg'
import opinion from '../assets/images/opinion.png'
import burg1 from '../assets/images/burg1.gif'
import burg2 from '../assets/images/burg2.gif'
import burg3 from '../assets/images/burg3.gif'
import burg4 from '../assets/images/burge4.gif'
import osuimage from '../assets/images/osuimage.jpeg'
import takeoutreal from '../assets/images/takeoutreal.jpeg'
import dineinnow from '../assets/images/diningnew.jpeg'
import image from '../assets/images/image.png'
import delivery from '../assets/images/takeoutreal.jpeg'
import motorbike from '../assets/images/motoBike.jpeg'
import { getWindowWidth } from './generalFunctions';
// import potbellys15 from '../assets/images/pot15.jpeg'
let innerWidth = window.innerWidth;
export const vertical = innerWidth<800?true:false

export const opine =  opinion;
export const images =  image;
export const osuImage =  osuimage;
export const takeoutReal =  takeoutreal;
export const dineinNow =  dineinnow;
export const deliVery =  delivery;
export const motoBike =  motorbike;


export const foood1 =  food1;
export const foood2 =  food2;
export const foood3 =  food3;
export const foood4 =  food4;
export const foood5 =  food5;
export const foood6 =  food6;
export const foood7 =  food7;
export const foood8 =  food8;
export const foood9 =  food9;
export const foood =  food9;
export const dinein =  dineIn;
export const delivery2 =  delivery22;
export const takeout2 =  takeout22;


export const burgs1 =  burg1;
export const burgs2 =  burg2;
export const burgs3 =  burg3;
export const burgs4 =  burg4;


export const potbelly1 =  potbellys1;
export const potbelly2 =  potbellys2;
export const potbelly3 =  potbellys3;
export const potbelly4 =  potbellys4;
export const potbelly5 =  potbellys5;
export const potbelly6 =  potbellys6;
export const potbelly7 =  potbellys7;
export const potbelly8 =  potbellys8;
export const potbelly9 =  potbellys9;
export const potbelly10 =  potbellys10;
export const potbelly11 =  potbellys11;
export const potbelly12 =  potbellys12;
export const potbelly13 =  potbellys13;
export const potbelly14 =  potbellys14;
// Cape Coast Castle, 
// Ghana museums and monuments board, 
// Mole National Park, 
// Elmina Castle, 
// Kempinski Hotel, 
// Holiday Inn Hotel
export const cardData = [
    {
        id:1,
        image:potBelly,
        groupName:"Potbelly Shack Restaurant",
        url:"/potbelly"
    },
    // {
    //     id:2,
    //     image:cape,
    //     groupName:"Cape Coast Castle",
    //     url:"no-forms"
    // },
    // {
    //     id:2,
    //     image:museums,
    //     groupName:"Ghana Museums and Monuments Board",
    //     url:"no-forms"
    // },
    // {
    //     id:3,
    //     image:mole,
    //     groupName:"Mole National Park",
    //     url:"no-forms"
    // },
    // {
    //     id:4,
    //     image:kempinsky,
    //      groupName:"Kempinski Hotel",
    //      url:"no-forms"
    // },
    // {
    //     id:5,
    //     image:holiday,
    //      groupName:"Holiday Inn Hotel",
    //      url:"no-forms"
    // },
    // {
    //     id:6,
    //     image:randomImages+"/6",
    //     groupName:"CSBG",
    //     url:"no-forms"
    // },

    // {
    //     id:7,
    //     image:randomImages+"/7",
    //     groupName:"Ministries",
    //     url:"no-forms"
    // },
    // {
    //     id:8,
    //     image:randomImages+"/8",
    //     groupName:"Achimota School",
    //     url:"no-forms"
    // },
    // {
    //     id:9,
    //     image:randomImages+"/9",
    //     groupName:"Empowerment Center",
    //     url:"no-forms"
    // },
    // {
    //     id:10,
    //     image:randomImages+"/10",
    //     groupName:"Pentecost University",
    //     url:"no-forms"
    // },
    // {
    //     id:11,
    //     image:randomImages+"/11",
    //     groupName:"Agric Community",
    //     url:"no-forms"
    // },
    // {
    //     id:12,
    //     image:randomImages+"/12",
    //     groupName:"Agona Primary School",
    //     url:"no-forms"
    // },
]


export const popUpItems = [
    {
        title:"View Details",
        icon:<ReadMoreIcon style={{fontSize:18}}/>
    },
    {
        title:"Flag as Prank",
        icon:<BlockIcon style={{fontSize:18}}/>
    },
    {
        title:"Mark as resolved",
        icon:<CheckCircleOutlineIcon style={{fontSize:18}}/>
    },
    {
        title:"Assign",
        icon:<AssignmentIndIcon style={{fontSize:18}}/>
    },
]
export const PAGES  = [
    {
        title:'Dashboard',
        url:"/dashboard",
        url_name:'dashboard'
    },
    {
        title:'Awaiting Approval',
        url:"/awaiting",
        url_name:'awaiting'
    },
    {
        title:'Approved List',
        url:"/approved",
        url_name:'approved'
    },
    // {
    //     title:'Question Details',
    //     url:"/answer/:id",
    //     url_name:'answer'
    // },
]

export const PAGE  = {
    dashboard:"Dashboard",
    awaiting:"Awaiting Approval",
    approved:"Approved List",
}

export const letteringColor = "white"
export const letteringColor2 = "green"
export const letteringColor3 = "white"
export const letteringColor4 = "grey"
export const letteringColor5 = "black"
export const letteringColor6 = "#102C60"
export const letteringColor7 = "#000F30"
export const letteringColor8 = "#6F3CB6"
export const letteringColor9 = "#1747a0"

export const fontFamily1 = "Playfair Display"
export const fontFamily2 = "Roboto"
export const fontFamily3 = "Helvetica Neue"
export const fontFamily4 = "Open Sans"
export const fontFamily5 = "Arial Rounded MT Bold"
export const fontFamily6 = "Railway"
export const fontFamily7 = "Montserrat, sans-serif"

export const domainName = "http://almamaterworld.com:8082"
export const devDomainName = "http://localhost:3000"

export const WEBSITE_NAME = "ALMA MATER ADMIN";

export const WEBSITE_ADDRESS = {
    contact: "+233 500 405 045",
    email: "admin@almamater.com",
    name: "ALMA MATER WORLD",
    year: "2021"
}


export const colors =['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
'silver', 'teal', 'grey', 'yellow'];

 export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
export const currencyCodes = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYR", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "USS", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XFU", "XOF", "XPD", "XPF", "XPT", "XTS", "XXX", "YER", "ZAR", "ZMW"];
// length 164
export const currency_list = [
     {code:"AFA",label:"Afghan Afghani ؋"},
     {code:"ALL",label:"Albanian Lek Lek"},
     {code:"DZD",label:"Algerian Dinar دج"},
     {code:"AOA",label:"Angolan Kwanza Kz"},
     {code:"ARS",label:"Argentine Peso $"},
     {code:"AMD",label:"Armenian Dram ֏"},
     {code:"AWG",label:"Aruban Florin ƒ"},
     {code:"AUD",label:"Australian Dollar $"},
     {code:"AZN",label:"Azerbaijani Manat m"},
     {code:"BSD",label:"Bahamian Dollar B$"},
     {code:"BHD",label:"Bahraini Dinar .د.ب"},
     {code:"BDT",label:"Bangladeshi Taka ৳"},
     {code:"BBD",label:"Barbadian Dollar Bds$"},
     {code:"BYR",label:"Belarusian Ruble Br"},
     {code:"BEF",label:"Belgian Franc fr"},
     {code:"BZD",label:"Belize Dollar $"},
     {code:"BMD",label:"Bermudan Dollar $"},
     {code:"BTN",label:"Bhutanese Ngultrum Nu."},
     {code:"BTC",label:"Bitcoin ฿"},
     {code:"BOB",label:"Bolivian Boliviano Bs."},
     {code:"BAM",label:"Bosnia-Herzegovina Convertible Mark KM"},
     {code:"BWP",label:"Botswanan Pula P"},
     {code:"BRL",label:"Brazilian Real R$"},
     {code:"GBP",label:"British Pound Sterling £"},
     {code:"BND",label:"Brunei Dollar B$"},
     {code:"BGN",label:"Bulgarian Lev Лв."},
     {code:"BIF",label:"Burundian Franc FBu"},
     {code:"KHR",label:"Cambodian Riel KHR"},
     {code:"CAD",label:"Canadian Dollar $"},
     {code:"CVE",label:"Cape Verdean Escudo $"},
     {code:"KYD",label:"Cayman Islands Dollar $"},
     {code:"XOF",label:"CFA Franc BCEAO CFA"},
     {code:"XAF",label:"CFA Franc BEAC FCFA"},
     {code:"XPF",label:"CFP Franc ₣"},
     {code:"CLP",label:"Chilean Peso $"},
     {code:"CNY",label:"Chinese Yuan ¥"},
     {code:"COP",label:"Colombian Peso $"},
     {code:"KMF",label:"Comorian Franc CF"},
     {code:"CDF",label:"Congolese Franc FC"},
     {code:"CRC",label:"Costa Rican ColÃ³n ₡"},
     {code:"HRK",label:"Croatian Kuna kn"},
     {code:"CUC",label:"Cuban Convertible Peso $, CUC"},
     {code:"CZK",label:"Czech Republic Koruna Kč"},
     {code:"DKK",label:"Danish Krone Kr."},
     {code:"DJF",label:"Djiboutian Franc Fdj"},
     {code:"DOP",label:"Dominican Peso $"},
     {code:"XCD",label:"East Caribbean Dollar $"},
     {code:"EGP",label:"Egyptian Pound ج.م"},
     {code:"ERN",label:"Eritrean Nakfa Nfk"},
     {code:"EEK",label:"Estonian Kroon kr"},
     {code:"ETB",label:"Ethiopian Birr Nkf"},
     {code:"EUR",label:"Euro €"},
     {code:"FKP",label:"Falkland Islands Pound £"},
     {code:"FJD",label:"Fijian Dollar FJ$"},
     {code:"GMD",label:"Gambian Dalasi D"},
     {code:"GEL",label:"Georgian Lari ლ"},
     {code:"DEM",label:"German Mark DM"},
     {code:"GHS",label:"Ghanaian Cedi GH₵"},
     {code:"GIP",label:"Gibraltar Pound £"},
     {code:"GRD",label:"Greek Drachma ₯, Δρχ, Δρ"},
     {code:"GTQ",label:"Guatemalan Quetzal Q"},
     {code:"GNF",label:"Guinean Franc FG"},
     {code:"GYD",label:"Guyanaese Dollar $"},
     {code:"HTG",label:"Haitian Gourde G"},
     {code:"HNL",label:"Honduran Lempira L"},
     {code:"HKD",label:"Hong Kong Dollar $"},
     {code:"HUF",label:"Hungarian Forint Ft"},
     {code:"ISK",label:"Icelandic KrÃ³na kr"},
     {code:"INR",label:"Indian Rupee ₹"},
     {code:"IDR",label:"Indonesian Rupiah Rp"},
     {code:"IRR",label:"Iranian Rial ﷼"},
     {code:"IQD",label:"Iraqi Dinar د.ع"},
     {code:"ILS",label:"Israeli New Sheqel ₪"},
     {code:"ITL",label:"Italian Lira L,£"},
     {code:"JMD",label:"Jamaican Dollar J$"},
     {code:"JPY",label:"Japanese Yen ¥"},
     {code:"JOD",label:"Jordanian Dinar ا.د"},
     {code:"KZT",label:"Kazakhstani Tenge лв"},
     {code:"KES",label:"Kenyan Shilling KSh"},
     {code:"KWD",label:"Kuwaiti Dinar ك.د"},
     {code:"KGS",label:"Kyrgystani Som лв"},
     {code:"LAK",label:"Laotian Kip ₭"},
     {code:"LVL",label:"Latvian Lats Ls"},
     {code:"LBP",label:"Lebanese Pound £"},
     {code:"LSL",label:"Lesotho Loti L"},
     {code:"LRD",label:"Liberian Dollar $"},
     {code:"LYD",label:"Libyan Dinar د.ل"},
     {code:"LTL",label:"Lithuanian Litas Lt"},
     {code:"MOP",label:"Macanese Pataca $"},
     {code:"MKD",label:"Macedonian Denar ден"},
     {code:"MGA",label:"Malagasy Ariary Ar"},
     {code:"MWK",label:"Malawian Kwacha MK"},
     {code:"MYR",label:"Malaysian Ringgit RM"},
     {code:"MVR",label:"Maldivian Rufiyaa Rf"},
     {code:"MRO",label:"Mauritanian Ouguiya MRU"},
     {code:"MUR",label:"Mauritian Rupee ₨"},
     {code:"MXN",label:"Mexican Peso $"},
     {code:"MDL",label:"Moldovan Leu L"},
     {code:"MNT",label:"Mongolian Tugrik ₮"},
     {code:"MAD",label:"Moroccan Dirham MAD"},
     {code:"MZM",label:"Mozambican Metical MT"},
     {code:"MMK",label:"Myanmar Kyat K"},
     {code:"NAD",label:"Namibian Dollar $"},
     {code:"NPR",label:"Nepalese Rupee ₨"},
     {code:"ANG",label:"Netherlands Antillean Guilder ƒ"},
     {code:"TWD",label:"New Taiwan Dollar $"},
     {code:"NZD",label:"New Zealand Dollar $"},
     {code:"NIO",label:"Nicaraguan CÃ³rdoba C$"},
     {code:"NGN",label:"Nigerian Naira ₦"},
     {code:"KPW",label:"North Korean Won ₩"},
     {code:"NOK",label:"Norwegian Krone kr"},
     {code:"OMR",label:"Omani Rial .ع.ر"},
     {code:"PKR",label:"Pakistani Rupee ₨"},
     {code:"PAB",label:"Panamanian Balboa B/."},
     {code:"PGK",label:"Papua New Guinean Kina K"},
     {code:"PYG",label:"Paraguayan Guarani ₲"},
     {code:"PEN",label:"Peruvian Nuevo Sol S/."},
     {code:"PHP",label:"Philippine Peso ₱"},
     {code:"PLN",label:"Polish Zloty zł"},
     {code:"QAR",label:"Qatari Rial ق.ر"},
     {code:"RON",label:"Romanian Leu lei"},
     {code:"RUB",label:"Russian Ruble ₽"},
     {code:"RWF",label:"Rwandan Franc FRw"},
     {code:"SVC",label:"Salvadoran ColÃ³n ₡"},
     {code:"WST",label:"Samoan Tala SAT"},
     {code:"SAR",label:"Saudi Riyal ﷼"},
     {code:"RSD",label:"Serbian Dinar din"},
     {code:"SCR",label:"Seychellois Rupee SRe"},
     {code:"SLL",label:"Sierra Leonean Leone Le"},
     {code:"SGD",label:"Singapore Dollar $"},
     {code:"SKK",label:"Slovak Koruna Sk"},
     {code:"SBD",label:"Solomon Islands Dollar Si$"},
     {code:"SOS",label:"Somali Shilling Sh.so."},
     {code:"ZAR",label:"South African Rand R"},
     {code:"KRW",label:"South Korean Won ₩"},
     {code:"XDR",label:"Special Drawing Rights SDR"},
     {code:"LKR",label:"Sri Lankan Rupee Rs"},
     {code:"SHP",label:"St. Helena Pound £"},
     {code:"SDG",label:"Sudanese Pound .س.ج"},
     {code:"SRD",label:"Surinamese Dollar $"},
     {code:"SZL",label:"Swazi Lilangeni E"},
     {code:"SEK",label:"Swedish Krona kr"},
     {code:"CHF",label:"Swiss Franc CHf"},
     {code:"SYP",label:"Syrian Pound LS"},
     {code:"STD",label:"São Tomé and Príncipe Dobra Db"},
     {code:"TJS",label:"Tajikistani Somoni SM"},
     {code:"TZS",label:"Tanzanian Shilling TSh"},
     {code:"THB",label:"Thai Baht ฿"},
     {code:"TOP",label:"Tongan Pa'anga $"},
     {code:"TTD",label:"Trinidad & Tobago Dollar $"},
     {code:"TND",label:"Tunisian Dinar ت.د"},
     {code:"TRY",label:"Turkish Lira ₺"},
     {code:"TMT",label:"Turkmenistani Manat T"},
     {code:"UGX",label:"Ugandan Shilling USh"},
     {code:"UAH",label:"Ukrainian Hryvnia ₴"},
     {code:"AED",label:"United Arab Emirates Dirham إ.د"},
     {code:"UYU",label:"Uruguayan Peso $"},
     {code:"USD",label:"US Dollar $"},
     {code:"UZS",label:"Uzbekistan Som лв"},
     {code:"VUV",label:"Vanuatu Vatu VT"},
     {code:"VEF",label:"Venezuelan BolÃvar Bs"},
     {code:"VND",label:"Vietnamese Dong ₫"},
     {code:"YER",label:"Yemeni Rial ﷼"},
     {code:"ZMK",label:"Zambian Kwacha ZK"}
];


// export const Images = {
//     logo: logo
// }
export const ALERTS = {
    LOGIN_ERROR: "Login failed",
    REGISTERATION_ERROR: "Registeration failed",
    REGISTERATION_SUCCESS: "Registeration was succesful",
    NON_EXISTENT_ERROR: "Email does not exist",
    RESET_ERROR: "Password reset failed",
    RESET_SUCESSFUL: "Reset was succesful",
    LOGIN_SUCCESS: "Login was successful",
}
export const INSTITUTIONS_ARRAY = [
    'TERTIARY','SECONDARY','BASIC','OTHER'
]
export const INSTITUTION_OBJECTS = [
    {name:'TERTIARY'},
    {name:'SECONDARY'},
    {name:'BASIC'},
    {name:'OTHER'}
]


export const $i = document.getElementById.bind(document)
export const $ = document.querySelectorAll.bind(document)

export const GROUPS = [
   
]

export const PENDING_GROUPS = []







export const YEARS =[
    {
        "year": "2021"
    },
    {
        "year": "2020"
    },
    {
        "year": "2019"
    },
    {
        "year": "2018"
    },
    {
        "year": "2017"
    },
    {
        "year": "2016"
    },
    {
        "year": "2015"
    },
    {
        "year": "2014"
    },
    {
        "year": "2013"
    },
    {
        "year": "2012"
    },
    {
        "year": "2011"
    },
    {
        "year": "2010"
    },
    {
        "year": "2009"
    },
    {
        "year": "2008"
    },
    {
        "year": "2007"
    },
    {
        "year": "2006"
    },
    {
        "year": "2005"
    },
    {
        "year": "2004"
    },
    {
        "year": "2003"
    },
    {
        "year": "2002"
    },
    {
        "year": "2001"
    },
    {
        "year": "2000"
    },
    {
        "year": "1999"
    },
    {
        "year": "1998"
    },
    {
        "year": "1997"
    },
    {
        "year": "1996"
    },
    {
        "year": "1995"
    },
    {
        "year": "1994"
    },
    {
        "year": "1993"
    },
    {
        "year": "1992"
    },
    {
        "year": "1991"
    },
    {
        "year": "1990"
    },
    {
        "year": "1989"
    },
    {
        "year": "1988"
    },
    {
        "year": "1987"
    },
    {
        "year": "1986"
    },
    {
        "year": "1985"
    },
    {
        "year": "1984"
    },
    {
        "year": "1983"
    },
    {
        "year": "1982"
    },
    {
        "year": "1981"
    },
    {
        "year": "1980"
    },
    {
        "year": "1979"
    },
    {
        "year": "1978"
    },
    {
        "year": "1977"
    },
    {
        "year": "1976"
    },
    {
        "year": "1975"
    },
    {
        "year": "1974"
    },
    {
        "year": "1973"
    },
    {
        "year": "1972"
    },
    {
        "year": "1971"
    },
    {
        "year": "1970"
    },
    {
        "year": "1969"
    },
    {
        "year": "1968"
    },
    {
        "year": "1967"
    },
    {
        "year": "1966"
    },
    {
        "year": "1965"
    },
    {
        "year": "1964"
    },
    {
        "year": "1963"
    },
    {
        "year": "1962"
    },
    {
        "year": "1961"
    },
    {
        "year": "1960"
    },
    {
        "year": "1959"
    },
    {
        "year": "1958"
    },
    {
        "year": "1957"
    },
    {
        "year": "1956"
    },
    {
        "year": "1955"
    },
    {
        "year": "1954"
    },
    {
        "year": "1953"
    },
    {
        "year": "1952"
    },
    {
        "year": "1951"
    },
    {
        "year": "1950"
    },
    {
        "year": "1949"
    },
    {
        "year": "1948"
    },
    {
        "year": "1947"
    },
    {
        "year": "1946"
    },
    {
        "year": "1945"
    },
    {
        "year": "1944"
    },
    {
        "year": "1943"
    },
    {
        "year": "1942"
    },
    {
        "year": "1941"
    },
    {
        "year": "1940"
    },
    {
        "year": "1939"
    },
    {
        "year": "1938"
    },
    {
        "year": "1937"
    },
    {
        "year": "1936"
    },
    {
        "year": "1935"
    },
    {
        "year": "1934"
    },
    {
        "year": "1933"
    },
    {
        "year": "1932"
    },
    {
        "year": "1931"
    },
    {
        "year": "1930"
    },
    {
        "year": "1929"
    },
    {
        "year": "1928"
    },
    {
        "year": "1927"
    },
    {
        "year": "1926"
    },
    {
        "year": "1925"
    },
    {
        "year": "1924"
    },
    {
        "year": "1923"
    },
    {
        "year": "1922"
    },
    {
        "year": "1921"
    }
]
export const COUNTRY_CALL_CODES = [
    {
    "name": "Afghanistan",
    "dial_code": "+93",
    "code": "AF"
    },
    {
    "name": "Aland Islands",
    "dial_code": "+358",
    "code": "AX"
    },
    {
    "name": "Albania",
    "dial_code": "+355",
    "code": "AL"
    },
    {
    "name": "Algeria",
    "dial_code": "+213",
    "code": "DZ"
    },
    {
    "name": "AmericanSamoa",
    "dial_code": "+1684",
    "code": "AS"
    },
    {
    "name": "Andorra",
    "dial_code": "+376",
    "code": "AD"
    },
    {
    "name": "Angola",
    "dial_code": "+244",
    "code": "AO"
    },
    {
    "name": "Anguilla",
    "dial_code": "+1264",
    "code": "AI"
    },
    {
    "name": "Antarctica",
    "dial_code": "+672",
    "code": "AQ"
    },
    {
    "name": "Antigua and Barbuda",
    "dial_code": "+1268",
    "code": "AG"
    },
    {
    "name": "Argentina",
    "dial_code": "+54",
    "code": "AR"
    },
    {
    "name": "Armenia",
    "dial_code": "+374",
    "code": "AM"
    },
    {
    "name": "Aruba",
    "dial_code": "+297",
    "code": "AW"
    },
    {
    "name": "Australia",
    "dial_code": "+61",
    "code": "AU"
    },
    {
    "name": "Austria",
    "dial_code": "+43",
    "code": "AT"
    },
    {
    "name": "Azerbaijan",
    "dial_code": "+994",
    "code": "AZ"
    },
    {
    "name": "Bahamas",
    "dial_code": "+1242",
    "code": "BS"
    },
    {
    "name": "Bahrain",
    "dial_code": "+973",
    "code": "BH"
    },
    {
    "name": "Bangladesh",
    "dial_code": "+880",
    "code": "BD"
    },
    {
    "name": "Barbados",
    "dial_code": "+1246",
    "code": "BB"
    },
    {
    "name": "Belarus",
    "dial_code": "+375",
    "code": "BY"
    },
    {
    "name": "Belgium",
    "dial_code": "+32",
    "code": "BE"
    },
    {
    "name": "Belize",
    "dial_code": "+501",
    "code": "BZ"
    },
    {
    "name": "Benin",
    "dial_code": "+229",
    "code": "BJ"
    },
    {
    "name": "Bermuda",
    "dial_code": "+1441",
    "code": "BM"
    },
    {
    "name": "Bhutan",
    "dial_code": "+975",
    "code": "BT"
    },
    {
    "name": "Bolivia, Plurinational State of",
    "dial_code": "+591",
    "code": "BO"
    },
    {
    "name": "Bosnia and Herzegovina",
    "dial_code": "+387",
    "code": "BA"
    },
    {
    "name": "Botswana",
    "dial_code": "+267",
    "code": "BW"
    },
    {
    "name": "Brazil",
    "dial_code": "+55",
    "code": "BR"
    },
    {
    "name": "British Indian Ocean Territory",
    "dial_code": "+246",
    "code": "IO"
    },
    {
    "name": "Brunei Darussalam",
    "dial_code": "+673",
    "code": "BN"
    },
    {
    "name": "Bulgaria",
    "dial_code": "+359",
    "code": "BG"
    },
    {
    "name": "Burkina Faso",
    "dial_code": "+226",
    "code": "BF"
    },
    {
    "name": "Burundi",
    "dial_code": "+257",
    "code": "BI"
    },
    {
    "name": "Cambodia",
    "dial_code": "+855",
    "code": "KH"
    },
    {
    "name": "Cameroon",
    "dial_code": "+237",
    "code": "CM"
    },
    {
    "name": "Canada",
    "dial_code": "+1",
    "code": "CA"
    },
    {
    "name": "Cape Verde",
    "dial_code": "+238",
    "code": "CV"
    },
    {
    "name": "Cayman Islands",
    "dial_code": "+ 345",
    "code": "KY"
    },
    {
    "name": "Central African Republic",
    "dial_code": "+236",
    "code": "CF"
    },
    {
    "name": "Chad",
    "dial_code": "+235",
    "code": "TD"
    },
    {
    "name": "Chile",
    "dial_code": "+56",
    "code": "CL"
    },
    {
    "name": "China",
    "dial_code": "+86",
    "code": "CN"
    },
    {
    "name": "Christmas Island",
    "dial_code": "+61",
    "code": "CX"
    },
    {
    "name": "Cocos (Keeling) Islands",
    "dial_code": "+61",
    "code": "CC"
    },
    {
    "name": "Colombia",
    "dial_code": "+57",
    "code": "CO"
    },
    {
    "name": "Comoros",
    "dial_code": "+269",
    "code": "KM"
    },
    {
    "name": "Congo",
    "dial_code": "+242",
    "code": "CG"
    },
    {
    "name": "Congo, The Democratic Republic of the Congo",
    "dial_code": "+243",
    "code": "CD"
    },
    {
    "name": "Cook Islands",
    "dial_code": "+682",
    "code": "CK"
    },
    {
    "name": "Costa Rica",
    "dial_code": "+506",
    "code": "CR"
    },
    {
    "name": "Cote d'Ivoire",
    "dial_code": "+225",
    "code": "CI"
    },
    {
    "name": "Croatia",
    "dial_code": "+385",
    "code": "HR"
    },
    {
    "name": "Cuba",
    "dial_code": "+53",
    "code": "CU"
    },
    {
    "name": "Cyprus",
    "dial_code": "+357",
    "code": "CY"
    },
    {
    "name": "Czech Republic",
    "dial_code": "+420",
    "code": "CZ"
    },
    {
    "name": "Denmark",
    "dial_code": "+45",
    "code": "DK"
    },
    {
    "name": "Djibouti",
    "dial_code": "+253",
    "code": "DJ"
    },
    {
    "name": "Dominica",
    "dial_code": "+1767",
    "code": "DM"
    },
    {
    "name": "Dominican Republic",
    "dial_code": "+1849",
    "code": "DO"
    },
    {
    "name": "Ecuador",
    "dial_code": "+593",
    "code": "EC"
    },
    {
    "name": "Egypt",
    "dial_code": "+20",
    "code": "EG"
    },
    {
    "name": "El Salvador",
    "dial_code": "+503",
    "code": "SV"
    },
    {
    "name": "Equatorial Guinea",
    "dial_code": "+240",
    "code": "GQ"
    },
    {
    "name": "Eritrea",
    "dial_code": "+291",
    "code": "ER"
    },
    {
    "name": "Estonia",
    "dial_code": "+372",
    "code": "EE"
    },
    {
    "name": "Ethiopia",
    "dial_code": "+251",
    "code": "ET"
    },
    {
    "name": "Falkland Islands (Malvinas)",
    "dial_code": "+500",
    "code": "FK"
    },
    {
    "name": "Faroe Islands",
    "dial_code": "+298",
    "code": "FO"
    },
    {
    "name": "Fiji",
    "dial_code": "+679",
    "code": "FJ"
    },
    {
    "name": "Finland",
    "dial_code": "+358",
    "code": "FI"
    },
    {
    "name": "France",
    "dial_code": "+33",
    "code": "FR"
    },
    {
    "name": "French Guiana",
    "dial_code": "+594",
    "code": "GF"
    },
    {
    "name": "French Polynesia",
    "dial_code": "+689",
    "code": "PF"
    },
    {
    "name": "Gabon",
    "dial_code": "+241",
    "code": "GA"
    },
    {
    "name": "Gambia",
    "dial_code": "+220",
    "code": "GM"
    },
    {
    "name": "Georgia",
    "dial_code": "+995",
    "code": "GE"
    },
    {
    "name": "Germany",
    "dial_code": "+49",
    "code": "DE"
    },
    {
    "name": "Ghana",
    "dial_code": "+233",
    "code": "GH"
    },
    {
    "name": "Gibraltar",
    "dial_code": "+350",
    "code": "GI"
    },
    {
    "name": "Greece",
    "dial_code": "+30",
    "code": "GR"
    },
    {
    "name": "Greenland",
    "dial_code": "+299",
    "code": "GL"
    },
    {
    "name": "Grenada",
    "dial_code": "+1473",
    "code": "GD"
    },
    {
    "name": "Guadeloupe",
    "dial_code": "+590",
    "code": "GP"
    },
    {
    "name": "Guam",
    "dial_code": "+1671",
    "code": "GU"
    },
    {
    "name": "Guatemala",
    "dial_code": "+502",
    "code": "GT"
    },
    {
    "name": "Guernsey",
    "dial_code": "+44",
    "code": "GG"
    },
    {
    "name": "Guinea",
    "dial_code": "+224",
    "code": "GN"
    },
    {
    "name": "Guinea-Bissau",
    "dial_code": "+245",
    "code": "GW"
    },
    {
    "name": "Guyana",
    "dial_code": "+595",
    "code": "GY"
    },
    {
    "name": "Haiti",
    "dial_code": "+509",
    "code": "HT"
    },
    {
    "name": "Holy See (Vatican City State)",
    "dial_code": "+379",
    "code": "VA"
    },
    {
    "name": "Honduras",
    "dial_code": "+504",
    "code": "HN"
    },
    {
    "name": "Hong Kong",
    "dial_code": "+852",
    "code": "HK"
    },
    {
    "name": "Hungary",
    "dial_code": "+36",
    "code": "HU"
    },
    {
    "name": "Iceland",
    "dial_code": "+354",
    "code": "IS"
    },
    {
    "name": "India",
    "dial_code": "+91",
    "code": "IN"
    },
    {
    "name": "Indonesia",
    "dial_code": "+62",
    "code": "ID"
    },
    {
    "name": "Iran, Islamic Republic of Persian Gulf",
    "dial_code": "+98",
    "code": "IR"
    },
    {
    "name": "Iraq",
    "dial_code": "+964",
    "code": "IQ"
    },
    {
    "name": "Ireland",
    "dial_code": "+353",
    "code": "IE"
    },
    {
    "name": "Isle of Man",
    "dial_code": "+44",
    "code": "IM"
    },
    {
    "name": "Israel",
    "dial_code": "+972",
    "code": "IL"
    },
    {
    "name": "Italy",
    "dial_code": "+39",
    "code": "IT"
    },
    {
    "name": "Jamaica",
    "dial_code": "+1876",
    "code": "JM"
    },
    {
    "name": "Japan",
    "dial_code": "+81",
    "code": "JP"
    },
    {
    "name": "Jersey",
    "dial_code": "+44",
    "code": "JE"
    },
    {
    "name": "Jordan",
    "dial_code": "+962",
    "code": "JO"
    },
    {
    "name": "Kazakhstan",
    "dial_code": "+77",
    "code": "KZ"
    },
    {
    "name": "Kenya",
    "dial_code": "+254",
    "code": "KE"
    },
    {
    "name": "Kiribati",
    "dial_code": "+686",
    "code": "KI"
    },
    {
    "name": "Korea, Democratic People's Republic of Korea",
    "dial_code": "+850",
    "code": "KP"
    },
    {
    "name": "Korea, Republic of South Korea",
    "dial_code": "+82",
    "code": "KR"
    },
    {
    "name": "Kuwait",
    "dial_code": "+965",
    "code": "KW"
    },
    {
    "name": "Kyrgyzstan",
    "dial_code": "+996",
    "code": "KG"
    },
    {
    "name": "Laos",
    "dial_code": "+856",
    "code": "LA"
    },
    {
    "name": "Latvia",
    "dial_code": "+371",
    "code": "LV"
    },
    {
    "name": "Lebanon",
    "dial_code": "+961",
    "code": "LB"
    },
    {
    "name": "Lesotho",
    "dial_code": "+266",
    "code": "LS"
    },
    {
    "name": "Liberia",
    "dial_code": "+231",
    "code": "LR"
    },
    {
    "name": "Libyan Arab Jamahiriya",
    "dial_code": "+218",
    "code": "LY"
    },
    {
    "name": "Liechtenstein",
    "dial_code": "+423",
    "code": "LI"
    },
    {
    "name": "Lithuania",
    "dial_code": "+370",
    "code": "LT"
    },
    {
    "name": "Luxembourg",
    "dial_code": "+352",
    "code": "LU"
    },
    {
    "name": "Macao",
    "dial_code": "+853",
    "code": "MO"
    },
    {
    "name": "Macedonia",
    "dial_code": "+389",
    "code": "MK"
    },
    {
    "name": "Madagascar",
    "dial_code": "+261",
    "code": "MG"
    },
    {
    "name": "Malawi",
    "dial_code": "+265",
    "code": "MW"
    },
    {
    "name": "Malaysia",
    "dial_code": "+60",
    "code": "MY"
    },
    {
    "name": "Maldives",
    "dial_code": "+960",
    "code": "MV"
    },
    {
    "name": "Mali",
    "dial_code": "+223",
    "code": "ML"
    },
    {
    "name": "Malta",
    "dial_code": "+356",
    "code": "MT"
    },
    {
    "name": "Marshall Islands",
    "dial_code": "+692",
    "code": "MH"
    },
    {
    "name": "Martinique",
    "dial_code": "+596",
    "code": "MQ"
    },
    {
    "name": "Mauritania",
    "dial_code": "+222",
    "code": "MR"
    },
    {
    "name": "Mauritius",
    "dial_code": "+230",
    "code": "MU"
    },
    {
    "name": "Mayotte",
    "dial_code": "+262",
    "code": "YT"
    },
    {
    "name": "Mexico",
    "dial_code": "+52",
    "code": "MX"
    },
    {
    "name": "Micronesia, Federated States of Micronesia",
    "dial_code": "+691",
    "code": "FM"
    },
    {
    "name": "Moldova",
    "dial_code": "+373",
    "code": "MD"
    },
    {
    "name": "Monaco",
    "dial_code": "+377",
    "code": "MC"
    },
    {
    "name": "Mongolia",
    "dial_code": "+976",
    "code": "MN"
    },
    {
    "name": "Montenegro",
    "dial_code": "+382",
    "code": "ME"
    },
    {
    "name": "Montserrat",
    "dial_code": "+1664",
    "code": "MS"
    },
    {
    "name": "Morocco",
    "dial_code": "+212",
    "code": "MA"
    },
    {
    "name": "Mozambique",
    "dial_code": "+258",
    "code": "MZ"
    },
    {
    "name": "Myanmar",
    "dial_code": "+95",
    "code": "MM"
    },
    {
    "name": "Namibia",
    "dial_code": "+264",
    "code": "NA"
    },
    {
    "name": "Nauru",
    "dial_code": "+674",
    "code": "NR"
    },
    {
    "name": "Nepal",
    "dial_code": "+977",
    "code": "NP"
    },
    {
    "name": "Netherlands",
    "dial_code": "+31",
    "code": "NL"
    },
    {
    "name": "Netherlands Antilles",
    "dial_code": "+599",
    "code": "AN"
    },
    {
    "name": "New Caledonia",
    "dial_code": "+687",
    "code": "NC"
    },
    {
    "name": "New Zealand",
    "dial_code": "+64",
    "code": "NZ"
    },
    {
    "name": "Nicaragua",
    "dial_code": "+505",
    "code": "NI"
    },
    {
    "name": "Niger",
    "dial_code": "+227",
    "code": "NE"
    },
    {
    "name": "Nigeria",
    "dial_code": "+234",
    "code": "NG"
    },
    {
    "name": "Niue",
    "dial_code": "+683",
    "code": "NU"
    },
    {
    "name": "Norfolk Island",
    "dial_code": "+672",
    "code": "NF"
    },
    {
    "name": "Northern Mariana Islands",
    "dial_code": "+1670",
    "code": "MP"
    },
    {
    "name": "Norway",
    "dial_code": "+47",
    "code": "NO"
    },
    {
    "name": "Oman",
    "dial_code": "+968",
    "code": "OM"
    },
    {
    "name": "Pakistan",
    "dial_code": "+92",
    "code": "PK"
    },
    {
    "name": "Palau",
    "dial_code": "+680",
    "code": "PW"
    },
    {
    "name": "Palestinian Territory, Occupied",
    "dial_code": "+970",
    "code": "PS"
    },
    {
    "name": "Panama",
    "dial_code": "+507",
    "code": "PA"
    },
    {
    "name": "Papua New Guinea",
    "dial_code": "+675",
    "code": "PG"
    },
    {
    "name": "Paraguay",
    "dial_code": "+595",
    "code": "PY"
    },
    {
    "name": "Peru",
    "dial_code": "+51",
    "code": "PE"
    },
    {
    "name": "Philippines",
    "dial_code": "+63",
    "code": "PH"
    },
    {
    "name": "Pitcairn",
    "dial_code": "+872",
    "code": "PN"
    },
    {
    "name": "Poland",
    "dial_code": "+48",
    "code": "PL"
    },
    {
    "name": "Portugal",
    "dial_code": "+351",
    "code": "PT"
    },
    {
    "name": "Puerto Rico",
    "dial_code": "+1939",
    "code": "PR"
    },
    {
    "name": "Qatar",
    "dial_code": "+974",
    "code": "QA"
    },
    {
    "name": "Romania",
    "dial_code": "+40",
    "code": "RO"
    },
    {
    "name": "Russia",
    "dial_code": "+7",
    "code": "RU"
    },
    {
    "name": "Rwanda",
    "dial_code": "+250",
    "code": "RW"
    },
    {
    "name": "Reunion",
    "dial_code": "+262",
    "code": "RE"
    },
    {
    "name": "Saint Barthelemy",
    "dial_code": "+590",
    "code": "BL"
    },
    {
    "name": "Saint Helena, Ascension and Tristan Da Cunha",
    "dial_code": "+290",
    "code": "SH"
    },
    {
    "name": "Saint Kitts and Nevis",
    "dial_code": "+1869",
    "code": "KN"
    },
    {
    "name": "Saint Lucia",
    "dial_code": "+1758",
    "code": "LC"
    },
    {
    "name": "Saint Martin",
    "dial_code": "+590",
    "code": "MF"
    },
    {
    "name": "Saint Pierre and Miquelon",
    "dial_code": "+508",
    "code": "PM"
    },
    {
    "name": "Saint Vincent and the Grenadines",
    "dial_code": "+1784",
    "code": "VC"
    },
    {
    "name": "Samoa",
    "dial_code": "+685",
    "code": "WS"
    },
    {
    "name": "San Marino",
    "dial_code": "+378",
    "code": "SM"
    },
    {
    "name": "Sao Tome and Principe",
    "dial_code": "+239",
    "code": "ST"
    },
    {
    "name": "Saudi Arabia",
    "dial_code": "+966",
    "code": "SA"
    },
    {
    "name": "Senegal",
    "dial_code": "+221",
    "code": "SN"
    },
    {
    "name": "Serbia",
    "dial_code": "+381",
    "code": "RS"
    },
    {
    "name": "Seychelles",
    "dial_code": "+248",
    "code": "SC"
    },
    {
    "name": "Sierra Leone",
    "dial_code": "+232",
    "code": "SL"
    },
    {
    "name": "Singapore",
    "dial_code": "+65",
    "code": "SG"
    },
    {
    "name": "Slovakia",
    "dial_code": "+421",
    "code": "SK"
    },
    {
    "name": "Slovenia",
    "dial_code": "+386",
    "code": "SI"
    },
    {
    "name": "Solomon Islands",
    "dial_code": "+677",
    "code": "SB"
    },
    {
    "name": "Somalia",
    "dial_code": "+252",
    "code": "SO"
    },
    {
    "name": "South Africa",
    "dial_code": "+27",
    "code": "ZA"
    },
    {
    "name": "South Sudan",
    "dial_code": "+211",
    "code": "SS"
    },
    {
    "name": "South Georgia and the South Sandwich Islands",
    "dial_code": "+500",
    "code": "GS"
    },
    {
    "name": "Spain",
    "dial_code": "+34",
    "code": "ES"
    },
    {
    "name": "Sri Lanka",
    "dial_code": "+94",
    "code": "LK"
    },
    {
    "name": "Sudan",
    "dial_code": "+249",
    "code": "SD"
    },
    {
    "name": "Suriname",
    "dial_code": "+597",
    "code": "SR"
    },
    {
    "name": "Svalbard and Jan Mayen",
    "dial_code": "+47",
    "code": "SJ"
    },
    {
    "name": "Swaziland",
    "dial_code": "+268",
    "code": "SZ"
    },
    {
    "name": "Sweden",
    "dial_code": "+46",
    "code": "SE"
    },
    {
    "name": "Switzerland",
    "dial_code": "+41",
    "code": "CH"
    },
    {
    "name": "Syrian Arab Republic",
    "dial_code": "+963",
    "code": "SY"
    },
    {
    "name": "Taiwan",
    "dial_code": "+886",
    "code": "TW"
    },
    {
    "name": "Tajikistan",
    "dial_code": "+992",
    "code": "TJ"
    },
    {
    "name": "Tanzania, United Republic of Tanzania",
    "dial_code": "+255",
    "code": "TZ"
    },
    {
    "name": "Thailand",
    "dial_code": "+66",
    "code": "TH"
    },
    {
    "name": "Timor-Leste",
    "dial_code": "+670",
    "code": "TL"
    },
    {
    "name": "Togo",
    "dial_code": "+228",
    "code": "TG"
    },
    {
    "name": "Tokelau",
    "dial_code": "+690",
    "code": "TK"
    },
    {
    "name": "Tonga",
    "dial_code": "+676",
    "code": "TO"
    },
    {
    "name": "Trinidad and Tobago",
    "dial_code": "+1868",
    "code": "TT"
    },
    {
    "name": "Tunisia",
    "dial_code": "+216",
    "code": "TN"
    },
    {
    "name": "Turkey",
    "dial_code": "+90",
    "code": "TR"
    },
    {
    "name": "Turkmenistan",
    "dial_code": "+993",
    "code": "TM"
    },
    {
    "name": "Turks and Caicos Islands",
    "dial_code": "+1649",
    "code": "TC"
    },
    {
    "name": "Tuvalu",
    "dial_code": "+688",
    "code": "TV"
    },
    {
    "name": "Uganda",
    "dial_code": "+256",
    "code": "UG"
    },
    {
    "name": "Ukraine",
    "dial_code": "+380",
    "code": "UA"
    },
    {
    "name": "United Arab Emirates",
    "dial_code": "+971",
    "code": "AE"
    },
    {
    "name": "United Kingdom",
    "dial_code": "+44",
    "code": "GB"
    },
    {
    "name": "United States",
    "dial_code": "+1",
    "code": "US"
    },
    {
    "name": "Uruguay",
    "dial_code": "+598",
    "code": "UY"
    },
    {
    "name": "Uzbekistan",
    "dial_code": "+998",
    "code": "UZ"
    },
    {
    "name": "Vanuatu",
    "dial_code": "+678",
    "code": "VU"
    },
    {
    "name": "Venezuela, Bolivarian Republic of Venezuela",
    "dial_code": "+58",
    "code": "VE"
    },
    {
    "name": "Vietnam",
    "dial_code": "+84",
    "code": "VN"
    },
    {
    "name": "Virgin Islands, British",
    "dial_code": "+1284",
    "code": "VG"
    },
    {
    "name": "Virgin Islands, U.S.",
    "dial_code": "+1340",
    "code": "VI"
    },
    {
    "name": "Wallis and Futuna",
    "dial_code": "+681",
    "code": "WF"
    },
    {
    "name": "Yemen",
    "dial_code": "+967",
    "code": "YE"
    },
    {
    "name": "Zambia",
    "dial_code": "+260",
    "code": "ZM"
    },
    {
    "name": "Zimbabwe",
    "dial_code": "+263",
    "code": "ZW"
    }
    ]
    
    export const COUNTRY_DIAL_CODES = [
        {
            "code": "Afghanistan - +93"
        },
        {
            "code": "Aland Islands - +358"
        },
        {
            "code": "Albania - +355"
        },
        {
            "code": "Algeria - +213"
        },
        {
            "code": "AmericanSamoa - +1684"
        },
        {
            "code": "Andorra - +376"
        },
        {
            "code": "Angola - +244"
        },
        {
            "code": "Anguilla - +1264"
        },
        {
            "code": "Antarctica - +672"
        },
        {
            "code": "Antigua and Barbuda - +1268"
        },
        {
            "code": "Argentina - +54"
        },
        {
            "code": "Armenia - +374"
        },
        {
            "code": "Aruba - +297"
        },
        {
            "code": "Australia - +61"
        },
        {
            "code": "Austria - +43"
        },
        {
            "code": "Azerbaijan - +994"
        },
        {
            "code": "Bahamas - +1242"
        },
        {
            "code": "Bahrain - +973"
        },
        {
            "code": "Bangladesh - +880"
        },
        {
            "code": "Barbados - +1246"
        },
        {
            "code": "Belarus - +375"
        },
        {
            "code": "Belgium - +32"
        },
        {
            "code": "Belize - +501"
        },
        {
            "code": "Benin - +229"
        },
        {
            "code": "Bermuda - +1441"
        },
        {
            "code": "Bhutan - +975"
        },
        {
            "code": "Bolivia, Plurinational State of - +591"
        },
        {
            "code": "Bosnia and Herzegovina - +387"
        },
        {
            "code": "Botswana - +267"
        },
        {
            "code": "Brazil - +55"
        },
        {
            "code": "British Indian Ocean Territory - +246"
        },
        {
            "code": "Brunei Darussalam - +673"
        },
        {
            "code": "Bulgaria - +359"
        },
        {
            "code": "Burkina Faso - +226"
        },
        {
            "code": "Burundi - +257"
        },
        {
            "code": "Cambodia - +855"
        },
        {
            "code": "Cameroon - +237"
        },
        {
            "code": "Canada - +1"
        },
        {
            "code": "Cape Verde - +238"
        },
        {
            "code": "Cayman Islands - + 345"
        },
        {
            "code": "Central African Republic - +236"
        },
        {
            "code": "Chad - +235"
        },
        {
            "code": "Chile - +56"
        },
        {
            "code": "China - +86"
        },
        {
            "code": "Christmas Island - +61"
        },
        {
            "code": "Cocos (Keeling) Islands - +61"
        },
        {
            "code": "Colombia - +57"
        },
        {
            "code": "Comoros - +269"
        },
        {
            "code": "Congo - +242"
        },
        {
            "code": "Congo, The Democratic Republic of the Congo - +243"
        },
        {
            "code": "Cook Islands - +682"
        },
        {
            "code": "Costa Rica - +506"
        },
        {
            "code": "Cote d'Ivoire - +225"
        },
        {
            "code": "Croatia - +385"
        },
        {
            "code": "Cuba - +53"
        },
        {
            "code": "Cyprus - +357"
        },
        {
            "code": "Czech Republic - +420"
        },
        {
            "code": "Denmark - +45"
        },
        {
            "code": "Djibouti - +253"
        },
        {
            "code": "Dominica - +1767"
        },
        {
            "code": "Dominican Republic - +1849"
        },
        {
            "code": "Ecuador - +593"
        },
        {
            "code": "Egypt - +20"
        },
        {
            "code": "El Salvador - +503"
        },
        {
            "code": "Equatorial Guinea - +240"
        },
        {
            "code": "Eritrea - +291"
        },
        {
            "code": "Estonia - +372"
        },
        {
            "code": "Ethiopia - +251"
        },
        {
            "code": "Falkland Islands (Malvinas) - +500"
        },
        {
            "code": "Faroe Islands - +298"
        },
        {
            "code": "Fiji - +679"
        },
        {
            "code": "Finland - +358"
        },
        {
            "code": "France - +33"
        },
        {
            "code": "French Guiana - +594"
        },
        {
            "code": "French Polynesia - +689"
        },
        {
            "code": "Gabon - +241"
        },
        {
            "code": "Gambia - +220"
        },
        {
            "code": "Georgia - +995"
        },
        {
            "code": "Germany - +49"
        },
        {
            "code": "Ghana - +233"
        },
        {
            "code": "Gibraltar - +350"
        },
        {
            "code": "Greece - +30"
        },
        {
            "code": "Greenland - +299"
        },
        {
            "code": "Grenada - +1473"
        },
        {
            "code": "Guadeloupe - +590"
        },
        {
            "code": "Guam - +1671"
        },
        {
            "code": "Guatemala - +502"
        },
        {
            "code": "Guernsey - +44"
        },
        {
            "code": "Guinea - +224"
        },
        {
            "code": "Guinea-Bissau - +245"
        },
        {
            "code": "Guyana - +595"
        },
        {
            "code": "Haiti - +509"
        },
        {
            "code": "Holy See (Vatican City State) - +379"
        },
        {
            "code": "Honduras - +504"
        },
        {
            "code": "Hong Kong - +852"
        },
        {
            "code": "Hungary - +36"
        },
        {
            "code": "Iceland - +354"
        },
        {
            "code": "India - +91"
        },
        {
            "code": "Indonesia - +62"
        },
        {
            "code": "Iran, Islamic Republic of Persian Gulf - +98"
        },
        {
            "code": "Iraq - +964"
        },
        {
            "code": "Ireland - +353"
        },
        {
            "code": "Isle of Man - +44"
        },
        {
            "code": "Israel - +972"
        },
        {
            "code": "Italy - +39"
        },
        {
            "code": "Jamaica - +1876"
        },
        {
            "code": "Japan - +81"
        },
        {
            "code": "Jersey - +44"
        },
        {
            "code": "Jordan - +962"
        },
        {
            "code": "Kazakhstan - +77"
        },
        {
            "code": "Kenya - +254"
        },
        {
            "code": "Kiribati - +686"
        },
        {
            "code": "Korea, Democratic People's Republic of Korea - +850"
        },
        {
            "code": "Korea, Republic of South Korea - +82"
        },
        {
            "code": "Kuwait - +965"
        },
        {
            "code": "Kyrgyzstan - +996"
        },
        {
            "code": "Laos - +856"
        },
        {
            "code": "Latvia - +371"
        },
        {
            "code": "Lebanon - +961"
        },
        {
            "code": "Lesotho - +266"
        },
        {
            "code": "Liberia - +231"
        },
        {
            "code": "Libyan Arab Jamahiriya - +218"
        },
        {
            "code": "Liechtenstein - +423"
        },
        {
            "code": "Lithuania - +370"
        },
        {
            "code": "Luxembourg - +352"
        },
        {
            "code": "Macao - +853"
        },
        {
            "code": "Macedonia - +389"
        },
        {
            "code": "Madagascar - +261"
        },
        {
            "code": "Malawi - +265"
        },
        {
            "code": "Malaysia - +60"
        },
        {
            "code": "Maldives - +960"
        },
        {
            "code": "Mali - +223"
        },
        {
            "code": "Malta - +356"
        },
        {
            "code": "Marshall Islands - +692"
        },
        {
            "code": "Martinique - +596"
        },
        {
            "code": "Mauritania - +222"
        },
        {
            "code": "Mauritius - +230"
        },
        {
            "code": "Mayotte - +262"
        },
        {
            "code": "Mexico - +52"
        },
        {
            "code": "Micronesia, Federated States of Micronesia - +691"
        },
        {
            "code": "Moldova - +373"
        },
        {
            "code": "Monaco - +377"
        },
        {
            "code": "Mongolia - +976"
        },
        {
            "code": "Montenegro - +382"
        },
        {
            "code": "Montserrat - +1664"
        },
        {
            "code": "Morocco - +212"
        },
        {
            "code": "Mozambique - +258"
        },
        {
            "code": "Myanmar - +95"
        },
        {
            "code": "Namibia - +264"
        },
        {
            "code": "Nauru - +674"
        },
        {
            "code": "Nepal - +977"
        },
        {
            "code": "Netherlands - +31"
        },
        {
            "code": "Netherlands Antilles - +599"
        },
        {
            "code": "New Caledonia - +687"
        },
        {
            "code": "New Zealand - +64"
        },
        {
            "code": "Nicaragua - +505"
        },
        {
            "code": "Niger - +227"
        },
        {
            "code": "Nigeria - +234"
        },
        {
            "code": "Niue - +683"
        },
        {
            "code": "Norfolk Island - +672"
        },
        {
            "code": "Northern Mariana Islands - +1670"
        },
        {
            "code": "Norway - +47"
        },
        {
            "code": "Oman - +968"
        },
        {
            "code": "Pakistan - +92"
        },
        {
            "code": "Palau - +680"
        },
        {
            "code": "Palestinian Territory, Occupied - +970"
        },
        {
            "code": "Panama - +507"
        },
        {
            "code": "Papua New Guinea - +675"
        },
        {
            "code": "Paraguay - +595"
        },
        {
            "code": "Peru - +51"
        },
        {
            "code": "Philippines - +63"
        },
        {
            "code": "Pitcairn - +872"
        },
        {
            "code": "Poland - +48"
        },
        {
            "code": "Portugal - +351"
        },
        {
            "code": "Puerto Rico - +1939"
        },
        {
            "code": "Qatar - +974"
        },
        {
            "code": "Romania - +40"
        },
        {
            "code": "Russia - +7"
        },
        {
            "code": "Rwanda - +250"
        },
        {
            "code": "Reunion - +262"
        },
        {
            "code": "Saint Barthelemy - +590"
        },
        {
            "code": "Saint Helena, Ascension and Tristan Da Cunha - +290"
        },
        {
            "code": "Saint Kitts and Nevis - +1869"
        },
        {
            "code": "Saint Lucia - +1758"
        },
        {
            "code": "Saint Martin - +590"
        },
        {
            "code": "Saint Pierre and Miquelon - +508"
        },
        {
            "code": "Saint Vincent and the Grenadines - +1784"
        },
        {
            "code": "Samoa - +685"
        },
        {
            "code": "San Marino - +378"
        },
        {
            "code": "Sao Tome and Principe - +239"
        },
        {
            "code": "Saudi Arabia - +966"
        },
        {
            "code": "Senegal - +221"
        },
        {
            "code": "Serbia - +381"
        },
        {
            "code": "Seychelles - +248"
        },
        {
            "code": "Sierra Leone - +232"
        },
        {
            "code": "Singapore - +65"
        },
        {
            "code": "Slovakia - +421"
        },
        {
            "code": "Slovenia - +386"
        },
        {
            "code": "Solomon Islands - +677"
        },
        {
            "code": "Somalia - +252"
        },
        {
            "code": "South Africa - +27"
        },
        {
            "code": "South Sudan - +211"
        },
        {
            "code": "South Georgia and the South Sandwich Islands - +500"
        },
        {
            "code": "Spain - +34"
        },
        {
            "code": "Sri Lanka - +94"
        },
        {
            "code": "Sudan - +249"
        },
        {
            "code": "Suriname - +597"
        },
        {
            "code": "Svalbard and Jan Mayen - +47"
        },
        {
            "code": "Swaziland - +268"
        },
        {
            "code": "Sweden - +46"
        },
        {
            "code": "Switzerland - +41"
        },
        {
            "code": "Syrian Arab Republic - +963"
        },
        {
            "code": "Taiwan - +886"
        },
        {
            "code": "Tajikistan - +992"
        },
        {
            "code": "Tanzania, United Republic of Tanzania - +255"
        },
        {
            "code": "Thailand - +66"
        },
        {
            "code": "Timor-Leste - +670"
        },
        {
            "code": "Togo - +228"
        },
        {
            "code": "Tokelau - +690"
        },
        {
            "code": "Tonga - +676"
        },
        {
            "code": "Trinidad and Tobago - +1868"
        },
        {
            "code": "Tunisia - +216"
        },
        {
            "code": "Turkey - +90"
        },
        {
            "code": "Turkmenistan - +993"
        },
        {
            "code": "Turks and Caicos Islands - +1649"
        },
        {
            "code": "Tuvalu - +688"
        },
        {
            "code": "Uganda - +256"
        },
        {
            "code": "Ukraine - +380"
        },
        {
            "code": "United Arab Emirates - +971"
        },
        {
            "code": "United Kingdom - +44"
        },
        {
            "code": "United States - +1"
        },
        {
            "code": "Uruguay - +598"
        },
        {
            "code": "Uzbekistan - +998"
        },
        {
            "code": "Vanuatu - +678"
        },
        {
            "code": "Venezuela, Bolivarian Republic of Venezuela - +58"
        },
        {
            "code": "Vietnam - +84"
        },
        {
            "code": "Virgin Islands, British - +1284"
        },
        {
            "code": "Virgin Islands, U.S. - +1340"
        },
        {
            "code": "Wallis and Futuna - +681"
        },
        {
            "code": "Yemen - +967"
        },
        {
            "code": "Zambia - +260"
        },
        {
            "code": "Zimbabwe - +263"
        },
        {
            "code": "Afghanistan - +93"
        },
        {
            "code": "Aland Islands - +358"
        },
        {
            "code": "Albania - +355"
        },
        {
            "code": "Algeria - +213"
        },
        {
            "code": "AmericanSamoa - +1684"
        },
        {
            "code": "Andorra - +376"
        },
        {
            "code": "Angola - +244"
        },
        {
            "code": "Anguilla - +1264"
        },
        {
            "code": "Antarctica - +672"
        },
        {
            "code": "Antigua and Barbuda - +1268"
        },
        {
            "code": "Argentina - +54"
        },
        {
            "code": "Armenia - +374"
        },
        {
            "code": "Aruba - +297"
        },
        {
            "code": "Australia - +61"
        },
        {
            "code": "Austria - +43"
        },
        {
            "code": "Azerbaijan - +994"
        },
        {
            "code": "Bahamas - +1242"
        },
        {
            "code": "Bahrain - +973"
        },
        {
            "code": "Bangladesh - +880"
        },
        {
            "code": "Barbados - +1246"
        },
        {
            "code": "Belarus - +375"
        },
        {
            "code": "Belgium - +32"
        },
        {
            "code": "Belize - +501"
        },
        {
            "code": "Benin - +229"
        },
        {
            "code": "Bermuda - +1441"
        },
        {
            "code": "Bhutan - +975"
        },
        {
            "code": "Bolivia, Plurinational State of - +591"
        },
        {
            "code": "Bosnia and Herzegovina - +387"
        },
        {
            "code": "Botswana - +267"
        },
        {
            "code": "Brazil - +55"
        },
        {
            "code": "British Indian Ocean Territory - +246"
        },
        {
            "code": "Brunei Darussalam - +673"
        },
        {
            "code": "Bulgaria - +359"
        },
        {
            "code": "Burkina Faso - +226"
        },
        {
            "code": "Burundi - +257"
        },
        {
            "code": "Cambodia - +855"
        },
        {
            "code": "Cameroon - +237"
        },
        {
            "code": "Canada - +1"
        },
        {
            "code": "Cape Verde - +238"
        },
        {
            "code": "Cayman Islands - + 345"
        },
        {
            "code": "Central African Republic - +236"
        },
        {
            "code": "Chad - +235"
        },
        {
            "code": "Chile - +56"
        },
        {
            "code": "China - +86"
        },
        {
            "code": "Christmas Island - +61"
        },
        {
            "code": "Cocos (Keeling) Islands - +61"
        },
        {
            "code": "Colombia - +57"
        },
        {
            "code": "Comoros - +269"
        },
        {
            "code": "Congo - +242"
        },
        {
            "code": "Congo, The Democratic Republic of the Congo - +243"
        },
        {
            "code": "Cook Islands - +682"
        },
        {
            "code": "Costa Rica - +506"
        },
        {
            "code": "Cote d'Ivoire - +225"
        },
        {
            "code": "Croatia - +385"
        },
        {
            "code": "Cuba - +53"
        },
        {
            "code": "Cyprus - +357"
        },
        {
            "code": "Czech Republic - +420"
        },
        {
            "code": "Denmark - +45"
        },
        {
            "code": "Djibouti - +253"
        },
        {
            "code": "Dominica - +1767"
        },
        {
            "code": "Dominican Republic - +1849"
        },
        {
            "code": "Ecuador - +593"
        },
        {
            "code": "Egypt - +20"
        },
        {
            "code": "El Salvador - +503"
        },
        {
            "code": "Equatorial Guinea - +240"
        },
        {
            "code": "Eritrea - +291"
        },
        {
            "code": "Estonia - +372"
        },
        {
            "code": "Ethiopia - +251"
        },
        {
            "code": "Falkland Islands (Malvinas) - +500"
        },
        {
            "code": "Faroe Islands - +298"
        },
        {
            "code": "Fiji - +679"
        },
        {
            "code": "Finland - +358"
        },
        {
            "code": "France - +33"
        },
        {
            "code": "French Guiana - +594"
        },
        {
            "code": "French Polynesia - +689"
        },
        {
            "code": "Gabon - +241"
        },
        {
            "code": "Gambia - +220"
        },
        {
            "code": "Georgia - +995"
        },
        {
            "code": "Germany - +49"
        },
        {
            "code": "Ghana - +233"
        },
        {
            "code": "Gibraltar - +350"
        },
        {
            "code": "Greece - +30"
        },
        {
            "code": "Greenland - +299"
        },
        {
            "code": "Grenada - +1473"
        },
        {
            "code": "Guadeloupe - +590"
        },
        {
            "code": "Guam - +1671"
        },
        {
            "code": "Guatemala - +502"
        },
        {
            "code": "Guernsey - +44"
        },
        {
            "code": "Guinea - +224"
        },
        {
            "code": "Guinea-Bissau - +245"
        },
        {
            "code": "Guyana - +595"
        },
        {
            "code": "Haiti - +509"
        },
        {
            "code": "Holy See (Vatican City State) - +379"
        },
        {
            "code": "Honduras - +504"
        },
        {
            "code": "Hong Kong - +852"
        },
        {
            "code": "Hungary - +36"
        },
        {
            "code": "Iceland - +354"
        },
        {
            "code": "India - +91"
        },
        {
            "code": "Indonesia - +62"
        },
        {
            "code": "Iran, Islamic Republic of Persian Gulf - +98"
        },
        {
            "code": "Iraq - +964"
        },
        {
            "code": "Ireland - +353"
        },
        {
            "code": "Isle of Man - +44"
        },
        {
            "code": "Israel - +972"
        },
        {
            "code": "Italy - +39"
        },
        {
            "code": "Jamaica - +1876"
        },
        {
            "code": "Japan - +81"
        },
        {
            "code": "Jersey - +44"
        },
        {
            "code": "Jordan - +962"
        },
        {
            "code": "Kazakhstan - +77"
        },
        {
            "code": "Kenya - +254"
        },
        {
            "code": "Kiribati - +686"
        },
        {
            "code": "Korea, Democratic People's Republic of Korea - +850"
        },
        {
            "code": "Korea, Republic of South Korea - +82"
        },
        {
            "code": "Kuwait - +965"
        },
        {
            "code": "Kyrgyzstan - +996"
        },
        {
            "code": "Laos - +856"
        },
        {
            "code": "Latvia - +371"
        },
        {
            "code": "Lebanon - +961"
        },
        {
            "code": "Lesotho - +266"
        },
        {
            "code": "Liberia - +231"
        },
        {
            "code": "Libyan Arab Jamahiriya - +218"
        },
        {
            "code": "Liechtenstein - +423"
        },
        {
            "code": "Lithuania - +370"
        },
        {
            "code": "Luxembourg - +352"
        },
        {
            "code": "Macao - +853"
        },
        {
            "code": "Macedonia - +389"
        },
        {
            "code": "Madagascar - +261"
        },
        {
            "code": "Malawi - +265"
        },
        {
            "code": "Malaysia - +60"
        },
        {
            "code": "Maldives - +960"
        },
        {
            "code": "Mali - +223"
        },
        {
            "code": "Malta - +356"
        },
        {
            "code": "Marshall Islands - +692"
        },
        {
            "code": "Martinique - +596"
        },
        {
            "code": "Mauritania - +222"
        },
        {
            "code": "Mauritius - +230"
        },
        {
            "code": "Mayotte - +262"
        },
        {
            "code": "Mexico - +52"
        },
        {
            "code": "Micronesia, Federated States of Micronesia - +691"
        },
        {
            "code": "Moldova - +373"
        },
        {
            "code": "Monaco - +377"
        },
        {
            "code": "Mongolia - +976"
        },
        {
            "code": "Montenegro - +382"
        },
        {
            "code": "Montserrat - +1664"
        },
        {
            "code": "Morocco - +212"
        },
        {
            "code": "Mozambique - +258"
        },
        {
            "code": "Myanmar - +95"
        },
        {
            "code": "Namibia - +264"
        },
        {
            "code": "Nauru - +674"
        },
        {
            "code": "Nepal - +977"
        },
        {
            "code": "Netherlands - +31"
        },
        {
            "code": "Netherlands Antilles - +599"
        },
        {
            "code": "New Caledonia - +687"
        },
        {
            "code": "New Zealand - +64"
        },
        {
            "code": "Nicaragua - +505"
        },
        {
            "code": "Niger - +227"
        },
        {
            "code": "Nigeria - +234"
        },
        {
            "code": "Niue - +683"
        },
        {
            "code": "Norfolk Island - +672"
        },
        {
            "code": "Northern Mariana Islands - +1670"
        },
        {
            "code": "Norway - +47"
        },
        {
            "code": "Oman - +968"
        },
        {
            "code": "Pakistan - +92"
        },
        {
            "code": "Palau - +680"
        },
        {
            "code": "Palestinian Territory, Occupied - +970"
        },
        {
            "code": "Panama - +507"
        },
        {
            "code": "Papua New Guinea - +675"
        },
        {
            "code": "Paraguay - +595"
        },
        {
            "code": "Peru - +51"
        },
        {
            "code": "Philippines - +63"
        },
        {
            "code": "Pitcairn - +872"
        },
        {
            "code": "Poland - +48"
        },
        {
            "code": "Portugal - +351"
        },
        {
            "code": "Puerto Rico - +1939"
        },
        {
            "code": "Qatar - +974"
        },
        {
            "code": "Romania - +40"
        },
        {
            "code": "Russia - +7"
        },
        {
            "code": "Rwanda - +250"
        },
        {
            "code": "Reunion - +262"
        },
        {
            "code": "Saint Barthelemy - +590"
        },
        {
            "code": "Saint Helena, Ascension and Tristan Da Cunha - +290"
        },
        {
            "code": "Saint Kitts and Nevis - +1869"
        },
        {
            "code": "Saint Lucia - +1758"
        },
        {
            "code": "Saint Martin - +590"
        },
        {
            "code": "Saint Pierre and Miquelon - +508"
        },
        {
            "code": "Saint Vincent and the Grenadines - +1784"
        },
        {
            "code": "Samoa - +685"
        },
        {
            "code": "San Marino - +378"
        },
        {
            "code": "Sao Tome and Principe - +239"
        },
        {
            "code": "Saudi Arabia - +966"
        },
        {
            "code": "Senegal - +221"
        },
        {
            "code": "Serbia - +381"
        },
        {
            "code": "Seychelles - +248"
        },
        {
            "code": "Sierra Leone - +232"
        },
        {
            "code": "Singapore - +65"
        },
        {
            "code": "Slovakia - +421"
        },
        {
            "code": "Slovenia - +386"
        },
        {
            "code": "Solomon Islands - +677"
        },
        {
            "code": "Somalia - +252"
        },
        {
            "code": "South Africa - +27"
        },
        {
            "code": "South Sudan - +211"
        },
        {
            "code": "South Georgia and the South Sandwich Islands - +500"
        },
        {
            "code": "Spain - +34"
        },
        {
            "code": "Sri Lanka - +94"
        },
        {
            "code": "Sudan - +249"
        },
        {
            "code": "Suriname - +597"
        },
        {
            "code": "Svalbard and Jan Mayen - +47"
        },
        {
            "code": "Swaziland - +268"
        },
        {
            "code": "Sweden - +46"
        },
        {
            "code": "Switzerland - +41"
        },
        {
            "code": "Syrian Arab Republic - +963"
        },
        {
            "code": "Taiwan - +886"
        },
        {
            "code": "Tajikistan - +992"
        },
        {
            "code": "Tanzania, United Republic of Tanzania - +255"
        },
        {
            "code": "Thailand - +66"
        },
        {
            "code": "Timor-Leste - +670"
        },
        {
            "code": "Togo - +228"
        },
        {
            "code": "Tokelau - +690"
        },
        {
            "code": "Tonga - +676"
        },
        {
            "code": "Trinidad and Tobago - +1868"
        },
        {
            "code": "Tunisia - +216"
        },
        {
            "code": "Turkey - +90"
        },
        {
            "code": "Turkmenistan - +993"
        },
        {
            "code": "Turks and Caicos Islands - +1649"
        },
        {
            "code": "Tuvalu - +688"
        },
        {
            "code": "Uganda - +256"
        },
        {
            "code": "Ukraine - +380"
        },
        {
            "code": "United Arab Emirates - +971"
        },
        {
            "code": "United Kingdom - +44"
        },
        {
            "code": "United States - +1"
        },
        {
            "code": "Uruguay - +598"
        },
        {
            "code": "Uzbekistan - +998"
        },
        {
            "code": "Vanuatu - +678"
        },
        {
            "code": "Venezuela, Bolivarian Republic of Venezuela - +58"
        },
        {
            "code": "Vietnam - +84"
        },
        {
            "code": "Virgin Islands, British - +1284"
        },
        {
            "code": "Virgin Islands, U.S. - +1340"
        },
        {
            "code": "Wallis and Futuna - +681"
        },
        {
            "code": "Yemen - +967"
        },
        {
            "code": "Zambia - +260"
        },
        {
            "code": "Zimbabwe - +263"
        },
        {
            "code": "Afghanistan - +93"
        },
        {
            "code": "Aland Islands - +358"
        },
        {
            "code": "Albania - +355"
        },
        {
            "code": "Algeria - +213"
        },
        {
            "code": "AmericanSamoa - +1684"
        },
        {
            "code": "Andorra - +376"
        },
        {
            "code": "Angola - +244"
        },
        {
            "code": "Anguilla - +1264"
        },
        {
            "code": "Antarctica - +672"
        },
        {
            "code": "Antigua and Barbuda - +1268"
        },
        {
            "code": "Argentina - +54"
        },
        {
            "code": "Armenia - +374"
        },
        {
            "code": "Aruba - +297"
        },
        {
            "code": "Australia - +61"
        },
        {
            "code": "Austria - +43"
        },
        {
            "code": "Azerbaijan - +994"
        },
        {
            "code": "Bahamas - +1242"
        },
        {
            "code": "Bahrain - +973"
        },
        {
            "code": "Bangladesh - +880"
        },
        {
            "code": "Barbados - +1246"
        },
        {
            "code": "Belarus - +375"
        },
        {
            "code": "Belgium - +32"
        },
        {
            "code": "Belize - +501"
        },
        {
            "code": "Benin - +229"
        },
        {
            "code": "Bermuda - +1441"
        },
        {
            "code": "Bhutan - +975"
        },
        {
            "code": "Bolivia, Plurinational State of - +591"
        },
        {
            "code": "Bosnia and Herzegovina - +387"
        },
        {
            "code": "Botswana - +267"
        },
        {
            "code": "Brazil - +55"
        },
        {
            "code": "British Indian Ocean Territory - +246"
        },
        {
            "code": "Brunei Darussalam - +673"
        },
        {
            "code": "Bulgaria - +359"
        },
        {
            "code": "Burkina Faso - +226"
        },
        {
            "code": "Burundi - +257"
        },
        {
            "code": "Cambodia - +855"
        },
        {
            "code": "Cameroon - +237"
        },
        {
            "code": "Canada - +1"
        },
        {
            "code": "Cape Verde - +238"
        },
        {
            "code": "Cayman Islands - + 345"
        },
        {
            "code": "Central African Republic - +236"
        },
        {
            "code": "Chad - +235"
        },
        {
            "code": "Chile - +56"
        },
        {
            "code": "China - +86"
        },
        {
            "code": "Christmas Island - +61"
        },
        {
            "code": "Cocos (Keeling) Islands - +61"
        },
        {
            "code": "Colombia - +57"
        },
        {
            "code": "Comoros - +269"
        },
        {
            "code": "Congo - +242"
        },
        {
            "code": "Congo, The Democratic Republic of the Congo - +243"
        },
        {
            "code": "Cook Islands - +682"
        },
        {
            "code": "Costa Rica - +506"
        },
        {
            "code": "Cote d'Ivoire - +225"
        },
        {
            "code": "Croatia - +385"
        },
        {
            "code": "Cuba - +53"
        },
        {
            "code": "Cyprus - +357"
        },
        {
            "code": "Czech Republic - +420"
        },
        {
            "code": "Denmark - +45"
        },
        {
            "code": "Djibouti - +253"
        },
        {
            "code": "Dominica - +1767"
        },
        {
            "code": "Dominican Republic - +1849"
        },
        {
            "code": "Ecuador - +593"
        },
        {
            "code": "Egypt - +20"
        },
        {
            "code": "El Salvador - +503"
        },
        {
            "code": "Equatorial Guinea - +240"
        },
        {
            "code": "Eritrea - +291"
        },
        {
            "code": "Estonia - +372"
        },
        {
            "code": "Ethiopia - +251"
        },
        {
            "code": "Falkland Islands (Malvinas) - +500"
        },
        {
            "code": "Faroe Islands - +298"
        },
        {
            "code": "Fiji - +679"
        },
        {
            "code": "Finland - +358"
        },
        {
            "code": "France - +33"
        },
        {
            "code": "French Guiana - +594"
        },
        {
            "code": "French Polynesia - +689"
        },
        {
            "code": "Gabon - +241"
        },
        {
            "code": "Gambia - +220"
        },
        {
            "code": "Georgia - +995"
        },
        {
            "code": "Germany - +49"
        },
        {
            "code": "Ghana - +233"
        },
        {
            "code": "Gibraltar - +350"
        },
        {
            "code": "Greece - +30"
        },
        {
            "code": "Greenland - +299"
        },
        {
            "code": "Grenada - +1473"
        },
        {
            "code": "Guadeloupe - +590"
        },
        {
            "code": "Guam - +1671"
        },
        {
            "code": "Guatemala - +502"
        },
        {
            "code": "Guernsey - +44"
        },
        {
            "code": "Guinea - +224"
        },
        {
            "code": "Guinea-Bissau - +245"
        },
        {
            "code": "Guyana - +595"
        },
        {
            "code": "Haiti - +509"
        },
        {
            "code": "Holy See (Vatican City State) - +379"
        },
        {
            "code": "Honduras - +504"
        },
        {
            "code": "Hong Kong - +852"
        },
        {
            "code": "Hungary - +36"
        },
        {
            "code": "Iceland - +354"
        },
        {
            "code": "India - +91"
        },
        {
            "code": "Indonesia - +62"
        },
        {
            "code": "Iran, Islamic Republic of Persian Gulf - +98"
        },
        {
            "code": "Iraq - +964"
        },
        {
            "code": "Ireland - +353"
        },
        {
            "code": "Isle of Man - +44"
        },
        {
            "code": "Israel - +972"
        },
        {
            "code": "Italy - +39"
        },
        {
            "code": "Jamaica - +1876"
        },
        {
            "code": "Japan - +81"
        },
        {
            "code": "Jersey - +44"
        },
        {
            "code": "Jordan - +962"
        },
        {
            "code": "Kazakhstan - +77"
        },
        {
            "code": "Kenya - +254"
        },
        {
            "code": "Kiribati - +686"
        },
        {
            "code": "Korea, Democratic People's Republic of Korea - +850"
        },
        {
            "code": "Korea, Republic of South Korea - +82"
        },
        {
            "code": "Kuwait - +965"
        },
        {
            "code": "Kyrgyzstan - +996"
        },
        {
            "code": "Laos - +856"
        },
        {
            "code": "Latvia - +371"
        },
        {
            "code": "Lebanon - +961"
        },
        {
            "code": "Lesotho - +266"
        },
        {
            "code": "Liberia - +231"
        },
        {
            "code": "Libyan Arab Jamahiriya - +218"
        },
        {
            "code": "Liechtenstein - +423"
        },
        {
            "code": "Lithuania - +370"
        },
        {
            "code": "Luxembourg - +352"
        },
        {
            "code": "Macao - +853"
        },
        {
            "code": "Macedonia - +389"
        },
        {
            "code": "Madagascar - +261"
        },
        {
            "code": "Malawi - +265"
        },
        {
            "code": "Malaysia - +60"
        },
        {
            "code": "Maldives - +960"
        },
        {
            "code": "Mali - +223"
        },
        {
            "code": "Malta - +356"
        },
        {
            "code": "Marshall Islands - +692"
        },
        {
            "code": "Martinique - +596"
        },
        {
            "code": "Mauritania - +222"
        },
        {
            "code": "Mauritius - +230"
        },
        {
            "code": "Mayotte - +262"
        },
        {
            "code": "Mexico - +52"
        },
        {
            "code": "Micronesia, Federated States of Micronesia - +691"
        },
        {
            "code": "Moldova - +373"
        },
        {
            "code": "Monaco - +377"
        },
        {
            "code": "Mongolia - +976"
        },
        {
            "code": "Montenegro - +382"
        },
        {
            "code": "Montserrat - +1664"
        },
        {
            "code": "Morocco - +212"
        },
        {
            "code": "Mozambique - +258"
        },
        {
            "code": "Myanmar - +95"
        },
        {
            "code": "Namibia - +264"
        },
        {
            "code": "Nauru - +674"
        },
        {
            "code": "Nepal - +977"
        },
        {
            "code": "Netherlands - +31"
        },
        {
            "code": "Netherlands Antilles - +599"
        },
        {
            "code": "New Caledonia - +687"
        },
        {
            "code": "New Zealand - +64"
        },
        {
            "code": "Nicaragua - +505"
        },
        {
            "code": "Niger - +227"
        },
        {
            "code": "Nigeria - +234"
        },
        {
            "code": "Niue - +683"
        },
        {
            "code": "Norfolk Island - +672"
        },
        {
            "code": "Northern Mariana Islands - +1670"
        },
        {
            "code": "Norway - +47"
        },
        {
            "code": "Oman - +968"
        },
        {
            "code": "Pakistan - +92"
        },
        {
            "code": "Palau - +680"
        },
        {
            "code": "Palestinian Territory, Occupied - +970"
        },
        {
            "code": "Panama - +507"
        },
        {
            "code": "Papua New Guinea - +675"
        },
        {
            "code": "Paraguay - +595"
        },
        {
            "code": "Peru - +51"
        },
        {
            "code": "Philippines - +63"
        },
        {
            "code": "Pitcairn - +872"
        },
        {
            "code": "Poland - +48"
        },
        {
            "code": "Portugal - +351"
        },
        {
            "code": "Puerto Rico - +1939"
        },
        {
            "code": "Qatar - +974"
        },
        {
            "code": "Romania - +40"
        },
        {
            "code": "Russia - +7"
        },
        {
            "code": "Rwanda - +250"
        },
        {
            "code": "Reunion - +262"
        },
        {
            "code": "Saint Barthelemy - +590"
        },
        {
            "code": "Saint Helena, Ascension and Tristan Da Cunha - +290"
        },
        {
            "code": "Saint Kitts and Nevis - +1869"
        },
        {
            "code": "Saint Lucia - +1758"
        },
        {
            "code": "Saint Martin - +590"
        },
        {
            "code": "Saint Pierre and Miquelon - +508"
        },
        {
            "code": "Saint Vincent and the Grenadines - +1784"
        },
        {
            "code": "Samoa - +685"
        },
        {
            "code": "San Marino - +378"
        },
        {
            "code": "Sao Tome and Principe - +239"
        },
        {
            "code": "Saudi Arabia - +966"
        },
        {
            "code": "Senegal - +221"
        },
        {
            "code": "Serbia - +381"
        },
        {
            "code": "Seychelles - +248"
        },
        {
            "code": "Sierra Leone - +232"
        },
        {
            "code": "Singapore - +65"
        },
        {
            "code": "Slovakia - +421"
        },
        {
            "code": "Slovenia - +386"
        },
        {
            "code": "Solomon Islands - +677"
        },
        {
            "code": "Somalia - +252"
        },
        {
            "code": "South Africa - +27"
        },
        {
            "code": "South Sudan - +211"
        },
        {
            "code": "South Georgia and the South Sandwich Islands - +500"
        },
        {
            "code": "Spain - +34"
        },
        {
            "code": "Sri Lanka - +94"
        },
        {
            "code": "Sudan - +249"
        },
        {
            "code": "Suriname - +597"
        },
        {
            "code": "Svalbard and Jan Mayen - +47"
        },
        {
            "code": "Swaziland - +268"
        },
        {
            "code": "Sweden - +46"
        },
        {
            "code": "Switzerland - +41"
        },
        {
            "code": "Syrian Arab Republic - +963"
        },
        {
            "code": "Taiwan - +886"
        },
        {
            "code": "Tajikistan - +992"
        },
        {
            "code": "Tanzania, United Republic of Tanzania - +255"
        },
        {
            "code": "Thailand - +66"
        },
        {
            "code": "Timor-Leste - +670"
        },
        {
            "code": "Togo - +228"
        },
        {
            "code": "Tokelau - +690"
        },
        {
            "code": "Tonga - +676"
        },
        {
            "code": "Trinidad and Tobago - +1868"
        },
        {
            "code": "Tunisia - +216"
        },
        {
            "code": "Turkey - +90"
        },
        {
            "code": "Turkmenistan - +993"
        },
        {
            "code": "Turks and Caicos Islands - +1649"
        },
        {
            "code": "Tuvalu - +688"
        },
        {
            "code": "Uganda - +256"
        },
        {
            "code": "Ukraine - +380"
        },
        {
            "code": "United Arab Emirates - +971"
        },
        {
            "code": "United Kingdom - +44"
        },
        {
            "code": "United States - +1"
        },
        {
            "code": "Uruguay - +598"
        },
        {
            "code": "Uzbekistan - +998"
        },
        {
            "code": "Vanuatu - +678"
        },
        {
            "code": "Venezuela, Bolivarian Republic of Venezuela - +58"
        },
        {
            "code": "Vietnam - +84"
        },
        {
            "code": "Virgin Islands, British - +1284"
        },
        {
            "code": "Virgin Islands, U.S. - +1340"
        },
        {
            "code": "Wallis and Futuna - +681"
        },
        {
            "code": "Yemen - +967"
        },
        {
            "code": "Zambia - +260"
        },
        {
            "code": "Zimbabwe - +263"
        },
        {
            "code": "Afghanistan - +93"
        },
        {
            "code": "Aland Islands - +358"
        },
        {
            "code": "Albania - +355"
        },
        {
            "code": "Algeria - +213"
        },
        {
            "code": "AmericanSamoa - +1684"
        },
        {
            "code": "Andorra - +376"
        },
        {
            "code": "Angola - +244"
        },
        {
            "code": "Anguilla - +1264"
        },
        {
            "code": "Antarctica - +672"
        },
        {
            "code": "Antigua and Barbuda - +1268"
        },
        {
            "code": "Argentina - +54"
        },
        {
            "code": "Armenia - +374"
        },
        {
            "code": "Aruba - +297"
        },
        {
            "code": "Australia - +61"
        },
        {
            "code": "Austria - +43"
        },
        {
            "code": "Azerbaijan - +994"
        },
        {
            "code": "Bahamas - +1242"
        },
        {
            "code": "Bahrain - +973"
        },
        {
            "code": "Bangladesh - +880"
        },
        {
            "code": "Barbados - +1246"
        },
        {
            "code": "Belarus - +375"
        },
        {
            "code": "Belgium - +32"
        },
        {
            "code": "Belize - +501"
        },
        {
            "code": "Benin - +229"
        },
        {
            "code": "Bermuda - +1441"
        },
        {
            "code": "Bhutan - +975"
        },
        {
            "code": "Bolivia, Plurinational State of - +591"
        },
        {
            "code": "Bosnia and Herzegovina - +387"
        },
        {
            "code": "Botswana - +267"
        },
        {
            "code": "Brazil - +55"
        },
        {
            "code": "British Indian Ocean Territory - +246"
        },
        {
            "code": "Brunei Darussalam - +673"
        },
        {
            "code": "Bulgaria - +359"
        },
        {
            "code": "Burkina Faso - +226"
        },
        {
            "code": "Burundi - +257"
        },
        {
            "code": "Cambodia - +855"
        },
        {
            "code": "Cameroon - +237"
        },
        {
            "code": "Canada - +1"
        },
        {
            "code": "Cape Verde - +238"
        },
        {
            "code": "Cayman Islands - + 345"
        },
        {
            "code": "Central African Republic - +236"
        },
        {
            "code": "Chad - +235"
        },
        {
            "code": "Chile - +56"
        },
        {
            "code": "China - +86"
        },
        {
            "code": "Christmas Island - +61"
        },
        {
            "code": "Cocos (Keeling) Islands - +61"
        },
        {
            "code": "Colombia - +57"
        },
        {
            "code": "Comoros - +269"
        },
        {
            "code": "Congo - +242"
        },
        {
            "code": "Congo, The Democratic Republic of the Congo - +243"
        },
        {
            "code": "Cook Islands - +682"
        },
        {
            "code": "Costa Rica - +506"
        },
        {
            "code": "Cote d'Ivoire - +225"
        },
        {
            "code": "Croatia - +385"
        },
        {
            "code": "Cuba - +53"
        },
        {
            "code": "Cyprus - +357"
        },
        {
            "code": "Czech Republic - +420"
        },
        {
            "code": "Denmark - +45"
        },
        {
            "code": "Djibouti - +253"
        },
        {
            "code": "Dominica - +1767"
        },
        {
            "code": "Dominican Republic - +1849"
        },
        {
            "code": "Ecuador - +593"
        },
        {
            "code": "Egypt - +20"
        },
        {
            "code": "El Salvador - +503"
        },
        {
            "code": "Equatorial Guinea - +240"
        },
        {
            "code": "Eritrea - +291"
        },
        {
            "code": "Estonia - +372"
        },
        {
            "code": "Ethiopia - +251"
        },
        {
            "code": "Falkland Islands (Malvinas) - +500"
        },
        {
            "code": "Faroe Islands - +298"
        },
        {
            "code": "Fiji - +679"
        },
        {
            "code": "Finland - +358"
        },
        {
            "code": "France - +33"
        },
        {
            "code": "French Guiana - +594"
        },
        {
            "code": "French Polynesia - +689"
        },
        {
            "code": "Gabon - +241"
        },
        {
            "code": "Gambia - +220"
        },
        {
            "code": "Georgia - +995"
        },
        {
            "code": "Germany - +49"
        },
        {
            "code": "Ghana - +233"
        },
        {
            "code": "Gibraltar - +350"
        },
        {
            "code": "Greece - +30"
        },
        {
            "code": "Greenland - +299"
        },
        {
            "code": "Grenada - +1473"
        },
        {
            "code": "Guadeloupe - +590"
        },
        {
            "code": "Guam - +1671"
        },
        {
            "code": "Guatemala - +502"
        },
        {
            "code": "Guernsey - +44"
        },
        {
            "code": "Guinea - +224"
        },
        {
            "code": "Guinea-Bissau - +245"
        },
        {
            "code": "Guyana - +595"
        },
        {
            "code": "Haiti - +509"
        },
        {
            "code": "Holy See (Vatican City State) - +379"
        },
        {
            "code": "Honduras - +504"
        },
        {
            "code": "Hong Kong - +852"
        },
        {
            "code": "Hungary - +36"
        },
        {
            "code": "Iceland - +354"
        },
        {
            "code": "India - +91"
        },
        {
            "code": "Indonesia - +62"
        },
        {
            "code": "Iran, Islamic Republic of Persian Gulf - +98"
        },
        {
            "code": "Iraq - +964"
        },
        {
            "code": "Ireland - +353"
        },
        {
            "code": "Isle of Man - +44"
        },
        {
            "code": "Israel - +972"
        },
        {
            "code": "Italy - +39"
        },
        {
            "code": "Jamaica - +1876"
        },
        {
            "code": "Japan - +81"
        },
        {
            "code": "Jersey - +44"
        },
        {
            "code": "Jordan - +962"
        },
        {
            "code": "Kazakhstan - +77"
        },
        {
            "code": "Kenya - +254"
        },
        {
            "code": "Kiribati - +686"
        },
        {
            "code": "Korea, Democratic People's Republic of Korea - +850"
        },
        {
            "code": "Korea, Republic of South Korea - +82"
        },
        {
            "code": "Kuwait - +965"
        },
        {
            "code": "Kyrgyzstan - +996"
        },
        {
            "code": "Laos - +856"
        },
        {
            "code": "Latvia - +371"
        },
        {
            "code": "Lebanon - +961"
        },
        {
            "code": "Lesotho - +266"
        },
        {
            "code": "Liberia - +231"
        },
        {
            "code": "Libyan Arab Jamahiriya - +218"
        },
        {
            "code": "Liechtenstein - +423"
        },
        {
            "code": "Lithuania - +370"
        },
        {
            "code": "Luxembourg - +352"
        },
        {
            "code": "Macao - +853"
        },
        {
            "code": "Macedonia - +389"
        },
        {
            "code": "Madagascar - +261"
        },
        {
            "code": "Malawi - +265"
        },
        {
            "code": "Malaysia - +60"
        },
        {
            "code": "Maldives - +960"
        },
        {
            "code": "Mali - +223"
        },
        {
            "code": "Malta - +356"
        },
        {
            "code": "Marshall Islands - +692"
        },
        {
            "code": "Martinique - +596"
        },
        {
            "code": "Mauritania - +222"
        },
        {
            "code": "Mauritius - +230"
        },
        {
            "code": "Mayotte - +262"
        },
        {
            "code": "Mexico - +52"
        },
        {
            "code": "Micronesia, Federated States of Micronesia - +691"
        },
        {
            "code": "Moldova - +373"
        },
        {
            "code": "Monaco - +377"
        },
        {
            "code": "Mongolia - +976"
        },
        {
            "code": "Montenegro - +382"
        },
        {
            "code": "Montserrat - +1664"
        },
        {
            "code": "Morocco - +212"
        },
        {
            "code": "Mozambique - +258"
        },
        {
            "code": "Myanmar - +95"
        },
        {
            "code": "Namibia - +264"
        },
        {
            "code": "Nauru - +674"
        },
        {
            "code": "Nepal - +977"
        },
        {
            "code": "Netherlands - +31"
        },
        {
            "code": "Netherlands Antilles - +599"
        },
        {
            "code": "New Caledonia - +687"
        },
        {
            "code": "New Zealand - +64"
        },
        {
            "code": "Nicaragua - +505"
        },
        {
            "code": "Niger - +227"
        },
        {
            "code": "Nigeria - +234"
        },
        {
            "code": "Niue - +683"
        },
        {
            "code": "Norfolk Island - +672"
        },
        {
            "code": "Northern Mariana Islands - +1670"
        },
        {
            "code": "Norway - +47"
        },
        {
            "code": "Oman - +968"
        },
        {
            "code": "Pakistan - +92"
        },
        {
            "code": "Palau - +680"
        },
        {
            "code": "Palestinian Territory, Occupied - +970"
        },
        {
            "code": "Panama - +507"
        },
        {
            "code": "Papua New Guinea - +675"
        },
        {
            "code": "Paraguay - +595"
        },
        {
            "code": "Peru - +51"
        },
        {
            "code": "Philippines - +63"
        },
        {
            "code": "Pitcairn - +872"
        },
        {
            "code": "Poland - +48"
        },
        {
            "code": "Portugal - +351"
        },
        {
            "code": "Puerto Rico - +1939"
        },
        {
            "code": "Qatar - +974"
        },
        {
            "code": "Romania - +40"
        },
        {
            "code": "Russia - +7"
        },
        {
            "code": "Rwanda - +250"
        },
        {
            "code": "Reunion - +262"
        },
        {
            "code": "Saint Barthelemy - +590"
        },
        {
            "code": "Saint Helena, Ascension and Tristan Da Cunha - +290"
        },
        {
            "code": "Saint Kitts and Nevis - +1869"
        },
        {
            "code": "Saint Lucia - +1758"
        },
        {
            "code": "Saint Martin - +590"
        },
        {
            "code": "Saint Pierre and Miquelon - +508"
        },
        {
            "code": "Saint Vincent and the Grenadines - +1784"
        },
        {
            "code": "Samoa - +685"
        },
        {
            "code": "San Marino - +378"
        },
        {
            "code": "Sao Tome and Principe - +239"
        },
        {
            "code": "Saudi Arabia - +966"
        },
        {
            "code": "Senegal - +221"
        },
        {
            "code": "Serbia - +381"
        },
        {
            "code": "Seychelles - +248"
        },
        {
            "code": "Sierra Leone - +232"
        },
        {
            "code": "Singapore - +65"
        },
        {
            "code": "Slovakia - +421"
        },
        {
            "code": "Slovenia - +386"
        },
        {
            "code": "Solomon Islands - +677"
        },
        {
            "code": "Somalia - +252"
        },
        {
            "code": "South Africa - +27"
        },
        {
            "code": "South Sudan - +211"
        },
        {
            "code": "South Georgia and the South Sandwich Islands - +500"
        },
        {
            "code": "Spain - +34"
        },
        {
            "code": "Sri Lanka - +94"
        },
        {
            "code": "Sudan - +249"
        },
        {
            "code": "Suriname - +597"
        },
        {
            "code": "Svalbard and Jan Mayen - +47"
        },
        {
            "code": "Swaziland - +268"
        },
        {
            "code": "Sweden - +46"
        },
        {
            "code": "Switzerland - +41"
        },
        {
            "code": "Syrian Arab Republic - +963"
        },
        {
            "code": "Taiwan - +886"
        },
        {
            "code": "Tajikistan - +992"
        },
        {
            "code": "Tanzania, United Republic of Tanzania - +255"
        },
        {
            "code": "Thailand - +66"
        },
        {
            "code": "Timor-Leste - +670"
        },
        {
            "code": "Togo - +228"
        },
        {
            "code": "Tokelau - +690"
        },
        {
            "code": "Tonga - +676"
        },
        {
            "code": "Trinidad and Tobago - +1868"
        },
        {
            "code": "Tunisia - +216"
        },
        {
            "code": "Turkey - +90"
        },
        {
            "code": "Turkmenistan - +993"
        },
        {
            "code": "Turks and Caicos Islands - +1649"
        },
        {
            "code": "Tuvalu - +688"
        },
        {
            "code": "Uganda - +256"
        },
        {
            "code": "Ukraine - +380"
        },
        {
            "code": "United Arab Emirates - +971"
        },
        {
            "code": "United Kingdom - +44"
        },
        {
            "code": "United States - +1"
        },
        {
            "code": "Uruguay - +598"
        },
        {
            "code": "Uzbekistan - +998"
        },
        {
            "code": "Vanuatu - +678"
        },
        {
            "code": "Venezuela, Bolivarian Republic of Venezuela - +58"
        },
        {
            "code": "Vietnam - +84"
        },
        {
            "code": "Virgin Islands, British - +1284"
        },
        {
            "code": "Virgin Islands, U.S. - +1340"
        },
        {
            "code": "Wallis and Futuna - +681"
        },
        {
            "code": "Yemen - +967"
        },
        {
            "code": "Zambia - +260"
        },
        {
            "code": "Zimbabwe - +263"
        }
    ]


    const TouristSite = [
        {
            name:"Mole Park"
        },
        {
            name:"Kakum National Park"
        },
        {
            name:"Cape Coast Castle"
        },
        {
            name:"Elmina Castle"
        },
        {
            name:"National Museum"
        },
        {
            name:"Aburi Botanical Garden"
        },
        {
            name:"Mountain Afadjato "
        },
        {
            name:"W.E.B. Dubois Centre " 
        },
        {
            name:"Manhyia Palace " 
        },
        {
            name:"Boabeng Fiema Monkey Sanctuary" 
        },
        {
            name:"Kintampo Balls" 
        },
        {
            name:"Tango Hills"
        },
        {
            name:"Cape Three Points " 
        },
        {
            name:"Kumasi Zoo" 
        },
        {
            name:"Kakum National Park" 
        },
        {
            name:"Kakum National Park" 
        },
        {
            name:"Paga Zenga Crocodile Pond" 
        },
        {
            name:"Xavi Bird Sanctuary " 
        },
        {
            name:"Labadi Beach" 
        },
        {
            name:"Lake Bosomtwe" 
        },
        {
            name:"Wli Waterfalls" 
        },
        {
            name:"Lakeside Marina Park" 
        },
        {
            name:"The Manhyia Palace" 
        },
        {
            name:"Kwame Nkrumah Memorial Park and Mausoleum" 
        },
        {
            name:"Boti Falls" 
        },
        {
            name:"St Agustine College " 
        },
    ]
    const FoodMenu = [
        {
            name:"Chicken Wings"
        },
        {
            name:"Pizza"
        },
        {
            name:"Burgers"
        },
        {
            name:"Meatballs"
        },
        {
            name:"BBQ Ribs"
        },
        {
            name:"Tacos"
        },
        {
            name:"Pasta"
        },
        {
            name:"Asian Fusion" 
        },
        {
            name:"Hotdogs" 
        },
        {
            name:"Fish and Chips" 
        },
        {
            name:"Full Chicken" 
        },
        {
            name:"Steaks"
        },
        {
            name:"Seafood" 
        },
        {
            name:"Salad" 
        },
        {
            name:"Breakfast" 
        },
        {
            name:"Others" 
        },
    ]
    export const QUESTION_BANK = [
        {
            question:"Tell us your name?",
            fieldType: FIELDS.input,
            required:true,
            name: "name",
            label: "Tell us your name?",
            placeholder: "FirstName LastName OtherNames",
            required: true,
        },
       
        {
            question:"Phone",
            fieldType: FIELDS.input,
            required:true,
            regexPattern:REGEX_PATTERNS.phone,
            name: "phone",
            label: "Phone",
            placeholder: "eg. 050XXXXXXX",
            required: true,
        },
        {
        fieldType: FIELDS.input,
        name: "email",
        label: "Email",
        placeholder: "Email",
        regexPattern:REGEX_PATTERNS.emailSimple,
        required: true,
        },
        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"Are you a slay queen or ordinary citizen? (optional)",
            groupItems:[
                {
                    name: "status",
                    label: "Slay queen",
                    placeholder: "Slay queen",
                    required: false,
                },
                {
                    name: "status",
                    label: "Ordinary Citizen",
                    placeholder: "Ordinary Citizen",
                    required: false,
                }
            ],
        },
        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"Will you like to receive offers, freebies and updates from us ?",
            groupItems:[
                {
                    name: "offers",
                    label: "Yes",
                    placeholder: "Yes",
                    required: true,
                },
                {
                    name: "offers",
                    label: "No",
                    placeholder: "No",
                    required: true,
                }
            ],
        },
        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"Which restaurant did you visit?",
            groupItems:[
                {
                    name: "restaurant",
                    label: "Adjiriganor",
                    placeholder: "Adjiriganor ",
                    required: true,
                },
                {
                    name: "restaurant",
                    label: "Amrahia",
                    placeholder: "Amrahia",
                    required: true,
                },
                {
                    name: "restaurant",
                    label: "Osu",
                    placeholder: "Osu",
                    required: true,
                }
            ],
        },
        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"Which Service did you use ?",
            groupItems:[
                {
                    name: "service",
                    label: "Take- Away",
                    placeholder: "Take- Away",
                    required: true,
                },
                {
                    name: "service",
                    label: "Dine - in",
                    placeholder: "Dine - in",
                    required: true,
                },
                {
                    name: "service",
                    label: "Delivery",
                    placeholder: "Delivery",
                    required: true,
                }
            ],
        },
        {
            fieldType: FIELDS.radioEmoji,
            groups:true,
            question:"How satisfied were you with the Cleanness of the Restaurant?",
            // style:{display:"flex",justifyContent:"center", alignItems:"center"},
            groupItems:[
                {
                    name: "satisafction",
                    label:"😡",
                    placeholder: "😡",
                    required: true,
                },
                {
                    name: "satisafction",
                    label: "☹️ ",
                    placeholder: "😐",
                    required: true,
                },
                {
                    name: "satisafction",
                    label: "😐",
                    placeholder: "😐",
                    required: true,
                },
                {
                    name: "satisafction",
                    label: "😊",
                    placeholder: "😊",
                    required: true,
                },
                {
                    name: "satisafction",
                    label: "😍",
                    placeholder: "😍",
                    required: true,
                },
               
            ],
        },
        {
            fieldType: FIELDS.radioEmoji,
            groups:true,
            question:"How satisfied were you with the friendliness of the Staff?",
            groupItems:[
                {
                    name: "friendliness",
                    label:"😡",
                    placeholder: "😡",
                    required: true,
                },
                {
                    name: "friendliness",
                    label: "☹️ ",
                    placeholder: "😐",
                    required: true,
                },
                {
                    name: "friendliness",
                    label: "😐",
                    placeholder: "😐",
                    required: true,
                },
                {
                    name: "friendliness",
                    label: "😊",
                    placeholder: "😊",
                    required: true,
                },
                {
                    name: "friendliness",
                    label: "😍",
                    placeholder: "😍",
                    required: true,
                },
            ],
        },
        {
            fieldType: FIELDS.radioEmoji,
            groups:true,
            question:"How satisfied were you with the quantity of Food ?",
            groupItems:[
                {
                    name: "quantity",
                    label:"😡",
                    placeholder: "😡",
                    required: true,
                },
                {
                    name: "quantity",
                    label: "☹️ ",
                    placeholder: "😐",
                    required: true,
                },
                {
                    name: "quantity",
                    label: "😐",
                    placeholder: "😐",
                    required: true,
                },
                {
                    name: "quantity",
                    label: "😊",
                    placeholder: "😊",
                    required: true,
                },
                {
                    name: "quantity",
                    label: "😍",
                    placeholder: "😍",
                    required: true,
                },
            ],
        },
        {
            fieldType: FIELDS.radioEmoji,
            groups:true,
            question:"How satisfied were you with the Quality of Food ?",
            groupItems:[
                {
                    name: "quality",
                    label:"😡",
                    placeholder: "😡",
                    required: true,
                },
                {
                    name: "quality",
                    label: "☹️ ",
                    placeholder: "😐",
                    required: true,
                },
                {
                    name: "quality",
                    label: "😐",
                    placeholder: "😐",
                    required: true,
                },
                {
                    name: "quality",
                    label: "😊",
                    placeholder: "😊",
                    required: true,
                },
                {
                    name: "quality",
                    label: "😍",
                    placeholder: "😍",
                    required: true,
                },
            ],
        },
        {
            fieldType: FIELDS.radioEmoji,
            groups:true,
            question:"How satisfied were you with the wait imes for your food and Drinks?",
            groupItems:[
                {
                    name: "waiteTime",
                    label:"😡",
                    placeholder: "😡",
                    required: true,
                },
                {
                    name: "waiteTime",
                    label: "☹️ ",
                    placeholder: "😐",
                    required: true,
                },
                {
                    name: "waiteTime",
                    label: "😐",
                    placeholder: "😐",
                    required: true,
                },
                {
                    name: "waiteTime",
                    label: "😊",
                    placeholder: "😊",
                    required: true,
                },
                {
                    name: "waiteTime",
                    label: "😍",
                    placeholder: "😍",
                    required: true,
                },
            ],
        },
        {
            fieldType: FIELDS.radioEmoji,
            groups:true,
            question:"How fast was the delivery service?",
            groupItems:[
                {
                    name: "deliveryService",
                    label:"😡",
                    placeholder: "😡",
                    required: true,
                },
                {
                    name: "deliveryService",
                    label: "☹️ ",
                    placeholder: "😐",
                    required: true,
                },
                {
                    name: "deliveryService",
                    label: "😐",
                    placeholder: "😐",
                    required: true,
                },
                {
                    name: "deliveryService",
                    label: "😊",
                    placeholder: "😊",
                    required: true,
                },
                {
                    name: "deliveryService",
                    label: "😍",
                    placeholder: "😍",
                    required: true,
                },
            ],
        },
        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"How many times did the wait staff stop by your table?",
            groupItems:[
                {
                    name: "numberOfTimesAttendedTo",
                    label: "Twice",
                    placeholder: "Just Ones",
                    required: true,
                },
                {
                    name: "numberOfTimesAttendedTo",
                    label: "More than Twice",
                    placeholder: "Twice",
                    required: true,
                },
                
            ],
        },
        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"Was this your first time?",
            groupItems:[
                {
                    name: "firstTime",
                    label: "Yes",
                    placeholder: "Yes",
                    required: true,
                },
                {
                    name: "firstTime",
                    label: "No",
                    placeholder: "No",
                    required: true,
                },
            ],
        },
        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"How often do you visit a year?",
            groupItems:[
                {
                    name: "regularity",
                    label: "less than 3x",
                    placeholder: "less than 3x",
                    required: true,
                },
                {
                    name: "regularity",
                    label: "3x",
                    placeholder: "3x",
                    required: true,
                },
                {
                    name: "regularity",
                    label: "4x",
                    placeholder: "4x",
                    required: true,
                },
                {
                    name: "regularity",
                    label: "5x",
                    placeholder: "5x",
                    required: true,
                },
                {
                    name: "regularity",
                    label: "More than 5x",
                    placeholder: "More than 5x",
                    required: true,
                },
            ],
        },
        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"Will you recommend us to a friend?",
            groupItems:[
                {
                    name: "recommendation",
                    label: "Definately",
                    placeholder: "Definately",
                    required: true,
                },
                {
                    name: "recommendation",
                    label: "Maybe",
                    placeholder: "Maybe",
                    required: true,
                },
                {
                    name: "recommendation",
                    label: "No",
                    placeholder: "No",
                    required: true,
                },
            ],
        },
        
        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"Was the music volume to your liking?",
            groupItems:[
                {
                    name: "musicVolume",
                    label: "Yes",
                    placeholder: "Yes",
                    required: true,
                },
                {
                    name: "musicVolume",
                    label: "No",
                    placeholder: "No",
                    required: true,
                },
            ],
        },
        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"Did music influence your overall satisfaction ?",
            groupItems:[
                {
                    name: "musicInfluence",
                    label: "Yes",
                    placeholder: "Yes",
                    required: true,
                },
                {
                    name: "musicInfluence",
                    label: "No",
                    placeholder: "No",
                    required: true,
                },
            ],
        },
            {
            fieldType: FIELDS.select,
            property:'name',
            name: "food",
            label: "What did you order?",
            placeholder: "What did you order?",
            dropDownList:FoodMenu,
            required: true,
            },
            {
            fieldType: FIELDS.select,
            property:'name',
            name: "favourite",
            label: "What is your favourite on our menu?",
            placeholder: "What is your favourite on our menu?",
            dropDownList:FoodMenu,
            required: true,
            },
    
            {
                fieldType: FIELDS.radioQuestion,
                groups:true,
                question:"Compared to other restaurants how will you rate us?",
                groupItems:[
                    {
                        name: "comparism",
                        label: "You Do All",
                        placeholder: "You Do All",
                        required: true,
                    },
                    {
                        name: "comparism",
                        label: "Just Okay",
                        placeholder: "Just Okay,",
                        required: true,
                    },
                    {
                        name: "comparism",
                        label: " Apuu",
                        placeholder: " Apuu,",
                        required: true,
                    },
                    {
                        name: "comparism",
                        label: "You Suck",
                        placeholder: "You Suck ",
                        required: true,
                    },
                    
                ],
            },
            
    
        // Restaurant form
        {
            fieldType: FIELDS.select,
            property:'name',
            name: "touristSite",
            label: "Which site have you visited before?",
            placeholder: "Which site have you visited before?",
            dropDownList:TouristSite,
            required: true,
        },
        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"Do you think the Government is doing enough to promote Tourism?",
            groupItems:[
                {
                    name: "govermentEffort",
                    label: "Yes",
                    placeholder: "Yes",
                    required: true,
                },
                {
                    name: "govermentEffort",
                    label: "No",
                    placeholder: "No",
                    required: true,
                }
            ],
        },
        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"Will you visit a Tourist site in the next 12 months?",
            groupItems:[
                {
                    name: "revisit",
                    label: "Yes",
                    placeholder: "Yes",
                    required: true,
                },
                {
                    name: "revisit",
                    label: "No",
                    placeholder: "No",
                    required: true,
                }
            ],
        },
        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"How will you rate overall service level in our restaurants?",
            groupItems:[
                {
                    name: "finalcomparism",
                    label: "Terrible",
                    placeholder: "Terrible",
                    required: true,
                },
                {
                    name: "finalcomparism",
                    label: "So so",
                    placeholder: "So so",
                    required: true,
                },
                {
                    name: "finalcomparism",
                    label: "hmmmm",
                    placeholder: "hmmmm",
                    required: true,
                },
                {
                    name: "finalcomparism",
                    label: "Okay",
                    placeholder: "Okay",
                    required: true,
                },
                {
                    name: "finalcomparism",
                    label: "Great",
                    placeholder: "Great",
                    required: true,
                },
                
            ],
        },
        {
            
            fieldType: FIELDS.imageBanner,
            // title: "P🥗T BELLY F🥘RM",
            name:"banner",
            regexPattern:'#^23*&',
            title: "Questionnaire",
            subtitle:"Help us make Potbelly better for you",
            image: randomImages,
        },   
    ]
    
    const alerts = [
        {
            sender:"",
            area:"",
            cordinates:"",
        },
        {
            sender:"",
            area:"",
            cordinates:"",
        },
        {
            sender:"",
            area:"",
            cordinates:"",
        },
        {
            sender:"",
            area:"",
            cordinates:"",
        },
        {
            sender:"",
            area:"",
            cordinates:"",
        },
        {
            sender:"",
            area:"",
            cordinates:"",
        },
        {
            sender:"",
            area:"",
            cordinates:"",
        }
    ]
    

export const Questions = {
        "name":"Tell us your name?",
        "phone":"Phone?",
        "email":"Email?",
        "slayQueen":"Are you a slay queen or ordinary citizen? (optional)",
        "receiveOfferUpdates":"Will you like to receive offers, freebies and updates from us ?",
        "institution":"",
        "service":"Which Service did you use ?",
        "cleanliness":"How satisfied were you with the Cleanness of the Restaurant?",
        "friendliness":"How satisfied were you with the friendliness of the Staff?",
        "foodQuantity":"How satisfied were you with the quantity of Food ?",
        "foodQuality":"How satisfied were you with the Quality of Food ?",
        "waitTimes":"How satisfied were you with the wait imes for your food and Drinks?",
        "deliveryService":"How fast was the delivery service?",
        "waitTableStops":"How many times did the wait staff stop by your table?",
        "firstTime":"Was this your first time?",
        "yearlyVisits":"How often do you visit a year?",
        "recommend":"Will you recommend us to a friend?",
        "musicVolume":"Was the music volume to your liking?",
        "musicInfluence":"Did music influence your overall satisfaction ?",
        "orderInfo":"What did you order?",
        "menuFavorite":"What is your favourite on our menu?",
        "rate":"Compared to other restaurants how will you rate us?",
        "sites":"Which site have you visited before?",
        "govPromos":"Do you think the Government is doing enough to promote Tourism?",
        "visit":"Will you visit a Tourist site in the next 12 months?",
        "serviceRating":"How will you rate overall service level in our restaurants?"
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