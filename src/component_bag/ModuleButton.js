import { ReplyAll, Undo } from '@material-ui/icons';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
function ModuleButton (props) {
  /** Destructuring of props here */
  /** Definition of states here */
  const [state, setState] = React.useState({
    HOVERED:false,
    SECOND_STATE:null,
    THIRD_STATE:"",
  });
  const HOVERED = state.HOVERED;
  const SECOND_STATE =  state.IMAGE_SRC;
  const THIRD_STATE =  state.USER_TYPE;
   /** Definition of all css styles here  */
  // inline styles
  const styles = {
    NULL:null,
    mainContainer:{
      width:props.WIDTH?props.WIDTH:125,
      height:props.HEIGHT?props.HEIGHT:125,
      marginRight:50,
      marginBottom:70,
      overFlow:"hidden"
    },
    subContainer:{
      minWidth:props.WIDTH?props.WIDTH:125,
      minHeight:props.HEIGHT?props.HEIGHT:125,
      marginBottom:5,
    },
    icon:{
      color:props.ICON_COLOR?props.ICON_COLOR:null,
    },
    text:{
        color:props.TEXT_COLOR?props.TEXT_COLOR:null,
    },
    IconAndTextHolder:{
        color:props.TEXT_AND_ICON_COLOR?props.TEXT_AND_ICON_COLOR:null
    }
  }
  // class based styles 
  const myClasses = { 
    NULL:null,
    mainContainer:`d-flex f-column j-start a-center fill-entire-page   cursor-pointer`,
    subContainer:`d-flex f-row j-center a-center fill-entire-page elevated-all `,
    IconAndTextHolder:`d-flex j-center width-100-cent`,
    ModuleText:`d-flex j-center a-center cursor-pointer`,
    icon:` ${HOVERED?"anime-zoom":null} d-flex j-center a-center`,
    text:`d-flex j-center a-center`
  } 
  /** Definition of all other constants */
 

  /** Definition of all functions here  */
  return (
    <Link
    to={
      {
      // pathname:`${props.MODULE_FROM}/${props.BUTTON_TEXT.replace(/\s/g,'').toLowerCase()}`,
      pathname:`/${props.MODULE_URL}`,
      search:"", 
      hash:"",
      state:"/home/dd"
    }}
    >
    <div className={myClasses.mainContainer} style={styles.mainContainer}
      onMouseOver={()=>{setState({...state, HOVERED:!HOVERED})}} 
      onMouseOut={()=>{setState({...state,  HOVERED:!HOVERED})}}
    >
        <div className={myClasses.subContainer} style={styles.subContainer}>
            {(props.BUTTON_ICON||props.BUTTON_TEXT)
            ?
            <div className={myClasses.IconAndTextHolder} style={styles.IconAndTextHolder}>
                {props.BUTTON_ICON?<div style={styles.icon} className={myClasses.icon}>{props.BUTTON_ICON}</div>:"icon"}
                {/* {props.BUTTON_TEXT?<div style={styles.text}>{props.BUTTON_TEXT}</div>:null} */}
            </div>
            :
            null
            }
            {props.MORE?<div style={styles.dropDown}>{props.MORE}</div>:null}
        </div>
        <div className={myClasses.ModuleText}>
            {props.BUTTON_TEXT?<div style={styles.text}>{props.BUTTON_TEXT}</div>:null}
        </div>
    </div>
    </Link>
  )
}
export default ModuleButton;