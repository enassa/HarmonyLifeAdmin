import React, { Component } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import UserProfile from './UserProfile';
import ProfileInfo from '../component_bag/ProfileInfo';
import { connect } from 'react-redux';
import { closeProfileInfo } from '../store/actions/generalActions';
import { logOut } from '../store/actions/AuthActions';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FromToDatePicker from './FromToDatePicker';
import { getAsObjectFromLocalStorage } from '../contants/generalFunctions';
import mtnImage from '../assets/images/mtnlogo.png';
import vodaImage from '../assets/images/vodafon.png';
import gloImage from '../assets/images/glologo.jpeg';
import harmonyGreen from '../assets/images/greenlogo.png';
import airtelImage from '../assets/images/airtel.png';
import { fontFamily3 } from '../contants/uiConstants';
import { getAnswers } from '../store/actions/answersActions';

 class NavbarAlt2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            profileInfoState:true,
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
    render() {
        const style = {
            ...this.props.style
        }
        let userData = getAsObjectFromLocalStorage('userData')
        console.log(userData)
        let institutionName = userData?.data?.data?.name
        let institutionBranch = userData?.data?.data?.orgGroup
        let myImage = this.getImage(institutionName)
        return (
            <div style={style}  className='width-100-cent elevated-card  padding-l-20 padding-r-20 nate-white-bg height-60 d-flex j-start a-center'>
                <div className='width-auto a-center height-100-cent'>
                    {/* <MenuIcon style={{cursor:"pointer",}}/> */}
                    {/* <LocalFireDepartmentIcon style={{marginLeft:20, color:"DE8908"}}/> */}
                    <p style={{color:this.getColor(institutionBranch), marginLeft:20,fontFamily:fontFamily3}} className='no-break font-1-2-rem '>{institutionName}</p>
                    <FiberManualRecordIcon style={{marginLeft:20, color:"black", width:10, height:10}}/>
                    <p style={{color:this.getColor(institutionBranch),fontFamily:fontFamily3}} className='no-break  margin-l-10'>{institutionBranch}</p>
                </div>
                <div className='width-100-cent height-100-cent '>
                <FromToDatePicker handleChange = {(startDate,endDate) => {this.props.getAnswers(10,startDate,endDate)}}/>
                </div>
                <div className=''>
                    <div>
                        <UserProfile image={myImage}/>
                    </div>
                </div>
                    {
                    this.state.profileInfoState
                    ?<span style={{position:"absolute", top:65,right:10 }}>
                        {/* <ProfileInfo style={{top:600}}/> */}
                    </span>
                    :null
                    }
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        closeProfileInfo : () => dispatch(closeProfileInfo),
        logOut : () => dispatch(logOut()),
        getAnswers: (limit=10,startDate,endDate) => dispatch(getAnswers(limit,startDate,endDate)),

   }
}
const mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NavbarAlt2);

