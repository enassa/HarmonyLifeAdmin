import React, { Component } from 'react'
import NewAlertCard from '../../component_bag/NewAlertCard';
import SearchBar from '../../component_bag/SearchBar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { letteringColor6, fontFamily4, fontFamily5 } from '../../contants/uiConstants';
import OverLay from '../../component_bag/OverLay';
import AssignPage from './AssignPage';
import OverlayLoader from '../../component_bag/OverlayLoader';
import MyModal from '../../component_bag/MyModal';
import LoadMore from '../../component_bag/LoadMore';
import OneColumnTable from '../../component_bag/OneColumnTable';
import OverlayWithChild from '../../component_bag/OverlayWithChild';
import { connect } from 'react-redux';
import { changeLoadingState } from '../../store/actions/AppStateActions';
import { getNewAlerts } from '../../store/actions/newAlertsActions';
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

class NewAlerts extends Component {
    constructor(props){
        super(props)
        this.state = {
            showAssignPage:false,
            loading:false,
            showModal:true,
            assignmentState:true,
            loadingComplete:false
        }
    }
    toggleAssignPage = () => {
        this.setState({showAssignPage:!this.state.showAssignPage})
    }
    getNewAlerts = () => {
        let alerts = this.props.newAlerts
        console.log(alerts)
        return alerts.map((alert, index) => {
            return <NewAlertCard toggleAssignPage={()=>this.toggleAssignPage()}  cardData = {alert}/>
        })
    }
    getAlerts = (limit) => {
        this.props.getMoreAlerts(limit,this.state.institutionType)
    }
    handleAssignment = (selected) => {
        this.setState({loading:true})
        setTimeout(()=>{
            this.setState({showModal:true,loadingComplete:true,loading:false,showAssignPage:false})
        },800)
    }
    
    handleSuccesfulAssignment = (response) => {
        if(response){
            this.setState({showModal:false})
        }
    }

    render() {
        const {showAssignPage} = this.state
        return (
            <div className=' curved-corners j-start f-column width-100-cent height-90-cent  max-height-90-cent'>
                {
                    showAssignPage
                    ?<OverlayWithChild  handleOverlayClick = {()=>this.toggleAssignPage()}>
                        {/* <div className='pointer-events-all pointer-events-all width-100-cent height-100-cent all-center'> */}
                            <OneColumnTable styles={{width:"30%",height:"80%",zIndex:"00"}} getSelected={(selected) => {this.handleAssignment(selected)}}/>
                        {/* </div> */}
                    </OverlayWithChild>
                :null
                }
                {
                    this.state.loading
                    ? <OverlayLoader/>
                    :null
                }
                {
                    this.state.showModal&&this.state.loadingComplete
                    ? <MyModal  
                            getResponse={(response) => {this.handleSuccesfulAssignment(response)}} 
                            state={this.state.assignmentState} 
                            showButtons
                            hideCancel
                        />
                    :null
                }
                <div className='width-100-cent height-100  j-end a-center padding-r-20'>
                    <div 
                            style={{paddingLeft:60,color:"grey", fontSize:30,fontWeight:"bolder",fontFamily:fontFamily5}} 
                            className='width-100-cent height-50 a-center font-1-2-em'
                    >
                            <span className='a-center' >
                                <ArrowRightIcon style={{width:"40px", height:"40px"}}/>
                            </span> 
                            <span>New Alerts</span>
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
                  {!this.props.loading
                    ?<div style={{width:"100%",display:"flex", justifyContent:"center"}}>
                        <LoadMore 
                        handleClick={()=>{this.getAlerts(10)}}
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
    dispatch(getNewAlerts(10,'initial'))
    return {
        changeLoadingState: (userData) => dispatch(changeLoadingState()),
        getMoreAlerts: (limit=10,typeOfGroups) => dispatch(getNewAlerts(limit,typeOfGroups)),
        // quickSerch:(searchValue, typeOfGroups) => dispatch((quickSerchGroups(searchValue))),
        // fetchFromDifferentGroupsType:(limit=10) => dispatch(getFromDifferentGroupType(limit))
  }
}
const mapStateToProps = (state) => {
    return {
        newAlerts: state.newAlerts.newAlerts,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewAlerts);
