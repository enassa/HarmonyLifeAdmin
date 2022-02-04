import React, { Component } from 'react'
import styles from "../css/homenavbar.module.css"
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NavItems, WEBSITE_ADDRESS, fontFamily4, fontFamily5, letteringColor, letteringColor4, letteringColor5, homeMobileNavItems, letteringColor6, letteringColor7, fontFamily6, fontFamily2, fontFamily1, fontFamily3, letteringColor8, MAIN_PAGES, letteringColor3 } from '../contants/uiConstants';
import PopUpButton from './PopUpButton';
import LogoContainer from './logoContainer';
import almamaterLogo from "../resources/images/logo.png"
import { SupervisedUserCircle, AccountCircle, ExpandMore, Business, DynamicFeed, ListAlt, AccountBalanceWallet, BorderRight, Notifications } from '@material-ui/icons';
import { ALL_URLS, ACTORS } from '../contants/urls';
import { withRouter } from 'react-router-dom';
import { checkIfLoggedIn, getWindowWidth } from '../contants/generalFunctions';
import { connect } from 'react-redux';
import { logOut } from '../store/actions/AuthActions';
import svgblack from '../resources/images/svgblack.svg'
import ProfileInfo from './ProfileInfo';
import MyDivider from './MyDivider';
import { Badge } from 'react-bootstrap';
import { closeProfileInfo, openProfileInfo } from '../store/actions/generalActions';
    
