

import { Autorenew, Done, MoreHoriz } from '@material-ui/icons';
import React, { Component } from 'react';
import Moment from 'react-moment';
import { randomDate } from '../contants/generalFunctions';
const timeLines = [
    {
        time:randomDate(),
        state:'pending',
        heading:'00',
        description:'Purchasing of Items'
    },
    {
        time:randomDate(),
        state:'processing',
        heading:'00',
        description:'Tranferance of items to site'
    },
    {
        time:randomDate(),
        state:'done,',
        heading:'00',
        description:'Items off loading'
    },
    {
        time:randomDate(),
        state:'done,',
        heading:'00',
        description:'Items off loading'
    },
    {
        time:randomDate(),
        state:'done,',
        heading:'00',
        description:'Items off loading'
    },
    {
        time:randomDate(),
        state:'done,',
        heading:'00',
        description:'Items off loading'
    },
    {
        time:randomDate(),
        state:'done,',
        heading:'00',
        description:'Items off loading'
    },
]

class MyTimeLines extends Component {
     ejectTimeLines = () => {
        let counter = 0;
        const {cardData} = this.props;
        let timeLines = cardData!==undefined?cardData:[]
        const itemsLength = timeLines.length;
        return  timeLines.map((item,index) => {
            counter ++;
            return  <div className='full-width  d-flexj-start a-center height-100 margin-b-50 roboto-font '>
                            <div className='d-flex height-100-cent f-column j-start  a-center margin-r-13'>
                                <div style={{backgroundColor:`${item.state==='pending'?'#DC004E':null}`}} 
                                    className={` ${item.state==='processing'?'nate-gold-bg':'nate-green-bg'} height-10 width-10 margin-b-10  d-flex nate-white-text j-center a-center  round-up elevated-cute padding-20`}>
                                    {item.state==='pending'?<MoreHoriz/>
                                    :item.state==='processing'?<Autorenew/>:<Done/>}
                                </div>
                                {counter!==itemsLength?<div className={`height-50 width-2 material-grey-bg  elevated-cute `}></div>:null}
                            </div>
                            <div className='height-100-cent width-100-cent'>
                                <div style={{color:'rgb(0,0,0,0.87)'}} className={`elevated-blend nate-grey-text width-100-cent  padding-l-20 min-height-68 margin-b-5 padding-10`}>
                                    <h5 style={{fontWeight:500}}>{`USD ${index+1}00`}</h5>
                                    <p>{item.stageName}</p>
                                </div>
                                <div style={{fontSize:10}} className='d-flex j-start material-grey-text-2 padding-l-20'>
                                    <Moment parse="YYYY-MM-DD HH:mm">
                                        {item.endDate}
                                    </Moment>
                                </div>
                            </div>
                    </div>
        })
    }

    render() {
        return (
            <div className="fill d-flex f-column ">
              {this.ejectTimeLines()}
            </div>
        );
    }
}

export default MyTimeLines;