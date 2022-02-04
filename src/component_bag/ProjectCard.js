import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import SubjectIcon from '@material-ui/icons/Subject';
import MyCircularProgress from './CircularProgressbar';
import { AttachMoney, MoreHoriz, Visibility, AccountBalanceWallet } from '@material-ui/icons';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Avatar from '@material-ui/core/Avatar';
import { ALL_URLS } from '../contants/urls';
import { withRouter } from 'react-router-dom';
import { cssModules } from '../contants/generalFunctions';
import styles from "../css/projectcard.module.css"
class ProjectCard extends Component {
  constructor(props){
    super(props)
    this.state={
      activeCard:false,
    }
  }
  handlePopUp = (activeCard) => {
    this.setState({activeCard:!this.state.activeCard})
  }
  handleClick = (actionURL, cardId) => {
    const {cardData} = this.props

    const baseUrl = actionURL.substring(0,actionURL.length-3)
    const fullUrl = baseUrl + cardId

    this.props.history.push(fullUrl)
    this.props.handleClick("Project",cardData.name,cardData.id)
    this.setState({activeCard:!this.state.activeCard})
  }
    render() {
      const mod = cssModules(styles)
      const {cardData} = this.props
        return (
            <div className={mod("project-card-main" )}style={{marginTop:20,marginBottom:20, cursor:"pointer"}}>
            <div className={mod("project-card-inner")}>
              <div className={mod("first-div")}>
                <SubjectIcon/>
              </div>
              <div className={mod("second-div")}>
                <span className={mod("project-title")}>
                 {cardData.name}.
                </span>
                <span className={mod("project-group-name")}>{cardData.source}</span>
              </div>
              <div className={mod("third-div")}>
                <MyCircularProgress 
                  style={{width:60, height:60, stroke:"#ACD8F5",fontSize:20,}} 
                  foreColor="#18A0FB" strokeWidth={25} percentage={20} 
                />
                <AvatarGroup style={{cursor:"pointer", marginLeft:"10px"}} max={4}>
                  <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random"/>
                  <Avatar alt="Travis Howard" src="https://source.unsplash.com/random"/>
                  <Avatar alt="Cindy Baker" src="https://source.unsplash.com/random"/>
                  <Avatar alt="Agnes Walker" src="https://source.unsplash.com/random"/>
                  <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/random"/>
                </AvatarGroup>
              </div>
              <div className={mod("fourth-div")}>
                <div className={mod("project-card-button")}>
                  <MoreHoriz onClick={()=>this.handlePopUp(cardData.id)}/>
                </div>
              </div>
              <div 
                className={`${this.state.activeCard?mod(`project-actions pop-up-rise pop-up-shadow`):mod("slide-down-vanish d-none")}`}
              >
                <div onClick={()=>this.handleClick(ALL_URLS.memberListStages,cardData.id)}>
                    <Visibility/>
                    <span>View stages</span>
                  </div>
                <div onClick={()=>this.handleClick(ALL_URLS.memberContribute,cardData.id)}>
                    <AccountBalanceWallet/>
                    <span>Contribute</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default withRouter(ProjectCard)
