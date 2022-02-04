import React, { Component } from "react";
import styles  from "../css/apppagewrapper.module.css";
import AuthenticatedHomeNavbar from "./AuthenticatedHomeNavbar";
import { connect } from 'react-redux';
import { readyForMapping, checkIfLoggedIn, getWindowWidth, cssModules } from '../contants/generalFunctions';
import { getProjects, getProjectStatusUpdate } from '../store/actions/ProjectActions';
import LoadMore from "../reusable/LoadMore";
import GridLayOut from '../reusable/GridLayout';
import MediaCardProjectStyle from '../reusable/MediaCardProjectStyle';
import HorizontalScroller from "../reusable/HorizontalScroller";
import AnnouncementBox from '../reusable/AnnouncementBox';
import UserListBoxBox from '../reusable/UserListBox';
import OverlayLoader from "../reusable/OverlayLoader";
import Dropdown from '../reusable/Dropdown';
import ProjectList from "../pages/MemberPages/ProjectsPages/ProjectList";
import { MAIN_PAGES, letteringColor6 } from '../contants/uiConstants';
import InstitutonList from "../pages/MemberPages/InstitutionPage/InstitutonList";
import { ALL_URLS } from '../contants/urls';
import NewsList from "../pages/MemberPages/NewsPages/NewsList";
import { getJoinedInstitutions, getPendingInstitutions } from "../store/actions/InstitutionActions";
import SnackBar from './SnackBars';
import StatusViewer from "./StatusViewer";
import AlbumList from '../pages/MemberPages/AlbumPages/AlbumList';
import GroupsList from '../pages/MemberPages/Groupspage/GroupsList';
import PaymentList from '../pages/MemberPages/Payments/PaymentList';
import InstitutionDetails from "../pages/MemberPages/InstitutionPage/InstitutionDetails";
import ProjectDetails from "../pages/MemberPages/ProjectsPages/ProjectDetails";
import NewsDetails from "../pages/MemberPages/NewsPages/NewsDetails";
import { openPaymentForm } from '../store/actions/PaymentAction';
import PaymentForm from './PaymentForm';
import ProfileInfo from './ProfileInfo';
import { logOut, checkLoginState } from '../store/actions/AuthActions';
import { withRouter } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AlbumView from '../pages/MemberPages/AlbumPages/AlbumView';
import GroupsDetails from "../pages/MemberPages/Groupspage/GroupsDetails";
import { getAnnouncement, getContributers, openSnackBar } from "../store/actions/generalActions";
import HomeNavbar from './HomeNavbar';
import { changeLoadingState } from '../store/actions/AppStateActions';
import { Close, CloseRounded, CloseSharp } from "@material-ui/icons";
import { getNews } from '../store/actions/NewsActions';


