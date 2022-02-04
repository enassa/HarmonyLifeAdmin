import React, { Component } from 'react'
import { Article, AssignmentInd, Close, Delete, Edit, HistoryToggleOff, OpenWith, ReplyAll, TableView, Visibility, CloudDownload, ArrowRight } from '@mui/icons-material';
import { fontFamily2, colors, fontFamily5, fontFamily3 } from '../../contants/uiConstants';
import { capitalizeFirstLetter, cloneObject, getFirstLetter, getWindowWidth, readyForMapping, getTodaysDate, getTommorowsDate } from '../../contants/generalFunctions';
import SearchBar from '../../component_bag/SearchBar';
import { deliveryQuestions, dineInQuestions, takeOutQuestions } from '../../dummydata/dummyData';
import { getAnswers, quickSerchAnswers, sendFinalAnswers } from '../../store/actions/answersActions';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';
import MyModal from '../../component_bag/MyModal';
import GridLayOut from '../../component_bag/GridLayout';
let dataToPopulate = []
const categories = [
    {title:"All staff"},
    // {title:"Group A"},
    // {title:"Group B"},
]
let actionsList = []

export const popUpItems = [
    {
        title:"View",
        icon:<Visibility style={{fontSize:18}}/>
    },
    // {
    //     title:"Delete",
    //     icon:<Delete/>   
    // },
]
class AssignPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            hovCategory:"All staff",
            selecteditem:"All staff",
            hovered:'',
            hoveredRow:'',
            selectedRows:[],
            allData:[],
            popUpState:'',
            editMode:false,
            editingItem:{},
            actionsState:true,
            searching:false,
            confirmed:false,
            updateConfirmation:false,
            activeItem:{},
            updatedActiveItem:{},
            hoveredTr:''
        }
    }
    getMoreData = (limit,startDate,endDate) => {
        this.props.getAnswers(limit,startDate,endDate)
    }
    controlDisplay = (e) => {
        e.preventDefault(e)
        this.props.handleActionClick(e)
    }
    handleSuccesfulAssignment = (response) => {
        this.setState({loading:true})
        if(response){
            this.setState({showModal:false})
        }
    }
    handleAssignment = (selected) => {
        this.setState({loading:true})
        setTimeout(()=>{
            this.setState({showModal:true,loadingComplete:true,loading:false,showAssignPage:false})
        },800)
    }
    updateRecord = () => {
        this.handleSuccesfulAssignment()                                
        this.setState({confirmed:!this.state.confirmed})
    }
    sendUpdate = () => {
        let newObject = {...this.state.activeItem, ...this.state.updatedActiveItem}
        this.props.sendFinalAnswers(newObject)
        this.setState({editMode:false})
    }
    updateActiveItem = (field,value) => {
        this.setState({updatedActiveItem:{...this.state.updatedActiveItem, [field]:value}},()=>{
            console.log(this.state.updatedActiveItem)
        })
    }
    handleResponse = (response) => {
        if(response){
            console.log(response)
            this.updateRecord()
            this.setState({updateConfirmation:false})
        }
        else{
            this.setState({updateConfirmation:false})
        }
    }
   ejectEditingItems = () => {
    const innerWidth = getWindowWidth()
    //    const {editingItem} = this.state;
       const obj =  this.state.editingItem
       const editingItem = {
           firstName:"Freeman",
           lastName:"Kwesi-Frimpong",
           otherName:"Agyampong",
           contact:"0549546822",
           cardNumber:"GH-221134",
           appointementId:"220-3201",
           date:"20-12-2022",
           status:this.state.confirmed,
           showAssignPage:false,
           loading:false,
           showModal:true,
           assignmentState:true,
           loadingComplete:false,
           currentActiveItemStatus:false,
       }
       const styles = {
           apointMentStyles:{

           },
           personalDetailsStyles:{

           }
       }
       const classes = {
            apointMentStyles:"",
            personalDetailsStyles:""
       }
    //    let properties = Object.keys(this.state.editingItem)
       let properties = Object.keys(editingItem)
       const {activeItem,updatedActiveItem} = this.state
       return <div className='width-100-cent height-auto curved-corners overflow-hidden margin-b-50'>
           <div className='position-fixed pointer-events-none top-0 left-0 width-100-cent height-100-cent all-center'>
                {/* {
                    this.state.loading
                    ?<OverlayLoader/>
                    :null
                } */}
                {
                    this.state.showModal&&this.props.loading
                    ? <MyModal  
                            getResponse={(response) => {this.handleSuccesfulAssignment(response)}} 
                            state={true} 
                            showButtons
                            hideCancel
                        />
                    :null
                }
                { this.state.updateConfirmation
                    ?<MyModal getResponse={(response) => {this.handleResponse(response)}} >
                        <div style={{fontSize:20, fontFamily:fontFamily3, fontWeight:300}} className='padding-20 j-center nate-blue-text'>Do you wish to update this record?</div>
                    </MyModal>
                    :null
                }
           </div>
                <div style={{fontFamily:fontFamily3}} className='width-100-cent f-column height-auto '>
                    <div className='width-100-cent f-column height-auto'>
                        <div style={{backgroundColor:'#EFEFEF'}} className='width-100-cent nate-alice-bg height-50 j-start padding-20 a-center'>
                            <span>Personal Info</span>
                        </div>
                      
                        <div className='width-100-cent nate-white-bg height-auto '>
                        <GridLayOut style={{height:"auto",backgroundColor:"",gridTemplateColumns:`${innerWidth>800?'repeat(3,1fr)':innerWidth>700?'repeat(2,1fr)':'repeat(1,1fr)'}`,}}>
                            <div className='a-start f-column'>
                                <span>Surname </span>
                               <input onChange={(e)=>{this.updateActiveItem('surname',e.target.value)}} style={{border:"0px solid #1876D1",marginTop:10,padding:15, borderRadius:10, backgroundColor:"#EFF8FE"}} className='width-100-cent border-1 j-center a-center border-b-nice' defaultValue={activeItem?.surname}/>
                            </div>
                            <div className='a-start f-column'>
                                <span>Other names</span>
                                {/* <div className='triangle-down'></div> */}
                               <input onChange={(e)=>{this.updateActiveItem('otherNames',e.target.value)}} style={{border:"0px solid #1876D1",marginTop:10,padding:15, borderRadius:10, backgroundColor:"#EFEFEF"}} className='width-100-cent border-1 j-center a-center border-b-nice' defaultValue={activeItem?.otherNames}/>
                            </div>
                            <div className='a-start f-column'>
                                <span>Phone</span>
                                {/* <div className='triangle-down'></div> */}
                               <input onChange={(e)=>{this.updateActiveItem('phone',e.target.value)}} style={{border:"0px solid #1876D1",marginTop:10,padding:15, borderRadius:10, backgroundColor:"#EFEFEF"}} className='width-100-cent border-1 j-center a-center border-b-nice' defaultValue={activeItem?.phone}/>
                            </div>
                            <div className='a-start f-column'>
                                <span>Date</span>
                                {/* <div className='triangle-down'></div> */}
                               <input  disabled style={{border:"0px solid #1876D1",marginTop:10,padding:15, borderRadius:10, backgroundColor:"#EFEFEF"}} className='width-100-cent border-1 j-center a-center border-b-nice' defaultValue={activeItem?.dateCreated?.split(' ')[0]}/>
                            </div>
                            <div className='a-start f-column'>
                                <span>Ghana Card No.</span>
                                {/* <div className='triangle-down'></div> */}
                               <input onChange={(e)=>{this.updateActiveItem('ghanaCard',e.target.value)}} style={{border:"0px solid #1876D1",marginTop:10,padding:15, borderRadius:10, backgroundColor:"#EFEFEF"}} className='width-100-cent border-1 j-center a-center border-b-nice' defaultValue={activeItem?.ghanaCard}/>
                            </div>
                            <div className='a-start f-column'>
                                <span>Transcode</span>
                                {/* <div className='triangle-down'></div> */}
                               <input onChange={(e)=>{this.updateActiveItem('transcode',e.target.value)}} style={{border:"0px solid #1876D1",marginTop:10,padding:15, borderRadius:10, backgroundColor:"#EFEFEF"}} className='width-100-cent border-1 j-center a-center border-b-nice' defaultValue={activeItem?.transcode}/>
                            </div>
                            <div className='a-start f-column'>
                                <span>Application by</span>
                                {/* <div className='triangle-down'></div> */}
                               <input disabled style={{border:"0px solid #1876D1",marginTop:10,padding:15, borderRadius:10, backgroundColor:"#EFEFEF"}} className='width-100-cent border-1 j-center a-center border-b-nice' defaultValue={activeItem?.applicantType}/>
                            </div>
                            <div className='a-start f-column'>
                                <span>Place</span>
                                {/* <div className='triangle-down'></div> */}
                               <input disabled style={{border:"0px solid #1876D1",marginTop:10,padding:15, borderRadius:10, backgroundColor:"#EFEFEF"}} className='width-100-cent border-1 j-center a-center border-b-nice' defaultValue={activeItem?.place}/>
                            </div>
                            <div disabled className='a-start f-column'>
                                <span>Suburb</span>
                                {/* <div className='triangle-down'></div> */}
                               <input onChange={(e)=>{this.updateActiveItem('suburb',e.target.value)}} style={{border:"0px solid #1876D1",marginTop:10,padding:15, borderRadius:10, backgroundColor:"#EFEFEF"}} className='width-100-cent border-1 j-center a-center border-b-nice' defaultValue={activeItem?.suburb}/>
                            </div>
                        </GridLayOut>
                        </div>
                    </div>
                    <div className='width-100-cent f-column height-auto'>
                        <div style={{backgroundColor:"#EFEFEF"}} className='width-100-cent nate-alice-bg height-50 j-start padding-20 a-center'>
                            <span>Appointment Details</span>
                        </div>
                        <div className='width-100-cent nate-white-bg height-auto padding-t-10 f-column min-height-200'>
                            <div className='width-100-cent  margin-b-5 padding-20 a-center nate-alice-bg height-50 j-start j-row '>
                                <div className='width-auto j-start min-width-150'>
                                    Appointment Id:
                                </div>
                                &nbsp;
                                <div className='width-100 nate-black-text j-start'>
                                    {activeItem?.appointmentId}
                                </div>
                            </div>
                            <div className='width-100-cent  margin-b-5  padding-20 a-center nate-alice-bg height-50 j-start j-row '>
                                <div className='width-auto j-start min-width-150'>
                                    Appointment Date:
                                </div>
                                &nbsp;
                                <div className='width-auto nate-black-text j-start'>
                                    {activeItem?.appointmentDate}
                                </div>
                            </div>
                            <div className='width-100-cent  margin-b-5  padding-20 a-center nate-alice-bg height-50 j-start j-row '>
                                <div className='width-auto j-start min-width-150'>
                                    Appointment Time:
                                </div>
                                &nbsp;
                                <div className='width-100 nate-black-text j-start'>
                                    {activeItem?.appointmentTime}
                                </div>
                            </div>
                            <div className='width-100-cent  margin-b-5  padding-20 a-center nate-alice-bg height-50 j-start j-row '>
                                <div className='width-auto j-start min-width-150'>
                                    Status:
                                </div>
                                &nbsp;
                                <div className='width-100 nate-pink-text j-start '>
                                <select onChange={(e)=>{this.updateActiveItem('status',e.target.value)}} selected = {activeItem?.status} 
                                className={`${activeItem?.status!=="Registered"&&updatedActiveItem?.status!== "Registered"?'nate-pink-text':'nate-green-text'} cursor-pointer nate-alice-bg border-0 outline-none`}>
                                    <option selected={activeItem?.status === 'Not Registered'}>Not Registered</option>
                                    <option selected = {activeItem?.status === 'Registered'}>Registered</option>
                                </select>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='width-100-cent  height-50 j-end padding-20 a-center'>
                         <button 
                            disabled = {activeItem?.status !== "Registered" && updatedActiveItem?.status!== "Registered"}
                            className={`${activeItem?.status !== "Registered" && updatedActiveItem?.status!== "Registered"?"nate-grey-bg cursor-not-allowed":"nate-black-bg  cursor-pointer "} padding-10 cursor-pointer padding-l-20 padding-r-20 outline-none border-0 nate-white-text curved-corners-light`}
                            onClick={() => {
                                // this.setState({updateConfirmation:true})
                                this.sendUpdate()
                            }}
                          >
                            Update Record
                        </button>
                    </div>
                </div>
            </div>
   }
