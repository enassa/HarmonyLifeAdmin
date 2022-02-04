import React, { Component } from 'react'
import { randomImages } from '../dummydata/dummyData';
import { FiberManualRecord} from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { fontFamily5 } from '../contants/uiConstants';

export default class UserStateBox extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        const {cardData} = this.props
        return (
            <div className='width-200 height-60  j-start a-center'>
                <div style={{backgroundImage:`url(${randomImages})`}} className='fit-background  margin-r-10 width-40  height-40 min-width-40 min-height-40 round-up'></div>
                <div className='width-1-cent height-100-cent f-column j-start a-start'>
                    <div className='width-1-cent height-100-cent j-start a-center'>
                        <span style={{fontFamily:fontFamily5}} className='no-break a-center'>{cardData?.name}</span> 
                        <span className='no-break a-center nate-green-text'><FiberManualRecord style={{width:15, height:15}}/></span>
                    </div>
                    <div style={{color:"#E97141", fontSize:10}} className='width-100-cent nate-pink-text j-start a-start height-100-cent'>
                        <LocationOnIcon style={{width:15, height:15}}  /> 
                        <span>{cardData?.location}</span>
                    </div>
                </div>
            </div>
        )
    }
}
