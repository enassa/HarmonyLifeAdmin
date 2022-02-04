import React, { Component } from 'react'
import NewAlertCard from '../../component_bag/NewAlertCard';
import SearchBar from '../../component_bag/SearchBar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { letteringColor6, fontFamily4, fontFamily5 } from '../../contants/uiConstants';
import ResolvedAlertCard from '../../component_bag/ResolvedAlertCard';
import PrankAlertCard from '../../component_bag/PrankAlertCard.js';
const alerts = [
    {
        sender:"",
        area:"",
        cordinates:"",
    },
    {
        sender:"",
        area:"",
        cordinates:"",
    },
    {
        sender:"",
        area:"",
        cordinates:"",
    },
    {
        sender:"",
        area:"",
        cordinates:"",
    },
    {
        sender:"",
        area:"",
        cordinates:"",
    },
    {
        sender:"",
        area:"",
        cordinates:"",
    },
    {
        sender:"",
        area:"",
        cordinates:"",
    }
]

export default class PrankAlerts extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    getNewAlerts = () => {
        return alerts.map((alert, index) => {
            return <PrankAlertCard cardData = {alert}/>
        })
    }
    render() {
        return (
            <div className=' curved-corners j-start f-column width-100-cent height-90-cent overflow-hidden max-height-90-cent '>
                <div className='width-100-cent height-100  j-end a-center padding-r-20'>
                    <div style={{paddingLeft:60,color:"grey", fontSize:30,fontWeight:"bolder",fontFamily:fontFamily5}} className='width-100-cent height-50 a-center font-1-2-em'>
                               <span className='a-center' ><ArrowRightIcon style={{width:"40px", height:"40px"}}/></span> 
                               <span>Prank Alerts</span>
                        </div>
                    <span>
                    <SearchBar 
                            disableFilter
                            handleClick = {(inputValue,selectedFilter) => {
                                this.props.handleClick(inputValue,selectedFilter)
                            }}
                            style={{
                                backgroundColor:"white", 
                                border:"0px",
                                color:"#B0B0B1",
                                width:250,
                               
                                fontFamily:fontFamily5, 
                                borderRadius:"100px", 
                                padding:"0px 10px"
                            }}
                            innerStyle = {{
                                color:"#B0B0B1",
                                fontWeight:"bolder", 
                                fontSize:20
                            }}
                        />
                    </span>
                </div>
                <div className='width-100-cent f-column j-start padding-t-20 a-center y-scroll height-100-cent'>
                  {this.getNewAlerts()}
                </div>
            </div>
        )
    }
}
