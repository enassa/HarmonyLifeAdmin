import { ReplyAll, Undo } from '@material-ui/icons';
import React, { Component } from 'react'

function IconButton (props) {
  /** Destructuring of props here */
  /** Definition of states here */
  const [state, setState] = React.useState({
    FIRST_STATE:false,
    SECOND_STATE:null,
    THIRD_STATE:"",
  });
  const FIRST_STATE = state.OPEN;
  const SECOND_STATE =  state.IMAGE_SRC;
  const THIRD_STATE =  state.USER_TYPE;
   /** Definition of all css styles here  */
  // inline styles
  const styles = {
    NULL:null,
    mainContainer:{
      width:props.WIDTH?props.WIDTH:195,
      height:props.HEIGHT?props.HEIGHT:50,
      marginBottom:20,
      overFlow:"hidden",
      outline: "0",                    
      padding: "7px 10px",
      borderColor: "#fff",
      borderStyle: "solid",
      cursor:"pointer",
      color:"white",
      ...props.STYLES,
    },
    subContainer:{},
    icon:{
      marginRight:"5%",
      color:props.iconColor?props.iconColor:null,
    },
    text:{
        color:props.TEXT_COLOR?props.TEXT_COLOR:null,
    },
    IconAndTextHolder:{
        color:props.TEXT_AND_iconColor?props.TEXT_AND_iconColor:null
    }
  }
  // class based styles 
  const myClasses = { 
    NULL:null,
    mainContainer:`d-flex f-row j-start a-center fill-entire-page nice-shadow `,
    subContainer:`d-flex f-row j-space-around a-center  fill-entire-page d-flex `,
    IconAndTextHolder:`d-flex j-start width-100-cent a-center height-100-cent`,
    textContainer:`d-flex j-start a-center height-100-cent`,
    iconContainer:`d-flex j-start a-center height-100-cent`
  } 
  /** Definition of all other constants */

  /** Definition of all functions here  */
  const handleClick = (e) => {
    props.changeFormProp(props.nextFormName) ;
  }
  return (
    <div className={myClasses.mainContainer} style={styles.mainContainer}  onClick={(e)=>handleClick(e)}>
        <div className={myClasses.subContainer} style={styles.subContainer}>
            {(props.buttonIcon||props.buttonText)
            ?
            <button className={myClasses.IconAndTextHolder} style={styles.IconAndTextHolder}>
                {
                props.buttonIcon
                ?<div style={styles.icon} className={myClasses.iconContainer}>
                  {props.buttonIcon}
                 </div>:"icon"
                 }

                {
                props.buttonText
                ?<div style={styles.text} className={myClasses.textContainer}>
                  {props.buttonText}
                </div>:null
                }
            </button>
            :
            null
            }
            {props.dropdata?<div style={styles.dropDown}>{props.dropdata}</div>:null}
        </div>
    </div>
  )
}
export default IconButton;