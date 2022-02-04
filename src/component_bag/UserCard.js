import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import userProfile from "../resources/images/nathaniel.jpeg"
import { Avatar, Button } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import ClassIcon from '@material-ui/icons/Class';
import { randomImages } from '../css/dummydata/dummyData';
import { fontFamily5, fontFamily6, fontFamily4, fontFamily3, fontFamily1, fontFamily2 } from '../contants/uiConstants';
const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    maxHeight:200,
  },
  media: {
    height: 140,
  },
});

export default function UserCard(props) {
  const classes = useStyles();
  const {handleOnClick} = props;
  // console.log(props)
  const styles = {
    buttonBase:{
        width:250,
        height:"100%",
    },
    button:{
    //  position:"absolute",
    //  marginTop:60,
     minWidth:100,
     color:"#5E70E4",
     backgroundColor:"white",
     fontFamily:`${fontFamily3}`,
     fontWeight:"200",
     lineHeight:'2'
    },
    imageSize:{
        width:150,
        height:150
    }
   
  }
  const myClasses ={ 
    mainContainer:"cursor-pointer height-300 elevated-card curved-corners nate-white-bg j-center a-start  min-width-200 full-height",
    subContainer:"d-flex f-column j-start a-center width-100-cent height-100-cent  curved-corners  margin-t-30",
    avatarHolder:"elevated-blend round-up wrap-around  margin-b-30 ",
    buttonsHolder:"d-flex f-column j-center a-center posit  ",
  }
  const {cardData} = props;
  return (
  <div id={props.userType} className={myClasses.mainContainer}>
      <ButtonBase style={styles.buttonBase}>
              <div className={myClasses.subContainer}>
                  <div className={myClasses.avatarHolder} >
                      <Avatar alt={props.userType} src={`${randomImages}/${cardData.id}}`} style={styles.imageSize} />
                  </div>
                  <div  className={myClasses.buttonsHolder}>
                      <div style={styles.button} variant="contained" color="primary">{cardData.name}</div>
                  </div>
                  <div className='elevated-blend padding-10 curved-corners' style={{ color:"#8B008A",fontFamily:`${fontFamily4}`, fontWeight:"300"}} variant="contained" color="secondary">
                    <b>GHS&nbsp;{cardData.amount}</b>
                  </div>

              </div>
              {/* <div className='d-flex j-center full-width'> */}
              {/* </div> */}
      </ButtonBase>
  </div>
  );
}
// onClick={()=>handleOnClick()} 