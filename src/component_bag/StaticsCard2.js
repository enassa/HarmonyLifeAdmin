import React, { Component } from 'react'
import { cardData, fontFamily5 } from '../contants/uiConstants';
import { Doughnut } from 'react-chartjs-2';
import PopUpButton from './PopUpButton';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAnswerersOfAnswer, getAnswers, openAnswer } from '../store/actions/answersActions';
import { getWindowWidth } from '../contants/generalFunctions';
const emojis = ['😡','☹️','😐','😊','😍']



class StaticsCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            cardData:{},
            myResponse:[],
            answersTally:[],
            colors:[],
            resPonseAndTally:[]
        }
    }
    handleClick = () => {
        const {cardData,id} = this.props
        this.props.getAnswerersOfAnswer(cardData)
        this.props.openAnswer(cardData)
        this.props.history.push(`answer/${id+1}`) 
        // console.log(cardData)
    }
    processAnswers = () => {
        const colors = ["#4c164c","orange","#4c164c","#4c164c","yellow","#4c164c","blue",'red','purple','indigo']
        const getColor = (value) => {
            let selectedColor =  colors[value]
            return selectedColor;
        }
        const {cardData} = this.props
        let answers = cardData.answers
        let responses = cardData.responses
        let resPonseAndTally = []
        let myColors = []
        let tally = []
        function getOccurrence(array, value) {
            var count = 0;
            array.forEach((v) => (v === value && count++));
            return count;
        }
        // console.log(cardData)
        if(responses!==undefined){
            let counter = 0
            responses.forEach(response => {
                let obj = {
                    
                }
                let occurance = getOccurrence(answers,response)
                tally.push(occurance)
                obj['response'] = response 
                obj['occurance']  = occurance 
                let a = getColor()
                myColors.push(getColor(counter))
                counter++
                resPonseAndTally.push(obj)

            })
        }
        
        // console.log("t",tally,"w",responses,"rst",resPonseAndTally)
        this.setState({answersTally:tally,myResponse:responses,resPonseAndTally:resPonseAndTally,colors:myColors})
    }
    getAnswersStat(){
        // console.log(this.state.resPonseAndTally)
        const res = this.props.cardData.responses
        if(res !== undefined){
            return this.state.resPonseAndTally.map((item,inded)=>{
                return  <div style={{backgroundColor:"aliceblue"}} className='width-90-cent j-space-between margin-b-10 curved-corners padding-10 '>
                                {emojis.includes(item.response)
                                ?<span style={{fontSize:30}}>{item.response}</span>
                                :<span >{item.response}</span>
                                }
                                <span style={{padding:"0px 20px"}} className='curved-corners nate-blue-bg height-80-cent nate-white-text' >
                                   {item.occurance}
                                </span>
                        </div>
            })
        }
        else{
            const {answers} = this.props?.cardData
            console.log(answers)
            return answers.map((item,index)=>{
                return  <div style={{backgroundColor:"aliceblue"}} className='width-90-cent j-space-between margin-b-10 curved-corners padding-10 '>
                                {emojis.includes(item?.response)
                                ?<span style={{fontSize:30}}>{item.response}</span>
                                :<span >{answers[index]}</span>
                                }
                                <span style={{padding:"0px 20px"}} className='curved-corners nate-blue-bg height-80-cent nate-white-text' >
                                   {item?.occurance}
                                </span>
                        </div>
            })
        }
        
    }
    componentDidMount(){
        this.processAnswers()
    }
    render() {
        let innerWidth = getWindowWidth()
        const {cardData} = this.props
        // console.log(cardData.answers)
        const NUT_DATA = {
            labels: cardData.responses,
            datasets: [
              {
                label: this.state.response,
                data: this.state.answersTally,
                backgroundColor:this.state.colors,
                borderWidth: 1,
              },
            ],
          };
        
        // let checkIfGroup = 
        // console.log(innerWidth)
        // if(cardData.responses == undefined) {
            return (
                <div 
                style={{zIndex:"600",height:246,minHeight:246, backgroundColor:"white", borderBottom:"2px solid blue"}}
                className={`overflow-hidden ${innerWidth<900?innerWidth<600?'height-auto width-90-cent a-center':'height-auto width-95-cent a-center':'height-500 min-height-400 width-80-cent '} nate-white-bg  f-column j-start cursor-pointer padding-20 position-relative top-0 margin-b-40  elevated-blend`}
                >
                <div></div>
                <div className='width-100-cent '>{cardData.question}</div>
                <div style={{fontSize:12, color:"#1876D1",fontFamily:fontFamily5}} className='width-100-cent d-flex '>
                {cardData.answers.length} &nbsp; responses
                </div>
                <div className='d-flex width-100-cent height-100-cent j-start '>
                    <div className='width-100-cent height-100-cent  margin-t-10 d-flex a-start j-start  '>
                        <div className='width-100-cent height-80-cent padding-10 y-scroll curved-corners  elevated-blend '>
                        {this.getAnswersStat()}
                        </div>
                        
                    </div>
                </div>
                </div>
            )
        // }
        // else{
        //     return (
        //         <div 
        //         // style={{backgroundColor:"milk"}}
        //         style={{zIndex:"600", backgroundColor:"white", borderBottom:"2px solid blue"}}
        //         className={`curved-corners ${innerWidth<900?innerWidth<600?'height-auto padding-top-20 padding-b-20 width-90-cent a-center':'height-auto padding-top-20 padding-b-20  width-90-cent a-center':'height-500 min-height-400 width-80-cent '}  f-column j-start cursor-pointer padding-20 position-relative top-0 margin-b-40  elevated-blend`}
        //     >
        //         <div></div>
        //         <div className='width-100-cent '>{cardData.question}</div>
        //         <div style={{fontSize:12, color:"#1876D1",fontFamily:fontFamily5}} className='width-100-cent d-flex '>
        //         {cardData.answers.length} &nbsp; responses
        //         </div>
        //         <div className={`d-flex width-100-cent height-100-cent j-start ${innerWidth<900?innerWidth<600?'j-start f-column a-center':'j-start f-column a-center':'j-start f-row'}`}>
        //             <div className={`width-100-cent  margin-t-10 d-flex height-100-cent ${innerWidth<900?innerWidth<600?'j-center margin-t-40 ':'j-center margin-t-40 ':'a-start j-start  '} `}>
        //                 <div className={`width-500 ${innerWidth<900?innerWidth<600?'height-auto ':'height-auto ':'height-80-cent y-scroll'}  padding-10 y-scroll curved-corners  elevated-blend `}>
        //                 {this.getAnswersStat()}
        //                 </div>
                        
        //             </div>
        //             <div style={{right:30, top:70}} className={`width-300 height-250 ${innerWidth<900?innerWidth<600?'margin-t-40 margin-b-40':'margin-t-40 margin-b-40':'margin-r-100'}  d-flex a-center j-center`}>
        //                     <Doughnut  className='d-flex j-start'  data={NUT_DATA} />
        //             </div>
        //         </div>
                
        //         {/* <div className='width-100-cent a-center min-height-20 j-end position-absolute bottom-20 right-20'>
        //                 <PopUpButton handleClick={()=>{this.handleClick()}} outerClass={'elevated-blend'} innerStyles={{backgroundColor:"white", color:"#1876D1"}} buttonText="Details..."/>
        //         </div> */}
        //     </div>

        //     )
        // }
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAnswerersOfAnswer: (limit=10,typeOfFetch) => dispatch(getAnswerersOfAnswer(limit,typeOfFetch)),
        openAnswer: (limit=10,typeOfFetch) => dispatch(openAnswer(limit,typeOfFetch)),
  }
}
const mapStateToProps = (state) => {
    return {
        // answers:state.answersReducer.answers,
        // loading: state.appState.loading,
        "":"",

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(StaticsCard));
