import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import NavbarAlt2 from '../../component_bag/NavbarAlt2';
import { connect } from 'react-redux';
import { sendAnswers, getAnswers } from '../../store/actions/answersActions';
import { openSnackBar } from '../../store/actions/generalActions';
import InfoCard from '../../component_bag/InfoCard';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import InfoCard2 from '../../component_bag/InfoCard2';
import { capitalizeFirstLetter, cloneObject, getWindowWidth, localStorageGet, getTommorowsDate, getTodaysDate, getAsObjectFromLocalStorage } from '../../contants/generalFunctions';
import { deliveryQuestions, dineInQuestions, takeOutQuestions } from '../../dummydata/dummyData';
import AssignPage from '../../component_bag/AssignPage';
import OverlayLoader from '../../component_bag/OverlayLoader';
import { changeLoadingState } from '../../store/actions/AppStateActions';
import ErrorPage from '../../component_bag/ErrorPageNoRecords';
import ErrorPageNoRecords from '../../component_bag/ErrorPageNoRecords';
import ErrorPageUrlNotFound from '../../component_bag/ErrorPageUrlNotFound';
import ErrorPageNoInternet from '../../component_bag/ErrorPageNoInternet';
import ErrorPageServerError from '../../component_bag/ErrorPageServerErros';
let unRegistered = 0
class NewDashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            unRegistered:0,
        }
    }
    getQuestionBank = () => {
        let AnswersStat = undefined
        let serviceType = "harmony"
        if(serviceType==='harmony'){
            AnswersStat = cloneObject(deliveryQuestions)
        }else if(serviceType==='harmony'){
            AnswersStat =  cloneObject(takeOutQuestions)
        }else if(serviceType==='harmony'){
            AnswersStat = cloneObject(dineInQuestions)
        }
        return AnswersStat
    }
    computeUnRegistered = () => {
        unRegistered = 0
        this.props.answers.map((item,index) => {
            console.log(item.status)
            if(item.status !== "Registered"){
                unRegistered++
            }
        })
        return unRegistered
    }
    componentDidMount () {
        // this.props.changeLoadingState()
        this.props.answers.length?this.computeUnRegistered():console.log('waiting for data')
    }
    
    render() {
        const innerWidth = getWindowWidth();
        let totalApplications = this.props?.answers?.length
        let unRegistered = this.props.answers.length?this.computeUnRegistered():0
        let registered = totalApplications - unRegistered
        let percentage=  this.props.answers.length?(registered/totalApplications) * 100:0 
        let percentageRegistered =  Math.floor(percentage)
        let serviceToView = "harmony"
        let todaysDate = getTodaysDate()
        let tomorrowsDate = getTommorowsDate()
        return (
            <div className='width-100-cent height-100-cent f-column j-start a-start y-scroll '>
                <NavbarAlt2 style={{borderRadius:"", borderBottom:"1px solid #F7F7F7"}} title1={'MTN GHANA'} title2={'Achimota Branch'}/>
                <div>{}</div>
                {this.props.loading?<OverlayLoader loaderText = "Loading..."/>:null}
                {this.props.fetchError === 'NO_RECORDS_ERROR'?<ErrorPageNoRecords handleChange={(value,startDate,endDate)=>{this.props.getAnswers(10,todaysDate,tomorrowsDate)}} loaderText = "Loading..."/>:null}
                {this.props.fetchError === 'URL_NOT_FOUND_ERROR'?<ErrorPageUrlNotFound handleChange={(startDate,endDate)=>{this.props.getAnswers(10,todaysDate,tomorrowsDate)}} loaderText = "Loading..."/>:null}
                {this.props.fetchError === 'SERVER_ERROR'?<ErrorPageServerError handleChange={(value,startDate,endDate)=>{this.props.getAnswers(10,todaysDate,tomorrowsDate)}} loaderText = "Loading..."/>:null}
                {this.props.fetchError === 'NO_INTERNET_ERROR'?<ErrorPageNoInternet handleChange={(value,startDate,endDate)=>{this.props.getAnswers(10,todaysDate,tomorrowsDate)}} loaderText = "Loading..."/>:null}
                <div  className='width-100-cent height-100-cent y-scroll f-column j-start  a-center nate-white-partial-bg '>
                    <div style={{background:"#BDBDBD"}} className={`${innerWidth < 800 ? 'f-column a-center j-start' :'f-row a-start j-center padding-t-30'  } width-100-cent height-300  min-height-300  margin-b-50 `}>
                       
                        <InfoCard 
                            contents={{value:`${totalApplications}`, icon:<SupervisedUserCircleIcon/>, desc:"Total Applications"}}
                            outerStyles={{width:284,height: 152, borderRadius:"5px", marginBottom:20, background:"cornflowerblue"}}
                            iconStyles={{color:"white"}}
                            descStyles={{color: "rgba(255, 255, 255, 0.76)"}}
                            valueStyles={{color:"white"}}
                        />
                         <InfoCard 
                            contents={{value:`${registered}`, icon:<SupervisedUserCircleIcon/>, desc:"Total Registered"}}
                            outerStyles={{width:284,height: 152,borderRadius:"5px", marginBottom:20, background:"green"}}
                            iconStyles={{color:"white"}}
                            descStyles={{color: "rgba(255, 255, 255, 0.76)"}}
                            valueStyles={{color:"white"}}
                        />
                        <InfoCard 
                            contents={{value:`${unRegistered}`, icon:<SupervisedUserCircleIcon/>, desc:"Total Unregistered"}}
                            outerStyles={{width:284,height: 152, borderRadius:"5px", marginBottom:20, background:"red"}}
                            iconStyles={{color:"white"}}
                            descStyles={{color: "rgba(255, 255, 255, 0.76)"}}
                            valueStyles={{color:"white"}}
                        />
                        <InfoCard2 
                            contents={{value:`${percentageRegistered}`, icon:<SupervisedUserCircleIcon/>, desc:"Percentage Registered"}}
                            outerStyles={{width:284,height: 152, borderRadius:"5px", marginBottom:20, background:"orange"}}
                            iconStyles={{color:"white"}}
                            descStyles={{color: "rgba(255, 255, 255, 0.76)"}}
                            valueStyles={{color:"white"}}
                        />
                        {/* <InfoCard2
                            contents={{text:"jj", icon:<SupervisedUserCircleIcon/>, desc:"Form tile"}}
                            text = {`${capitalizeFirstLetter(serviceToView)}`}
                            outerStyles={{width:284,height: 152,  borderRadius:"5px", marginBottom:20,  background:"linear-gradient(90deg, #15B48E 0%, rgba(140, 200, 67, 0.33) 107.07%)"}}
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
                        /> */}
                </div>
                <div style={{left:0}} className='width-100-cent'>
                    <div style={{top:'-170px', left:'5%', right:"5%"}} className='width-90-cent curved-corners  height-auto nate-blue-bg margin-b-50 margin-t-50 position-relative'>
                        <AssignPage cardData = {this.props.answers}/>
                    </div>
                </div>
                
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    // dispatch(getAnswers(10,getTodaysDate(),getTommorowsDate(),'initial'))
    return {
        getAnswers: (limit=10,startDate,endDate) => dispatch(getAnswers(limit,startDate,endDate)),
        changeLoadingState: (userData) => dispatch(changeLoadingState()),
  }
}
const mapStateToProps = (state) => {
    console.log(state.answersReducer.fetchErrors)
    return {
        answers:state.answersReducer.answers,
        fetchError:state.answersReducer.fetchErrors,
        loading: state.appState.loading,
        dataReceived: state.answersReducer.dataReceived,
        loading: state.appState.loading,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(NewDashboard));

