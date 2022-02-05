import React, { Component } from 'react';
import { fontFamily3 } from '../contants/uiConstants';
import { Close } from '@mui/icons-material';
import { openSnackBar } from '../store/actions/generalActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MySnackBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            snackState:this.props.snackBarState,
            activeClass:this.props.activeClass?this.props.activeClass:'pop-up-rise'
        }
    }
    getErrorSnackBar = () => {
        let {snackType, message} = this.props
        return  <div className='width-100-cent nate-green-text height-100-cent a-center padding-l-10'>
            {message}
        </div>
    }
    getSuccesSnackBar = () => {
        let {snackType, message} = this.props
        return  <div style={{backgroundColor:""}} className='width-100-cent nate-pink-text a-center padding-l-10 height-100-cent '>
            {message}
        </div>
    }
    getDecidedSnackBar = () => {
        let {snackType, message} = this.props
        if(snackType === "error"){
            return this.getErrorSnackBar() 
        }
        else if(snackType === "success"){
           return this.getSuccesSnackBar()
        }
    }
    getOpenClass = () => {
        return 'appear-down'
    }
    getCloseClass = () => {
         return 'vanish-down'
    }
  componentDidMount = () => {
      let openClass = this.getOpenClass()
      let closeClass = this.getCloseClass()
      let returnCloseAlert = () => {
        setTimeout(()=>{
            this.props.getCloseAlert&&this.props.getCloseAlert(true)
            this.setState({snackState:false})
        },1000)
      }
      if(this.props.manualCloseOnly !== true){
        setTimeout(()=>{
            this.setState({activeClass:closeClass})
              returnCloseAlert()
        },
        this.props.waiteTime?this.props.waiteTime:2000)
      }
     
  }
  render() {
      let {position,snackType} = this.props
     let styles = {
         top:{},
         bottom:{
             outerStyles:{
                 bottom:10
             },
             innerStyles:{
                
             }
         }
     }
     let outerStyles = position!==undefined?position === "bottom" ? styles.bottom.outerStyles : styles.top.outStyles:styles.bottom.outerStyles
     let innerStyles = position!==undefined?position === "bottom" ? styles.bottom.innerStyles : styles.top.innerStyles:styles.bottom.innerStyles
     let indicatorColor = snackType ==="error"?'nate-pink-bg':"nate-green-bg";
    return <div style={{...outerStyles,fontFamily:fontFamily3}} className={`${this.state.activeClass} width-100-cent  position-absolute  bottom-0 height-auto position-abolute pointer-events-none  j-center`}>
            {this.state.snackState?
                <div style={{...innerStyles}} style={{zIndex:90000}} className='width-auto min-width-300  pointer-events-all height-60 elevated-blend curved-corners overflow-hidden nate-white-bg j-start'>
                <div className={`min-width-20 height-100-cent ${indicatorColor} nate-blue-bg`}></div>
                {this.getDecidedSnackBar()}
                <div className='heigth-100-cent min-width-10 all-center padding-r-10'>
                    <span className='cursor-pointer'
                    onClick={()=>{
                        this.setState({activeClass:this.getCloseClass()})
                        setTimeout(()=>{
                            this.props.getCloseAlert&&this.props.getCloseAlert(true)
                            this.setState({snackState:false})
                        },1000)
                    }}
                    ><Close/></span>
                </div>
            </div>
            :null
        }
    </div>
  }
}

const mapDispatchToProps = (dispatch) => {
    // dispatch(getActiveInstitutions(10,'initial'))
    return {
        openSnackBar: (message,type) => dispatch(openSnackBar(message,type)),
  }
}
const mapStateToProps = (state) => {
    return {  
        snackBarState:state.generalReducer.snackBarState,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(MySnackBar));
