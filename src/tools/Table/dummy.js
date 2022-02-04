// export const TABLE_DATA = [
//   ["Mufti", "individual", "22%", 7993],
//   ["Bengal", "individual", "89%", 245],
//   ["Pongo", "team", "78%", 45],
//   ["Saman", "individual", "12%", 45],
//   ["Charles Rb", "individual", "8%", 215],
//   ["Cornelius Py", "team", "32%", 785],
// ];

// export const TABLE_COLUMNS = ["name", "individual/team", "shares", "amount"];


// import React, { Component } from "react";
// import styles  from "../../css/member/homepage.module.css";
// import OverLay from '../../reusable/OverLay';
// import Navbar from '../../reusable/HomeNavbar';
// import PopUpButton from "../../reusable/PopUpButton";
// import svganimtion from "../../resources/images/svganimation.mp4"
// import { ChevronRight } from '@material-ui/icons'
// import OverlayLoader from '../../reusable/OverlayLoader';
// import NewsCard from "../MemberPages/NewsPages/NewsCard";
// import { ALL_URLS } from '../../contants/urls';
// import PopUpForm from '../../reusable/PopUpForm';
// import OverlayModal from '../../reusable/OverlayModal';
// import { connect } from 'react-redux';
// import AuthenticatedHomeNavbar from "../../reusable/AuthenticatedHomeNavbar";
// import { checkIfLoggedIn } from '../../contants/generalFunctions';
// import CarousalFade from "../../reusable/CarousalFade";
// import Marquee from "react-fast-marquee";
// import { INSTITUTION_IMG, fontFamily3, WEBSITE_NAME, fontFamily4, fontFamily5, fontFamily1, fontFamily6 } from '../../contants/uiConstants';
// import { Carousel } from "react-responsive-carousel";
// import ladyPic from '../../resources/images/welcomelady.png'

// const $i = document.getElementById.bind(document)
// const $ = document.querySelectorAll.bind(document)

// class LandingPageMain extends Component  {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showAuthPage: false,
//       // showSideBar:false,
//       showOverLay:false,
//       useSideBar:true,
//       loading:false,
//       showModalForm:false,
//       error:"",
//     };
//   }
//   handleSubmit = () => {
//     this.setState({error:"Authorities will be notified of your request"})  
//   }
//   closeModal = () => {
//     this.setState({error:""})
//   }
//   handlePopUpFormControl = () => {
//     this.setState({showModalForm:false})
//   }
//   toggleSideBar = () => {
//     console.log(this.state.showSideBar)
//     this.setState({showSideBar:!this.state.showSideBar, showOverLay:!this.state.showOverLay})
//   }
  
//   loadPage = (url) => {
//     this.props.history.push(url)
//   }
//   handleImageClick = (imageId) => {
//     this.props.history.push(`/member/albums/${imageId}`)
//   }
//   componentDidMount(){
//     setTimeout(() => {
//         this.setState({loading:false})
//     }, 2000);
//   }
  
//   render() {
//     const style={
//       navItemStyle:{
//           display:"flex",
//           flexFlow:"column",
//           justifyContent:"flex-start",
//           alignItems:"center",
//           backgroundColor:"transparent",
//           fontFamily:`"Helvetica Neue"`,
//           fontSize:"8px",
//           fontWeight:"400",
//           lineHeight:"20px",
//           boxShadow:"0px 0px"
//       }
//   }

//     const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     const myStyles = {
//         mainContainer:{
//         },
//         almamaterLogo:{
//             width:200,
//             height:54.84
//         },
//         navBarMainContainer:{
//             height:94.84,
//         },
//         carousalArea:{
//         }
//     }

