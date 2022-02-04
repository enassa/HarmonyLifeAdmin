import React, { Component } from 'react'
import { fontFamily5, QUESTION_BANK, PAGES } from '../../contants/uiConstants';
import { KeyboardBackspace } from '@mui/icons-material';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAnswers, getAnswerersOfAnswer } from '../../store/actions/answersActions';
import { getAnswerers, getAnswersOfAnswerer } from '../../store/actions/answerersAction';
import { readyForMapping } from '../../contants/generalFunctions';
import StaticsCard from '../../component_bag/StaticsCard';
import ProcessingAlertCard from '../../component_bag/ProcessingAlertsCard';
import HeaderCard from '../../component_bag/HeaderCard';
import AnswerersCard from '../../component_bag/AnswerersCard';
import StaticsCardAlt from '../../component_bag/StaticsCardAlt';
let page = undefined
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

class DetailsPage extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    ejectAnswers = () => {
        console.log(this.props.answersByAnswerer)

        if(readyForMapping(this.props.answersByAnswerer)){
            console.log(this.props.answersByAnswerer)
            return this.props.answersByAnswerer.map((item,index) => {
             return <StaticsCardAlt  key={index} id={index} cardData={QUESTION_BANK[index]}/>
                      
            })
        }
    }
    getAnswerers = () => {
        if(readyForMapping(this.props.answerersOfAnswer)){
            return this.props.answerersOfAnswer.map((alert, index) => {
                return <AnswerersCard
                            handleActionClick = {
                                (typeOfAction, data) => this.handleActionClick(typeOfAction, data)
                            } 
                            cardData = {alert}
                    />
            })
        }
    }
    returnToPrevPage = () => {
        this.props.history.goBack()
    }
    ejectData = () => {
        
        //    alert(page)
            switch (page) {
                case PAGES[2].url_name:
                    // users, get answers from user
                    return this.ejectAnswers()    
                    //  answer, get user who have answered this question
                case PAGES[3].url_name:
                    return this.getAnswerers()
                default:
                    break;
            }
    }
    componentDidMount(){
        console.log(this.props.answerers)
        const a = this.props.match.url
        const b = a.split('/')
        page = b[1]
    }
    render() {
        return (
            <div className=' curved-corners j-start f-column width-100-cent height-90-cent  max-height-90-cent'>
                <div className='width-100-cent height-100  j-end a-center padding-r-20'>
                    <div style={{paddingLeft:60,color:"grey",fontSize:30,fontWeight:"bolder",fontFamily:fontFamily5}} 
                         className='width-100-cent height-50 a-center font-1-2-em'>
                            <span onClick={() => {this.returnToPrevPage()}} className='a-center cursor-pointer nate-blue-text' ><KeyboardBackspace style={{width:"40px", height:"40px",marginRight:10}}/></span> 
                            <span onClick={() => {this.returnToPrevPage()}} className='a-center cursor-pointer nate-blue-text' >Return</span>
                        </div>
                    <span>
                        {/* <SearchBar 
                            disableFilter
                            handleClick = {(inputValue,selectedFilter) => {
                                this.props.handleClick(inputValue,selectedFilter)
                            }}
                            style={{
                                backgroundColor:"white", 
                                border:"0px",
                                color:"#B0B0B1",
                                width:250,
                               
                                fontFamily:fontFamily5, 
                                borderRadius:"100px", 
                                padding:"0px 10px"
                            }}
                            innerStyle = {{
                                color:"#B0B0B1",
                                fontWeight:"bolder", 
                                fontSize:20
                            }}
                        /> */}
                    </span>
                </div>
                <div className='width-100-cent y-scroll f-column j-start padding-t-20 a-center  height-100-cent'>
                    {<HeaderCard pageType = {page}/>}
                    {this.ejectData()}

                    {/* <div className='width-100-cent y-scroll f-column j-start padding-t-20 a-center  height-100-cent'></div> */}
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    dispatch(getAnswerersOfAnswer(10,'initial'))
    dispatch(getAnswersOfAnswerer(10,'initial'))
    return {
         // get answers sent by opened user
        getAnswerersOfAnswer: (limit=10,typeOfFetch) => dispatch(getAnswerersOfAnswer(limit,typeOfFetch)),
         // get users who answered the opened answer
        getAnswersOfAnswerer: (limit=10,typeOfFetch) => dispatch(getAnswersOfAnswerer(limit,typeOfFetch)),
  }
}
const mapStateToProps = (state) => {
    return {  
        answers:state.answersReducer.answers,
        // stores answers sent by opened user
        answersByAnswerer:state.answererDetailsReducer.answersByAnswerer,
        // stores users who answered the opened answer
        answerersOfAnswer:state.answerDetailsReducer.answerersOfAnswer,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(DetailsPage));






