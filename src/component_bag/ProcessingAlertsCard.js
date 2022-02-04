import React, { Component } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import { fontFamily3, fontFamily5} from '../contants/uiConstants';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import  ReadMoreIcon  from '@mui/icons-material/ReadMore';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openAnswerer } from '../store/actions/answerersAction';
import { Switch } from '@mui/material';
import { Apartment, ArrowDownward, Info, KeyboardArrowDown } from '@mui/icons-material';
import index from 'react-particle-animation';
import ClickAwayListener from './ClickAwayListener';
const popUpItems = [
    {
        title:"View Details",
        icon:<ReadMoreIcon style={{fontSize:18}}/>
    },
    {
        title:"View All",
        icon:<SupervisedUserCircleIcon style={{fontSize:18}}/>
    },
]
class ProcessingAlertCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            popUpState:false,
            hovered:null,
        }
    }
    handleApproval = (item) => {
        // this.props.handa
    }
    handleClick = () => {
        const {cardData} = this.props
        this.props.history.push(`/user/${cardData.id}`)
    }
    handleAction = (event,item) => {
        this.setState({popUpState:!this.state.popUpState})
        // this.props.handleActionClick(event,item.title)
    }
    handleAlertClick = (event) => {
        console.log(event)

        // event.stopPropagtion()
        this.setState({popUpState:false})
    }
    showInfo = (item) => {
        this.setState({popUpState:false})
    }
    ejectPopUpActions = () => {
        const {hovered} = this.state
        return popUpItems.map((item, index) => {
            return <span 
                    style={{backgroundColor:`${this.state.hovered===item.title?'#80808012':''}`}}
                    key = {index}
                    onMouseOver={() => {this.setState({hovered:item.title})}} 
                    onClick={(event) => this.handleAction(event, item)} 
                    className='padding-r-10 pop-up-rise padding-l-10 a-center cursor-pointer width-100-cent height-40'
                    >
                        <span style={{marginRight:10, fontSize:3, color:"grey"}}>{item.icon}</span>
                        <span  style={{marginRight:10, color:"grey"}} className='a-center'>{item.title}</span>
            </span>
        })
    }
    render() {
        const {cardData} = this.props
        return (
            <div 
                // onClick = {(event) => this.handleAlertClick(event)}#FDF7F0 #F8ECDE
                style={{ marginBottom:20, backgroundColor:"white"}} 
                className='width-80-cent position-relative padding-20 a-center height-120 min-height-60 curved-corners-more elevated-blend'
            >
                 <div style={{backgroundColor:"rgb(1 176 0 / 50%)"}} className='width-30 height-30 min-width-30 curved-corners-more margin-r-20 nate-white-text min-height-30 all-center'>
                        1
                    </div>
                <div className='width-auto a-center height-100-cent'>
                    {/* <Apartment style={{marginRight:30, color:"rgb(255, 138, 15)"}}/> */}
                    {/* <SupervisedUserCircleIcon style={{marginRight:30, color:"rgb(255, 138, 15)"}}/> */}
                    <span  style={{color:"rgb(255, 138, 15)",fontFamily:fontFamily3,fontWeight:300}} className='no-break'>Adenta-Madina Cosmos Road</span>
                </div>
                <div className='width-100-cent a-center margin-l-30 height-100-cent'>
                    {/* <EmailIcon style={{color:"rgb(255, 138, 15)", marginRight:10}}/> */}
                    <span style={{color:"rgb(255, 138, 15)",fontFamily:fontFamily3,fontWeight:300}}>
                        Adenta-Madina Cosmos Road
                    </span>
                    &nbsp;
                    <span style={{color:"#5E7ED2",fontFamily:fontFamily3,fontWeight:300}}>
                         ACH-2323-2323
                    </span>
                </div>
                <div 
                className='width-auto a-center height-100-cent'>
                    {/* <span
                        onClick = {() => {this.handleClick()}}
                        style={{color:"#ff00008c", cursor:"pointer",textDecoration:``}} className='margin-r-20 no-break'>Details</span>
                    <MoreVertIcon 
                        style={{cursor:"pointer"}}
                        onClick = {() => {
                            this.setState({popUpState:!this.state.popUpState})
                        }}
                    /> */}
                            {/* <KeyboardArrowDown/> */}
                        <div style={{width:20, height:20, minHeight:20, minWidth:20, backgroundColor:"#658719"}} className='round-up all-center margin-r-10'>
                            <KeyboardArrowDown 
                                style={{color:"white"}} 
                                className='cursor-pointer'
                                onClick = {() => {
                                    this.handleAction(cardData)
                                }}
                            />
                        </div>
                        <div style={{backgroundColor:"#A2D920"}} className='nate-blue-bg border-0 width-60 height-30 all-center nate-white-text curved-corners-more'>
                            <Switch style={{color:"white"}}/>
                        </div>
                </div>
                {   
                    this.state.popUpState
                    ? <ClickAwayListener handleClickAway={() => {this.showInfo('')}}>
                        <div style={{right:'130px'}} className='width-300 above-all height-300 nate-white-bg  position-absolute   top-30 '>
                            {/* <div style={{borderBottomColor:"aliceblue"}} className='arrow-up  transparent-border above-all '></div> */}
                            <div className='width-100-cent height-100-cent alice-blue-bg pop-up-rise elevated-blend curved-corners top-30 '>
                        </div>
                        </div>
                    </ClickAwayListener>
                    :null
                    }
               
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        openAnswer: (limit=10,typeOfFetch) => dispatch(openAnswerer(limit,typeOfFetch)),
  }
}
const mapStateToProps = (state) => {
    return {
        // answers:state.answersReducer.answers,
        // loading: state.appState.loading,
        "":"",
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ProcessingAlertCard));

