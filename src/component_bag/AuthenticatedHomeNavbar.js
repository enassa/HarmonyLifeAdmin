import React, { Component } from 'react'
import styles from "../css/authenticatednavbar.module.css"
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavItems, WEBSITE_ADDRESS, MAIN_PAGES, fontFamily3, letteringColor4, letteringColor6, letteringColor5, fontFamily5 } from '../contants/uiConstants';
import PopUpButton from './PopUpButton';
import LogoContainer from './logoContainer';
import almamaterLogo from "../resources/images/logo.png"
import { AccountCircle, ExpandMore, Airplay, Business, DynamicFeed, ListAlt, ExitToApp, Home } from '@material-ui/icons';
import { ALL_URLS, ACTORS } from '../contants/urls';
import { withRouter } from 'react-router-dom';
import UserProfile from './UserProfile';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { openProfileInfo } from '../store/actions/generalActions';


class AuthenticatedHomeNavbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            expandSelect:true,
            selecetedNavItem:null,
        }
    }
    handleChangePage = (page) => {
        this.setState({selecetedNavItem:page.title}, )
            this.props.handleChangePage(page.url)
    }
    spitListItems = () => {
        return MAIN_PAGES.map((item, index)=>{
         return (
         <Link key={index} 
           to={
             {pathname:`${item.url}`,
           }}
           className={styles["nav-link-clean list-item"]}
           style={{
               marginRight:"5%", 
               fontWeight: 500,
               fontSize: 16,
               fontFamily: `"Poppins", sans-serif`,
               color:letteringColor6
            }}
             onClick={(e)=>{
               e.preventDefault()
               this.loadPage(item.url) 
             }}
           >
               {item.name}
           </Link>
            )
        })
       }
    handleLoginClick = (loginOption) => {
        switch (loginOption) {
            case ACTORS.actorFour:
                this.props.history.push(ALL_URLS.loginMember)
                break;
            case ACTORS.actorThree:
                this.props.history.push(ALL_URLS.loginGroupAdmin)
                break;
            case ACTORS.actorTwo:
                this.props.history.push(ALL_URLS.loginOrganisationAdmin)
                break;
            default:
                break;
        }       
    }
    handleRegisterClick = (registerOption) => {
        switch (registerOption) {
            case ACTORS.actorFour:
                this.props.history.push(ALL_URLS.registerMember)
                break;
            case ACTORS.actorThree:
                this.props.history.push(ALL_URLS.registerGroupAdmin)
                break;
            case ACTORS.actorTwo:
                this.props.history.push(ALL_URLS.registerOrganisationAdmin)
                break;
        
            default:
                break;
        }       
    }
    
    handleLogOut = () =>{
        localStorage.clear()
        this.props.history.push(ALL_URLS.base)
    }
    ejestNavItems = () => {
        const {selecetedNavItem} = this.state;
        return MAIN_PAGES.map((item, index)=>{
            return <li   className={`${selecetedNavItem==item.title?"nate-navy-tint-text":"nate-navy-text"} 
                        hvr-underline-reveal cursor-pointer d-flex full-height  full-width f-column j-center a-center`
                    }  
                        onClick= {()=>{this.handleChangePage(item)}}
                        key={index}
                    >
                    {item.icon}
                    <span style={{fontFamily:`${fontFamily5}`,color:`${letteringColor6}`, fontWeight:400,}} className={styles['nav-item-text']}>
                        {item.title}
                        </span>
                </li>
        })
    }
    render() {
        const menuItems = [
            {name:"Logout", icon:<ExitToApp/>}
        ]
        const classes = {
            
        }
        const style={
            navItemStyle:{
                display:"flex",
                flexFlow:"column",
                justifyContent:"flex-start",
                alignItems:"center",
                backgroundColor:"transparent",
                fontFamily:`"Helvetica Neue"`,
                fontSize:"8px",
                fontWeight:"400",
                lineHeight:"20px",
                boxShadow:"0px 0px",
                ...this.props.innerStyles,
        },
            outerStyles:{
                ...this.props.outerStyles
            }

        }
      
        return (
            <div style={this.props.outerStyles} id={styles["nav-bar-main-container"]}>
                <div id={styles["nav-bar-sub-container"]} >
                    <div id={styles["nav-left-region"]}>
                        <FontAwesomeIcon 
                            onClick={()=>{this.toggleSideBar()}} 
                            id={styles["nav-menu-icon"]} 
                            icon={faBars} 
                        />
                        <span id={styles["nav-logo-container"]}>
                             <SearchBar 
                                handleClick = {(inputValue,selectedFilter) => {
                                    this.props.handleClick(inputValue,selectedFilter)
                                }}
                                style={{backgroundColor:letteringColor6, color:"white",}}
                                />
                        </span>
                    </div>
                    {/* className={styles['nav']} */}
                    <div id={styles["nav-middle-region"]}>
                        <ul className={`d-flex full-width full-height j-space-between a-center ${this.props.home?'nate-white-others':''}`} >
                          {this.ejestNavItems()}
                        </ul>
                    </div>
                    <div id={styles["nav-right-region"]} >
                        <UserProfile/>
                    </div>
                    {/* <div id={styles["pop-up-container"]}>
                    </div> */}
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        openProfileInfo: () => dispatch(openProfileInfo())
  }
}
const mapStateToProps = (state) => {
    return {
        profileInfoState:state.generalReducer.profileInfoState,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthenticatedHomeNavbar);


