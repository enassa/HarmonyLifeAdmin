import React, { Component } from 'react'
import FormGenerator from '../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';
import { randomImages } from '../dummydata/dummyData';
import { getWindowWidth, localStorageGet } from '../contants/generalFunctions';
import { burgs1, fontFamily5, foood9, letteringColor4, letteringColor6, vertical, burgs2, potbelly1, fontFamily3, osuImage } from '../contants/uiConstants';
import animeEmoji from '../assets/images/animecontent.gif'
import { ArrowBack } from '@mui/icons-material';

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
export default class SentPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            loaded:false
        }
    }
    handleSubmit = (data,resetForm,completed) => {
        const myData = {
            'name':data.name?data.name:null,
            // 'phone':data.phone?`${countryCode}${data.phone}`:null,
            'email':data.email?data.email:null,
            'password':data.password?data.password:null,
            'password_confirm':data.password_confirm?data.password_confirm:null,
            'institution':data.institution?data.institution:null,
            'yearCompleted':data.year?data.year:null,
            'gender':data.gender?data.gender:null,
        }
       
    }
    generateAnimes = () => {
        let myArr;
        let myValue = ['🤗','😎','❤️','😍','🥰','🍒','🎃','👑','🍎','🍊','🍋','🍉','🍇','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍆','🥑','🥦','🥬','🥒','🌶','🫑','🌽','🥕','🫒','🧄','🧅','🥔','🍠','🧀','🥚','🍳','🧈','🥞','🧇','🥓','🥩','🍗','🍖','🦴','🌭','🍔','🍟','🥪','🫓','🥙','🧆','🌮','🌯','🫔','🫕','🥫','🍝','🍜','🍲','🍛','🍣','🍱','🦪','🍚','🥮','🥧','🍦','🍧','🍨','🧁','🥧','🍰','🎂','🍮','🍫','🍿','🍩','🍪','🌰','🥜','🥛','🍵','☕️','🫖','🧃','🥤','🧋','🍺','🍻','🥂','🍷','🥃','🍷','🥂','🥃','🍸','🧉','🧉','🍾','🍽','🥣']     
       return  myValue.map((item,index) => {
            // myArr = myValue
           return <span className=''>{item}</span>
        })
    }
    render() {
        let Name = localStorageGet('name')
        let userName = Name.split(' ')[0]
        const innerWidth = getWindowWidth()
        return (
            <div style={{backgroundImage:`url(${osuImage})`}} className='width-100-cent fit-background height-100-cent a-center f-column j-start'>
                <div style={{backdropFilter: "blur(3px)"}}  className='position-absolute width-100-cent nate-black-more-partial-bg height-100-cent'>
                    {/* {this.generateAnimes()} */}
                    {/* <ParticleAnimation background={{r:243,g:243,b:243,a:1}} color={{ r: 13, g: 27, b: 255, a:36}}/> */}
                </div>
                <div className={`${innerWidth<800?'width-100-cent':'width-70-cent'} above-all  curved-corners height-auto elevated-blend padding-20 `}>
                
                <div style={{fontSize:20, fontFamily:fontFamily5}} className='width-100-cent f-column j-center a-center height-auto nate-grey-text'>
                    <div style={{fontSize:100}} className='j-center width-100-cent height-200'>
                    {this.state.loaded?null:<span>🤗</span>}
                        <img
                        alt=''
                            style={{height:270,display:`${this.state.loaded ? 'block' : 'none'}`}}
                            src={animeEmoji}
                            onLoad={() => this.setState({loaded: true})}
                        />
                    </div>
                    <div style={{color:'white', marginBottom:"40px",fontWeight:300,fontSize:`${innerWidth<800?'30px':'40px'}`,textAlign:"center", fontFamily:fontFamily3}}>
                        Thank you  <span className='nate-pink-text'>{userName}</span>, your response has been submitted succesfully!
                    </div>
                    <div 
                        onClick = {()=>{
                            this.props.history.push(`/`)
                        }}
                        className='cursor-pointer ' style={{color:'white', marginBottom:"40px",fontWeight:300,fontSize:`${innerWidth<800?'20px':'30px'}`,textAlign:"center", fontFamily:fontFamily3}}>
                        <div className='j-center a-center'> <span className='nate-blue-text a-center'>Click here to go back</span> <ArrowBack style={{color:"#5F6FE4"}} className='anime-bounce-x nate-blue-tex'/> </div> 
                    </div>

                </div>
                </div>
                {!vertical?<img className=' left-right position-absolute bottom-0  pointer-events-none' alt='' src={burgs1}></img>:null}
                {!vertical?<img className='above-all right-left position-absolute bottom-0 flip  pointer-events-none' alt='' src={burgs2}></img>:null}
            </div>
        )
    }
}











// let countryCode = data.dial_code?data.dial_code:null
// let contact = data.phone?`${countryCode}${data.phone}`:null
// if(countryCode!==null){
//     let a = countryCode.split('-',2)
//     let b = a[1]
//     countryCode = b
// }
// else {
//     this.props.openSnackBar(`All fields are required`, 'error')  
//     completed()   
//     return 0;   
// }
// if(contact===null||contact===''||contact===''||contact===undefined){
//     // this.props.openSnackBar(`Contact field is required`, 'error') 
//     completed()    
//     return 0;   
// }
// if(myData.institution===null||myData.institution===''||myData.institution===''||myData.institution===undefined){
//     // this.props.openSnackBar(`Institution field is required`, 'error') 
//     completed()    
//     return 0;   
// }
// if(myData.yearCompleted===null||myData.yearCompleted===''||myData.yearCompleted===''||myData.yearCompleted===undefined){
//     // this.props.openSnackBar(`Year field is required`, 'error') 
//     completed()    
//     return 0;   
// }
// if(myData.password==null||myData.password===''||myData.password===''||myData.password===undefined){
//     // this.props.openSnackBar(`Password field is required`, 'error') 
//     completed()    
//     return 0;   
// }
// if(myData.gender==null||myData.gender===''||myData.gender===''||myData.gender===undefined){
//     this.props.openSnackBar(`Gender field is required`, 'error') 
//     completed()    
//     return 0;   
// }
// if(myData.password!==myData.password_confirm){
//     this.props.openSnackBar(`Passwords do not match`, 'error') 
//     completed()    
//     return 0;   
// }

// completed()

// // alert(myData.phone)
// let isAllField = anyPropertyIsEmptyOrNull(myData)

// if(isAllField!=='success') {
//     this.props.openSnackBar(`${isAllField} field is empty, All fields are required`, 'error')
//     return
// }
// this.props.changeLoadingState()
// this.props.registerUser(myData)
// }