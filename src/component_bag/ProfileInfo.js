import React, { Component } from 'react';
import { connect } from 'react-redux';
import { randomImages } from '../dummydata/dummyData';
import { closeProfileInfo } from '../store/actions/generalActions';
import { getAsObjectFromSession } from '../contants/generalFunctions';
import { logOut } from '../store/actions/AuthActions';

class ProfileInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:{}
        }
    }
    handleLogOut = () => {
        this.props.logOut();
    }
    componentDidMount(){ 
        let  user = getAsObjectFromSession('userData')
        if(typeof user === 'object')
        this.setState({user:user})
    }
    render() {
        const {user} = this.state;
        const style = {
            ...this.props.style
        }
        return (
            <div style={style}  onMouseOut={()=>this.props.closeProfileInfo()}  className="d-flex f-column a-center padding-20  overflow-hidden curved-corners nate-white-bg elevated-card height-auto width-200">
                <div style={{backgroundImage:`url(${randomImages})`, minWidth:60, minHeight:60}} className='width-60 margin-b-20 height-60 nate-grey-bg fit-background  round-up'>
                </div>
                <span style={{textAlign:"center"}} className='full-width '>{user.name}</span>
                <button onClick={()=>{
                    this.handleLogOut()
                }} style={{border:0,padding:"10px 20px", marginTop:"10%",}} className='nate-navy-bg cursor-pointer nate-white-text elevated-light width-100 curved-corners outline-none'>Logout</button>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        closeProfileInfo : () => dispatch(closeProfileInfo),
        logOut : () => dispatch(logOut())
   }
}
const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileInfo);

