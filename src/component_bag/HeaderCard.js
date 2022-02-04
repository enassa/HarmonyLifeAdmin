import React, { Component } from 'react'
import WarningIcon from '@mui/icons-material/Warning';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { letteringColor3, letteringColor4, fontFamily3, fontFamily2, fontFamily5, PAGES } from '../contants/uiConstants';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import HelpIcon from '@mui/icons-material/Help';
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

export default class HeaderCard extends Component {
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
                    // style={{backgroundColor:`${this.state.hovered===item.title?'#80808012':''}`}}
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
        const {pageType} = this.props
        const myfontFamly = fontFamily5
        return (
            <div 
                // onClick = {(event) => this.handleAlertClick(event)}fontSize:18
                style={{borderRadius:5, borderTop:"5px solid #5F6FE4", backgroundColor:"white"}} className='width-90-cent position-relative margin-b-50 padding-20 a-start f-column height-auto  elevated-blend'
            >
                <div style={{fontFamily:myfontFamly,fontSize:20,}} className='width-100-cent margin-b-20 j-start width-100-cent height-100-cent'>
                    {/* <AccountCircleIcon style={{marginRight:30, color:"#4284F3"}}/> */}
                    {
                        pageType === PAGES[2].url_name
                        ? <AccountCircleIcon style={{marginRight:10}}/>
                        : <HelpIcon style={{marginRight:10}}/>
                    }
                   
                   
                    <span style={{color:"#4284F3", }} className='no-break'>
                        {
                            pageType === PAGES[2].url_name
                            ? 'User'
                            : 'Qestion'
                    
                        }
                    </span>
                        &nbsp;
                        -
                        &nbsp;
                    <span style={{color:"#E53737", }} className='no-break'>Pot Belly Form</span>
                </div>
                <div className='width-100-cent a-center margin-l-30 height-100-cent'>
                    {/* <LocationOnIcon style={{color:"#E53737"}}/> */}
                    <span style={{color:"#333", fontSize:17}}>
                    {
                            pageType === PAGES[2].url_name
                            ?<span style={{fontSize:20, color:"blue"}} fontSize> Nathaniel Zeal</span>
                            : 'Will you choose to enjoy the pleasures of sin which is but for a time?'
                    
                        }
                        
                    </span>
                    &nbsp;
                    <span style={{color:"#5E7ED2"}}>
                         {/* ACH-2323-2323 */}
                    </span>
                </div>
                {/* <div className='width-auto a-center height-100-cent'>
                    <span style={{color:"#34761D", cursor:"pointer"}} className='margin-r-20'>View</span>
                    <MoreVertIcon 
                        style={{cursor:"pointer"}}
                        onClick = {() => {
                            this.setState({popUpState:!this.state.popUpState})
                        }}
                    />
                </div> */}
                {
                    this.state.popUpState
                    ?<div style={{zIndex:1, fontSize:12, fontFamily:fontFamily5}} 
                          className='position-absolute width-160 curved-corners right-10 j-start  padding-t-20 padding-b-20 f-column  top-80 height-auto nate-white-bg elevated-card'
                     >
                       {this.ejectPopUpActions()}
                    </div>
                    :null
                }
               
            </div>
        )
    }
}
