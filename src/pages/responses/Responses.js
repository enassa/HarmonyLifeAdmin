
import React, { Component } from 'react'
import SearchBar from '../../component_bag/SearchBar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { fontFamily5 } from '../../contants/uiConstants';
import ProcessingAlertCard from '../../component_bag/ProcessingAlertsCard';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAnswerers } from '../../store/actions/answerersAction';
import { readyForMapping } from '../../contants/generalFunctions';
import LoadMore from '../../component_bag/LoadMore';
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

class Responses extends Component {
    constructor(props){
        super(props)
        this.state = {
            assignPageState:false,
        }
    }
    handleActionClick = (typeOfAction, data) => {
        this.setState({assignPageState:!this.state.assignPageState})
    }
    getMoreData = (limit) => {
        this.props.getAnswerers(limit)
    }
    getAnswerers = () => {
        console.log(this.props.answerers)
        if(readyForMapping(this.props.answerers)){
            return this.props.answerers.map((alert, index) => {
                return <ProcessingAlertCard 
                            handleActionClick = {
                                (typeOfAction, data) => this.handleActionClick(typeOfAction, data)
                            } 
                            cardData = {alert}
                    />
            })
        }
    }
    render() {
        const {assignPageState} = this.state
        return (
            <div className=' curved-corners j-start f-column width-100-cent height-90-cent max-height-90-cent '>
                {/* {assignPageState
                ?<AssignPage
                    handleActionClick = {
                        (typeOfAction, data) => this.handleActionClick(typeOfAction, data)
                    } 
                />:null} */}
                <div className='width-100-cent height-100  j-end a-center padding-r-20'>
                    <div 
                        style={{paddingLeft:60,color:"grey", fontSize:30,fontWeight:"bolder",fontFamily:fontFamily5}} 
                         className='width-100-cent height-50 a-center font-1-2-em'
                    >
                               <span className='a-center' ><ArrowRightIcon style={{width:"40px", height:"40px"}}/></span> 
                               <span>Responses</span>
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
                  {this.getAnswerers()}
                  {!this.props.loading
                ?<div style={{width:"100%",display:"flex", justifyContent:"center"}}>
                    <LoadMore 
                      handleClick={()=>{this.getMoreData(10)}}
                      dataLimit = {10}
                      />
                  </div>
                  :null
                  } 
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    dispatch(getAnswerers(10,'initial'))
    return {
        getAnswerers: (limit=10,typeOfFetch) => dispatch(getAnswerers(limit,typeOfFetch)),
  }
}
const mapStateToProps = (state) => {
    return {
        answerers:state.answererReducer.answerers,
        loading: state.appState.loading,

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Responses));
