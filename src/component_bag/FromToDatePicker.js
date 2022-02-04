import React, { Component } from 'react'
import { getTodaysDate, getTommorowsDate, getWindowWidth } from '../contants/generalFunctions'
import { fontFamily3 } from '../contants/uiConstants'

export default class FromToDatePicker extends Component {
    constructor (props){
        super(props)
        this.state = {
            startDate:getTodaysDate(),
            endDate:getTommorowsDate()
        }
    }
    getYYYMMDDFormat = (date) => {

    }
    sendChange = () => {
        this.props.handleChange
                ?this.props.handleChange(this.state.startDate,this.state.endDate)
                :console.log(this.state.startDate,this.state.endDate)
    }
    handleChange = (changeType,date) => {
        if(changeType === 'start'){
            this.setState({startDate:date},() =>{
                this.sendChange()
            })
        }else if(changeType === 'end'){
            this.setState({endDate:date},() =>{
                this.sendChange()
            })
        }

        // this.props.handleChange?this.props.handleChange(date,)
    }
    render() {
        const innerWidth = getWindowWidth()
        return (
            <div style={{transform:'scale(0.9)',fontFamily:fontFamily3, fontWeight: 300}} className={`padding-b-20 ${innerWidth<800?'f-column a-start':'f-row a-center ' }  height-100-cent nate-grey-text j-center a-center padding-t-20`}>
                <span>
                    <span>From: </span>
                    &nbsp;
                    <input defaultValue={getTodaysDate()} onChange={(e) => {this.handleChange('start',e.target.value)}} className='border-0 cursor-pointer curved-corners padding-10' type="date" />
                </span>
                &nbsp;
                <span>
                    &nbsp;
                    <span>To: </span>&nbsp;&nbsp;
                    <input defaultValue={getTommorowsDate()} onChange={(e) => {this.handleChange('end',e.target.value)}} className='border-0 cursor-pointer curved-corners padding-10' type='date'/>
                </span>
            </div>
        )
    }
}
