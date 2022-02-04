import React, { Component } from 'react'
import Loader from './Loader'
import { Dns, School, Spa, Close, Replay } from '@mui/icons-material';
import { fontFamily3 } from '../contants/uiConstants';
import FromToDatePicker from './FromToDatePicker';

export default class ErrorPageServerError extends Component {
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
                <span style={{fontSize:'7.3rem'}}><Dns style={{fontSize:100, color:"#74515d"}} className='nate-grey-bg margin-r-10 width-50 height-50 nate-pink-text'/></span>
                {/* {this.props.noIcon
                ?<Loader/>
                :<Loader loaderColor={"#01B000"} loaderIcon={<Spa style={{color:"#01B000"}}/>}/>
                } */}
                {/* {
                    this.props.loaderText
                    ?<div style={{fontFamily:fontFamily3,marginTop:10,fontWeight:300}}>{this.props.loaderText}</div>
                    :null

                } */}
                <span className='nate-grey-text margin-b-30' style={{fontSize:20, fontFamily:fontFamily3,fontWeight:300, textAlign:"center",width:"60%"}} >Server error, please contact the system dministrator.</span>
                <Replay className={`nate-grey-text cursor-pointer ${this.props.loading?'rotate':null}`} style={{fontSize:60}} onClick = {() => {this.props.handleChange()}} />
            </div>
        )
    }
}

