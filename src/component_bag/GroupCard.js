import { CheckCircleOutline, Check, ReplyAll, Undo, AddCircle, FiberManualRecord, PeopleAlt, AddCircleOutline, Add, Visibility, DoneOutline, Group, ListAlt, Autorenew } from '@mui/icons-material';
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { ALL_URLS } from '../contants/urls';
import { connect } from 'react-redux';
import { fontFamily3, letteringColor, letteringColor6, fontFamily6, fontFamily5 } from '../contants/uiConstants';
import { openGroup } from '../store/actions/groupsActions';
import { getWindowWidth, localStorageSave } from '../contants/generalFunctions';

function GroupCard(props) {
  let innerWidth = getWindowWidth()
  const {cardData} = props;
  function handleClick(value){
    props.history.push(`/member/groups/${value}`)
    props.handleClick?props.handleClick(value):console.log("clicked");
  }
  /** Destructuring of props here */
  /** Definition of states here */
  const [state, setState] = React.useState({
    HOVERED:false,
    SECOND_STATE:null,
    THIRD_STATE:"",
  });
  const HOVERED = state.HOVERED;
  const SECOND_STATE =  state.IMAGE_SRC;
  const THIRD_STATE =  state.USER_TYPE;
   /** Definition of all css styles here  */
  // inline styles
  const styles = {
    NULL:null,
    mainContainer:{
      // minwidth:props.WIDTH?props.WIDTH:160,
      // minWidth:props.WIDTH?props.WIDTH:160,
      maxWidth:props.WIDTH?props.WIDTH:300,
      height:props.HEIGHT?props.HEIGHT:"auto",
      marginRight:20,
      marginLeft:20,
      backgroundColor:'',
      // marginBottom:70,
      borderRadius:"20px",
      ...props.outerStyles
    },

    subContainer:{
      width:"100%",
      // height:props.HEIGHT?props.HEIGHT:300,
      minHeight:250,
      marginBottom:5,
      ...props.innerStyles
    },
    icon:{
      color:props.ICON_COLOR?props.ICON_COLOR:null,
    },
    text:{
        color:props.TEXT_COLOR?props.TEXT_COLOR:null,
    },
    IconAndTextHolder:{
        color:props.TEXT_AND_ICON_COLOR?props.TEXT_AND_ICON_COLOR:null,
    },
    addContainerStyles:{
        fontSize:15,
        fontWeight:500,
        // paddingLeft:"5px",
        // paddingTop:"5px",
        // paddingBottom:"5px",
        ...props.extraInfoStyles,
    },
    groupInfoContainerStyles:{
        // fontSize:10,
        paddingRight:"5px",
        zIndex:"3",
        padding:"20px 20px",
        // backgroundColor:"#1876F2",
        // backgroundColor:'rgb(132 171 224)',
        // backgroundColor:'grey',
        backgroundColor:'white',
        display:"none",

        // backgroundColor:'rgb(16,44,96,0.8)',
        color:letteringColor6,
        // color:"wheat",
        fontFamily:`${fontFamily5}`,
        fontWeight:100,
        // paddingLeft:"5px",
        // paddingTop:"5px",
        // paddingBottom:"5px",
        ...props.extraInfoStyles,
    }
    
  }
  // class based styles 
  const myClasses = { 
    NULL:null,
    mainContainer:`d-flex f-column j-start a-center fill-entire-page curved-corners elevated-blend padding-b-20  cursor-pointer nate-white-bg`,
    subContainer:`d-flex f-row curved-corners j-center a-center fill-entire-page  overflow-hidden`,
    IconAndTextHolder:`d-flex j-center f-column width-100-cent height-100-cent`,
    ModuleText:`d-flex j-center nate-grey-text a-center cursor-pointer full-width`,
    icon:` ${HOVERED?"anime-zoom":null} d-flex j-center a-center `,
    text:`d-flex j-center a-center`,
    addContainer:`d-flex j-center a-center full-width height-25-cent position-relative`,
    groupInfoContainer:`nate-white-others d-flex j-start a-center full-width height-60 nate-blue-bg pointer-events-none`,
    addButtonContainer:`d-flex top--15 j-center heisght-50 width-50 a-center position-absolute  nate-blue-bg nate-white-others round-up `,
    pendingButtonContainer:`d-flex top--15 j-center height-50 width-50 a-center position-absolute anime-rotate nate-blue-bg nate-white-others round-up `,
    addTextContainer:`d-flex j-center nate-grey-text transparent a-center full-width height-100-cent `,
    actionButton:`d-flex j-end a-center min-width-55`,
    imageContainer:`fit-background d-flex j-end f-column a-center height-100-cent min-height-200 position-relative`,
    overLay:`d-flex transition-all-fast j-center a-center nate-white-text full-width full-height ${HOVERED?"nate-white-more-partial-bg":"transparent"}  position-absolute z-index-ultimate`
  } 
  /** Definition of all other constants */
 

  /** Definition of all functions here  */
  return (
    
    <div className={myClasses.mainContainer} style={styles.mainContainer}
    >
        <div className={myClasses.subContainer} style={styles.subContainer}>
            {cardData
            ?
            <div className={myClasses.IconAndTextHolder} style={styles.IconAndTextHolder}>
              {/* Icons */}
                {cardData
                    ?<div style={styles.icon} className={myClasses.icon}>
                        {props.buttonIcon}
                    </div>
                :null}
                {/*Image */}
                {
                    cardData
                    ?<div className={myClasses.imageContainer} style={{backgroundColor:"grey", backgroundImage:`url(${cardData.image})`}}>
                        <div className={myClasses.overLay}  
                            onMouseOver={()=>{
                              innerWidth<700?console.log(''):setState({...state, HOVERED:!HOVERED})}
                          } 
                            onMouseOut={()=>{
                              innerWidth<700?console.log(''):setState({...state, HOVERED:!HOVERED})}
                            }
                            onClick = {() => {
                              if(cardData.groupName === 'Potbelly Shack Restaurant'){
                                props.openGroup(cardData)
                                props.history.push(`${cardData.url}/forms`)
                              }
                              else if(cardData.groupName === 'Delivery Services'){
                                localStorageSave('serviceType','delivery')
                                props.history.push(`/potbelly/forms/options/delivery/1`)
                              }
                              else if(cardData.groupName === 'Dine in Services'){
                                localStorageSave('serviceType','dine-in')
                                props.history.push(`/potbelly/forms/options/dine-in/1`)
                              }
                              else if(cardData.groupName === 'Take-out Services'){
                                localStorageSave('serviceType','take-out')
                                props.history.push(`/potbelly/forms/options/take-outs/1`)
                              }
                              else if(cardData.groupName === 'Delivery Results'){
                                localStorageSave('serviceType','delivery')
                                props.history.push(`/potbelly/dashboard/delivery`)
                              }
                              else if(cardData.groupName === 'Dine in Results'){
                                localStorageSave('serviceType','dine-in')
                                props.history.push(`/potbelly/dashboard/dine-in`)
                              }
                              else if(cardData.groupName === 'Take-out Results'){
                                localStorageSave('serviceType','take-out')
                                props.history.push(`/potbelly/dashboard/take-out`)
                              }
                              else if(cardData.groupName === 'Delivery Services'){
                                alert(`Please check later, No forms for ${cardData.groupName} yet`)
                              }
                             
                          }}
                        >
                            <span className={`${HOVERED?"nate-blue-text":"transparent-text"}`} style={{marginRight:"10px", fontSize:20}}>Open</span>
                            <Visibility style={{color:`${HOVERED?'#1876D0':'transparent'}`, width:40, height:30}}/>
                        </div>
                        {!props.notJoined //If notJoined is nedgative means joined, show joined
                        ?<div style={styles.groupInfoContainerStyles} className={myClasses.groupInfoContainer}>
                          <span className='d-flex a-center full-width j-center' >
                            <span className='margin-r-10'><Group/></span>
                            <span style ={{fontWeight:400,}}>{cardData.memberCount}</span>
                          </span>
                          <span className='d-flex a-center full-width j-center'>
                            <span className='margin-r-10'><ListAlt/></span>
                            <span style ={{fontWeight:400,}}>{cardData.projectsCount}</span>
                          </span>
                        </div>
                        :props.pending //if notJoined is positive maybe user has applied and awaiting acceptance, if applied show applied
                        ?<div style={styles.addContainerStyles} className={myClasses.addContainer}> 
                            <span style={{border:"5px solid white", backgroundColor:"grey"}}  className={myClasses.pendingButtonContainer}>
                                <Autorenew/>
                            </span>
                            <span style={{color:"grey"}}  className={myClasses.addTextContainer}>
                              <span className='d-flex a-center full-width j-center'>
                                <span className='margin-r-10'><Group/></span>
                                <span style ={{fontFamily:`${fontFamily3}`,fontWeight:400,}}>{cardData.memberCount}</span>
                              </span>
                              <span className='d-flex a-center full-width j-center'>
                                <span className='margin-r-10'><ListAlt/></span>
                                <span style ={{fontFamily:`${fontFamily3}`,fontWeight:400,}}>{cardData.projectsCount}</span>
                              </span>
                            </span>
                        </div>//If not pending then user has not amde any attempst to join page so show not joined
                        :<div style={styles.addContainerStyles} className={myClasses.addContainer}>  
                        <span style={{border:"5px solid white", backgroundColor:""}}  className={myClasses.addButtonContainer}
                          onClick = {() => {
                            props.applyToGroup(cardData)
                          }}
                        >
                            <Add/>
                        </span>
                        <span  className={myClasses.addTextContainer}>
                          <span className='d-flex a-center full-width j-center'>
                            <span className='margin-r-10'><Group/></span>
                            <span style ={{fontFamily:`${fontFamily3}`,fontWeight:400,}}>{cardData.memberCount}</span>
                          </span>
                          <span className='d-flex a-center full-width j-center'>
                            <span className='margin-r-10'><ListAlt/></span>
                            <span style ={{fontFamily:`${fontFamily3}`,fontWeight:400,}}>{cardData.projectsCount}</span>
                          </span>
                        </span>
                    </div>
                        }
                        {/* <img  src={`${cardData.image}`} alt={props.alt?props.alt:""}/> */}
                    </div>
                    :null
                }
                {/*  */}
              
                {/* {props.buttonText?<div style={styles.text}>{props.buttonText}</div>:null} */}
            </div>
            :
            null
            }
            {props.more?<div style={styles.dropDown}>{props.more}nathan</div>:null}
            
        </div> 
        <div style ={{fontFamily:`${fontFamily5}`,fontWeight:400,textAlign:"center",color:letteringColor6,}} className={myClasses.ModuleText}>
            {cardData?cardData.groupName:null}
            {/* <FiberManualRecord/>
            {cardData.memberCount}
            <FiberManualRecord/>
            {cardData.projectsCount} */}
        </div>
    </div>
    // </Link>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
      applyToGroup: ((group) => {}),
      openGroup: (group) => dispatch(openGroup(group))

}
}
const mapStateToProps = (state) => {
  return {
      projects: state.projects.projects,
      projectStatuses: state.projects.projectStatuses,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(GroupCard));