//    ejectEditingItems = () => {
//        const {editingItem} = this.state;
//        const obj =  this.state.editingItem
//        let properties = Object.keys(this.state.editingItem)
//        return properties.map((prop ,index) => {
//             return <div className='width-100-cent margin-b-50'>
//                 <label style={{fontFamily:fontFamily3,fontWeight:300}} className='width-40-cent'>{capitalizeFirstLetter(prop)}</label>
//                 <input className='width-100-cent border-0 outline-none  border-b-nice' defaultValue={obj[prop]}/>
//             </div>
//        })
       
//    }

   getQuestionBank = () => {
    let AnswersStat = undefined
    let serviceType = 'harmony'
    if(serviceType==='delivery'){
        AnswersStat = cloneObject(deliveryQuestions)
    }else if(serviceType==='take-out'){
        AnswersStat =  cloneObject(takeOutQuestions)
    }else if(serviceType==='dine-in'){
        AnswersStat = cloneObject(dineInQuestions)
    }
    return AnswersStat
}
myCounter = 0;
makePush = (property,response,Obj) => {
    // if(alreadyLoaded!==0) return
    if(property==='name'){
        // console.log(property,myCounter)
        this.myCounter++
    }
    // let  myAnswers = AnswersStat[property].answers
    // if(myAnswers.includes(response[property])) return
    Obj[property].answers.push(response[property])
    
}
   downloadData = () => {
    let AnswersStat = this.getQuestionBank()
    // console.log(this.props.answers)
    // console.log(this.props.answers)
    if(readyForMapping(this.props.answers)){
        let lengthOfData = this.props?.answers?.length
        // console.log(this.props.answers)
        // console.log(this.props.answers)
        return this.props.answers.map((response,index) => {
        // return theData.map((response,index) => {
            // this.upDateStats(response)
            let aa = 0
            for (const property in response) {
                // console.log(`${property}: ${response[property]}`);
                if(AnswersStat[property]!==undefined){
                    // console.log(aa-2, 'p', property)
                    this.makePush(property,response,AnswersStat)
                    // console.log('property', property,"->", AnswersStat[property].question)
                }
                // console.log(AnswersStat[property])
                aa++
            }
            let arrayOfObject = []
            if(lengthOfData===index+1){
                // console.log(index)
                let counter = 0;
                for (const property in AnswersStat) {
                    arrayOfObject[counter] = AnswersStat[property]
                    // console.log(property)
                    counter++;
                }
                let answersCount = {}
                let answersArray = []
                return <table id='table-to-excel' style={{color:'violet', border:"",display:"none"}}>
                        {arrayOfObject.map((item,index) => {
                            // console.log(item)
                            // answersArray = []
                        return <tr style={{color:'', border:""}}>
                            <th style={{color:'blue',width:700, border:"",textAlign:'left', height:60}}>{item.question}</th>
                            {
                                item.answers.map((item,index) => {
                                    // answersArray.push(item)
                                    // answersCount[item] = answersArray
                                    // console.log(answersCount)
                                    return <td style={{color:'black',textAlign:'left', border:"", width:500}}>{item}</td>
                                })
                            }
                        </tr> 
                        // return <StaticsCard2 key={index} id={index} cardData={item}/>
            
                        })
                    }
                </table>
                
                // this.setState({myobject:arrayOfObject})
            }
        })
    }
}
   handleActionClick = (action) => {
       alert(action)
   }
   getEditPage = () => {
       return <div className='width-100-cent height-100-cent f-column j-start padding-t-30'>
       {/* editing information header */}
                <div style={{fontFamily:fontFamily3,fontSize:27,color:"grey"}} className='width-100-cent a-center j-center '> <HistoryToggleOff style={{height:40,width:40}}/> 
                    <span className='margin-l-20'>Apointment Schedule</span>
                </div>
                <div className='width-100-cent height-25-cent position-relative j-start a-center border-b-nice padding-l-30 padding-r-30 '>
                    <div className='round-up width-120 a-center j-center margin-r-20 position-relative d-flex height-120 '>
                        <div style={{fontSize:60}} className='position-absolute round-up top-0 nate-white-text left-0 width-100-cent height-100-cent all-center nate-grey-bg'>
                            <span>{getFirstLetter(this.state.activeItem.surname)}</span>
                        </div>
                        <div className='height-40 cursor-pointer all-center position-absolute right-0 bottom-0 width-40 above-all round-up partial-black-bg'>
                            {/* <AddAPhoto style={{fontSize:"25px"}} className='nate-white-text pointer-events-none' /> */}
                        </div>
                    </div>
                    <div className='nate-grey-text' style={{fontSize:30,color:"#4C4C4C"}}>
                        <span>{this.state.activeItem.surname}</span>
                    </div>
                    <div 
                        className='position-absolute cursor-pointer right-50 a-center nate-grey-text'
                        onClick = {() => {
                            this.setState({editMode:false})
                            // this.setState({editingItem:item})
                        }}
                    >
                        {/* <button className='padding-10 cursor-pointer padding-l-20 padding-r-20 outline-none nate-blue-bg border-0 nate-white-text curved-corners-light'>
                            Save
                        </button> */}
                        <span className='margin-r-5'>Back</span>
                        <ReplyAll className=' cursor-pointer outline-none  border-0 anime-bounce-x curved-corners-light'/>

                    </div>
                </div>
                {/* Where item to be edited are rendered */}
                <div className='width-100-cent height-auto f-column f-column y-auto  padding-40'>
                    <div style={{color:"grey"}} className='f-column width-100-cent height-auto margin-b-30'>
                        {this.ejectEditingItems()}
                    </div>
                </div>
            </div>
   }
    getTablePage = () => {
        // this.props.getAnswers()
        const {hoveredRow, selectedRows,editMode, actionsState} = this.state
        let deleteItem = (itemIndex) => {
            let arr = [...this.state.allData]; // make a separate copy of the array
            arr.splice(itemIndex, 1);
            this.setState({allData: arr});
            return
        }
        let handleAction = (action,data) => {
            if(action.toLowerCase()==='delete'){
                deleteItem(data)
            }
            if(action.toLowerCase()==='edit'){
                    this.setState({editMode:true})
                    this.setState({editingItem:data})
            }
            this.setState({popUpState:""})
        }

        let getActionsComponent = () => {
            let readyForActions = selectedRows.length
            let expanded = selectedRows.length&&actionsState
            let allIconsColor = 'blue'
            let allTextColor ='red'
            let handleClick = (action) => {
                alert (`No function passed for the ${action} action`)
            }
            let handleHover = (action) => {
                alert (`No function passed for the ${action} action`)
            }
            
            let styles = {
                action1:expanded?{top:"-2%",right:"-2%", bottom:""}:{top:"40%",right:"40%"},
                action2:expanded?{top:"-16.5%",left:"32%",right:"", bottom:""}:{top:"40%",left:"40%"},
                action3:expanded?{top:"0%",left:"-4%",right:"", bottom:""}:{top:"40%",left:"40%"},
                action4:expanded?{top:"",left:"-16.5%",right:"", bottom:"30%"}:{bottom:"40%",left:"40%"},
                action5:expanded?{top:"",left:"1.5%",right:"", bottom:"-5%"}:{bottom:"40%",left:"40%"},
            }

            let classes = {
                controllerAction:`${expanded?'nate-pink-bg nate-white-text':'nate-blue-bg nate-white-text'} width-60 above-all  height-60 cursor-pointer j-center a-center round-up  elevated-blend`,
                actions:`transition-all-fast f-column ${expanded
                    ?'width-100 height-100 cursor-pointer j-center a-center position-absolute  round-up nate-white-bg  elevated-bevel'
                    :'width-60 height-60 position-absolute j-center a-center round-up nate-blue-bg nate-alice-text elevated-blend'
                }`,
            }
           let  ejectActions = () => {
                return actionsList.map((action,index) => {
                    let actionStyle = styles[`action${index+1}`]
                    let iconColor = `${action.iconColor===undefined?allIconsColor:action.iconColor}`
                    let textColor = `${action.textColor===undefined?allTextColor:action.textColor}`
                    let actionClickHandler = `${action.handleClick===undefined?handleClick:action.handleClick}`
                    let actionHoverHandler = `${action.handleHover===undefined?handleHover:action.handleHover}`
                    return <div 
                                onClick = {() => {
                                    actionClickHandler()
                                }}
                                onHover = {() => {
                                    actionHoverHandler()
                                }}
                                style={actionStyle} className={classes.actions}
                            >
                                <span style={{color:iconColor}}>{action.icon}</span>
                                <span style={{lineHeight:1.2,color:textColor}} className='width-80-cent text-align-center'>
                                    {action.description}
                                </span>
                            </div>
                }) 
            }
            
            return  <div  style={{top:"",left:"%",right:"30px", bottom:"37px"}} className='width-300  height-300 round-up  position-absolute'>
                        <div className='fill-entire-page position-relative j-center a-center round-up '>
                           {ejectActions()}
                            <div  className={classes.controllerAction}>
                                {   
                                    expanded
                                    ?<div onClick={()=>{this.setState({actionsState:false})}} 
                                          className='fill-entire-page all-center'
                                    >
                                        <Close />
                                    </div>
                                    :<div onClick={() => {readyForActions?this.setState({actionsState:true}):console.log('')}} 
                                        className='fill-entire-page all-center'
                                    >
                                        <OpenWith/>
                                    </div>
                                }
                            </div>

                        </div>
                        {/* <div className='width-100-cent height-100-cent partial-black-bg round-up position-absolute top-0 left-0'></div> */}
                    </div>
        }
        let  ejectPopUpActions = (data) => {
            const {hovered} = this.state
            return popUpItems.map((item, index) => {
                return <span 
                        style={{backgroundColor:`${this.state.hovered===item.title?'#80808012':''}`}}
                        key = {index}
                        onMouseOver={() => {this.setState({hovered:item.title})}} 
                        onClick={(e) =>{
                            e.stopPropagation()
                            handleAction(item.title, data)} 
                        }
                        className='padding-r-10 pop-up-rise padding-l-10 a-center cursor-pointer width-100-cent height-40'
                        >
                            <span style={{marginRight:10, fontSize:3, color:"grey"}}>{item.icon}</span>
                            <span  style={{marginRight:10, color:"grey"}} className='a-center'>{item.title}</span>
                    </span>
            })
        } 
        let addToSelected = (item) => {
            if(selectedRows.includes(item.id)){
                let arr = [...this.state.selectedRows]; // make a separate copy of the array
                var index = arr.indexOf(item.id)
                if (index !== -1) {
                    arr.splice(index, 1);
                    this.setState({selectedRows: arr});
                    return
                }
            }
            this.setState({selectedRows:[...selectedRows,item.id]})
        }
        let seTActive = (item) => {
            this.setState({activeItem:item})
        }
        const headers  = [
            {
                name:'ID',
                desc:"id"
            },
            {
                name:'Name',
                desc:'surname',
            },
           
            {
                name:'Phone',
                desc:'phone',
            },
            {
                name:'Ghana Card',
                desc:'ghanaCard',
            },
            {
                name:'Status',
                desc:'status',
            },
            {
                name:'Date Created',
                desc:'dateCreated',
            },
            {
                name:'View',
                desc:'view',
            },
           
        ]
        const headersToView = ['id','surname','phone','ghanaCard','status','dateCreated',]
        // console.log(myData,this.props.answers)
        // let a = this.props.answers.length?this.props.answers:[{}]
        // console.log(this.props.answers)
        // let properties =  Object.keys([0]) 
        let  ejectTableHeaders = () => {
           return headers.map((item, index) => {
               if(item === 'id' || item=== 'name' || item === "phone" || item === 'dateCreaters'){}
               return <th style={{borderBottom:"1px solid #F9F9F9", color:"#808080",fontFamily:fontFamily5}}>
                    {capitalizeFirstLetter(item.name)}
                   </th>

           })
        }
       dataToPopulate = this.state.searching?this.props.searchItems:this.props.answers
        let ejectTableRows = () => {
        return  dataToPopulate.map((item,counter) => {
            let color = colors[counter];
            if(color===undefined){
                color = colors[1]
            }
            let properties = Object.keys(item)
             return <tr 
                        onMouseOver = {() => {
                            console.log(item.id)
                            this.setState({hoveredRow:item.id})
                        }}
                        onMouseOut = {() => {
                            this.setState({hoveredRow:''})
                        }}
                        onClick = {() => {
                            seTActive(item)
                            this.setState({editMode:true})
                        }}
                        style={{color:`${item.status !== "Registered"?'red':''}`}}
                        className={`cursor-pointer position-relative width-100-cent ${hoveredRow === item.id ? 'nate-grey-light-bg':''} `}
                    > {properties.map((property, index) => {
                        if(headersToView.includes(property)){
                            return <td className=''>
                            {/* If it's the second item in the object then  the get first first letter and use as profile pic if there is no profile pic  */}
                            {index===1
                            ?<div className='j-start a-center'>
                            <div className='j-start a-center'>
                                <div style={{backgroundColor:color, fontSize:20, fontFamily:fontFamily5}} className='height-35 margin-l-10 width-35 all-center margin-r-20 round-up  nate-white-text'>
                                    {getFirstLetter(item[property])}
                                </div>
                            </div>
                                <span style={{fontFamily:fontFamily3}} className='elipse-overflow'>{item[property]}</span>
                            </div>
                            /* If it's the first item in the object then attach check box to it for selection  */
                            :index === 0
                            ?<div className='j-center a-center  position-relative'>
                                {/* If item is selected or hovered then show check box else don't */}
                               <div 
                                    style={{visibility:`${selectedRows.includes(item.id)||item.id === hoveredRow?'visible':'hidden'}`}} 
                                    className='a-center  j-start left-0  position-absolute '
                                >
                                    {/* <input 
                                        checked = {selectedRows.includes(item.id)}
                                        className='cursor-pointer width-20 height-20' type="checkbox"
                                    />  */}
                                </div>
                                <div style={{fontFamily:fontFamily3}} className='a-center j-start'>{counter+1}</div>
                            </div>
                             /* If it's the last item in the object then attach action buttons to the end of the item  */
                            :index === (properties.length-1)
                            ?<div className='j-start a-center  height-100-cent '>
                                  <div style={{fontFamily:fontFamily3}} className=' no-break'>{item[property]}</div>
                                 <div className=' j-center width-100-cent height-100-cent ' >
                                     {/* edit action */}
                                            <div
                                                style={{visibility:`${hoveredRow === item.id?'hidden':'hidden'}`}}
                                                className='d-flex f-column   height-100-cent'
                                                    onClick = {() => {
                                                        this.setState({editMode:true})
                                                        this.setState({editingItem:item})
                                                    }}
                                            >
                                                <Edit 
                                                    className=' pointer-events-none nate-blue-text height-100-cent '
                                                />
                                            </div>
                                              {/* More action */}
                                            <div
                                                style={{color:`${item.id === hoveredRow?'blue':'red'}`}}
                                                className='d-flex  f-column height-100-cent'
                                                onClick = {(e) => {
                                                    e.stopPropagation()
                                                    this.setState({popUpState:item.id})
                                                }} 
                                            >
                                                <Visibility 
                                                    className=' pointer-events-none  '
                                                />
                                            </div>
                                        </div>
                            </div>
                             /* If it's the anyother item in the object then just display it raw without adding anything */
                            :<div className='j-start a-center'>
                                <div style={{fontFamily:fontFamily3}}>{item[property]}</div>
                            </div>
                            }
                           
                        </td>
                        }
                // }
            })
        }
            {   this.state.popUpState === item.id
                ?<div className='width-200 height-auto nate-white-bg above-all right-0 top-0 position-absolute nate-white-bg elevated-card'>
                    {ejectPopUpActions(item)}      
                </div>
                :null
            }
             <div
                style={{color:`${item.id === hoveredRow?'#036325':'grey'}`}}
                className='d-flex  f-column height-100-cent'
                onClick = {(e) => {
                    e.stopPropagation()
                    seTActive(item)
                    this.setState({editMode:true})
                        this.setState({editingItem:item})
                }} 
            >
                <Visibility 
                    className=' pointer-events-none  '
                />
            </div>
            </tr>
            })
        }
        return <div style={{fontFamily:fontFamily2,borderSpacing: '0 15px'}} className='width-100-cent f-column j-start a-start height-100-cent padding-20'>
                    <div style={{fontFamily:fontFamily5}} className='width-100-cent height-100-cent j-start f-column'>
                        {/* Table action bar */}
                        <div className='width-100-cent j-start'>
                            {/* <div className='a-center cursor-pointer  nate-alice-bg -j-center margin-r-20 padding-5  padding-l-10 padding-r-10 width-uto curved-corners '>
                                <CloudDownload className='margin-r-10'/>
                                <span>Export all</span>
                            </div>
                            <div className='a-center cursor-pointer  nate-alice-bg -j-center margin-r-20 padding-5  padding-l-10 padding-r-10 width-uto curved-corners '>
                                <CloudDownload className='margin-r-10'/>
                                <span>Export Selected</span>
                            </div> */}
                             {/* <FromToDatePicker handleChange = {(startDate,endDate) => {this.getMoreData(10,startDate,endDate)}}/> */}

                            {/* <FromToDatePicker/> */}
                            {/* <div className='a-center cursor-pointer   nate-alice-bg -j-center margin-r-20 padding-5  padding-l-10 padding-r-10 width-uto curved-corners '>
                                <MoreVert className='margin-r-10'/>
                                <span>More Functions</span>
                            </div> */}
                        </div>
                        <div className='full-width height-auto  d-flex f-column j-start a-center '>
                            <table style={{borderSpacing:"0 15px"}} className='width-100-cent margin-b-50 height-auto'>
                               <thead className='width-100-cent position-sticky height-50 top-0 nate-white-bg above-all'> 
                                    <tr>
                                        {ejectTableHeaders()}
                                    </tr>
                                </thead>
                                <tbody style={{}} className='width-100-cent height-auto'>
                                    {ejectTableRows()}
                                </tbody>
                            </table>
                        </div>
                        {/* {getActionsComponent()} */}
                        {/* <ActionTree handleActionClick={(action) => {this.handleActionClick(action)}} actionsList = {actionsList} expandActions = {selectedRows.length?1:0}/> */}
                    </div>
                </div>
    }

      quickSerch = (e) => {
        if(e.target.value === "" || e.target.value === " "){
        //   this.props.getAnswers(10)
          this.setState({searching:false})
          return 0;
        }
        this.setState({searching:true})
        this.props.quickSerch(e.target.value,this.props.answers)
    }
    render() {
        const innerWidth = getWindowWidth()
        actionsList = [
            {icon:<Delete/>,description:'Delete',iconColor:'red',handleClick:()=>console.log('hello')},
            {icon:<Edit/>,description:'Edit', iconColor:"blue",handleClick:(action)=>this.handleActionClick(action)},
            {icon:<AssignmentInd/>,description:'Assign', iconColor:"green"},
            {icon:<Article/>,description:'Export', iconColor:"#000080"},
            {icon:<TableView/>,description:'Export all', iconColor:"gold"},
        ]
        let {editMode} = this.state
        return (
            <div 
                className='width-100-cent height-auto a-start  j-start above-all top-0 left-0 '
            >
                <div style={{display:"none"}} className='nate-black-partial-bg d-none width-100-cent j-start'>
                        {/* <div>{this.downloadData()} </div> */}
                    </div>
                {/* Overlay */}
                {/* <div onClick = {(e) =>this.controlDisplay(e) }
                    className='width-100-cent height-100-cent a-center j-center above-all top-0 left-0 nate-black-more-partial-bg position-fixed'
                >
                </div> */}
                {/* Main Container */}
                <div className='width-100-cent overflow-hidden above-all f-column j-start  curved-corners height-100-cent nate-white-bg '>

                    {/* upper side of container */}
                    {   !this.state.editMode
                        ?
                        <div className='width-100-cent height-100  j-end a-center padding-r-20'>
                    <div style={{paddingLeft:60,color:"grey", fontSize:30,fontWeight:"bolder",fontWeight:300, fontFamily:fontFamily3}} className='width-100-cent height-50 a-center font-1-2-em'>
                               <span className='a-center' ><ArrowRight style={{width:"40px", height:"40px"}}/></span> 
                               <span>Organizations List</span> 
                               <span style={{backgroundColor:"transparent", fontSize:15, color:"black", border:"1px solid black", padding:"15px"}} className='margin-l-20  nate-green-bg width-20 height-20 all-center round-up'>23</span>
                        </div>
                    <span>
                    <SearchBar 
                            disableFilter
                            handleClick = {(inputValue,selectedFilter) => {
                                this.props.handleClick(inputValue,selectedFilter)
                            }}
                            style={{
                                backgroundColor:"white", 
                                border:"0px",
                                color:"#B0B0B1",
                                width:250,
                                marginRight:"100px",
                                fontFamily:fontFamily3,
                                fontWeight:300, 
                                borderRadius:"100px", 
                                padding:"0px 10px"
                            }}
                            innerStyle = {{
                                color:"#B0B0B1",
                                fontWeight:"bolder", 
                                fontSize:20
                            }}
                    />
                    </span>
                </div>

                    :null}
                    {/* lower side of container */}
                    <div className='width-100-cent j-start a-start height-100-cent j-center'>
                        {/* left navigation */}
                        {/* <div className='width-20-cent padding-t-50  height-100-cent'>
                            {this.ejectCategories()}s
                        </div> */}
                        {/* divider between left (All staff) and right side (table and edit data) */}
                        <span style={{width:2, marginTop:30,backgroundColor:"#EEEEEE"}} className='height-80-cent x-scroll  nate-blue-bg'></span>
                        <div className='width-80-cent j-start f-column height-100-cent margin-l-10'>
                            {/* Editing mode and Table toggle check */}
                            {editMode // if  in editing mode showediting page else show table page
                            ?this.getEditPage()
                            // Table 
                            :this.getTablePage()
                            }
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    dispatch(getAnswers(10,getTodaysDate(),getTommorowsDate(),'initial'))
    return {
        getAnswers: (limit=10,startDate,endDate) => dispatch(getAnswers(limit,startDate,endDate)),
        quickSerch:(searchValue, dataToSearch) => dispatch((quickSerchAnswers(searchValue,dataToSearch))),
        sendFinalAnswers: (newData) => dispatch(sendFinalAnswers(newData)),
  }
}
const mapStateToProps = (state) => {
    // console.log(state.answersReducer.answers)
    return {
        answers:state.answersReducer.answers,
        loading: state.appState.loading,
        dataReceived: state.answersReducer.dataReceived,
        searchItems: state.answersReducer.searchItems,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AssignPage));


// Date =, Surname, Other Names, Apponment Id, Ghana Card number,  Contact, Email,afegn