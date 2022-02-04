import { LocationOn } from '@mui/icons-material';
import React, { Component } from 'react'
import { fontFamily2, fontFamily5, fontFamily3, fontFamily6 } from '../contants/uiConstants';
import { randomImages } from '../dummydata/dummyData';

export default class ChatContactCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render() {
        const {image,name,time,messageCount,message,location,cardData} = this.props
        return (
            <div style={{borderTop:"1px solid #eeee"}} className='width-100-cent cursor-pointer padding-t-10 padding-b-10 height-100 j-start a-center  min-width-100 margin-1-20'>
                <div style={{backgroundImage:`url('${cardData.image}')`}} className='width-50 margin-l-20 margin-r-10 height-50 min-width-50 min-height-50 fit-background  round-up b'></div>
                <div className='width-100-cent height-100-cent j-space-between f-column  '>
                    <div  className='width-100-cent j-space-between a-center no-break  elipse-overflow'>
                        <span style={{fontFamily:fontFamily5}}>{cardData.name}</span>
                        <span style={{fontSize:10, paddingRight:10,}} className='nate-grey-text all-center elipse-overflow'>{cardData.time}</span>
                        </div>
                    <div style={{color:"#666666",fontFamily:fontFamily6}} className='width-100-cent j-start a-center  elipse-overflow'>{cardData.message}</div>
                    <div style={{fontSize:8, color:"#666666",fontFamily:fontFamily3}} className='width-100-cent j-start a-center elipse-overflow'>
                       <span className=' all-center'><LocationOn style={{height:10}}/></span> 
                       <span className=' all-center'>{cardData.location}</span>
                    </div>
                </div>
            </div>
        )
    }
}
