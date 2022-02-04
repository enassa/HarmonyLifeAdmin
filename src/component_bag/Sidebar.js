import React, { Component } from 'react'
import  styles from "../css/sidebar.module.css"
import {Dashboard,AddCircle, Apartment, ArtTrack, Textsms,AccountBalanceWallet, Settings,  ArrowBack } from '@material-ui/icons';
import OrigginLogo from "../resources/images/logo.png";
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import IconButton from './IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProgressBar from './LinearProgress';
import { ALL_URLS } from '../contants/urls';

/**
 * This is a multipurpose Sidebar Component for designing Admin panels and more...
 * For this compoenent to work correctly, kindly include the css file sidebar.css in 
 * your project and replace the refrence to the css file with the right reference.
 * @props className | The Classname props gives further styles to the maincontainer of the sidebar eg [ width, position, height, position ]
 * @props styles | The styles props provides inline styling to the maincontainer of the componenet
 * @props onClickProfile | The onClickProfile prop defines what should happen when the Profile image is clicked
 * @props onClickName | The onClickName prop defines what should happen when the username is clicked
 * @props userImage | The userImage prop holds the image of the user
 * @props userName | The userName prop holds the name of the user
 * @props menuListObject | The menuListObject is the object with the NavLinks and subNav links;
 * >>The menuListObject must contain the following four properties and correspongding values
 * name: The name of the Menu Item
 * icon: The icon for the Menu Item
 * url: The url link for the menu item ->Menu Items with subNavs should not be given urls
 * group: The group of the Menu Item -> During rendering, menuItems in different groups are seperated by a divider line
 * >>If you want an item, You can also add the subNav property with the properties and values name and icon
 * 
 */

const  defaultMenuList = [
  {
    name:"Dashboard",
    icon:<Dashboard/>,
    group:1,
    url:ALL_URLS.organisationAdminDashbord
  },
  {
    name:"View Groups",
    icon:<AccountBalanceWallet/>,
    url:ALL_URLS.organisationAdminViewGroup,
    group:1,
  },
  
  {
    name:"Create group",
    icon:<AddCircle/>,
    type:"normal-nav",
    group:1,
    url:ALL_URLS.organisationAdminCreateGroup,
  },
  {
    name:"Create Project",
    icon:<Apartment/>,
    type:"normal-nav",
    group:1,
    url:ALL_URLS.organisationAdminCreateProject,
  },
  {
    name:"Create news",
    icon:<ArtTrack/>,
    type:"normal-nav",
    group:1,
    url:ALL_URLS.organisationAdminCreateNews,
  },
  {
    name:"Notify members",
    icon:<Textsms/>,
    type:"normal-nav",
    group:1,
    url:ALL_URLS.organisationAdminSendNotification,
  },
  {
    name:"Settings",
    icon:<Settings/>,
    type:"normal-nav",
    group:2,
    url:ALL_URLS.organisationAdminSettings,
  },

  

  ]
export default class Sidebar extends Component {
    constructor(props){
        super(props)
        this.state={
            showSubNav:false,
            activeDropdown:null,
            useLogo:false,
        }
    }
    toggleSubNav = (itemName) => {
        itemName==this.state.activeDropdown
        ?this.setState({activeDropdown:null})
        :this.setState({activeDropdown:itemName})
    }
    ejectItems = () => {
    let prevGroupNumber = 1;
    return this.props.navList?this.props.navList:defaultMenuList.map((item, index) => {
        return (
        <Link key={index} className={`${styles["sidebar-item-main-container"]}
            ${prevGroupNumber!==item.group?styles['newgroup']:null}
            ${prevGroupNumber=item.group}`}
            to={item.url}
        >
            <div className={styles["sidebar-link-item-wrapper"]} 
              onClick={item.subNav?(e)=>{ e.preventDefault(); this.toggleSubNav(item.name)}:null}
            >
            <div className={styles["sidebar-name-icon-container"]}>
                <div className={styles["sidebar-icon-container"]}>
                {item.icon}
                </div>
                <div className={styles["sidebar-name-container"]}>
                {item.name}
                </div>
            </div>
            <div>
            {
                item.subNav
                ?this.state.activeDropdown==item.name
                ?item.iconOpened
                :item.iconClosed
                :null
            }
            </div>
            </div>
            {item.subNav
            ?this.state.activeDropdown==item.name
            ?item.subNav.map((items, index)=>{
                return (
                <div key={index} className={styles["subnav-item-main-container"]}>
                    <div className={styles["sidebar-name-icon-container"]}>
                    <div className={styles["sidebar-icon-container"]}>
                        {items.icon}
                    </div>
                    <div className={styles["sidebar-name-container"]}>
                        {items.name}
                    </div>
                    </div>
                </div>
                )
            })
            :null
            :null
            }
        </Link>
        )
    })
    } 
    render() {
        return (
            <div id={styles["sidebar-main-container"]}>
              <div id={styles["sidebar-wrapper"]}>
                <button id={styles["sidebar-length-toggler"]}>
                  <ArrowBack/>
                </button>
                <div id={styles["content-area"]}>
                {this.state.useLogo //if true, use logo instead of profile pic, logo image is not rounded
                ?<div className={styles["sidebar-origin-user-profisle"]}>
                  <div style={{backgroundColor:"green", width:"100%", height:"100%"}} className={styles["sidebar-origin-image-container"]}>
                    <img 
                      style={{backgroundColor:"red",width:20, height:20, marginBottom:30}} 
                      className={styles["sidebar-origin-image"]} 
                      src={this.props.userImage?this.props.userImage:"anyImage props"} 
                      alt={"d"}/>
                    {/* {this.props.} */}
                  </div>
                  <div className={styles["sidebar-profile-name-container"]}>
                    <span></span>
                  </div>
                </div>
                :<div className={styles["sidebar-user-profile"]}>
                  <div className={styles["sidebar-image-container"]}>
                    <img className={styles["sidebar-profile-image"]} 
                      src={this.props.userImage?this.props.userImage:"userImage props"} alt={"d"}
                      />
                  </div>
                  <div className={styles["sidebar-profile-name-container"]}>
                    <span style={{textOverflow:"elipses",maxWidth:"70%", color:"#00008B",fontWeight:"bolder" }}>
                      {this.props.userName}
                    </span>
                    <ProgressBar/>

                  </div>
                </div>
              }
              <div id={styles["sidebar-navs"]}>
                <div id={styles["sidebar-navs-wrapper"]}>
                  {this.ejectItems()}
                </div>
              </div>
                </div>
    
                <div id={styles["vertical-edge"]}></div>
            </div>
            </div>
        )
    }
}

Sidebar.propTypes = {
  styles:PropTypes.object,
  className:PropTypes.string,
  onClickName:PropTypes.func,
  onClickProfile:PropTypes.func,
  menuListObject:PropTypes.object,
  // userImage:PropTypes.i,
  userImage:PropTypes.string,
}
Sidebar.defaultProps = {

}

