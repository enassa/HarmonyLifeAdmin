import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readyForMapping } from '../contants/generalFunctions';
import HorizontalScroller from './HorizontalScroller';
import StatusCard from './StatusCard';
import { closeProjectStatus, getProjectStatusUpdate } from '../store/actions/ProjectActions';
import { Close } from '@material-ui/icons';
import LoadMore from './LoadMore';


class StatusViewer extends Component {
    constructor(props){
        super(props)
        this.state ={}
    }
    ejectProjectStatuses = () => {
        // this.props.fetchStatusUpdates(10)
        if(readyForMapping(this.props.projectStatuses)){
          return this.props.projectStatuses.map((data, index)=>{
            return <StatusCard style={{
              marginRight:"",
              // width:"450px",
              marginTop:"30px",
              marginBottom:"30px", 
              // height:"430px",
            }} 
              cardData={data}/>
          })
        }
      }
    render() {

        return (
            <div className = ' anime-fade-in fade-in d-flex f-column  a-center j-space-between position-fixed fill-entire-page left-0 top-0 nate-black-partial-bg above-all'>
                <span className='above-all cursor-pointer position-absolute d-flex j-center a-center width-40 height-40 round-up nate-white-bg top-10 right-40' 
                onClick = {() => {this.props.closeStatusViewer()}}
                >
                    <Close/>
                </span>
                <div 
                    style={{backgroundImage:`url(${this.props.openedStatus.image})`,backgroundPosition:"center", backgroundRepeat:"no-repeat"}}
                    className='slide-up d-flex margin-t-30 f-column j-start height-60-cent width-90-cent j-end curved-corners'
                >
                    <div className='full-width j-center margin-b-10'>
                       <span className='j-center curved-corners nate-white-text padding-l-10 padding-r-10 nate-black-partial-bg'>{this.props.openedStatus.projectName} </span>
                    </div>
                </div>
                <div className='full-width'>
                    <HorizontalScroller>
                        {this.ejectProjectStatuses()}
                        <LoadMore loaderColor={"white"} handleVisible={() => {this.props.fetchStatusUpdates(10)}}/>
                    </HorizontalScroller>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchStatusUpdates: (limit=10) => dispatch(getProjectStatusUpdate(limit)),
        closeStatusViewer:() => dispatch(closeProjectStatus())
  }
}
const mapStateToProps = (state) => {
    return {
        projectStatuses: state.projects.projectStatuses,
        openedStatus: state.projects.openedProjectStatus,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)( StatusViewer);


