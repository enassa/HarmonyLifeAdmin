import React, { Component } from 'react';
import styles from '../css/announcementbox.module.css'
import Badge from '@material-ui/core/Badge';
import Announcement from './Announcement';
import { Notifications, VolumeUp } from '@material-ui/icons';
import UserListBox from './UserListBox';
import UserBox from './UserBox';
import { Divider } from '@material-ui/core';
import { connect } from 'react-redux';
import { getAnnouncement } from '../store/actions/generalActions';
import { changeLoadingState } from '../store/actions/AppStateActions';
import LoadMore from './LoadMore';
import { getRandomStringKey, readyForMapping } from '../contants/generalFunctions';
import { fontFamily3 } from '../contants/uiConstants';

class AnnouncementBox extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  ejectCards = () => {
    console.log(this.props.announcements)
    if(readyForMapping(this.props.announcements)){
      return this.props.announcements.map((data, index)=>{
        return <Announcement cardData={data} key={index} index={index+1}/>
      })
    }
  }
  fetchData = async () => {
    this.props.fetchAnnouncement(2)
  }
  componentDidMount(){
  }
    render() {
        return (
            <div className={styles["member-announcement-box"]}>
                  {/* <span className={styles["announcement-heading"]}> */}
                  {/* <Badge  style={{marginRight:"20px", color:"grey"}} showZero={true} color="secondary" badgeContent={2}>
                      <VolumeUp />
                  </Badge>
                  <h5 style={{color:"#333", marginRight:"10px", fontFamily:`${fontFamily3}`, fontWeight:400,}}>
                     Announcement
                  </h5> */}
              {/* </span> */}
            <div className={styles["announcement-main-inner"]}>
            {/* fontFamily:"Helvetica Neue", fontWeight:"300" */}
              <div id={styles["content-box-inner"]}>
                {this.ejectCards()}
                {/* <div className="d-flex j-center a-center height-70 full-width nate-blue-bg"> */}
                  {/* <span>ddd</span> */}
                  <LoadMore  handleClick = {()=>{this.fetchData()}} style={{width:20, height:20}} noIcon/>
                {/* </div> */}
              </div>
            </div>
        </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
  dispatch(getAnnouncement(10,'initial'))
  return {
      changeLoadingState: (userData) => dispatch(changeLoadingState()),
      fetchAnnouncement: (limit=10) => dispatch(getAnnouncement(limit)),
}
}
const mapStateToProps = (state) => {
  return {
      announcements: state.generalReducer.announcements,
      loading:state.appState.loading
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AnnouncementBox);



// import { readyForMapping } from '../contants/generalFunctions';
// class UserListBoxBox extends Component {

//     render() {
//         return (
//             <div className={styles["member-userlistbox-box"]}>
//                   <span className={styles["userlistbox-heading"]}>
//                   <Badge  style={{marginRight:"20px", color:"grey"}} color="secondary">
//                       {/* <VolumeUp /> */}
//                   </Badge> 
//                   <h5 style={{color:"grey", marginRight:"10px", width:"100%"}}>Top Contributers Today</h5>
//                   {/* <Divider variant="inset" component="h5" /> */}

//               </span>
//             <div className={styles["userlistbox-main-inner"]}>
            
//               <div id={styles["content-box-inner"]}>
//                 {this.ejectCards}
//                 <UserBox/>
//                 {/* <UserBox/>
//                 <UserBox/>
//                 <UserBox/>
//                 <UserBox/> */}
//               </div>
//             </div>
//         </div>
//         );
//     }
// }
