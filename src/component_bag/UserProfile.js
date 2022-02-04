import React, { Component } from 'react';
import styles from '../css/userprofile.module.css'
import { randomImages } from '../dummydata/dummyData';
import { connect } from 'react-redux';
import { closeProfileInfo, openProfileInfo } from '../store/actions/generalActions';
import { getAsObjectFromSession } from '../contants/generalFunctions';
import { letteringColor6 } from '../contants/uiConstants';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
class UserProfile extends Component {
    constructor(props){
        super(props)
        this.state={
            user:{}
        }
    }
    
    handleClick = (myValue) => {
        if(this.props.profileInfoState){
            this.props.closeProfileInfo()
        }
        else if(!this.profileInfoState){
            this.props.openProfileInfo()
        }
        
    }
    componentDidMount(){
        // let  user = getAsObjectFromSession('userData')
        let  user = {name:"Assan Nathaniel"}
        if(typeof user === 'object')
        this.setState({user:user})
    }
    render() {
        const {user} = this.state
        const style = {
            mainContainer:{
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center",
                width:"auto",
                height:"100%",
                ...this.props.mainContainer
            },
            imageContainer:{
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center",
                width:40,
                height:40,
                minWidth:40,
                minHeight:40,
                borderRadius:"100px",
                backgroundColor:"darkgrey",
                marginRight:"20px",
                backgroundPosition:"center",
                backgroundSize:"cover",
                backgroundImage:`url(${this.props.image})`,
            },
            textContainer:{
                color:letteringColor6,
                width:"auto",
                fontWeight:200, 
            }
        }
        return (
            <div style={style.mainContainer}>
                <div style={{height:"100%", display:"flex", justifyContent:"center",marginRight:"20px", alignItems:"center"}}>
                    {/* <Badge badgeContent={4} color="primary">
                        <NotificationsIcon color="action" />
                    </Badge> */}
                </div>
               <div 
                style={style.imageContainer} id={styles["nav-right-region"]}  className='cursor-pointer'
                // onClick = {() => {this.handleClick()}}
               >
                    <div id={styles["image"]} ></div>
                    <div id={styles["progress"]} ></div>
                </div>
                
                <div style={style.textContainer}  className='cursor-pointer no-break' id={styles["user-name"]} 
                    // onClick={() => {this.handleClick()}}
                >
                    {/* {user.name}                */}
                    {/* Harmony */}
                    </div>
                {/* {this.props.profileInfoState
                ?<ExpandLessIcon style={{cursor:"pointer",color:letteringColor6}} onClick={() => {this.props.closeProfileInfo()}}/>
                :<ExpandMoreIcon style={{cursor:"pointer",color:letteringColor6}} onClick={() => {this.props.openProfileInfo()}}/>
                } */}
            
              
            </div>
        );
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        openProfileInfo: () => dispatch(openProfileInfo()),
        closeProfileInfo: () => dispatch(closeProfileInfo())
  }
}
const mapStateToProps = (state) => {
    return {
        profileInfoState:state.generalReducer.profileInfoState,
        userData:state.auth.userData,

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserProfile);
