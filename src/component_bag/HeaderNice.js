import React, { Component } from 'react'
import { fontFamily5 } from '../contants/uiConstants';
import { ArrowRightIcon } from '@mui/icons-material/ArrowRight';

export default class HeaderNice extends Component {
    constructor (props) {
        super(props)
        this.state = {
            selectedHeader:'',
        }
    }
    render() {
        const {selectedHeader,item} = this.state;
        return (
            <div 
                        className={`cursor-pointer j-start padding-r-40 ${selectedHeader===item.title?'nate-blue-text':'nate-grey-text'}`}
                        onClick={() => {
                            this.setState({selectedHeader:item.title,resultType:item.title})
                        }}
                        onMouseOver={() => {
                            this.setState({hoveredHeader:item.title})
                        }}
                    >
                    <div style={{ fontSize:30,fontWeight:"bolder",fontFamily:fontFamily5}} className='width-100-cent height-50 a-center font-1-2-em'>
                        <span className={`a-center ${selectedHeader===item.title?'':'hide-visible'}`} ><ArrowRightIcon style={{width:"40px", height:"40px"}}/></span> 
                        <span>{item.title}</span>
                        {/* <span className={`a-center ${selectedHeader===item.title?'':'hide-visible'}`} ><ArrowLeftOutlined style={{width:"40px", height:"40px"}}/></span>  */}
                    </div>
                    <span>
                    </span>
            </div>
        )
    }
}
