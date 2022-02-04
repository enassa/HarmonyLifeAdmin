import React, { Component } from 'react'
import styles from "../css/descriptioncard.module.css"
import "../css/theme.css"
export default class DescriptionCard extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    render() {
        const{
            headerStyles,
            bodyStyles,
            imageStyles,
            reverseLayout,
            headerText,
            bodyText,
            imageSrc,
            outerStyles,
            actionButton,
        } = this.props;

        const  headerStyle = {
            // defaults styles on top here
            color:"#3C322A",
            ...headerStyles,
        }
        const  bodyStyle = {
            // defaults styles on top here
            ...bodyStyles,
        }
        const  imageStyle = {
            // defaults styles on top here
            width:300,
            height:300,
            borderRadius:1000,
            ...imageStyles,
        }
        const  outerStyle = {
            ...outerStyles,
        }
        return (
            reverseLayout
            ? <div id={styles["main-container"]} style={outerStyle}>
                <div id={styles["left-section"]}>
                    <div id={styles["body-container"]}>
                        <h1 style={headerStyle}>{headerText?headerText:"header text here"}</h1>
                        <span style={bodyStyle}>{bodyText?bodyText:"body text here"}</span>
                    </div>
                    {actionButton?<span id={styles["button-container"]}>{actionButton}</span>:null}
                </div>
                <div id={styles["right-section"]}>
                    <img style={imageStyle} src={imageSrc?imageSrc:null}></img>
                </div>
                </div>
            :   <div id={styles["main-container"]} style={outerStyle}>
                  <div id={styles["right-section"]}>
                    <img style={imageStyle} src={imageSrc?imageSrc:null}></img>
                  </div>
                  <div id={styles["left-section"]}>
                    <div id={styles["body-container"]}>
                    <h1 style={headerStyle}>{headerText?headerText:"header text here"}</h1>
                    <span style={bodyStyle}>{bodyText?bodyText:"body text here"}</span>
                    </div>
                    {actionButton?<span id={styles["button-container"]}>{actionButton}</span>:null}
                  </div>
                </div>
        )
    }
}
