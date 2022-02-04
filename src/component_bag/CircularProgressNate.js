import React, { Component } from 'react'
import { convertPercentToDegree } from '../contants/generalFunctions';
import { fontFamily5 } from '../contants/uiConstants';

export default class CircularProgressNate extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }
  
    render() {
        let sizeInPixels = 200
        let perCentValue = 80
        let defaultTextFontSize = (10/100) * sizeInPixels
        let loaderValue = convertPercentToDegree(perCentValue);
        let transparentSectionValue =  360 - loaderValue;
        let loaderThickness = 30
        let loaderTextColor = ''
        let loaderTextBackground = 'white'
        let backColor = ''
        let loaderColor = '#18A0FB' 
        const styles = {
            outerStyles: {
                minWidth:sizeInPixels, 
                minHeight:sizeInPixels,
                height:sizeInPixels,
                width:sizeInPixels
            },
            loaderStyle:{
                background:`conic-gradient(${loaderColor} ${loaderValue}deg, transparent ${transparentSectionValue}deg)`,
                borderRadius:'50%',
                fontFamily:fontFamily5
            },
            loaderTextBackground:{
                minWidth:`${100-loaderThickness}%`, 
                minHeight:`${100-loaderThickness}%`,
                backgroundColor:loaderTextBackground
            },
            textStyles:{
                fontSize:defaultTextFontSize,
                color:loaderTextColor
            },
            loaderBackGroundStyles:{
                backgroundColor:"#F7F7F7",
            }
        }
        return (
            <div style={styles.outerStyles} className={`round-up all-center position-relative`}>
                <div style ={styles.loaderBackGroundStyles} className='width-100-cent height-100-cent all-center  nate-blue-bg round-up'>
                <div style={styles.loaderTextBackground} className='width-40-cent height-40-cent nate-white-bg round-up all-center'>
                        <div style={styles.defaultTextFontSize}>{perCentValue}%</div>
                    </div>
                </div>
                <div style ={styles.loaderStyle} className='width-100-cent position-absolute height-100-cent all-center  nate-pink-bg round-up'>
                    <div style={styles.loaderTextBackground} className='width-40-cent  height-40-cent nate-white-bg round-up all-center'>
                        <div style={styles.textStyles}>{perCentValue}%</div>
                    </div>
                </div>
            </div>
        )
    }
}
