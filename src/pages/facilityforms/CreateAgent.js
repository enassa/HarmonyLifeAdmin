import React, { Component } from 'react'
import NewAlertCard from '../../component_bag/NewAlertCard';
import SearchBar from '../../component_bag/SearchBar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { letteringColor6, fontFamily4, fontFamily5, fontFamily3 } from '../../contants/uiConstants';
import ResolvedAlertCard from '../../component_bag/ResolvedAlertCard';
import { connect } from 'react-redux';
import { changeLoadingState } from '../../store/actions/AppStateActions';
import { getResolvedAlerts, createOrganisation } from '../../store/actions/institutionsActions';
import LoadMore from '../../component_bag/LoadMore';
import { Add } from '@mui/icons-material';
import AgentCard from '../../component_bag/AgentCard';
import { capitalizeFirstLetter } from '../../contants/generalFunctions';
import { FIELDS } from '../../tools/FormGenerator/FormGeneratorFields';
import FormGenerator from '../../tools/FormGenerator/FormGenerator';
import OverlayLoader from '../../component_bag/OverlayLoader';
import MyModal from '../../component_bag/MyModal';
import { createAgent } from '../../store/actions/facilityActions';
let agentObj = {}
const alerts = [
    {
        sender:"",
        area:"",
        cordinates:"",
    },
    {
        sender:"",
        area:"",
        cordinates:"",
    },
    {
        sender:"",
        area:"",
        cordinates:"",
    },
    {
        sender:"",
        area:"",
        cordinates:"",
    },
    {
        sender:"",
        area:"",
        cordinates:"",
    },
    {
        sender:"",
        area:"",
        cordinates:"",
    },
    {
        sender:"",
        area:"",
        cordinates:"",
    }
]