//     return (
//       <div id={styles["main-container"]} style={myStyles.mainContainer}>
//         {this.state.error!==""
//           ?<OverlayModal message={this.state.error} closeModal={()=>{this.closeModal()}}/>
//           :null}
//         {
//           this.state.showModalForm
//           ?<PopUpForm handleSubmit = {()=>{this.handleSubmit()}} 
//           handleClick={()=>{this.handlePopUpFormControl()}}/>
//           :null
//         }
//         {this.state.loading?<OverlayLoader/>:null}
//         <div id={styles["sub-container"]} style={myStyles.subContainer}>
//         {this.state.showOverLay?<OverLay/>:null}
//         <div id={styles["sub-container-wrapper"]}  style={myStyles.pagesContainer}>
//           <div id={styles["side-bar-container"]} 
//             className={styles[`${this.state.showSideBar?"sidebar-visible":null}`]} 
//             style={myStyles.sidebarContainer}
//           >
//               <div id={styles["side-list-items-container"]}>
               
//               </div>
//           </div>
//           <div id={styles["content-area"]} >
//             <div id={styles["nav-main-container"]}  style={myStyles.navBarMainContainer} >
//               <Navbar home={true}/> 
//               {/* {(this.props.isLogedIn||checkIfLoggedIn())?<AuthenticatedHomeNavbar home={true}/>:<Navbar/> } */}
//             </div>
//             <div id={styles["sections-containers"]} onScroll={(e)=> this.handleScroll(e)}>
//               <div id={styles["section-1"]} 
//               style={{position:"relative"}} 
//               id={styles["section-1"]}>
//                 <div id={styles["section-1-inner"]}>
//                 <Carousel showStatus={false} dynamicHeight={false} showArrows={false} style={{backgroundColor:"red"}} showThumbs={false} infiniteLoop={true} autoPlay={true}>
//                   <div className='fill-entire-page d-flex '>
//                     <div id={styles["section-1-left"]}>
//                     {/* <PopUpButton 
//                               handleClick={()=>{}}
//                               textIcon={<ChevronRight
//                                   style={{marginLeft:"5px",
//                                   fontWeight:"400px",
//                                   width:"24px",
//                                   height:"24px",
//                                   fontFamily:"Helvetica Neue",
//                                   fontStyle:"normal",
//                           }}/>}
//                               textStyles = {{
//                                   fontSize:"13px"
//                               }}
//                               buttonText="find and contribute to project" 
//                               innerStyles={style.navItemStyle}
//                               handleSelect = {(option)=>this.handleRegisterClick(option)}
//                               handleClick = {()=>{this.props.history.push(ALL_URLS.memberListProjects)}}
//                               outerStyles={{
//                                 display:"flex",justifyContent:"flex-start",
//                                 alignItems:"center",borderRadius:"50px",
//                                 margin:0,marginBottom:"1%",
//                                 backgroundColor:"rgb(0,0,0,0.2)", width:"400px",maxHeight:"30px"
//                               }}
                              
//                           /> */}
//                           <h1 
//                             style={{
//                               fontFamily:"Helvetica Neue",marginBottom:"3%", 
//                               width:"100%",fontStyle:"normal", fontWeight:"300",
//                               lineHeight:"40px", color:"white",fontSize:"30px",
//                               fontFamily:`${fontFamily4}`
//                             }} 
//                           >
//                             {/* Welcome to the  Alma mater world, where the true bonds formed count. */}
//                             Welcome to the <div style={{display:"inline",fontFamily:"Arial Rounded MT Bold"}} ><b> {`${WEBSITE_NAME}`}</b> </div> where the true bonds formed count.
//                             <br/><br/>
                         
//                           </h1>
//                           <h5
//                             style={{
//                               fontFamily:"Helvetica Neue",marginBottom:"6%", 
//                               width:"100%",fontStyle:"normal", fontWeight:"300",
//                               lineHeight:"26px", color:"white", textAlign:"justify",
//                               fontFamily:`${fontFamily4}`
//                             }} 
//                           > 
//                             <i> 
//                               <b>Genesis 11:6</b><br/>
//                               “Look!” said the Lord. The people are united, and they all speak the same language. After this, nothing they set out to do will be impossible for them!
//                               &nbsp;<b>There is no end to the exploits of unity, imposibility is a myth.</b> </i>
                              
