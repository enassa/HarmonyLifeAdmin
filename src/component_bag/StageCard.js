import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import SubjectIcon from '@material-ui/icons/Subject';
import MyCircularProgress from './CircularProgressbar';
import { AttachMoney, Bookmarks, MoreHoriz, Visibility, AccountBalanceWallet, Layers } from '@material-ui/icons';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Avatar from '@material-ui/core/Avatar';
import { ALL_URLS } from '../contants/urls';
import { withRouter } from 'react-router-dom';
import { cssModules } from '../contants/generalFunctions';
import styles from "../css/stagecard.module.css"
class stageCard extends Component {
  constructor(props){
    super(props)
    this.state={
      activeLevels:false,
      projectId:this.props.projectId
    }
  }
  handlePopUp = (activeCard) => {
    this.setState({activeCard:!this.state.activeCard})
  }
  handleClick = (action,actionURL, cardId) => {
    const baseUrl = actionURL.replace(':','').substring(0,actionURL.length-3);
    const fullUrl = baseUrl + cardId
    const {cardData} = this.props
    this.props.history.push(fullUrl)
    this.setState({activeCard:!this.state.activeCard})
    if(action=="contribute"){
      this.props.handleClick("Project",cardData.projectName,cardData.projectId)
    }
    else{
      this.props.handleClick("Stage",cardData.name,cardData.id)
    }
  }
    render() {
      const mod = cssModules(styles)
      const {cardData} = this.props
        return (
            <div className={mod("stage-card-main" )} style={{marginBottom:50, cursor:"pointer"}}>
            <div className={mod("stage-card-inner")}>
              <div className={mod("first-div")}>
                {/* <Layers style={{color:"grey"}}/> */}
                <div className={mod("count-div-main")}>
                    <div className={mod("count-div-inner")}>
                        {cardData.id}
                    </div>
                </div>
              </div>
              <div className={mod("second-div")}>
                <span className={mod("stage-title")}>
                 {cardData.name}
                </span>
                <div className={mod("details-container")}>
                    <span className={mod("stage-group-name")}>
                        <Bookmarks style={{width:12, height:12, marginRight:5}}/>
                        {cardData.activities}
                    </span>
                    <span className={mod("stage-group-name")}>
                        <AccountBalanceWallet  style={{width:12, height:12, marginRight:5}}/>
                        {cardData.contributions}
                    </span>
                    <span className={mod("stage-group-name")}>
                        <Layers style={{width:12, height:12, marginRight:5}}/>
                        {cardData.levels}
                    </span>
                </div>
              </div>
              <div className={mod("third-div")}>
                <MyCircularProgress 
                  style={{width:60, height:60, stroke:"#ACD8F5",fontSize:20,}} 
                  foreColor="#18A0FB" strokeWidth={25} percentage={20} 
                />
                {/* <AvatarGroup style={{cursor:"pointer", marginLeft:"10px"}} max={4}>
                  <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random"/>
                  <Avatar alt="Travis Howard" src="https://source.unsplash.com/random"/>
                  <Avatar alt="Cindy Baker" src="https://source.unsplash.com/random"/>
                  <Avatar alt="Agnes Walker" src="https://source.unsplash.com/random"/>
                  <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/random"/>
                </AvatarGroup> */}
              </div>
              <div className={mod("fourth-div")}>
                <div className={mod("stage-card-button")}>
                <MoreHoriz onClick={()=>this.handlePopUp(cardData.id)}/>
                </div>
              </div>
              <div 
                className={`${this.state.activeCard?mod(`stage-actions pop-up-rise pop-up-shadow`):mod("slide-down-vanish d-none")}`}
              >
                <div onClick={()=>this.handleClick("view",ALL_URLS.memberListActivities,cardData.id)}>
                    <Visibility/>
                    <span>View Activities</span>
                  </div>
                <div onClick={()=>this.handleClick("contribute",ALL_URLS.memberContribute,cardData.id)}>
                    <AttachMoney/>
                    <span>Contribute</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default withRouter(stageCard)
