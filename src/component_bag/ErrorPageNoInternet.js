import React, { Component } from 'react'
import Loader from './Loader'
import { Replay, School, Spa } from '@mui/icons-material';
import { fontFamily3 } from '../contants/uiConstants';
import FromToDatePicker from './FromToDatePicker';
import { getAnswers } from '../store/actions/answersActions';
import { changeLoadingState } from '../store/actions/AppStateActions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class ErrorPageNoInternet extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render() {
        const myClasses = { 
            NULL:null,
            mainContainer:`d-flex pop-up-rise f-column j-center a-center fill-entire-page position-absolute z-highest`,
          } 
         const styles={
              mainContainer:{
                  backgroundColor:this.props.bgColor?this.props.bgColor:"rgb(255,255,255,0.9)",
                  zIndex:600000,
              }
          }
        return (
            <div className={myClasses.mainContainer} style={styles.mainContainer}>
                <span style={{fontSize:'7.3rem'}}>🙁</span>
                {/* {this.props.noIcon
                ?<Loader/>
                :<Loader loaderColor={"#01B000"} loaderIcon={<Spa style={{color:"#01B000"}}/>}/>
                } */}
                {/* {
                    this.props.loaderText
                    ?<div style={{fontFamily:fontFamily3,marginTop:10,fontWeight:300}}>{this.props.loaderText}</div>
                    :null

                } */}
                <span className='nate-grey-text margin-b-30' style={{fontSize:20, fontFamily:fontFamily3,fontWeight:300, textAlign:"center",width:"60%"}} >We can't reach the server, please check your internet connection and try again</span>
                <Replay className={`nate-grey-text cursor-pointer ${this.props.loading?'rotate':null}`} style={{fontSize:60}} onClick = {() => {this.props.handleChange()}} />
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
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ErrorPageNoInternet));


