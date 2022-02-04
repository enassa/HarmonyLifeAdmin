import React, { Component } from 'react';

class FlexGridLayOut extends Component {
    constructor (props) {
        super(props)
        this.state={}
    }
    render() {
        const style = {
            display: "flex", 
            justifyContent: "flexStart",
            flexFlow: "row",
            flexWrap: "wrap" ,
            alignContent: "flexStart",
            overflowY: "auto",
            width:"100%",
            backGroundColor:"red",
            ...this.props.style
        }
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}

export default FlexGridLayOut;