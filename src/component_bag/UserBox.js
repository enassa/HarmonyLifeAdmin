import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import style from '../css/userbox.module.css'
import { ChevronRight, ArrowRight } from '@material-ui/icons';
import "../css/announcement.css"
import { randomImages } from '../css/dummydata/dummyData';
import { fontFamily3 } from '../contants/uiConstants';
import { Tooltip } from '@material-ui/core';
import { Button } from 'react-bootstrap';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    // backgroundColor: "white",
    // borderRadius:"10px",
    marginBottom:"10px",
  },
  inline: {
    display: 'inline',
  },
}));

export default function UserBox(props) {
  const classes = useStyles();
  return (
    <List className={classes.root}>
       <Tooltip style={{ cursor:"pointer"}} title={props.cardData.projectName} >
      <ListItem alignItems="flex-start" style={{backgroundColor: "white",
    borderRadius:"5px",}}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={props.cardData.image}/>
        </ListItemAvatar>
        <ListItemText
          className ={style['userbox-head']}
          primary={`${props.cardData.name}`}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <span></span>
               
                  <span>
                   <ArrowRight/>  
                  <span style={{fontFamily:`${fontFamily3} !important`, fontWeight:400, color:"#9C2C9B",fontWeight:"bolder" }} > GHS &nbsp;{props.cardData.amount}</span> 
                  <br/>
                  <span style={{color:"green", fontSize:"10px", fontWeight:"bolder"}}>@{props.cardData.organizationName}</span>
                  </span>
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      </Tooltip>

      <Divider variant="inset" component="li" />
      
    </List>
  );
}
