import React, { Component } from 'react'
import Loader from './Loader'
import { School, Spa } from '@mui/icons-material';
import { fontFamily3 } from '../contants/uiConstants';

export default class OverlayLoader extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render() {
        const myClasses = { 
            NULL:null,
            mainContainer:`d-flex pop-up-rise f-column left-0 top-0 j-center a-center fill-entire-page position-fixed z-highest`,
          } 
         const styles={
              mainContainer:{
                  backgroundColor:this.props.bgColor?this.props.bgColor:"rgb(255,255,255,0.9)",
                  zIndex:600000,
              }
          }
        return (
            <div className={myClasses.mainContainer} style={styles.mainContainer}>
                {this.props.noIcon
                ?<Loader/>
                :<Loader loaderColor={"#01B000"} loaderIcon={<Spa style={{color:"#01B000"}}/>}/>
                }
                {
                    this.props.loaderText
                    ?<div style={{fontFamily:fontFamily3,marginTop:10,fontWeight:300}}>{this.props.loaderText}</div>
                    :null

                }
   
            </div>
        )
    }
}

