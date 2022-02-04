import React, { Component } from 'react'
import FormGenerator from '../../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../../tools/FormGenerator/FormGeneratorFields';
import { getWindowWidth, readyForMapping } from '../../contants/generalFunctions';
import { ALL_URLS } from '../../contants/urls';
import { fontFamily3, fontFamily5, potbelly5, vertical } from '../../contants/uiConstants';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendAnswers, sendFinalAnswers } from '../../store/actions/answersActions';
import harmonyGreen from '../../assets/images/greenlogo.png';
import mtnImage from '../../assets/images/mtnlogo.png';
import vodaImage from '../../assets/images/vodafon.png';
import gloImage from '../../assets/images/glologo.jpeg';
import airtelImage from '../../assets/images/airtel.png';
import { REGEX_PATTERNS } from '../../contants/generalContants';
import MyModal from '../../component_bag/MyModal';
import OverlayLoader from '../../component_bag/OverlayLoader';
import { getActiveInstitutions, getServices } from '../../store/actions/institutionsActions';
import { createFacility } from '../../store/actions/facilityActions';

class DeliveryForm4 extends Component {
    constructor(props){
        super(props)
        this.state = {
            updateConfirmation:false,
            loading:false,
            showModal: false,
            loadingComplete:false,
        }
    }
    handleAssignment = (selected) => {
        this.setState({loading:true})
        setTimeout(()=>{
            this.setState({showModal:true,loadingComplete:true,loading:false,showAssignPage:false})
        },800)
    }
    handleSubmit = (data,resetForm,completed) => {
        console.log(data)
        // delete data.undefined;
        this.props.createFacility(data)
        // console.log(this.props.receivedData)
        // this.props.history.push(ALL_URLS.sent)
        completed()
        // this.setState({loading:true})
        // this.handleAssignment()
    }
    handleSuccesfulAssignment = (response) => {
        if(response){
            this.setState({showModal:false})
        }
        this.props.history.push('/facility/register/success')
    }
    componentDidMount(){
    }
    convertToObject = (property,array) => {
        console.log(array)
        let arrayOfObject = []
        if(readyForMapping(array)){
            array.map((item,index) => {
                let myObj = {}
                myObj[property] = item
                arrayOfObject.push(myObj)
            });
            return arrayOfObject;
        }
        else {
            return []
        }
    }
    render() {
        let innerWidth = getWindowWidth()
        let activeInstitutions = this.convertToObject('name',this.props?.services?.data?.orgGroup);
        let services = [{name:"loading..."}];
        let servicesData = this.convertToObject('name',this.props?.services?.data?.services)
        console.log(servicesData);
        const followUpTo = {
            followUpQuestion:'orderMeans',
            followUpAnswer:'Call Centre'
        }
        return (
            <div style={{backgroundImage:``}} className={` ${innerWidth<800?'padding-0':'padding-20'} fit-background width-100-cent height-100-cent nate-white-bg  a-center  y-scroll f-column j-start`}>
                    {this.state.loading
                    ?<OverlayLoader/>
                    :null
                    }
              
                <div style={{backgroundColor:"#036325"}} 
                    className='anime-ripple-2 width-600  bottom-0 nate-blue-bg margin-b-40  all-center nate-white-text height-600 position-absolute  rigth-0 round-up'>
                </div>            
                  
                <div className={`${innerWidth<800?'width-100-cent':'width-70-cent'} nate-white-more-partial-bg elevated-blend above-all curved-corners height-auto padding-20 `}>
                <div style={{color:"grey", fontSize:50,fontWeight:"bolder",fontFamily:fontFamily5}} 
                     className='width-100-cent left-0 top-50 j-space-between margin-b-30 height-50 a-center font-1-2-em'
                >
                    {/* <span className='a-center' ><ArrowRight style={{width:"40px", height:"40px"}}/></span>  */}
                    <span className='margin-l-20'>
                        <img src={harmonyGreen} style={{width:40, height:40}}/>
                        <span>Harmony <span className='nate-green-text'>Life</span> </span>
                    </span>
                  
                    {/* <span className='a-center'>
                        <div style={{display:"inline-flex", border:`2px solid #FFCC01`}} className='all-center round-up width-50 min-width-50 height-50'>
                            <img src={mtnImage} style={{width:25, height:25}}/>
                        </div> 
                        <span style={{color:'gold', fontWeight:"bolder",fontFamily:fontFamily5,marginLeft:10, color:"#FFCC01"}}>MTN</span>
                    </span> */}
                </div>  
                <FormGenerator
                    skipValidation
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
                        name: "branch",
                        label: "Name of Facility?",
                        placeholder: "Name of Facility?",
                    },
                    {
                        fieldType: FIELDS.select,
                        property:'name',
                        dropDownList:activeInstitutions,
                        required:true,
                        name: "institutionGroup",
                        label: "Institution Group?",
                    },
                    {
                        fieldType: FIELDS.input,
                        name: "institution",
                        label: "Institution",
                        placeholder: "Institution",
                        // regexPattern:REGEX_PATTERNS.emailSimple,
                        required: true,
                    },  
                    {
                        fieldType: FIELDS.input,
                        name: "institutionId",
                        label: "Institution ID",
                        placeholder: "Institution ID",
                        required: true,
                    },  
                    {
                        fieldType: FIELDS.select,
                        property:'name',
                        dropDownList:servicesData,
                        required:true,
                        name: "service",
                        label: "Service Provided?",
                        placeholder: "Service Provided",
                    },
                    {
                        fieldType: FIELDS.select,
                        property:'name',
                        dropDownList:servicesData,
                        required:true,
                        name: "region",
                        label: "Region",
                        placeholder: "Region",
                    },
                    {
                        fieldType: FIELDS.input,
                        required:true,
                        // regexPattern:REGEX_PATTERNS.phone2,
                        name: "terminals",
                        label: "Number of terminals?",
                        placeholder: "eg. 050XXXXXXX",
                    },
                    {
                        fieldType: FIELDS.input,
                        required:true,
                        // regexPattern:REGEX_PATTERNS.phone2,
                        name: "workHours",
                        label: "Working hours?",
                        placeholder: "eg. 050XXXXXXX",
                    },
                    {
                        fieldType: FIELDS.input,
                        name: "latitude",
                        label: "Latitude",
                        placeholder: "Latitude",
                        // regexPattern:REGEX_PATTERNS.emailSimple,
                        required: true,
                    },  
                    {
                        fieldType: FIELDS.input,
                        name: "longitude",
                        label: "Longitude",
                        placeholder: "Longitude",
                        // regexPattern:REGEX_PATTERNS.emailSimple,
                        required: true,
                    },  
                    {
                        fieldType: FIELDS.input,
                        name: "address",
                        label: "Address",
                        placeholder: "Address",
                        // regexPattern:REGEX_PATTERNS.emailSimple,
                        required: true,
                    },  
                    {
                        fieldType: FIELDS.input,
                        name: "logo",
                        label: "Logo",
                        placeholder: "Logo",
                        // regexPattern:REGEX_PATTERNS.emailSimple,
                        required: true,
                    },  
                    {
                        fieldType: FIELDS.date,
                        required:true,
                        // regexPattern:REGEX_PATTERNS.phone2,
                        name: "startDate",
                        label: "Start Date",
                        placeholder: "Start Date",
                    },
                    {
                        fieldType: FIELDS.date,
                        required:true,
                        // regexPattern:REGEX_PATTERNS.phone2,
                        name: "endDate",
                        label: "End Date",
                        placeholder: "End Date",
                    },
                    {
                        fieldType: FIELDS.input,
                        required:true,
                        // regexPattern:REGEX_PATTERNS.phone2,
                        name: "servingTime",
                        label: "Time needed per service",
                        placeholder: "Time needed per service",
                    },
                    {
                        fieldType: FIELDS.time,
                        required:true,
                        // regexPattern:REGEX_PATTERNS.phone2,
                        name: "startHour",
                        label: "Start Hour",
                        placeholder: "Start Hour",
                    },
                    {
                        fieldType: FIELDS.time,
                        required:true,
                        // regexPattern:REGEX_PATTERNS.phone2,
                        name: "endHour",
                        label: "End Hour",
                        placeholder: "End Hour",
                    },
                    {
                        fieldType: FIELDS.input,
                        required:true,
                        name: "email",
                        label: "Email",
                        placeholder: "Email",
                    },
                    {
                        fieldType: FIELDS.password,
                        required:true,
                        name: "password",
                        label: "Password",
                        placeholder: "Email",
                    },
                    // {
                    //     fieldType: FIELDS.password,
                    //     required:true,
                    //     name: "password",
                    //     label: "Password Confirmation",
                    //     placeholder: "Password Confirmation",
                    // },
                    
                    // {
                    //     fieldType: FIELDS.input,
                    //     name: "contact",
                    //     label: "Office contact?",
                    //     placeholder: "Office contact?",
                    //     // regexPattern:REGEX_PATTERNS.emailSimple,
                    //     required: true,
                    // },  
                    // {
                    //     fieldType: FIELDS.input,
                    //     name: "gps",
                    //     label: "GPS Code",
                    //     placeholder: "Longitude",
                    //     // regexPattern:REGEX_PATTERNS.emailSimple,
                    //     required: true,
                    // },  
                    
                ]}
                />
                {
                    this.state.loadingComplete&&this.state.showModal
                    ? <MyModal  
                            getResponse={(response) => {this.handleSuccesfulAssignment(response)}} 
                            state={true} 
                            showButtons
                            hideCancel
                        />
                    :null
                }
                </div>
                
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    // dispatch(getActiveInstitutions(10,'initial'))
    dispatch(getServices(10,'initial'))
    return {
        sendAnswers: (answers,serviceType) => dispatch(sendAnswers(answers,'delivery')),
        sendFinalAnswers: (answers,serviceType) => dispatch(sendFinalAnswers(answers,serviceType)),
        getActiveInstitutions: (limit=10,initial='initial') => dispatch(getActiveInstitutions(limit,initial)),
        getServices: (limit=10,initial='initial') => dispatch(getServices(limit,initial)),
        createFacility: (data) => dispatch(createFacility(data)),

  }
}
const mapStateToProps = (state) => {
    return {  
        submissionState:state.answersReducer.submissionState,
        receivedData:state.answersReducer.receivedData,
        activeInstitutions:state.institutions.activeInstitutions,
        services:state.institutions.services
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(DeliveryForm4));
