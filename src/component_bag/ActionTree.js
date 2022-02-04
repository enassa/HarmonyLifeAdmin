import { Article, AssignmentInd, Close, Delete, Edit, OpenWith, TableView } from '@mui/icons-material'
import React, { Component } from 'react'
import { fontFamily3, fontFamily5 } from '../contants/uiConstants'
let readyForActions = ''
let allIconsColor =''
let allTextColor =''
let buttonStyles = {}
let classes = ''
let expanded = ''

let handleClick = (action) => {
    alert (`No function passed for the ${action} action`)
}
let handleHover = (action) => {
    alert (`No function passed for the ${action} action`)
}


let actionsList = []
export default class ActionTree extends Component {
    constructor(props){
        super(props)
        this.state = {
            actionStateController:this.props.expandActions,
            actionsState:true,
            hovered:''
        }
    }
    ejectActions = () => {
        return actionsList.map((action,index) => {
            let actionStyle = buttonStyles[`action${index+1}`]
            let iconColor = `${action.iconColor===undefined?allIconsColor:action.iconColor}`
            let textColor = `${action.textColor===undefined?allTextColor:action.textColor}`
            // console.log(action.handleClick)
            let actionHoverHandler = `${action.handleHover===undefined?handleHover:action.handleHover}`
            return <div 
                        onClick = {(action) => {
                            this.props.handleActionClick===undefined?handleClick():this.props.handleActionClick(action.description)
                        }}
                        onMouseOver = {() => {
                            this.setState({hovered:action.description})
                            // actionHoverHandler()
                        }}
                        onMouseOut = {() => {
                            this.setState({hovered:''})
                            // actionHoverHandler()
                        }}
                        style={actionStyle} 
                        className={`${this.state.hovered===action.description?'elevated-round':'elevated-bevel'} transition-all ${classes.actions}`}
                    >
                        <div style={{color:iconColor}} className='pointer-events-all'>{action.icon}</div>
                        <span style={{lineHeight:1.2,color:textColor,fontFamily:fontFamily5}} className='width-80-cent text-align-center'>
                            {action.description}
                        </span>
                    </div>
        }) 
    }
    render() {
        let actionButtonStyles = {
            ...this.props.actionButtonStyles,
            color:"black",
            // backgroundColor:"yellow",
        }
        allIconsColor = this.props.allIconsColor!==undefined?this.props.allIconsColor:'#333'
        allTextColor = this.props.allTextColor!==undefined?this.props.allTextColor:'#333'
        const {actionStateController,actionsState} = this.state
        readyForActions = this.props.expandActions
        expanded = readyForActions&&actionsState
        // Check if actions are passed else use default actions
        actionsList = Array.isArray(this.props.actionsList)
        ?this.props.actionsList
        :[
            {icon:<Delete/>,description:'Delete',iconColor:'red' },
            {icon:<Edit/>,description:'Edit', iconColor:"blue"},
            {icon:<AssignmentInd/>,description:'Assign', iconColor:"green"},
            {icon:<Article/>,description:'Export', iconColor:"#000080"},
            {icon:<TableView/>,description:'Export all', iconColor:"gold"},
        ]
        // Main container rotates and changes position based on number of action
        const mainContainerStyles = actionsList.length===4
            ?{
                top:"",
                left:"%",
                right:"10px", 
                bottom:"-10px",
                transform:'rotateZ(25deg)'
            }
            :actionsList.length === 3
            ?{
                top:"",
                left:"%",
                right:"-45px", 
                bottom:"-50px"
            }
            :actionsList.length === 2
            ?{
                top:"",
                left:"%",
                right:"-45px", 
                bottom:"-50px",
                transform:'rotateZ(25deg)'
            }
            :actionsList.length === 1
            ?{
                top:"",
                left:"%",
                right:"-10px", 
                bottom:"-20px"
            }
            :{
                top:"",
                left:"%",
                right:"40px", 
                bottom:"40px"
            }
        // Action buttons have different styles based on the number of action buttons
        buttonStyles = actionsList.length === 1
        ?{
            action1:{...actionButtonStyles,top:"40%",left:"40%",minWidth:100,minHeight:100,
            backgroundColor:`${actionsList[0].backgroundColor === undefined?'white':actionsList[0].backgroundColor}`},
        }
        :actionsList.length === 2
        ?{
            action1:expanded?{...actionButtonStyles,transform:'rotateZ(-25deg)',top:"0%",left:"-4%",right:"", bottom:""}:{top:"40%",left:"40%"},
            action2:expanded?{...actionButtonStyles,transform:'rotateZ(-25deg)',top:"",left:"-16.5%",right:"", bottom:"30%"}:{bottom:"40%",left:"40%"},
        }
        :actionsList.length === 3
        ?{
            action1:expanded?{...actionButtonStyles,top:"-16.5%",left:"32%",right:"", bottom:""}:{top:"40%",left:"40%"},
            action2:expanded?{...actionButtonStyles,top:"0%",left:"-4%",right:"", bottom:""}:{top:"40%",left:"40%"},
            action3:expanded?{...actionButtonStyles,top:"",left:"-16.5%",right:"", bottom:"30%"}:{bottom:"40%",left:"40%"},
        }
        :actionsList.length === 4
        ?{
            action1:expanded?{...actionButtonStyles,transform:'rotateZ(-25deg)',top:"-16.5%",left:"32%",right:"", bottom:""}:{top:"40%",left:"40%"},
            action2:expanded?{...actionButtonStyles,transform:'rotateZ(-25deg)',top:"0%",left:"-4%",right:"", bottom:""}:{top:"40%",left:"40%"},
            action3:expanded?{...actionButtonStyles,transform:'rotateZ(-25deg)',top:"",left:"-16.5%",right:"", bottom:"30%"}:{bottom:"40%",left:"40%"},
            action4:expanded?{...actionButtonStyles,transform:'rotateZ(-25deg)',top:"",left:"1.5%",right:"", bottom:"-5%"}:{bottom:"40%",left:"40%"},
        }
        :actionsList.length === 5
        ?{
            action1:expanded?{...actionButtonStyles,top:"-2%",right:"-2%", bottom:""}:{top:"40%",right:"40%"},
            action2:expanded?{...actionButtonStyles,top:"-16.5%",left:"32%",right:"", bottom:""}:{top:"40%",left:"40%"},
            action3:expanded?{...actionButtonStyles,top:"0%",left:"-4%",right:"", bottom:""}:{top:"40%",left:"40%"},
            action4:expanded?{...actionButtonStyles,top:"",left:"-16.5%",right:"", bottom:"30%"}:{bottom:"40%",left:"40%"},
            action5:expanded?{...actionButtonStyles,top:"",left:"1.5%",right:"", bottom:"-5%"}:{bottom:"40%",left:"40%"},
        }
        :{}
        
        classes = {
            controllerAction:`${expanded?'nate-pink-bg nate-white-text':'nate-blue-bg nate-white-text'} width-60 above-all  height-60 cursor-pointer j-center a-center round-up  elevated-blend`,
            actions:`transition-all-fast f-column pointer-events-all ${expanded
                ?'width-100 height-100 cursor-pointer j-center a-center position-absolute  round-up nate-white-bg'
                :'width-60 height-60 position-absolute j-center a-center round-up nate-blue-bg nate-alice-text elevated-blend'
            }`,
        }
        return (
            <div  style={mainContainerStyles} className='width-300  height-300 round-up pointer-events-none  position-fixed'>
                        <div className='fill-entire-page position-relative j-center a-center round-up '>
                           {this.ejectActions()}
                            <div style={{display:`${actionsList.length<=1?'none':'flex'}`}} className={classes.controllerAction}>
                                {   
                                    expanded
                                    ?<div onClick={()=>{this.setState({actionsState:false})}} 
                                          className='fill-entire-page all-center pointer-events-all'
                                    >
                                        <Close />
                                    </div>
                                    :<div onClick={() => {readyForActions?this.setState({actionsState:true}):console.log('')}} 
                                        className='fill-entire-page all-center pointer-events-all'
                                    >
                                        <OpenWith/>
                                    </div>
                                }
                            </div>

                        </div>
                        {/* <div className='width-100-cent height-100-cent partial-black-bg round-up position-absolute top-0 left-0'></div> */}
                    </div>
        )
    }
}