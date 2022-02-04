import React, { Component } from 'react'

export default class AssignPage extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    controlDisplay = (e) => {
        e.preventDefault(e)
        this.props.handleActionClick(e)
    }
    render() {
        return (
            <div 
               
                className='width-100-cent height-100-cent a-center j-center above-all top-0 left-0 position-fixed'
            >
                <div
                    onClick = {(e) =>this.controlDisplay(e) }
                    className='width-100-cent height-100-cent a-center j-center above-all top-0 left-0 nate-black-more-partial-bg position-fixed'
                ></div>
                <div className='width-80-cent above-all  curved-corners height-80-cent nate-white-bg elevated-blend'>

                </div>
            </div>
        )
    }
}
