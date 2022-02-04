import React, { Component } from 'react';

class Skewed extends Component {
   
    render() {
        const style={
            background: "linear-gradient(36deg, rgba(12,203,238,1) 0%, rgba(17,114,238,1) 100%)",
            transform:"skew(0deg, -10deg)",
            padding:"200px 0",
            marginTop:"-10%",
            height:"70%",
            WebkitTransform:"skew(0deg, -10deg)",
            width:"100%",
            ...this.props.style,
        }
        const contentStyle ={
            width:"100%",
            height:"100%",
            margin: "0 auto",
            top:"0px",
            left:"0px",
            position:"absolute",
            // zIndex:"2",
        }
        const backgroundStyle ={
            width:"100%",
            height:"100%",
            margin: "0 auto",
            top:"0px",
            left:"0px",
            position:"absolute",
            background:"#172B4D "
        }
        return (
            <div style={{width:"100%", height:"100%"}}>
                <div style={backgroundStyle}>

                </div>
                <div style={style}>
                    
                </div>
                <div style={contentStyle}>
                        {this.props.children}
                    </div>
            </div>
            
        );
    }
}

export default Skewed;