class CreateAgent extends Component {
    constructor(props){
        super(props)
        this.state = {
            agentslist:[]
        }
    }
    getAlerts = (limit) => {
        this.props.getMoreAlerts(limit)
    }
    getNewAlerts = () => {
        // let alerts = this.props.resolvedAlerts
        return this.state.agentslist.map((item, index) => {
            return <AgentCard 
                        handleActionClick = {
                            (typeOfAction, data) => this.handleActionClick(typeOfAction, data)
                        } 
                        cardData = {item}
                />
        })
    }
    formAgentObject = (property,value) => {
        agentObj[property] = value;
    }
    createAgent = () => {
        let currentList = this.state.agentslist
        this.setState({agentslist:[agentObj,...currentList]})
    }
    ejectAgentCreatorFields = () => {
        const creatorFields = [
            {name:"Industry"},
            {name:"Group"},
            {name:"Name"},
            {name:"Email"},
            {name:"Id"},
        ]
        return creatorFields.map((item, index) => {
            return  <div className='width-auto margin-r-30 min-height-100  a-center height-100-cent'>
                <lable style={{minWidth:100, marginLeft:20,fontFamily:fontFamily3,fontWeight:300, fontSize:20, color:"grey"}}>{capitalizeFirstLetter(item.name)}:</lable>
                <input 
                    onChange={(e) => {
                        this.formAgentObject(item.name, e.target.value)
                    }}
                    // placeholder={item.name} 
                    style={{backgroundColor:"#F7F7F7"}} 
                    className='width-450 padding-l-10 height-60-cent padding-l-20 curved-corners nate-grey-bg border-0 outline-none'
                />
         </div>
        })
    }
    handleSubmit = (data,resetFunc,completed) => {
        this.props.changeLoadingState()
        completed()
        console.log(data)
        this.props.createAgent(data)
    }
    render() {
        return (
            <div className=' curved-corners j-start f-column width-100-cent height-100-cent overflow-hidden max-height-90-cent '>
                {/* {
                this.props.loading
                ?<OverlayLoader/>
                :null
                } */}
                
                <div className='width-100-cent height-100  j-end a-center padding-r-20'>
                    <div style={{paddingLeft:60,color:"grey", fontSize:30,fontWeight:300, fontFamily:fontFamily3}} className='width-100-cent height-50 a-center font-1-2-em'>
                               <span className='a-center' ><ArrowRightIcon style={{width:"40px", height:"40px"}}/></span> 
                               <span>Agent Creation Page</span>
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
                                fontFamily:fontFamily5, 
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
                <div  className='width-100-cent f-column j-start  a-center y-scroll  height-100-cent '>

                    <div style={{ backgroundColor:"", fontFamily:fontFamily3, position:"sticky", top:0}} 
                         className='width-90-cent height-100-cent padding-t-20 f-column nate-white-bg above-all curved-corners position-relative  j-start'
                    >
                    <div 
                        // onClick = {(event) => this.handleAlertClick(event)}
                        style={{ marginBottom:20, backgroundColor:"", fontFamily:fontFamily3, position:"sticky", top:0}} 
                        className='width-100-cent padding-l-20 f-row curved-corners position-relative  a-start height-auto min-height-60 elevated-blend'
                    >
                        {/* <div className='width-auto margin-r-30  a-center height-100-cent'>
                            <input placeholder='Password'  style={{backgroundColor:"#F7F7F7"}} 
                            className='width-200 padding-l-10  height-60-cent curved-corners nate-grey-bg border-0 outline-none'
                        />
                        </div> */}
                        <div className='width-100-cent y-scroll padding-30  height-auto f-column j-start a-center'>
                            {/* {this.ejectAgentCreatorFields()} */}
                            <FormGenerator
                            // skipValidation
                            handleOnSubmit = {(data, resetFunc,completed)=>{
                                this.handleSubmit(data,resetFunc,completed)
                            }}
                            enableConfirmation={true}
                            redirectText = {"Already have an account? Login"}
                            buttonStyles={{backgroundColor:"#5E71E4", borderRadius:"5px"}}
                            buttonText = 'Create'
                            fields = {[
                        
                            {
                                fieldType: FIELDS.input,
                                required:true,
                                name: "username",
                                label: "Username",
                                placeholder: "Username",
                            },
                            {
                                fieldType: FIELDS.input,
                                required:true,
                                name: "surname",
                                label: "Surname",
                                placeholder: "Surname",
                            },
                            {
                                fieldType: FIELDS.input,
                                required:true,
                                name: "firstName",
                                label: "firstName",
                                placeholder: "Name",
                            },
                            {
                                fieldType: FIELDS.input,
                                required:true,
                                name: "otherName",
                                label: "otherNames",
                                placeholder: "Name",
                            },
                            {
                                fieldType: FIELDS.input,
                                required:true,
                                name: "institutionId",
                                label: "Institution Id",
                                placeholder: "Institution Id",
                            },
                            {
                                fieldType: FIELDS.input,
                                required:true,
                                name: "terminal",
                                label: "Terminal",
                                placeholder: "Terminal",
                            },
                ]}
                
                />
                        </div>
                        {/* <div className='width-30-cent height-100-cent j-center a-center'>
                        <div style={{right:"13%",bottom:"45%"}} className=' solute margin-r-30 a-center j-end'>
                            <span onClick = {() => {this.createAgent()}} style={{backgroundColor:"#F7F7F7"}} className='width-100 elevated-blend cursor-pointer height-100 round-up all-center padding-2'>
                                <span style={{backgroundColor:"#2D99FA"}} className='width-100-cent height-100-cent elevated-blend cursor-pointer nate-white-text round-up all-center'>
                                    <Add style={{width:70, height:70}}/>
                                </span>
                            </span>
                        </div>
                        </div> */}
                        
                    </div>
                    {/* <div style={{marginTop:10 ,fontSize:40, backgroundColor:"", fontFamily:fontFamily3, fontWeight:300}} className='width-90-cent padding-l-20 curved-corners position-relative  a-center height-80 min-height-60 '> */}
                        {/* <span>Organisations</span> */}
                    {/* </div> */}
                    </div>
                  {this.getNewAlerts()}
                </div>
                {
                this.props.actionState
                ?
                <MyModal state/>
                :null
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLoadingState: (userData) => dispatch(changeLoadingState()),
        getMoreAlerts: (limit=10,typeOfGroups) => dispatch(getResolvedAlerts(limit)),
        createAgent: (data) => dispatch(createAgent(data)),
        // quickSerch:(searchValue, typeOfGroups) => dispatch((quickSerchGroups(searchValue))),
        // fetchFromDifferentGroupsType:(limit=10) => dispatch(getFromDifferentGroupType(limit))
  }
}
const mapStateToProps = (state) => {
    return {
        resolvedAlerts: state.resolvedAlerts.resolvedAlerts,
        loading: state.appState.loading,
        actionState: state.appState.actionState,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateAgent);