import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { ChevronRight, ArrowRight } from '@material-ui/icons';
import "../css/announcement.css"
import { fontFamily1, fontFamily2, fontFamily4, fontFamily3, colors, letteringColor6 } from '../contants/uiConstants';
import { getRandomColor } from '../contants/generalFunctions';
import { useState, useEffect } from 'react';

var color = '';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    maxWidth: '36ch',
    backgroundColor: "white",
    // paddingLeft:"30px",
    marginBottom:"20px",
    marginLeft:"10px",
    // borderBottom:`5px solid ${letteringColor6}`,
    // borderTop:`5px solid ${letteringColor6}`,
    // borderRight:`5px solid ${letteringColor6}`,
    borderLeft:`5px solid ${letteringColor6}`,
    // boxShadow:" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
  },
  inline: {
    display: 'inline',
  },
}));

export default function Announcement(props) {
  const classes = useStyles();
  useEffect(() => {
    // Update the document title using the browser API
     color = getRandomColor()
  });
  return (
    <List className={`${classes.root} elevated-card nate-white-bg`}>
      <ListItem className='with-100-cent nate-white-bg'  alignItems="flex-start">
        {/* <ListItemAvatar> */}
          {/* <Avatar  alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
          {/* <Avatar >{props.cardData?props.cardData.id:null}</Avatar> */}
          {/* <Avatar >{props.cardData?props.index:null}</Avatar> */}
          {/* <ArrowRight/> */}
        {/* </ListItemAvatar> */}
        <ListItemText
        style={{color:letteringColor6}}
        className="announcement-head"
          // primary={props.cardData?props.cardData.senderName:null}
          secondary={
            <React.Fragment   >
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"

              > <span>{props.cardData?props.cardData.senderName:null}</span>@ <b>{props.cardData.organizationName}</b>
              </Typography>
                {<p style={{textAlign:"justify", fontFamily:`${fontFamily3}`, fontWeight:300,lineHeight:2 }} >{props.cardData?props.cardData.message:null}</p>}
            </React.Fragment>
          }
        />
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
      
    </List>
  );
}
