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
import { localStorageGet, readyForMapping, isEmpty, cloneObject, getTodaysDate, getTommorowsDate, capitalizeFirstLetter, getWindowWidth } from '../../contants/generalFunctions';
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

let myCounter = 0;
let alreadyLoaded =0;
let questionResults = ''
let graphResults = ''
let usersResults = ''
let dashboardResults = ''
let totalNumberOfResponses = 0

class ResultsPage extends Component {
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
        let serviceType = localStorageGet('serviceType')
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
    computeTotalRespones = (finalObje) => {
        // .map((item, index) => {
        //     console.log(item)
        // })this.props.answers
    }
    createStatsAndejectAnswers2 = () => {
        this.computeTotalRespones()
        let AnswersStat = this.getQuestionBank()
        // console.log(this.props.answers)
        // console.log(this.props.answers)

        // if(readyForMapping(this.props.answers)){
            let lengthOfData = this.props.answers.length
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
                    return arrayOfObject.map((item,index) => {
                        // console.log(item)
                        return <StaticsCard2 key={index} id={index} cardData={item}/>
            
                    })
                    // this.setState({myobject:arrayOfObject})
                }
            })
        // }
    }
    downloadData = () => {
        this.computeTotalRespones()
        let AnswersStat = this.getQuestionBank()
        // console.log(this.props.answers)
        // console.log(this.props.answers)
        // if(readyForMapping(this.props.answers)){
            let lengthOfData = this.props.answers.length
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
                                // console.log(item)
                                // answersArray = []
                            return <tr style={{color:'violet', border:""}}>
                                <td align ="left"  style={{color:'blue',width:700, border:""}} >{item.question}</td>
                                {
                                    item.answers.map((item,index) => {
                                        // answersArray.push(item)
                                        // answersCount[item] = answersArray
                                        // console.log(answersCount)
                                        return <td style={{color:'black', border:"", width:500}}>{item}</td>
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
        // }
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
    graphResults = () => {
        return  <div className='width-100-cent height-300 a-center j-center margin-b-50 '>
                    <DataGridTable/>
                        <InfoCard 
                            contents={{value:"124", icon:<SupervisedUserCircleIcon/>, desc:"Number of Response"}}
                            outerStyles={{width:284,height: 152,borderRadius:"5px", background:"linear-gradient(90deg, #5C25D5 0%, rgba(41, 111, 249, 0.33) 107.07%)"}}
                            iconStyles={{color:"white"}}
                            descStyles={{color: "rgba(255, 255, 255, 0.76)"}}
                            valueStyles={{color:"white"}}
                            />
                        <InfoCard 
                            contents={{value:"4520", icon:<SupervisedUserCircleIcon/>, desc:"Male Response"}}
                            outerStyles={{width:284,height: 152, borderRadius:"5px", background:"linear-gradient(90deg, #FB5A1E 0%, #F7B232 107.07%)"}}
                            iconStyles={{color:"white"}}
                            descStyles={{color: "rgba(255, 255, 255, 0.76)"}}
                            valueStyles={{color:"white"}}
                            />
                        <InfoCard 
                            contents={{value:"2340", icon:<SupervisedUserCircleIcon/>, desc:"Female Response"}}
                            outerStyles={{width:284,height: 152,  borderRadius:"5px",  background:"linear-gradient(90deg, #15B48E 0%, rgba(140, 200, 67, 0.33) 107.07%)"}}
                            iconStyles={{color:"white"}}
                            descStyles={{color: "rgba(255, 255, 255, 0.76)"}}
                            valueStyles={{color:"white"}}
                            />
                </div>
    }
    getDashBoard = () => {
        const innerWidth = getWindowWidth();
        let serviceToView = this.props.match.params.serviceType
        return <div className={`${innerWidth < 800 ? 'f-column a-center j-start' :'f-row a-center j-center'  } width-100-cent height-300 a-center j-center margin-b-50 `}>
                    {/* <DataGridTable/> */}
                        <InfoCard 
                            contents={{value:`${this.props.answers.length}`, icon:<SupervisedUserCircleIcon/>, desc:"Number of Response"}}
                            outerStyles={{width:284,height: 152,borderRadius:"5px", marginBottom:20, background:"linear-gradient(90deg, #5C25D5 0%, rgba(41, 111, 249, 0.33) 107.07%)"}}
                            iconStyles={{color:"white"}}
                            descStyles={{color: "rgba(255, 255, 255, 0.76)"}}
                            valueStyles={{color:"white"}}
                        />
                        <InfoCard 
                            contents={{value:`${Object.keys(this.getQuestionBank()).length}`, icon:<SupervisedUserCircleIcon/>, desc:"Number of Questions"}}
                            outerStyles={{width:284,height: 152, borderRadius:"5px", marginBottom:20, background:"linear-gradient(90deg, #FB5A1E 0%, rgba(230, 90, 30, 0.33)  107.07%)"}}
                            iconStyles={{color:"white"}}
                            descStyles={{color: "rgba(255, 255, 255, 0.76)"}}
                            valueStyles={{color:"white"}}
                        />
                        <InfoCard2
                            contents={{text:"jj", icon:<SupervisedUserCircleIcon/>, desc:"Form tile"}}
                            text = {`${capitalizeFirstLetter(serviceToView)}`}
                            outerStyles={{width:284,height: 152,  borderRadius:"5px", marginBottom:20,  background:"linear-gradient(90deg, #15B48E 0%, rgba(140, 200, 67, 0.33) 107.07%)"}}
                            iconStyles={{color:"white"}}
                            descStyles={{color: "rgba(255, 255, 255, 0.76)"}}
                            valueStyles={{color:"white"}}
                        />
                </div>
    }
    getQuestions = () => {
        return this.createStatsAndejectAnswer2()
    }
    getGraph = () => {
        return this.createStatsAndejectAnswers1()
    }
    getUsers = () => {
        const innerWidth = getWindowWidth();
       return this.props.answers.map((item,index)=>{
            return <div style={{fontFamily:fontFamily5}} className={`${innerWidth<800 ? ' width-95-cent ' : ' width-80-cent '}min-height-100 j-start a-center padding-20 curved-corners nate-white-bg margin-t-10 margin-b-10`}>
                    <div style={{backgroundColor:"#FB6A63"}} className='round-up min-height-30  max-height-30 max-width-30 min-width-30   min-width-20 margin-r-20 nate-blue-bg  nate-white-text j-center a-center nate-white-bg'>
                        <span>{index+1}</span>
                    </div>
                    <div className='width-100-cent j-start a-center height-auto nate-grey-text'>
                        {item.name} : {item.email} 
                    </div>
                </div>
        })
    }
    getTable = () => {
        return <div className='width-100-cent height-100-cent  padding-20 a-center j-center'>
                         <OneColumnTable styles={{width:"100%",height:"100%",zIndex:"00",borderRadius:0}} getSelected={(selected) => {}}/>
                </div>
    }

    getMoreData = (limit,startDate,endDate) => {
        this.props.getAnswers(limit,startDate,endDate)
    }
    getAllQuestions = () => {
        let allQuestions = this.getQuestionBank()
        let questionNames = Object.keys(allQuestions)
       return questionNames.map((item,index) => {
            return <div style={{fontFamily:fontFamily5}} className='width-80-cent min-height-70 j-start  padding-20 curved-corners nate-white-bg margin-t-10 margin-b-10'>
            <div style={{backgroundColor:"#FB6A63"}} className='round-up min-height-30  min-width-30   min-width-20 margin-r-20 nate-blue-bg  nate-white-text j-center a-center nate-white-bg'>
                <span>{index+1}</span>
            </div>
            <div className='width-100-cent j-start a-center nate-grey-text'>
                {allQuestions[item].question}
            </div>
        </div>
        })
    }

    getResultsPages = () => {
        switch (this.props.resultType) {
            case 'Dashboard':
                return this.getDashBoard()
            case 'Question':
                return this.createStatsAndejectAnswers2()
            case 'Users':
                return this.getUsers()
            case 'Graph':
                return this.createStatsAndejectAnswers()
            default:
                break;
        }
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
            className='width-100-cent  height-60  j-center a-center curved-corners-more'>
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
            className='width-10-cent margin-r-10  j-center a-center curved-corners-more'>
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
        questionResults = this.createStatsAndejectAnswers2();
        graphResults = this.createStatsAndejectAnswers ;
        usersResults = this.getUsers();
        dashboardResults = this.getDashBoard();
    }
    render() {
        console.log(myCounter)
        alreadyLoaded++
        let institution = this.props.match.params.institution
        return (
            <div  className=' fit-background curved-corners j-start f-column width-100-cent height-auto margin-bottom-50'>
                {this.state.selectedHeader2 === 'Responses'
                ?<div  className=' curved-corners j-start f-column width-100-cent height-auto  '>
               
                <div className='width-100-cent f-column j-start  a-center  height-auto'>
                    <div className='nate-black-partial-bg width-100-cent j-start'>
                        <div>{this.downloadData()} </div>
                    </div>
                    {
                    this.props.dataReceived === false
                    ?<div className='d-flex height-100-cent a-center  j-center f-column'>
                        <Loader style={{borderRight:`2px solid white`}}  loaderIcon={<HourglassFull style={{color:"white"}}/>}/> 
                        <span style={{fontFamily:fontFamily5,color:'#FB6A63'}} className='nate-white-text'>Loading responses...</span>                   
                        <div className='width-100-cent height-300 j-center'>
                        </div>
                        {this.state.myobject.length}
                    </div>
                    :this.props.answers.length === 0
                    ?<div className='d-flex height-100-cent j-start a-center f-column'>
                        <span style={{fontSize:200}}>🥸</span>
                        <div className='width-100-cent nate-blue-bg j-center' style={{fontSize:20, color:"white", fontFamily:fontFamily5, fontWeight:300}}>Sorry, there are no responses for {institution} yet</div>                   
                        <div className='width-100-cent height-300 j-center'>
                     </div>
                    </div>
                    :this.getResultsPages()
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
    dispatch(getAnswers(10,getTodaysDate(),getTommorowsDate(),'initial'))
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

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ResultsPage));









