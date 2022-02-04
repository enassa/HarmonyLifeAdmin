import React, { Component } from 'react'
import Loader from './Loader'
import { School, Spa } from '@mui/icons-material';
import { fontFamily3 } from '../contants/uiConstants';
import FromToDatePicker from './FromToDatePicker';

export default class ErrorPageNoRecords extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render() {
        const myClasses = { 
            NULL:null,
            mainContainer:`d-flex pop-up-rise f-column j-center a-center fill-entire-page z-highest`,
          } 
         const styles={
              mainContainer:{
                  backgroundColor:this.props.bgColor?this.props.bgColor:"rgb(255,255,255,0.9)",
                  zIndex:600000,
              }
          }
        return (
            <div className={myClasses.mainContainer} style={styles.mainContainer}>
                <span style={{fontSize:'7.3rem'}}>🥸</span>
                {/* {this.props.noIcon
                ?<Loader/>
                :<Loader loaderColor={"#01B000"} loaderIcon={<Spa style={{color:"#01B000"}}/>}/>
                } */}
                {/* {
                    this.props.loaderText
                    ?<div style={{fontFamily:fontFamily3,marginTop:10,fontWeight:300}}>{this.props.loaderText}</div>
                    :null

                } */}
                <span className='nate-grey-text margin-b-30' style={{fontSize:20, fontFamily:fontFamily3,fontWeight:300, textAlign:"center",width:"60%"}} >
                    Sorry, there are no applications for the timeframe chosen, please change the time frame
                </span>
                <div className='width-auto  nate-grey-bg curved-corners-more'>                
                    <FromToDatePicker handleChange = {(startDate,endDate) => {this.props.handleChange(10,startDate,endDate)}}/>
                </div>
   
            </div>
        )
    }
}

