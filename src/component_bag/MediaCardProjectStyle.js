import { AccessTime, FiberManualRecord, MoreHoriz, Visibility } from '@material-ui/icons';
import React, { Component } from 'react';
import { randomImages } from '../css/dummydata/dummyData';
import style from '../css/mediacardprojectstyle.module.css'
import { Avatar } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import PopUpButton from './PopUpButton';
import { connect } from 'react-redux';
import { openProject } from '../store/actions/ProjectActions';
import { ALL_URLS } from '../contants/urls';
import { withRouter } from 'react-router-dom';
import { openPaymentForm } from '../store/actions/PaymentAction';
import { fontFamily3, letteringColor6 } from '../contants/uiConstants';
import { cssModules } from '../contants/generalFunctions';
let styles;
class MediaCardProjectStyle extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
   changePage(id){
    this.props.history.push(`${ALL_URLS.memberListProjects}/${id}`)
   }
    render(){
        const mod = cssModules(style)
        const {cardData} = this.props;
        const styles = {
            outerStyle:{
                fontFamily:`${fontFamily3}`,
                fontWeight:300,
                position:"relative",
                ...this.props.style,
            },
            imageContainer:{
                height:"200px",
                backgroundImage:`url(${randomImages})`,
                ...this.props.imageContainerStyles
            },
            headerText:{
                fontFamily:`${fontFamily3}`,
                fontWeight:400,                
                ...this.props.headerStyles
            },
            subHeaderStyles:{
                ...this.props.subHeaderStyles
            },
            descriptionStyles:{
                fontFamily:`${fontFamily3}`,
                fontWeight:300,
                ...this.props.descriptionStyles
            },
            button:{
                display:"flex",
                justifyContent:"flex-start",
                padding: "12px 10px",
                outline: "none",
                border:" 0px",
                color: "white",
                fontFamily: "'Roboto', sans-serif",
                fontSize: "9px",
                textTransform: "uppercase",
                letterSpacing: "2.5px",
                fontWeight: "500",
                cursor:"pointer",
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                backgroundColor:letteringColor6, 
                borderRadius:"5px",
                zIndex:"8",
                ...this.props.buttonStyles
            }
        }
        const myString = cardData.projectName
            return (
                    <div style={styles.outerStyle} className={mod('main-container elevated-blend nate-white-bg')}>
                        <div id={style['overlay-container']} style={{zIndex:"6",}} 
                            className='d-flex j-center a-end cursor-pointer full-width full-height nate-white-text  top-0 left-0 nate-black-partial-bg position-absolute position'
                            onClick={() => {
                                this.props.openProject(cardData)
                                this.props.history.push(`${ALL_URLS.memberListProjects}/${cardData.id}`)
                            }}
                        >
                            <span 
                              
                                className='d-flex a-center j-center'
                            >
                                <span style={{marginRight:"5px"}}>View</span>
                                <Visibility/>
                            </span>
                        </div>
                        <div style={styles.headerText} className={style['header-text']}>
                            {
                                myString.length > 50
                                ?`${myString.slice(0,80)}...`
                                :myString
                            }
                        </div>
                        <div style={styles.subHeaderStyles} className={style['content']}>
                            <span>Project Info</span>
                            <ul > 
                                <li><span><FiberManualRecord style={{color:"#FEAB3B"}}/></span> <span>Target Amount </span> &nbsp; 	GHS{` ${cardData.amountNeeded}`} </li>
                                <li><span><FiberManualRecord style={{color:"#FEAB3B"}}/></span> <span>Total Contribution </span> &nbsp; 	GHS{` ${cardData.amountObtained}`}</li>
                                <li><span><FiberManualRecord style={{color:"#FEAB3B"}}/></span> <span>Finish Date </span> &nbsp; {`${cardData.endDate}`}</li>
                                <li><span><FiberManualRecord style={{color:"#07C801"}}/></span> <span>Total Progress </span>  &nbsp; {`${(cardData.amountObtained/cardData.amountNeeded)*100}%`}</li>
                            </ul>
                        </div>
                        <div style={styles.descriptionStyles} className={style['descritption-styles']}>
                            <span style={{width:"100%"}}>
                                <h6 style={{ fontFamily:`${fontFamily3}`, fontWeight:400,}}>Contributers</h6>
                            </span>
                            <div style={{}} className={style['actions-container']}>
                                    <span>
                                        <AvatarGroup max={4}>
                                            <Avatar alt="Remy Sharp" src={`${randomImages}/${cardData.id}`} />
                                            <Avatar alt="Travis Howard" src={`${randomImages}/${cardData.id}`} />
                                            <Avatar alt="Cindy Baker" src={`${randomImages}/${cardData.id}`} />
                                            <Avatar alt="Agnes Walker" src={`${randomImages}/${cardData.id}`} />
                                            <Avatar alt="Trevor Henderson" src={`${randomImages}/${cardData.id}`} />
                                        </AvatarGroup>
                                    </span>
                                    {/* <button style={styles.button} onClick={() => this.props.openProject(cardData,this.changePage(cardData.id))}>Contribute</button> */}
                                    <button 
                                            style={styles.button} 
                                            onClick = {() => {this.props.openPaymentForm()}}
                                            className = 'position-absolute right-20'
                                    >
                                        Contribute
                                    </button>
                            </div>
                        </div>
                    </div>
            );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openProject: (project,changePage) => dispatch(openProject(project,changePage)),
        openPaymentForm:() => dispatch(openPaymentForm())
  }
}
const mapStateToProps = (state) => {
    return {
        projects: state.projects.openedProjects,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(MediaCardProjectStyle));