import React, { Component } from "react";
import  "../../../css/projectdetails.css";
import { connect } from 'react-redux';
import { readyForMapping } from '../../../contants/generalFunctions';
import { getProjects } from '../../../store/actions/ProjectActions';
import LoadMore from "../../../reusable/LoadMore";
import GridLayOut from '../../../reusable/GridLayout';
import MediaCardProjectStyle from '../../../reusable/MediaCardProjectStyle';
import HorizontalScroller from "../../../reusable/HorizontalScroller";
import Dropdown from '../../../reusable/Dropdown';
import StatusCard from "../../../reusable/StatusCard";
import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';


class ProjectList extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      showAuthPage: false,
      showSideBar:false,
      showOverLay:false,
      useSideBar:true,
      key:"about",
      data:this.props.projects,
      showSearchblanket:false,
      searchReady:false,
    };
  }
  toggleSideBar = () => {
    this.setState({showSideBar:!this.state.showSideBar, showOverLay:!this.state.showOverLay})
  }
  ejectTabs() {
    if(readyForMapping(this.props.projects)){
      return this.props.projects.map((data, index)=>{
        return <MediaCardProjectStyle style={{
          marginRight:"",
          width:"450px",
          marginTop:"30px",
          marginBottom:"30px", 
          // height:"430px",
        }} 
          cardData={data}/>
      })
    }
  }

  conductSearch = () => {
    setTimeout(() => {
      this.setState({searchReady:true})
    }, 1000);
  }
  showSearchblanket = () => {
    this.setState({showSearchblanket:!this.state.showSearchblanket}, this.conductSearch())
  }
 
  componentDidMount(){
  }

  render() {
      const {key} = this.state;
    return (
            <div className='middle-side'>
             <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(key) => this.setState({key:key})}
                className="mb-3 width-100-cent margin-t-20"
            >
                <Tab eventKey="about" title="About" style={{width:"100%"}}>
                    <div className='d-flex j-center a-center width-100-cent'>
        1
                    </div>
                </Tab>
                <Tab eventKey="stages" title="Stages">
                    2
                </Tab>
                <Tab eventKey="timelines" title="Timelines" >
                    3
                </Tab>
                <Tab eventKey="cost" title="Cost" >
                    4
                </Tab>
                <Tab eventKey="contributions" title="Contributions" >
                    5
                </Tab>
                <Tab eventKey="gallery" title="Gallery" >
                    6
                </Tab>
            </Tabs>
          </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    dispatch(getProjects(10,'initial'))
    return {
        fetchProjects: (limit=10) => dispatch(getProjects(limit)),
  }
}
const mapStateToProps = (state) => {
    return {
        projects: state.projects.projects,
        projectStatuses: state.projects.projectStatuses,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectList);


