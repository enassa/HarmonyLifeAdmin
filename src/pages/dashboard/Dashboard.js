import React, { Component } from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { fontFamily5, QUESTION_BANK, fontFamily3, Questions, potbelly2 } from '../../contants/uiConstants';
import ResolvedAlertCard from '../../component_bag/ResolvedAlertCard';
import InfoCard from '../../component_bag/InfoCard';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { FIELDS } from '../../tools/FormGenerator/FormGeneratorFields';
import { REGEX_PATTERNS } from '../../contants/generalContants';
import { randomImages, deliveryQuestions,dineInQuestions,takeOutQuestions } from '../../dummydata/dummyData';
import { getAnswers } from '../../store/actions/answersActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { localStorageGet, readyForMapping, isEmpty, cloneObject, getTodaysDate, getTommorowsDate, capitalizeFirstLetter, getWindowWidth, localStorageSave } from '../../contants/generalFunctions';
import LoadMore from '../../component_bag/LoadMore';
import StaticsCard from '../../component_bag/StaticsCard';
import OverlayLoader from '../../component_bag/OverlayLoader';
import { ArrowLeftOutlined, Delete, Download, HourglassFull, MoreVert, Print, Article } from '@mui/icons-material';
import Loader from '../../component_bag/Loader';
import DataGridTable from '../../component_bag/DataGridTable';
import OneColumnTable from '../../component_bag/OneColumnTable';
import ErrorOutlineIcon  from '@mui/icons-material/ErrorOutline';
import StaticsCard2 from '../../component_bag/StaticsCard2';
import FromToDatePicker from '../../component_bag/FromToDatePicker';
import ProcessingAlertsCard from '../../component_bag/ProcessingAlertsCard';
import InfoCard2 from '../../component_bag/InfoCard2';
import ReactToExcel from 'react-html-table-to-excel'
import ReactToPrint from 'react-to-print';
import ResultsPage from './Resultspage';

let myCounter = 0;
let alreadyLoaded =0;
let questionResults = ''
let graphResults = ''
let usersResults = ''
let dashboardResults = ''
let totalNumberOfResponses = 0

class DashboardPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            hovered:'',
            dataState:false,
            dataReceived:[],
            myobject:[],
            selectedHeader:'Dashboard',
            hoveredHeader:'',
            selectedHeader2:'Responses',
            hoveredHeader2:'',
            resultType:'Dashboard',
            Option:'Responses'
        }
        this.resultsComponent = React.createRef();

    }
    getQuestionBank = () => {
        let AnswersStat = undefined
        let serviceType = this.props.match.params.serviceType
        if(serviceType==='delivery'){
            AnswersStat = cloneObject(deliveryQuestions)
        }else if(serviceType==='take-out'){
            AnswersStat =  cloneObject(takeOutQuestions)
        }else if(serviceType==='dine-in'){
            AnswersStat = cloneObject(dineInQuestions)
        }
        return AnswersStat
    }
    getQuestionlabel = (field) => {
       return Questions[field]
    }
    upDateStats = (response) => {
        let AnswersStat = this.getQuestionBank()
        for (const property in response) {
            // console.log(`${property}: ${response[property]}`);
            if(AnswersStat[property]!==undefined){
                // console.log('property', property,"->", AnswersStat[property].question)
                AnswersStat[property].answers.push(response[property])
            }
          }
        // console.log(AnswersStat)
    }
    createStats = () => {
    }
    myCounter = 0;
    makePush = (property,response,Obj) => {
        // if(alreadyLoaded!==0) return
        if(property==='name'){
            // console.log(property,myCounter)
            myCounter++
        }
        // let  myAnswers = AnswersStat[property].answers
        // if(myAnswers.includes(response[property])) return
        Obj[property].answers.push(response[property])
        
    }
    ejectData = (arr) => {
        return arr.map((item,index) => {
            return <StaticsCard key={index} id={index} cardData={item}/>

        })
    }
    downloadData = () => {
        let AnswersStat = this.getQuestionBank()
        // console.log(this.props.answers)
        // console.log(this.props.answers)
        if(readyForMapping(this.props.answers)){
            let lengthOfData = this.props?.answers?.length
            console.log(this.props.answers)
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
                                console.log(item)
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
    createStatsAndejectAnswers = () => {
        let AnswersStat = this.getQuestionBank()
        if(readyForMapping(this.props.answers)){
            let lengthOfData = this.props.answers.length
            // console.log(this.props.answers)
            return this.props.answers.map((response,index) => {
            // return theData.map((response,index) => {
                // this.upDateStats(response)
                let aa = 0
                for (const property in response) {
                    // console.log(`${property}: ${response[property]}`);
                    if(AnswersStat[property]!==undefined){
                        // console.log(aa-2, 'p', property)
                        this.makePush(property,response, AnswersStat)
                        // console.log('property', property,"->", AnswersStat[property].question)
                    }
                    aa++
                }
                let arrayOfObject = []
                if(lengthOfData===index+1){
                    // console.log(index)
                    let counter = 0;
                    for (const property in AnswersStat) {
                        arrayOfObject[counter] = AnswersStat[property]
                        counter++;
                    }
                    console.log(arrayOfObject)
                    return arrayOfObject.map((item,index) => {
                        return <StaticsCard key={index} id={index} cardData={item}/>
            
                    })
                    // this.setState({myobject:arrayOfObject})
                }
            })
        }
    //    }
    }
    downLoadTable = () => {
        let AnswersStat = this.getQuestionBank()
       let nameTitles = Object.keys(AnswersStat)
       nameTitles.map((title,index) => {
       }) 

    }
    
    getMoreData = (limit,startDate,endDate) => {
        this.props.getAnswers(limit,startDate,endDate)
    }
    getAllQuestions = () => {
        const innnerWidth = getWindowWidth()
        let allQuestions = this.getQuestionBank()
        let questionNames = Object.keys(allQuestions)
       return questionNames.map((item,index) => {
            return <div style={{fontFamily:fontFamily5}} className={`${innnerWidth<800 ? ' width-95-cent ' : ' width-80-cent '}min-height-100 j-start a-center padding-20 curved-corners nate-white-bg margin-t-10 margin-b-10`}>
            <div style={{backgroundColor:"#FB6A63"}} className='round-up min-height-30  max-height-30 max-width-30 min-width-30   min-width-20 margin-r-20 nate-blue-bg  nate-white-text j-center a-center nate-white-bg'>
                <span>{index+1}</span>
            </div>
            <div className='width-100-cent j-start a-center height-auto nate-grey-text'>
                {allQuestions[item].question}
            </div>
        </div>
        })
    }
    changeResultComponent = (resultType) => {
        this.setState({resultType})
    }
    ejectHeaders = () => {
        const headers = [
            {title:'Dashboard'},
            {title:'Users'},
            {title:'Question'},
            // {title:'Table'},
            {title:'Graph'},
        ]
       return  headers.map((item, index) => {
           const {selectedHeader, hoveredHeader} = this.state;
            return  <div 
            onClick={() => {
                this.setState({selectedHeader:item.title,resultType:item.title})
            }}
            // onMouseOver={() => {
            //     this.setState({hoveredHeader:item.title})
            // }}
            style={{fontFamily:fontFamily5, cursor:"pointer", borderBottom:`${selectedHeader===item.title?'2px solid black':'2px solid transparent'}`}} 
            className='width-100-cent  height-60  j-center a-center '>
            {/* <span className={`a-center ${selectedHeader===item.title?'':'hide-visible'}`} ><ArrowRightIcon style={{width:"40px", height:"40px"}}/></span>  */}
            <span className='a-center height-100-cent '>
                {/* <ErrorOutlineIcon style={{ color:"#E11717"}}/> */}
                <span style={{ fontSize:13,fontWeight:"bolder",fontFamily:fontFamily5, color:"#333"}}  className='font-1-2-em nate-grey-text'>{item.title}</span>
            </span>
            {/* <div style={{color:"#E91212", backgroundColor:"#FEB8B8"}} 
            className='width-40 height-40 min-width-40 min-height-40 a-center j-center round-up'>
                15
            </div> */}
        </div> 
            
        })
    }
    reactToPrintTrigger = () => {
        // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
        // to the root node of the returned component as it will be overwritten.
    
        // Bad: the `onClick` here will be overwritten by `react-to-print`
        // return <button onClick={() => alert('This will not work')}>Print this out!</button>;
    
        // Good
        return <button>Print using a Class Component</button>;
      };
    ejectSecondHeaders = () => {
        const headers = [
            {title:'Questions'},
            {title:'Responses'},
        ]
       return  headers.map((item, index) => {
           const {selectedHeader2, hoveredHeader2} = this.state;
            return  <div 
            onClick={() => {
                this.setState({selectedHeader2:item.title,Option:item.title})
            }}
            // onMouseOver={() => {
            //     this.setState({hoveredHeader2:item.title})
            // }}
            style={{fontFamily:fontFamily5, cursor:"pointer", borderBottom:`${selectedHeader2===item.title?'2px solid #F40000':'2px solid transparent'}`}} 
            className='width-10-cent margin-r-10  j-center a-center '>
            <span className='a-center height-100-cent '>
                {/* <ErrorOutlineIcon style={{ color:"#E11717"}}/> */}
                <span style={{ fontSize:18,fontWeight:300,fontFamily:fontFamily3, color:"grey"}}  className='font-1-2-em nate-grey-text'>{item.title}</span>
            </span>
        </div> 
            
        })
    }
    reactToPrintContent = () => {
        const node = this.resultsComponent;
        return node;
    }
   

    componentDidMount(){
        localStorageSave('serviceType', this.props.match.params.serviceType)
    }
    render() {
        const innnerWidth = getWindowWidth()
        console.log(myCounter)
        alreadyLoaded++
        let serviceToView = this.props.match.params.serviceType
        return (
            <div style={{backgroundImage:`url(${potbelly2})`}}  className=' fit-background curved-corners j-start f-column width-100-cent height-100-cent overflow-hidden max-height-100-cent '>
                 <div className='width-100-cent a-start height-140 min-height-140 nate-white-bg padding-10 padding-b-0 elevated-blend f-column j-start '>
                    <div className='width-100-cent j-start a-center'>
                        <div style={{backgroundColor:"#FB6A63"}} className='width-50 margin-l-40 min-height-50 margin-r-10 nate-grey-text min-width-50 height-5 a-center j-center round-up nate-grey-bg'>
                            <Article className='nate-white-text'/>
                        </div>
                        <div className='nate-grey-text' style={{fontSize:24, color:"#FB6A63", fontFamily:fontFamily5}}>{capitalizeFirstLetter(serviceToView)} service feedback form</div>
                    </div>
                   <div className={`width-100-cent  height-100-cent ${innnerWidth < 800 ? 'j-space-around' : 'j-center'} a-end`}>
                    {this.ejectSecondHeaders()}
                   </div>
                </div>
                {this.state.selectedHeader2 === 'Responses'
                ?<div  className=' curved-corners j-start f-column width-100-cent height-100-cent overflow-hidden max-height-100-cent '>
                <div className='width-100-cent f-column j-start  a-center y-scroll height-100-cent'>
                    <div style={{zIndex:"600",height:246,minHeight:246, backgroundColor:"#F3F3F3", borderBottom:"2px solid blue"}} 
                    className = {`${innnerWidth<800?'width-95-cent':'width-80-cent'} curved-corners overflow-hidden f-column nate-white-bg elevated-blend height-300 min-height-300  margin-b-20  margin-t-20  above-all`}>
                        <div className='width-100-cent height-100-cent j-space-between padding-10 padding-l-20'>
                            <div style={{fontSize:innnerWidth<800?18:28,fontFamily:fontFamily5}}>{this.props?.answers?.length} responses</div>
                            <div className='cursor-pointer margin-r-5'>
                                <ReactToExcel
                                    className={`${innnerWidth<800?'curved-corners-more':''} border-1-px padding-10  font-0-8-em cursor-pointer nate-grey-text`}
                                    table = 'table-to-excel'
                                    filename = {`${localStorageGet('serviceType')}-Potbelly-questionnaire-results`}
                                    sheet = 'sheet-1'
                                    buttonText = 'Export to Excel'
                                />
                                 {/* <ReactToPrint
                                    trigger={() => <a href="#">Print this out!</a>}
                                    content={() => this.componentRef}
                                    bodyClass={"printElement1"}
                                    /> */}
                                {/* <ReactToPrint
                                 trigger={this.reactToPrintTrigger}
                                 documentTitle="AwesomeFileName"
                                 content={this.reactToPrintContent}
                                /> */}
                                    {/* <Download onClick={()=>this.downloadData()}/> */}
                                </div>
                        </div>
                        <div className='width-100-cent height-200  f-column'>
                            <div ref={this.resultsComponent} style={{borderBottom:"1px solid #D9DCE0"}} className='width-100-cent height-50  a-center j-center padding-b-10 padding-l-20 padding-r-20'>
                                {this.ejectHeaders()}
                            </div>
                        </div>
                        <div className={`width-100-cent height-100-cent ${innnerWidth<800?'j-start':'j-space-between'} a-end  padding-l-20 padding-r-20`}>
                            <FromToDatePicker handleChange = {(startDate,endDate) => {this.getMoreData(10,startDate,endDate)}}/>
                            <div className='padding-b-20 height-100-cent nate-grey-text a-center j-center'>
                                {/* <Print onClick={() =>alert(' Please check again this  feature will be included soon 😊')} className='cursor-pointer margin-r-20'/> */}
                                {/* <Delete onClick= {()=>alert(' Please check again this feature will be included ready soon')} className='cursor-pointer'/> */}
                            </div>
                        </div>
                    </div>
                    
                    {}
                    {/* {!this.props.loading
                    ?<div style={{width:"100%",display:"flex", justifyContent:"center"}}>
                        <LoadMore 
                        handleClick={()=>{this.getMoreData(10)}}
                        dataLimit = {10}
                        />
                    </div>
                    :null
                    }  */}
                    <div className='nate-black-partial-bg width-100-cent j-start'>
                        <div>{this.downloadData()} </div>
                    </div>
                  

                    {
                    this.props?.dataReceived===false
                    ?<div className='d-flex height-100-cent a-center  j-center f-column'>
                        <Loader style={{borderRight:`2px solid white`}} /> 
                        <span style={{fontFamily:fontFamily5,color:'#FB6A63'}} className='nate-white-text'>Loading responses...</span>                   
                        <div className='width-100-cent height-300 j-center'>
                        </div>
                    </div>
                    :this.props?.answers?.length===0
                    ?<div className='d-flex height-100-cent j-start a-center f-column'>
                        <span style={{fontSize:200}}>🥸</span>
                        <div className={`j-center ${innnerWidth < 800 ? 'text-align-center':''}`} style={{fontSize:20, color:"white", fontFamily:fontFamily5, fontWeight:300}}>
                           Sorry, there are no responses for {this.props.match.params.serviceType} service yet
                        </div>                   
                        <div className='width-100-cent height-300 j-center'>
                     </div>
                    </div>
                   
                    :<ResultsPage  resultType = {this.state.resultType}/>
                    }
                </div>
                </div>
                :this.state.Option === 'Questions'
                ? <div  className=' curved-corners padding-t-40 padding-b-40 j-start a-center y-scroll f-column width-100-cent height-100-cent overflow-hidden max-height-100-cent '>
                    {this.getAllQuestions()}
                  </div>
                :null

                }
                
                </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    // dispatch(getAnswers(10,getTodaysDate(),getTommorowsDate(),'initial'))
    return {
        getAnswers: (limit=10,startDate,endDate) => dispatch(getAnswers(limit,startDate,endDate)),
  }
}
const mapStateToProps = (state) => {
    // console.log(state.answersReducer.answers)
    return {
        answers:state.answersReducer.answers,
        loading: state.appState.loading,
        dataReceived: state.answersReducer.dataReceived,

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(DashboardPage));









