import React, { Component } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import UserProfile from './UserProfile';
import ProfileInfo from '../component_bag/ProfileInfo';
import { connect } from 'react-redux';
import { closeProfileInfo } from '../store/actions/generalActions';
import { logOut } from '../store/actions/AuthActions';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Settings } from '@mui/icons-material';
import AssignPage from '../pages/new_alerts/AssignPage';
import logo from '../assets/images/greenlogo.png'
import { fontFamily5 } from '../contants/uiConstants';

 class NavbarAlt3 extends Component {
    constructor(props){
        super(props)
        this.state = {
            profileInfoState:true,
            assignPage:false,
        }
    }
    togglePage = () => {
        this.setState({assignPage:!this.state.assignPage})
    }
    render() {
        const style = {
            ...this.props.style
        }
        return (
            <div style={style}  className='width-100-cent elevated-card  padding-l-20 padding-r-20 nate-white-bg height-60 d-flex j-start a-center'>
                <div className='width-auto a-center height-100-cent'>
                    {this.state.assignPage?<AssignPage handleDisplay = {() => {this.togglePage()} }/>:null}
                    <img src={logo} style={{width:40, marginRight:10,height:40}}/>
                    {/* <Settings onClick = {() => this.togglePage()} style={{cursor:"pointer",}}/> */}
                    {/* <LocalFireDepartmentIcon style={{marginLeft:20, color:"DE8908"}}/> */}
                    <p style={{color:"#036325", fontFamily:fontFamily5}} className='no-break font-1-2-rem '>{this.props.title1}</p>
                    <FiberManualRecordIcon style={{marginLeft:20, color:"#399A42", width:10, height:10}}/>
                    <p style={{color:"#036325", fontFamily:fontFamily5}}  className='no-break  margin-l-10'>{this.props.title2}</p>
                </div>
                <div className='width-100-cent height-100-cent '></div>
                <div className=''>
                    <div>
                        <UserProfile/>
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
        logOut : () => dispatch(logOut())
   }
}
const mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NavbarAlt3);

