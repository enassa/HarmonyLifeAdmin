import { DoneAll } from '@mui/icons-material';
import React, { Component } from 'react'
import { randomImages } from '../dummydata/dummyData';
import { fontFamily5 } from '../contants/uiConstants';

export default class ChatBubble extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    getSendComponent = () => {
        const {cardData,sendMessage} = this.props
        return <div className='width-100-cent height-auto j-end margin-b-20 '>
                <div style={{borderRadius:"50px 30px 0px 50px",backgroundColor:"#009AFF"}} className='width-auto max-width-300 elevated-blend padding-20 padding-b-5 height-auto f-column j-start'>
                    <div style={{fontFamily:fontFamily5,color:"#89F3FF"}} className='nate-grey-text'>
                        {cardData.message}
                    </div>
                    <div style={{fontSize:11,color:"#909090",}} className='width-100-cent height-20  j-end'>
                        <span className='all-center margin-r-5'><DoneAll style={{color:'#1CAAE7',width:18}}/></span>
                        <span className='margin-r-10 all-center'>{cardData.time}</span> 
                    </div>
                </div>
                <div className='height-100-cent all-center'>
                    <div style={{backgroundImage:`url(${randomImages})`}} className='width-30 height-30 min-width-30 min-height-30  fit-background margin-l-20  round-up'></div>
                </div>
            </div>
    }
    getReceivedComponent = () => {
        const {cardData,sendMessage} = this.props
        return <div className='width-100-cent  height-auto j-start margin-b-20 max-width-300'>
                <div className='height-100-cent all-center'>
                    <div style={{backgroundImage:`url(${randomImages})`}} className='width-30 height-30 min-width-30 min-height-30  fit-background margin-r-20  round-up'></div>
                </div>                
                <div style={{borderRadius:"30px 50px 50px 0px",}} className='width-auto  elevated-blend padding-20 padding-b-5  height-auto f-column j-start'>
                    <div style={{fontFamily:fontFamily5}} className='nate-grey-text'>
                        {cardData.message}
                    </div>
                    <div style={{fontSize:11,color:"#909090"}} className='width-100-cent height-20  j-end'>
                        {/* <span className='all-center margin-r-5'><DoneAll style={{color:'#1CAAE7',width:18}}/></span> */}
                        <span className='margin-r-10 all-center'>{cardData.time}</span> 
                    </div>
                </div>
            </div>
    }
    render() {
        const {cardData} = this.props
        return cardData.type === 'send'
                ?this.getSendComponent()
                :this.getReceivedComponent()
    }
}
