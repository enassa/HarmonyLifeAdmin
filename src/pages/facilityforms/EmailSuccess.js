import React, { Component } from 'react';
import { fontFamily3, fontFamily5 } from '../../contants/uiConstants';
import logo from '../../assets/images/greenlogo.png'
import Casantey from '../../component_bag/Casantey';

import mtnImage from '../../assets/images/mtnlogo.png';
import vodaImage from '../../assets/images/vodafon.png';
import gloImage from '../../assets/images/glologo.jpeg';
import harmonyGreen from '../../assets/images/greenlogo.png';
import airtelImage from '../../assets/images/airtel.png';
import MyModal from '../../component_bag/MyModal';
import { ReplayCircleFilled, Schedule } from '@mui/icons-material';
export default class EmailSuccess extends Component {
 constructor(props){
     super(props)
     this.state = {
        updateConfirmation:true,
     }
 }
 getImage = (institutionName) => {
    let image = institutionName?.split(' ')
    if(image === undefined){
        return harmonyGreen
    }
    let imageToUse = undefined
    if(image[0]?.toLowerCase() === 'vodafone'){
        imageToUse = vodaImage
    }
    else if(image[0]?.toLowerCase() === 'mtn'){
        imageToUse = mtnImage
    }
    else if(image[0]?.toLowerCase() === 'glo'){
        imageToUse = gloImage
    }
    else if(image[0]?.toLowerCase() === 'airtel'){
        imageToUse = airtelImage
    }
    return imageToUse;
}
getColor = (institutionName) => {
    let image = institutionName?.split(' ')
    let colorToUse = undefined
    if(image === undefined){
        return '#036325'
    }
    if(image[0]?.toLowerCase() === 'vodafone'){
        colorToUse = '#E60001'
    }
    else if(image[0]?.toLowerCase() === 'mtn'){
        colorToUse = '#FFA500'
    }
    else if(image[0]?.toLowerCase() === 'glo'){
        colorToUse = '#008001'
    }
    else if(image[0]?.toLowerCase() === 'airtel'){
        colorToUse = '#D6030F'
    }
    return colorToUse;
}
getForm = () => {
    this.props.history.push('/facility/login')
}
  render() {
    return <div style={{fontFamily:fontFamily3,fontSize:30, fontWeight:300}} className='width-100-cent f-column height-100-cent all-center'>
        
          <div style={{color:"grey", fontSize:50,fontWeight:"bolder",fontFamily:fontFamily5}} 
                     className='width-100-cent position-fixed left-0 top-50 j-center height-50 a-center font-1-2-em'
                >
                    {/* <span className='a-center' ><ArrowRight style={{width:"40px", height:"40px"}}/></span>  */}
                    <img src={logo} style={{width:40, height:40}}/>
                    <span>Harmony <span className='nate-green-text'>Life</span> </span>
            </div>    
            <div style={{display:"inline-flex", border:`2px solid #FFCC01`}} className='all-center margin-l-10 round-up width-50 min-width-50 height-50'>
                <img src={mtnImage} style={{width:25, height:25}}/>
            </div> 
                <span style={{color:this.getColor(), fontWeight:"bolder",fontFamily:fontFamily5,marginLeft:10, color:"#FFCC01"}}>MTN</span>
            <div>Bravo!👍 Please check your email to complete the registeration process
            </div>
            <div className=' width-300 height-300 all-center  round-up position-relative'>
                <div style={{backgroundColor:"#036325"}} className='anime-ripple-2 width-100-cent nate-blue-bg all-center nate-white-text height-100-cent position-absolute top-0 rigth-0 round-up'>
                </div>
                <div style={{backgroundColor:"#01B000"}} className='anime-ripple width-100-cent nate-blue-bg all-center nate-white-text height-100-cent position-absolute top-0 rigth-0 round-up'>
                </div>
                <div onClick={()=>this.getForm()} className='width-100 height-100  cursor-pointer nate-green-bg elvated-blend all-center nate-white-text above-all top-0 rigth-0 round-up'>
                    <Schedule style={{fontSize:50}}/>
                </div>
            </div>
            <Casantey/>
    </div>;
  }
}
