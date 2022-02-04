import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function ActivityCard(props) {
  const classes = useStyles();
  const ejectActivities = () =>{
    return props.cardData.map((activity, index)=>{
      return <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{color:"rgb(15, 128, 236)", fontWeight:"bold"}} className={classes.heading}>{activity.id}. {activity.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  {activity.details}
                  </Typography>
                </AccordionDetails>
    </Accordion>
    })
  }
  
  return (
    <div className={classes.root}>
      {ejectActivities()}
    </div>
  );
}
