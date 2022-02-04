import React, { Component } from 'react'
import WarningIcon from '@mui/icons-material/Warning';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { letteringColor3, letteringColor4, fontFamily3, fontFamily2, fontFamily5 } from '../contants/uiConstants';
import { CloudCircleRounded } from '@mui/icons-material';
import Email from '@mui/icons-material/Email';
import { CircularProgress } from '@mui/material';
const popUpItems = [
    {
        title:"View Details",
        icon:<ReadMoreIcon style={{fontSize:18}}/>
    },
    {
        title:"Flag as Prank",
        icon:<BlockIcon style={{fontSize:18}}/>
    },
    {
        title:"Mark as resolved",
        icon:<CheckCircleOutlineIcon style={{fontSize:18}}/>
    },
    {
        title:"Assign",
        icon:<AssignmentIndIcon style={{fontSize:18}}/>
    },
]
export default class AgentCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            popUpState:false,
            hovered:null,
            loadComplete:false,
        }
    }
    handleAction = (event,item) => {
        this.setState({popUpState:false})
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
                    onClick={(event) => this.handleAction(event,item.title)} 
                    className='padding-r-10 pop-up-rise padding-l-10 a-center cursor-pointer width-100-cent height-40'
                    >
                        <span style={{marginRight:10, fontSize:3, color:"grey"}}>{item.icon}</span>
                        <span  style={{marginRight:10, color:"grey"}} className='a-center'>{item.title}</span>
            </span>
        })
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({loadComplete:true})
        }, 500);
    }
    render() {
        const {cardData} = this.props;
        return (
            <div 
                // onClick = {(event) => this.handleAlertClick(event)}
                style={{ marginBottom:20, backgroundColor:"#DFEFE0", fontFamily:fontFamily3}} className='width-90-cent curved-corners position-relative padding-20 a-center height-80 min-height-80 elevated-blend'
            >
                <div className='width-auto a-center height-100-cent'>
                    <CloudCircleRounded style={{marginRight:30, color:"#71B777"}}/>
                    <span style={{color:"#8D8484"}} className='no-break'>{cardData.name}</span>
                </div>
                <div className='width-100-cent a-center margin-l-30 height-100-cent'>
                    <Email style={{color:"#71B777", marginRight:20}}/>
                    <span style={{color:"#71B777"}}>
                        {cardData.name}
                    </span>
                </div>
                <div className='width-auto a-center height-100-cent'>
                    <span style={{color:"#ff00008c", cursor:"pointer"}} className='margin-r-20'>Delete</span>               
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
                 <div className='width--auto a-center j-end height-100-cent'>
                    {this.state.loadComplete
                    ?<CheckCircleIcon style={{color:"#71B777"}}/>
                    :<CircularProgress style={{width:20, height:20}}/>
                    }
                    {/* */}
                </div>
            </div>
        )
    }
}
