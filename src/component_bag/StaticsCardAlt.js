import React, { Component } from 'react'
import { fontFamily5 } from '../contants/uiConstants';
import { Doughnut } from 'react-chartjs-2';
import PopUpButton from './PopUpButton';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAnswerersOfAnswer, openAnswer } from '../store/actions/answersActions';

const NUT_DATA = {
    labels: ["Yes", "No", "Maybe", "No Answer", "Non", "Nothing"],    datasets: [
      {
        label: "# of Votes",
        data: [4, 19, 14, 5, 5, 1],
        backgroundColor: [
          "#4c164c",
          "orange",
          "#4c164c",
          "#4c164c",
          "yellow",
          "#4c164c",
        ],
        borderWidth: 1,
      },
    ],
  };
  


class StaticsCard extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    handleClick = () => {
        const {cardData,id} = this.props
        this.props.getAnswerersOfAnswer(cardData)
        this.props.openAnswer(cardData)
        this.props.history.push(`answer/${id+1}`) 
        // console.log(cardData)
    }
    render() {
        const {cardData} = this.props
        return (
            <div 
                className='width-80-cent f-column j-start cursor-pointer height-500 padding-20 position-relative top-0 margin-b-40 min-height-400 elevated-blend'
            >
                <div></div>
                <div className='width-95-cent '>{cardData.question}</div>
                <div style={{fontSize:12, color:"#1876D1",fontFamily:fontFamily5}} className='width-100-cent d-flex '>
                    150 responses
                </div>
                <div className='width-100-cent height-100-cent margin-t-10 d-flex a-start j-start  '>
                    <div className='width-500 height-80-cent padding-10 y-scroll curved-corners  elevated-blend '>
                        <div style={{backgroundColor:"aliceblue"}} className='width-90-cent j-space-between margin-b-10 curved-corners padding-10 '>
                                <span>Yes</span>
                                <span style={{padding:"0px 20px"}} className='curved-corners nate-blue-bg height-80-cent nate-white-text' >200</span>
                        </div>
                        <div style={{backgroundColor:"aliceblue"}} className='width-90-cent j-space-between margin-b-10 curved-corners padding-10 '>
                                <span>Yes</span>
                                <span style={{padding:"0px 20px"}} className='curved-corners nate-blue-bg height-80-cent nate-white-text' >200</span>
                        </div>
                        <div style={{backgroundColor:"aliceblue"}} className='width-90-cent j-space-between margin-b-10 curved-corners padding-10 '>
                                <span>Yes</span>
                                <span style={{padding:"0px 20px"}} className='curved-corners nate-blue-bg height-80-cent nate-white-text' >200</span>
                        </div>
                        <div style={{backgroundColor:"aliceblue"}} className='width-90-cent j-space-between margin-b-10 curved-corners padding-10 '>
                                <span>Yes</span>
                                <span style={{padding:"0px 20px"}} className='curved-corners nate-blue-bg height-80-cent nate-white-text' >200</span>
                        </div>
                        <div style={{backgroundColor:"aliceblue"}} className='width-90-cent j-space-between margin-b-10 curved-corners padding-10 '>
                                <span>Yes</span>
                                <span style={{padding:"0px 20px"}} className='curved-corners nate-blue-bg height-80-cent nate-white-text' >200</span>
                        </div>
                        <div style={{backgroundColor:"aliceblue"}} className='width-90-cent j-space-between margin-b-10 curved-corners padding-10 '>
                                <span>Yes</span>
                                <span style={{padding:"0px 20px"}} className='curved-corners nate-blue-bg height-80-cent nate-white-text' >200</span>
                        </div>
                    </div>
                    
                </div>
                <div style={{right:30, top:70}} className='width-250 height-250 position-absolute d-flex a-center j-center'>
                            <Doughnut  className='d-flex j-start'  data={NUT_DATA} />
                </div>
                
            </div>
        )
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
