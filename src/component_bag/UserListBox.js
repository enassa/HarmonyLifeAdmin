import React, { Component } from 'react';
import styles from '../css/userlistbox.module.css'
import Badge from '@material-ui/core/Badge';
import UserBox from './UserBox';
import { connect } from 'react-redux';
import {getContributers } from '../store/actions/generalActions';
import { changeLoadingState } from '../store/actions/AppStateActions';
import LoadMore from './LoadMore';
import { readyForMapping } from '../contants/generalFunctions';
import { fontFamily3, letteringColor6 } from '../contants/uiConstants';

class UserListBoxBox extends Component {
  ejectCards() {
    if(readyForMapping(this.props.contributers)){
      return this.props.contributers.map((data, index)=>{
        return <UserBox cardData={data}/>
      })
    }
  }
  componentDidMount(){
  }
    render() {
      const style = {
        ...this.props.style
      }
        return (
            <div style={{style}} className={styles["member-userlistbox-box"]}>
                  <span className={styles["userlistbox-heading"]}>
                  <Badge  style={{marginRight:"20px", color:"grey"}} color="secondary">
                      {/* <VolumeUp /> */}
                  </Badge> 
                  <h5 style={{color:letteringColor6, marginRight:"10px", width:"100%",fontFamily:`${fontFamily3}`, fontWeight:400,}}>Top Contributers Today</h5>
                  {/* <Divider variant="inset" component="h5" /> */}

              </span>
            <div className={styles["userlistbox-main-inner"]}>
            
              <div id={styles["content-box-inner"]}>
                {this.ejectCards()}
                <LoadMore handleClick = {()=>{this.props.fetchContributers(10)}} style={{width:20, height:20}} noIcon/>
              </div>
            </div>
        </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
  dispatch(getContributers(10,'initial'))
  return {
    fetchContributers: (limit=10) => dispatch(getContributers(limit)),
    changeLoadingState: (userData) => dispatch(changeLoadingState()),
}
}
const mapStateToProps = (state) => {
  return {
      contributers: state.generalReducer.contributers,
      loading:state.appState.loading
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserListBoxBox);