class AppPageWrappers extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      showAuthPage: false,
      showSideBar:false,
      showOverLay:false,
      useSideBar:true,
      key:"home",
      data:this.props.projects,
      showSearchblanket:false,
      searchReady:false,
      page:null,
    };
  }
  toggleSideBar = () => {
    this.setState({showSideBar:!this.state.showSideBar, showOverLay:!this.state.showOverLay})
  }
  getPage = () => {
    switch (this.state.page) {
        case ALL_URLS.base:
                this.props.history.push(ALL_URLS.base);
            break;
        case ALL_URLS.memberListInstitutions:
                return <InstitutonList/>
        case ALL_URLS.memberListProjects:
                return <ProjectList/>
        case ALL_URLS.memberListNews:
                return <NewsList/>
        case ALL_URLS.memberListAlbums:
                return <AlbumList/>
        case ALL_URLS.memberListGroups:
                return <GroupsList/>
        case ALL_URLS.memberListPayments:
                return <PaymentList/>
        case ALL_URLS.memberViewInstitutions:
                return <InstitutionDetails/>
        case ALL_URLS.memberViewProject:
          alert("kkk")
                return <ProjectDetails/>
        case ALL_URLS.memberViewNews:
                return <NewsDetails/>
        default:
            break;
    }
  }
  changePage = (page,id) => {
      switch (page) {
        case ALL_URLS.base:
                this.setState({page:page})
                this.props.history.push(ALL_URLS.base)
            break;
        case ALL_URLS.memberListInstitutions:
                this.setState({page:page})
                this.props.history.push(ALL_URLS.memberListInstitutions)
            break;
        case ALL_URLS.memberListProjects:
                this.setState({page:page})
                this.props.history.push(ALL_URLS.memberListProjects)
            break;
        case ALL_URLS.memberListNews:
                this.setState({page:page})
                this.props.history.push(ALL_URLS.memberListNews)
            break;
        case ALL_URLS.memberListAlbums:
                this.setState({page:page})
                this.props.history.push(ALL_URLS.memberListAlbums)
            break;
        case ALL_URLS.memberListGroups:
                this.setState({page:page})
                this.props.history.push(ALL_URLS.memberListGroups)
            break;
        case ALL_URLS.memberListPayments:
                this.setState({page:page})
                this.props.history.push(ALL_URLS.memberListPayments)
            break;
        case ALL_URLS.memberViewInstitutions:
              this.setState({page:page})
              this.props.history.push(`${ALL_URLS.memberListInstitutions}/${id}`)
          break;
        case ALL_URLS.memberViewProject:
                this.setState({page:page})
                this.props.history.push(`${ALL_URLS.memberListProjects}/${id}`)
            break;
        case ALL_URLS.memberViewNews:
              this.setState({page:page})
              this.props.history.push(`${ALL_URLS.memberListNews}/${id}`)
          break;
        
        default:
            break;
    }
}
  conductSearch = (inputValue,selectedFilter) => {
    setTimeout(() => {
      if(inputValue===""||selectedFilter===""){
        this.setState({showSearchblanket:!this.state.showSearchblanket})
        this.props.openSnackBar('Zero enteris available for your search','error')
        return
      }
      this.setState({searchReady:true})
    }, 1000);
  }
  showSearchblanket = (inputValue,selectedFilter) => {
    this.setState({showSearchblanket:!this.state.showSearchblanket}, this.conductSearch(inputValue,selectedFilter))
  }
  ejectSearchContent = () => {
    if(readyForMapping(this.props.projects)){
      return this.props.projects.map((project, index) => {
        return <MediaCardProjectStyle style={{
          margint:"3px",
          marginTop:"30px",
          marginBottom:"30px", 
          marginRight:"30px", 
        }} 
        cardData={project}
        />
      })
    }
  }
  componentDidMount(){
    let page = this.props.match.path
    switch (page) {
        case ALL_URLS.base:
                this.setState({page:page})
            break;
        case ALL_URLS.memberListInstitutions:
                this.setState({page:page})
            break;
        case ALL_URLS.memberListProjects:
                this.setState({page:page})
            break;
        case ALL_URLS.memberListNews:
                this.setState({page:page})
            break;
        case ALL_URLS.memberListAlbums:
                this.setState({page:page})
            break;
        case ALL_URLS.memberListGroups:
                this.setState({page:page})
            break;
        case ALL_URLS.memberListPayments:
                this.setState({page:page})
            break;
        case ALL_URLS.memberViewInstitutions:
                this.setState({page:page})
            break;
        case ALL_URLS.memberViewProject:
                this.setState({page:page})
            break;
        case ALL_URLS.memberViewNews:
                this.setState({page:page})
            break;
        
        default:
            break;
    }
  }
  
  render() {
    const mod = cssModules(styles)
    if(!(this.props.isLogedIn)){
      this.props.history.push(ALL_URLS.base)
      return true
    }
      const innerWidth = getWindowWidth()
      return (
          <div id={styles["main-container"]}>
            {(this.props.profileInfoState&&innerWidth>800)
              ?<div style={{top:75}} className=' position-absolute above-all pop-up-rise right-20 top-30'>
                <ProfileInfo  handleLogOut = {() => this.props.logOut()}/> 
                </div>
              :null
            }
          {this.props.snackBarState?<SnackBar/>:null}
          {this.props.statusViewerState?<StatusViewer/>:null}
          {this.props.statusViewerState?<StatusViewer/>:null}
         {this.props.paymentFormState?<PaymentForm/>:null}
         {this.props.loading?<OverlayLoader/>:null}
         
          {/* hjhjhbh */}
              <div id={styles["nav-main-container"]}>
                {
                  innerWidth>800
                  ?<AuthenticatedHomeNavbar handleChangePage={(page) => this.changePage(page)} handleClick={(inputValue,selectedFilter)=>{this.showSearchblanket(inputValue,selectedFilter)}} outerStyles={{backgroundColor:"white",color:"black"}} innerStyles={{color:"black"}}/> 
                  :<HomeNavbar/>
                }
              </div>
              {/* </HorizontalScroller> */}
              <div id={styles["main-content-area"]} >
                {/* {this.state.showSearchblanket?<OverlayLoader/>:null} */}
                {this.state.showSearchblanket?<div 
                  style={{backgroundColor:"rgb(255,255,255,1)", padding:"50px"}} 
                  className = "position-absolute fill-entire-page  above-all padding-50 grid-view"
                  >
                    <div className='full-width height-auto nate-grey-text j-end padding-r-50'>
                      <Close color="secondary" style={{cursor:"pointer"}} onClick = {() => this.setState({showSearchblanket:!this.state.showSearchblanket})}/>
                    </div>
                    {/* <GridLayOut> */}
                    {this.state.searchReady
                    ?<div className="grid-view">
                      {
                        this.ejectSearchContent()
                      }
                    </div>:<OverlayLoader/>
                    }
                      {/* </GridLayOut> */}
                      
                </div>:null
                }
                  {/* <UpperSection imageSRC={randomImages}/> */}
                      <div id={styles["left-side"]}  >
                        <div id={styles["side-bar-container"]} 
                          className={mod(`${this.state.showSideBar?"sidebar-visible":null} elevated-blend`)} 
                          >
                            <div  id={styles["upper-fix"]} ></div>
                            <UserListBoxBox style={{background:letteringColor6}}/>

                        </div>
                      </div>
                      {/* <BrowserRouter> */}
                        <Switch>
                            <Route exact path={ALL_URLS.memberListInstitutions} component={InstitutonList}/>
                            <Route exact path={ALL_URLS.memberListProjects} component={ProjectList}/>
                            <Route exact path={ALL_URLS.memberViewProject} component={ProjectDetails}/>
                            <Route exact path={ALL_URLS.memberViewProject} component = {ProjectDetails}/> 
                            <Route exact path={ALL_URLS.memberListNews} component={NewsList}/>
                            <Route exact path={ALL_URLS.memberViewNews} component={NewsDetails}/>
                            <Route exact path={ALL_URLS.memberListAlbums} component={AlbumList}/>
                            <Route exact path={ALL_URLS.memberViewAlbums} component={AlbumView}/>
                            <Route exact path={ALL_URLS.memberListGroups} component={GroupsList}/>
                            <Route exact path={ALL_URLS.memberViewGroup} component={GroupsDetails}/>
                            <Route exact path={ALL_URLS.memberViewInstitutions} component={InstitutionDetails}/>
                            <Route exact path={ALL_URLS.memberListPayments} component={PaymentList}/>
                        </Switch>
                      {/* </BrowserRouter> */}
                        {/* {this.getPage()} */}
                       <div id={styles["right-side"]}>
                        <div id={styles["contributers-box"]} 
                        
                          className={styles[`${this.state.showSideBar?"sidebar-visible":null}`]} 
                        >
                          <div  id={styles["upper-fix"]} ></div>
                          <AnnouncementBox/>
                        </div>
                      </div>
              </div>
                {/* <Footer/> */}
            </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    dispatch(checkLoginState())
    dispatch(getProjectStatusUpdate(10,'initial'))
    dispatch(getJoinedInstitutions())
    dispatch(getPendingInstitutions())
    dispatch(getNews(10))
    dispatch(getAnnouncement(10,'initial'))
    dispatch(getProjects(10,'initial'))
    // dispatch(getContributers())
    return {
        fetchJoinedInstitutions: () => dispatch(getJoinedInstitutions()),
        fetchPendingInstitutions: () => dispatch(getPendingInstitutions()),
        openPaymentForm: () => dispatch(openPaymentForm()),
        openSnackBar: (message,type) => dispatch(openSnackBar(message,type)),
        logOut:() => dispatch(logOut()),
        changeLoadingState: () => dispatch(changeLoadingState()),
        fetchNews: (limit) => dispatch(getNews(limit)),
        checkLoginState: () => dispatch(checkLoginState())

  }
}
const mapStateToProps = (state) => {
    return {
        joinedInstitutions: state.institutions.joinedInstitutions,
        pendingInstitutions: state.institutions.pendingInstitutions,
        statusViewerState:state.projects.statusViewerState,
        paymentFormState:state.payments.paymentFormState,
        isLogedIn:state.auth.isLogedIn,
        profileInfoState:state.generalReducer.profileInfoState,
        snackBarState:state.generalReducer.snackBarState,
        loading:state.appState.loading,
        projects:state.projects.projects
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AppPageWrappers));


