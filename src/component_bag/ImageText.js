import React, { Component } from 'react'
import { randomImages } from '../css/dummydata/dummyData';

export default class ImageText extends Component {
    constructor (props){
        super(props)
        this.state = {}
    }
    render() {
        const {data} = this.props
        const style = {
            textAlign:"center",
            fontSize: "50px",
	        fontweight: "700",
            webkitBackgroundClip: 'text',
            backgroundClip: 'text',
            backgroundPosition:"center",
            backgroundImage: `url('${data?data.image:randomImages}')`,
            color: 'transparent',
            ...this.props.style
        }
        return (
            <div style={style} >
                {data?data.text:"Pass text"}
            </div>
        )
    }
}
