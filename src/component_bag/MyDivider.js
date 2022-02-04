import React, { Component } from 'react'

export default class MyDivider extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        const style= {
            // backgroundColor:"grey",
            ...this.props.style
        }
        return (
            <div style={style} className='width-100-cent height-1 nate-navy-bg'>
                
            </div>
        )
    }
}