//                           </h5>
//                           {/* <div id={styles["landing-search-bar"]}>
//                             <input style={{
//                               fontFamily:"Helvetica Neue", 
//                               fontStyle:"normal", fontWeight:"300",
//                               lineHeight:"26px", color:"white"
//                             }} placeholder="Search for an institution or a Project"/>
//                             <div>
//                               <Search/>
//                             </div>
//                           </div> */}
//                     </div>
//                     <div id={styles["section-1-right"]}>
//                       <div className='full-height position-relative width-100-cent'>
//                           <div style={{borderRadius:"100px 20px 100px 20px", fontFamily:`${fontFamily6}`, fontWeight:300}} className='nate-white-text padding-20 slide-up-slow d-flex j-center a-center position-absolute full-height width-90-cent top-0 curved-corners above-all nate-white-bg'>
//                               <span style={{textAlign:"justify", fontSize:"1200%"}}>
//                               🤝
//                                 </span>
//                           </div>
//                           {/* <img className='slide-up-slow above-all' style={{transform:"scale(1.1)",zIndex:"500"}} src={ladyPic}/> */}
                        
//                       </div>
//                       {/* <CarousalFade/> */}
//                     {/* <video  autoPlay loop>
//                       <source src={svganimtion}type="video/mp4"/>
//                           Your browser does not support the video tag.
//                     </video> */}
//                     </div>
//                   </div>
//                 </Carousel>
//                 </div>
//                 <div className='width-100-cent height-200 '>
//                  <Marquee className='d-flex j-center'>
//                   <div style={{marginRight:30,backgroundImage:`url('${INSTITUTION_IMG.rKNUST}')`}} className=' fit-bg width-100 height-100 round-up nate-pink-bg marquee-space'></div>
//                   <div style={{marginRight:30,backgroundImage:`url('${INSTITUTION_IMG.leg}')`}} className=' fit-bg width-100 height-100 round-up nate-pink-bg marquee-space'></div>
//                   <div style={{marginRight:30,backgroundImage:`url('${INSTITUTION_IMG.rUCC}')`}} className=' fit-bg width-100 height-100 round-up nate-pink-bg marquee-space'></div>
//                   <div style={{marginRight:30,backgroundImage:`url('${INSTITUTION_IMG.rUDS}')`}} className=' fit-bg width-100 height-100 round-up nate-pink-bg marquee-space'></div>
//                   <div style={{marginRight:30,backgroundImage:`url('${INSTITUTION_IMG.radFord}')`}} className=' fit-bg width-100 height-100 round-up nate-pink-bg marquee-space'></div>
//                   <div style={{marginRight:30,backgroundImage:`url('${INSTITUTION_IMG.rUEW}')`}} className=' fit-bg width-100 height-100 round-up nate-pink-bg marquee-space'></div>
//                   <div style={{marginRight:30,backgroundImage:`url('${INSTITUTION_IMG.ashesi}')`}} className=' fit-bg width-100 height-100 round-up nate-pink-bg marquee-space'></div>
//                   <div style={{marginRight:30,backgroundImage:`url('${INSTITUTION_IMG.rCentral}')`}} className=' fit-bg width-100 height-100 round-up nate-pink-bg marquee-space'></div>
//                   <div style={{marginRight:30,backgroundImage:`url('${INSTITUTION_IMG.regentUni}')`}} className=' fit-bg width-100 height-100 round-up nate-pink-bg marquee-space'></div>
//                   <div style={{marginRight:30,backgroundImage:`url('${INSTITUTION_IMG.koforidua}')`}} className=' fit-bg width-100 height-100 round-up nate-pink-bg marquee-space'></div>
//                   <div style={{marginRight:30,backgroundImage:`url('${INSTITUTION_IMG.eduForService}')`}} className=' fit-bg width-100 height-100 round-up nate-pink-bg marquee-space'></div>
//                   {/* <div className='width-100 height-100 round-up nate-pink-bg margin-r-30'></div> */}
                  
                  
//                  </Marquee>
//                 </div>
//               </div>
//              </div>
//           </div>
//           </div>
//         </div>

//       </div>
//     );
//   }
// }
// const mapDispatchToProps = (dispach) => {
//   return {

//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     isLogedIn:state.auth.isLogedIns
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(LandingPageMain)
