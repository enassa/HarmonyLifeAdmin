import React, {Component} from 'react';

class HeaderWithIcon extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const style = {
            fontFamily: "Helvetica Neue",
            marginTop: "5%",
            marginBottom: "5%",
            width: "au",
            fontStyle: "normal",
            fontWeight: "300",
            lineHeight: "40px",
            color: "#223464 ",
            marginLeft: "6%",
            cursor: "pointer",
            ...this.props.style
        }
        return (
            <h1 style={style}>
                <span>{
                    this.props.text ? this.props.text : "Pass text prop"
                }</span>
                <span style={{marginLeft: "10px"}}
                    className="anime-bounce-x">
                    {this.props.icon ? this.props.icon : null}</span>
            </h1>
        )
    }
}

export default HeaderWithIcon;