const menuItems = [
    {name:"Logout",icon:<SupervisedUserCircle />},
   
]
class HomeNavbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            expandSelect:true,
            navExpanded:false,
            showPopUp:false,
            profileInfo:false,
        }
    }
    
    spitListItems = () => {
        const innerWidth = getWindowWidth();
        let itemList = (this.props.isLogedIn)?MAIN_PAGES:homeMobileNavItems
        return itemList.map((item, index)=>{
         return (
         <Link key={index} 
           to={
             {pathname:`${item.url}`,
           }}
           className={styles["nav-link-clean list-item"]}
           style={{
               marginRight:"5%",
               marginBottom:"10px", 
               fontWeight: 500,
               fontSize: 16,
               color:`${letteringColor6}`,
               textDecoration:"none",
               fontFamily: `${fontFamily4}`
            }}
             onClick={(e)=>{
               e.preventDefault()
               this.props.history.push(item.url) 
               this.setState({navExpanded:!this.state.navExpanded})
             }}
             
           >    
           <span style={{marginRight:7,}}>
                {item.icon}
            </span>
           
               {item.title}
           </Link>
            )
        })
       }
       ejectMobileNavItems = () => {

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
        this.props.logOut()
    }
    handleLoginChecker(link){
            this.props.history.push(link)
    }
    toggleNav = () => {
        this.setState({navExpanded:!this.state.navExpanded})
    }
    render() {
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
                boxShadow:"0px 0px"
            },
            transitionForAll : "0.2s all linear"

        }
        return (
            <div style={{}} id={styles["nav-bar-main-container"]} >
                <div id={styles["nav-bar-sub-container"]} >
                    <div id={styles["nav-left-region"]}>
                        <span id={styles["nav-logo-container"]}>
                            <LogoContainer 
                                outerStyles={{ marginLeft:"20%",minWidth: 200,}} 
                                imageSrc={almamaterLogo} logoText={WEBSITE_ADDRESS.name}
                                textStyles ={{
                                    fontFamily:`${fontFamily5}`,textAlign:"center", 
                                    lineHeight:"30px",
                                    fontWeight:"300"
                                }}
                                imageStyles={{width:60, height:70}}
                                handleClick={()=>{this.props.history.push("/")}}
                            />
                        </span>
                    </div>
                    <div id={styles["nav-middle-region"]}>
                         {/* Mobile view Nav */}
                        <div  
                            id={styles["nav-middle-inner-region"]} 
                            className={`transition-nate position-fixed elevated-card`} 
                        >
                            <div  id={styles["nav-middle-top"]} >
                                {/* {!(this.props.isLogedIn||checkIfLoggedIn())//If user has not logged in, show this else the other
                                ?<div className={styles["nav-middle-top-normal"]}>
                                    {!this.state.navExpanded
                                    ?
                                    <LogoContainer 
                                        outerStyles={{height:"auto"}} 
                                        imageSrc={almamaterLogo} 
                                        textStyles ={{
                                            fontFamily:`${fontFamily5}`,textAlign:"center", 
                                            lineHeight:"30px",
                                            fontWeight:"300"
                                        }}
                                        imageStyles={{
                                            width:60, height:70, 
                                            filter:`${this.state.navExpanded?'invert(100%)':'invert(0%)'}`, 
                                            transition:style.transitionForAll
                                        }}
                                        handleClick={()=>{this.props.history.push("/")}}
                                    />
                                    :null
                                    }
                                    {this.state.navExpanded
                                    ?<span className={`height-80 width-100-cent nate-purple-text j-start a-center `}>
                                        <span style={{fontFamily:`${fontFamily5}`,color:`${letteringColor8}`, 
                                            // borderRight:`1px solid ${letteringColor7}`,
                                            // borderLeft:`1px solid ${letteringColor7}`
                                        }} 
                                            className={`full-width width-150 text-align-center`}>
                                            ALMA MATER WORLD
                                            </span>
                                    </span>
                                    :null
                                    }
                                  <FontAwesomeIcon 
                                    onClick={()=>{this.toggleNav()}} 
                                    id={styles["nav-menu-icon"]} 
                                    icon={faBars}
                                    style = {{color:this.state.navExpanded?letteringColor6:letteringColor}} 
                                />
                                </div> */}
                                <div className={`${this.state.navExpanded?'max-height-infinite  nate-white-bg':'max-height-100 nate-navy-bg'} `}  id={styles["nav-middle-top-normal"]}>
                                    <FontAwesomeIcon 
                                        onClick={()=>{this.toggleNav()}} 
                                        id={styles["nav-menu-icon"]} 
                                        icon={faBars}
                                        style = {{color:this.state.navExpanded?letteringColor6:letteringColor}} 
                                    />
                                    {
                                    (this.props.isLogedIn)
                                    ?<span style={{display:"flex", flexFlow:"row", justifyContent:"center", alignItems:"center", width:30, height:30, borderRadius:100,paddingRight:20}}>
                                        <Badge  
                                            style={{
                                                marginRight:"0px",
                                                color:this.state.navExpanded?letteringColor6:letteringColor
                                            }} 
                                            showZero={true} 
                                            color="secondary" 
                                            badgeContent={2}
                                            overlap="circular"
                                        >
                                                <Notifications />
                                        </Badge>
                                        {/* <Badge badgeContent={100} color="secondary">
                                            <Notifications/>
                                        </Badge> */}
                                        <span style={{display:"flex", flexFlow:"column", justifyContent:"center", alignItems:"center", width:30, height:30, borderRadius:100, border:"2px solid white"}}>
                                         <FontAwesomeIcon 
                                            onClick={()=>{
                                            if(this.state.profileInfo===true){
                                                this.props.closeProfileInfo()
                                                this.setState({profileInfo:false})
                                               
                                            }
                                            else if (this.state.profileInfo===false){
                                                this.props.openProfileInfo()
                                                this.setState({profileInfo:true})
                                            }
                                                // this.setState({showPopUp:!this.state.showPopUp}) 
                                            
                                            }} 
                                            id={styles["nav-menu-icon"]} 
                                            icon={faUserCircle}
                                            style = {{color:this.state.navExpanded?letteringColor6:letteringColor}} 
                                        /> 
                                         
                                        </span>
                                       
                                        {/* <FontAwesomeIcon 
                                            onClick={()=>{this.toggleNav()}} 
                                            id={styles["nav-menu-icon"]} 
                                            icon={faChevronDown}
                                            style = {{color:this.state.navExpanded?letteringColor6:letteringColor}} 
                                        /> */}
                                    
                                        {/* <FontAwesomeIcon 
                                            onClick={()=>{this.toggleNav()}} 
                                            id={styles["nav-menu-icon"]} 
                                            style={{fontSize:10, marginTop:2}}
                                            size={{}}
                                            icon={faChevronDown} 
                                        /> */}
                                    </span>
                                    :<span className='full-width j-end'>
                                        <LogoContainer 
                                            outerStyles={{}} 
                                            imageSrc={almamaterLogo} 
                                            textStyles ={{
                                                fontFamily:`${fontFamily5}`,textAlign:"center", 
                                                lineHeight:"30px",
                                                fontWeight:"300"
                                            }}
                                            imageStyles={{width:30, height:35}}
                                            handleClick={()=>{this.props.history.push("/")}}
                                        />
                                    </span> 
                                    }
                                    {
                                    this.props.profileInfoState
                                    ?<div className='
                                        pop-up-rise
                                        position-absolute d-flex  
                                        j-center nate-white-bg height-auto
                                        width-auto top-55 right-10 
                                        curved-corners elevated-card
                                        d-flex a-center j-center
                                        margin-t-20
                                        '
                                        onClick = {() => {this.props.logOut()}}
                                        >
                                            <ProfileInfo/>
                                        {/* <div className=' height-30 d-flex nate-violet-text j-center a-center'>
                                            <span></span>
                                            <span style={{fontFamily:`${fontFamily5}`}}>Log out</span>
                                        </div> */}
                                    </div>
                                    :null}
                                 </div>
                                
                            </div>
                            <MyDivider style = {{}}/> 
                            {this.state.navExpanded
                            ?<div 
                                className={`overflow-hidden nate-white-bg`} 
                                // style={{transition:style.transitionForAll,}}  
                                id={styles["nav-middle-down"]}
                            >
                                {this.spitListItems()}
                            </div>
                            :null
                            }
                        </div>
                    </div>
                    <div id={styles["nav-right-region"]} >
                    {this.props.isLogedIn
                    ? <> <PopUpButton 
                            icon={<Business/>}
                        //     textIcon={<ExpandMore 
                        //         style={{marginLeft:"5px",
                        //         fontWeight:"400px",
                        //         width:"16px",
                        //         height:"16px",
                        //         fontFamily:"Helvetica Neue",
                        //         fontStyle:"normal",
                        // }}
                        // />}
                            buttonText="Institutions" 
                            innerStyles={style.navItemStyle}
                            textStyles ={{margin: "7px 0 0",color:`${letteringColor}`}}
                            outerStyles={{margin:0}}
                            handleClick = {()=>{this.handleLoginChecker(ALL_URLS.memberListInstitutions)}}
                        />
                           <PopUpButton 
                            icon={<ListAlt/>}
                        //     textIcon={<ExpandMore 
                        //         style={{marginLeft:"5px",
                        //         fontWeight:"400px",
                        //         width:"16px",
                        //         height:"16px",
                        //         fontFamily:"Helvetica Neue",
                        //         fontStyle:"normal",
                        // }}/>}
                            buttonText="Projects" 
                            innerStyles={style.navItemStyle}
                            textStyles ={{margin: "7px 0 0",color:`${letteringColor}`}}
                            handleClick = {()=>{this.handleLoginChecker(ALL_URLS.memberListProjects)}}
                        />
                        <PopUpButton 
                            icon={<DynamicFeed/>}
                        //     textIcon={<ExpandMore 
                        //         style={{marginLeft:"5px",
                        //         fontWeight:"400px",
                        //         width:"16px",
                        //         height:"16px",
                        //         fontFamily:"Helvetica Neue",
                        //         fontStyle:"normal",
                        // }}/>}
                            buttonText="News" 
                            innerStyles={style.navItemStyle}
                            textStyles ={{margin: "7px 0 0",color:`${letteringColor}`}}
                            handleClick = {()=>{this.handleLoginChecker(ALL_URLS.memberListNews)}}
                        />
                     
                        <PopUpButton 
                            icon={<AccountBalanceWallet/>}
                        //     textIcon={<ExpandMore 
                        //         style={{marginLeft:"5px",
                        //         fontWeight:"400px",
                        //         width:"16px",
                        //         height:"16px",
                        //         fontFamily:"Helvetica Neue",
                        //         fontStyle:"normal",
                        // }}/>}
                            buttonText="Payment" 
                            innerStyles={style.navItemStyle}
                            textStyles ={{margin: "7px 0 0",color:`${letteringColor}`}}
                            handleClick = {()=>{this.handleLoginChecker(ALL_URLS.memberListPayments)}}

                        />
                    <PopUpButton 
                        icon={<AccountCircle/>}
                        textIcon={<ExpandMore 
                            style={{marginLeft:"5px",
                            fontWeight:"400px",
                            width:"16px",
                            height:"16px",
                            fontFamily:"Helvetica Neue",
                            fontStyle:"normal",
                            }}/>}
                        buttonText="My Account" 
                        // itemList={menuItems} 
                        innerStyles={style.navItemStyle}
                        handleClick={()=>{
                            if(this.state.profileInfo===true){
                                this.props.closeProfileInfo()
                                this.setState({profileInfo:false})
                               
                            }
                            else if (this.state.profileInfo===false){
                                this.props.openProfileInfo()
                                this.setState({profileInfo:true})
                            }
                                // this.setState({showPopUp:!this.state.showPopUp}) 
                            
                            }} 
                        textStyles ={{margin: "7px 0 0",color:`${letteringColor}`}}
                    />
                     {this.props.profileInfoState
                                    ?
                                    <div className='
                                        pop-up-rise
                                        position-absolute d-flex  
                                        j-center nate-white-bg height-auto
                                        width-auto top-55 right-10 
                                        curved-corners elevated-card
                                        d-flex a-center j-center
                                        margin-t-20
                                        '
                                        onClick = {() => {this.props.logOut()}}
                                        >
                                            <ProfileInfo/>
                                        {/* <div className=' height-30 d-flex nate-violet-text j-center a-center'>
                                            <span></span>
                                            <span style={{fontFamily:`${fontFamily5}`}}>Log out</span>
                                        </div> */}
                                    </div>
                     :null}
                    </>
                    :
                    <>
                        <PopUpButton 
                        outerStyles={{marginRight:20,}}
                        buttonText="Login" 
                        innerStyles={{ backgroundColor:`white`, color:`${letteringColor}`}}
                        handleClick= {
                            ()=>this.props.history.push(ALL_URLS.loginMember)
                        }
                        textStyles ={{color:`${letteringColor5}`,fontWeight:"bolder"}}
                    />
                        <PopUpButton 
                         innerStyles={{ backgroundColor:`${letteringColor5}`,}}
                        buttonText="Join Us" 
                        handleClick = {
                            ()=>this.props.history.push(ALL_URLS.registerMember)
                        }
                        textStyles ={{color:`${letteringColor}`,fontWeight:"bolder"}}

                    />
                </>
                    }
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
        logOut:() => dispatch(logOut()),
        closeProfileInfo: () => dispatch(closeProfileInfo()),
        openProfileInfo: () => dispatch(openProfileInfo())

  }
}
const mapStateToProps = (state) => {
    return {
        isLogedIn:state.auth.isLogedIn,
        snackBarState:state.generalReducer.snackBarState,
        profileInfoState: state.generalReducer.profileInfoState
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HomeNavbar));

