import { ReplyAll, Undo } from '@material-ui/icons';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ALL_URLS } from '../../../contants/urls';
function ExtraDetailsCard(props) {
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
      width:props.WIDTH?props.WIDTH:225,
      height:props.HEIGHT?props.HEIGHT:225,
      marginRight:20,
      marginLeft:20,
      marginBottom:70,
      overFlow:"hidden",
      padding:"20px !important",
      ...props.outerStyles
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
        color:props.TEXT_AND_ICON_COLOR?props.TEXT_AND_ICON_COLOR:null,
    },
    extraInfoStyles:{
        ...props.extraInfoStyles
    }
    
  }
  // class based styles 
  const myClasses = { 
    NULL:null,
    mainContainer:`d-flex f-column j-start a-center fill-entire-page   cursor-pointer`,
    subContainer:`d-flex f-row j-center a-center fill-entire-page elevated-all `,
    IconAndTextHolder:`d-flex j-center f-column width-100-cent`,
    ModuleText:`d-flex j-center a-center cursor-pointer`,
    icon:` ${HOVERED?"anime-zoom":null} d-flex j-center a-center`,
    text:`d-flex j-center a-center`,
    extraInfo:`d-flex, j-start, a-center `
  } 
  /** Definition of all other constants */
 

  /** Definition of all functions here  */
  return (
    <Link
    to={
      {
      // pathname:`${props.MODULE_FROM}/${props.buttonText.replace(/\s/g,'').toLowerCase()}`,
      pathname:`/member/institutions/${props.id?props.id:"1"}`,
      search:"", 
      hash:"",
      state:"/home/dd"
    }}
    style={{textDecoration:"none",}}
    >
    <div className={myClasses.mainContainer} style={styles.mainContainer}
      onMouseOver={()=>{setState({...state, HOVERED:!HOVERED})}} 
      onMouseOut={()=>{setState({...state,  HOVERED:!HOVERED})}}
    >
        <div className={myClasses.subContainer} style={styles.subContainer}>
            {(props.buttonIcon||props.buttonText||props.imageSrc)
            ?
            <div className={myClasses.IconAndTextHolder} style={styles.IconAndTextHolder}>
                {props.buttonIcon
                    ?<div style={styles.icon} className={myClasses.icon}>
                        {props.buttonIcon}
                    </div>
                :null}
                {
                    props.imageSrc
                    ?<img style={{width:"100%", height:"95%"}} src={props.imageSrc} alt={props.alt?props.alt:""}/>:null
                }
                {props.extraInfo?<div style={styles.extraInfoStyles} className={myClasses.extraInfo}>
                    <span>
                        {props.extraInfoIcon?props.extraInfoIcon:null}
                        <span>{props.extraInfo}</span>
                    </span>
                    {props.extraInfoMore?<span>{props.extraInfoMore}</span>:null}
                </div>:null}
                {/* {props.buttonText?<div style={styles.text}>{props.buttonText}</div>:null} */}
            </div>
            :
            null
            }
            {props.more?<div style={styles.dropDown}>{props.more}jjj</div>:null}
            
        </div>
        <div className={myClasses.ModuleText}>
            
            {props.buttonText?<div style={styles.text}>{props.buttonText}</div>:null}
        </div>
    </div>
    </Link>
  )
}
export default ExtraDetailsCard;