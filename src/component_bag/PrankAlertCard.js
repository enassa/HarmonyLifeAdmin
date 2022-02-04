import React, { Component } from 'react'
import WarningIcon from '@mui/icons-material/Warning';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BlockIcon from '@mui/icons-material/Block';
import DangerousIcon from '@mui/icons-material/Dangerous';
import FmdBadIcon from '@mui/icons-material/FmdBad';

import { letteringColor3, letteringColor4, fontFamily3, fontFamily2, fontFamily5 } from '../contants/uiConstants';
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
export default class PrankAlertCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            popUpState:false,
            hovered:null
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
    render() {
        return (
            <div 
                // onClick = {(event) => this.handleAlertClick(event)}
                style={{borderRadius:5, marginBottom:20, backgroundColor:"#F0F0F0"}} className='width-90-cent position-relative padding-20 a-center height-120 min-height-120 elevated-blend'
            >
                <div className='width-auto a-center height-100-cent'>
                    <FmdBadIcon style={{marginRight:30, color:"#979797"}}/>
                    <span style={{color:"#8D8484"}} className='no-break'>Nathaniel Zeal</span>
                </div>
                <div className='width-100-cent a-center margin-l-30 height-100-cent'>
                    <LocationOnIcon style={{color:"#787C78"}}/>
                    <span style={{color:"#787C78"}}>
                        Ablekuma Fanmilk -
                    </span>
                    &nbsp;
                    <span style={{color:"#5E7ED2"}}>
                         ACH-2323-2323
                    </span>
                </div>
                <div className='width-auto a-center height-100-cent'>
                    <span style={{color:"#ff00008c", cursor:"pointer"}} className='margin-r-20'>Delete</span>
                    <MoreVertIcon 
                        style={{cursor:"pointer"}}
                        onClick = {() => {
                            this.setState({popUpState:!this.state.popUpState})
                        }}
                    />
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
