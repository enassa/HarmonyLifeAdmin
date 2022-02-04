import React, { Component } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import { fontFamily5} from '../contants/uiConstants';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import  ReadMoreIcon  from '@mui/icons-material/ReadMore';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openAnswerer } from '../store/actions/answerersAction';
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
class AnswerersCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            popUpState:false,
            hovered:null
        }
    }
    handleClick = () => {
        const {cardData} = this.props
        this.props.history.push(`/user/${cardData.id}`)
    }
    handleAction = (event,item) => {
        this.setState({popUpState:false})
        this.props.handleActionClick(event,item.title)
    }
    handleAlertClick = (event) => {
        console.log(event)

        // event.stopPropagtion()
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
        return (
            <div 
                // onClick = {(event) => this.handleAlertClick(event)}#FDF7F0 #F8ECDE
                style={{borderRadius:5, marginBottom:20, backgroundColor:"milk"}} className='width-90-cent position-relative padding-20 a-center height-120 min-height-120 elevated-blend'
            >
                <div className='width-auto a-center height-100-cent'>
                    <SupervisedUserCircleIcon style={{marginRight:30, color:"#5F6FE4"}}/>
                    <span style={{color:"#5F6FE4", fontSize:18}} className='no-break'>
                      Name:  Nathaniel Zeal
                    </span>
                </div>
                <div className='width-100-cent a-center margin-l-30 height-100-cent'>
                    {/* <EmailIcon style={{color:"#5F6FE4)", marginRight:10}}/> */}
                    <span style={{color:"#5F6FE4", fontSize:18}}>
                       Email: @assanenathaniel@gmail.com
                    </span>
                    &nbsp;
                    <span style={{color:"#5E7ED2"}}>
                         {/* ACH-2323-2323 */}
                    </span>
                </div>
                <div 
                className='width-auto a-center height-100-cent'>
                    {/* <span
                        onClick = {() => {this.handleClick()}}
                        style={{color:"#ff00008c", cursor:"pointer",textDecoration:``}} className='margin-r-20 no-break'>
                            Details
                    </span> */}
                    {/* <MoreVertIcon 
                        style={{cursor:"pointer"}}
                        onClick = {() => {
                            this.setState({popUpState:!this.state.popUpState})
                        }}
                    /> */}
                </div>
                {
                    this.state.popUpState
                    ?<div style={{zIndex:1, fontSize:12, fontFamily:fontFamily5}} 
                          className='position-absolute width-160 curved-corners right-10 j-start padding-t-20 padding-b-20 f-column  top-80 height-auto nate-white-bg elevated-card'
                     >
                       {this.ejectPopUpActions()}
                    </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AnswerersCard));

