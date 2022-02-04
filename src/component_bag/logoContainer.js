import React, { Component } from 'react'
export default class LogoContainer extends Component {
    
    handleClick = (value) => {
        this.props.handleClick
        ?this.props.handleClick(value)
        :alert("button Clicked, pass a 'handleClick' prop to control event ")
    }
    
    render() {
        const{
            imageSrc,
            description,
            outerStyles,
            imageStyles,
            textStyles, 
            outerClasses, 
            innerClasses,
            logoText,
        } = this.props;

        const imageStyle = {
            // defaults styles on top her
            width: "70px",
            height: "70px",
            cursor:"Pointer",
            ...imageStyles,
        }
        const textStyle = {
            // defaults styles on top her
            fontSize:20,
            fontFamily:"Helvetica Neue",
            cursor:"Pointer",
            color:"white",
            // wordBreak: "keep-all",
            // minWidth:"200px",
            ...textStyles,
        }
        const outerStyle = {
            // defaults styles on top here
            width: "auto",
            height: "100%",
            cursor:"Pointer",
            display:"flex",
            alignItems:"center",
            fontFamily:"400px",
            ...outerStyles
        }
    
        const innerClass = `
            ${innerClasses}
        `
        const outerClass = `
            ${outerClasses}
        `
        return (
            <div 
                onClick={value=>this.handleClick(value)} 
                style={outerStyle} 
                className={outerClass}
            >
                <img style={imageStyle} 
                    className={innerClass} 
                    src={imageSrc?imageSrc:null} 
                    alt={description?description:""}
                />
                <span style={textStyle}>{logoText?logoText:""}</span>
            </div>
        )
    }
}
