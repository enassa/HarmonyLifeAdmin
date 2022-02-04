import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter } from 'react-router-dom';
import { ALL_URLS } from '../contants/urls';
import { useState, useEffect  } from 'react';
import MemberProjects from './MemberProjects';
import MemberNews from './MemberNews';



function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      style={{width:"100%", height:"100%"}}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other
      }
    >
      {children}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));
// const useEffect
function PageTabs(props) {
  const [activeSubPage, setActivePage] = useState()
  const [cardType, setType] = useState(null);  
  const [cardId, setId] = useState(null);  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);



  const handleChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        props.history.push(ALL_URLS.memberListProjects)
        setValue(newValue)
        break;
      case 1:
        props.history.push(ALL_URLS.memberListNews)
        setValue(newValue)
        break;
      case 2:
        props.history.push(ALL_URLS.memberListPayments)
        setValue(newValue)
        break;
      case 3:
        props.history.push(ALL_URLS.memberListAlbums)
        setValue(newValue)
        break;
    
      default:
        break;
    }
    // setValue(newValue);
  };

  useEffect(() => {
    switch (props.match.path) {
      case ALL_URLS.memberListProjects:
          setValue(0)
      break;
      case ALL_URLS.memberListNews:
          setValue(1)
      break;
      case ALL_URLS.memberListPayments:
          setValue(2)
      break;
      case ALL_URLS.memberListAlbums:
          setValue(3)
      break;
      default:
        break;
    }
  },[]);
  
  
  return (
    <div className={classes.root} style={{width:"100% !important", height:"100% !important", backgroundColor:"white",overflow:"hidden"}}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          {...a11yProps(0)}
        >
          <Tab label="Projects" {...a11yProps(0)} />
          <Tab label="News" {...a11yProps(1)} />
          <Tab label="Payments" {...a11yProps(2)} />
          <Tab label="Gallery" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel 
        className ="tap-panel"
        style={{
          height:"100%",  
          display:"flex",
          width:"100%",
          maxHeight:"100%",
          flexFlow:"column", alignItems:"center",
        
        }} 
        value={value} index={0}
      >
          <MemberProjects/>
  
      </TabPanel>
      <TabPanel 
        className ="tap-panel"
        style={{
          height:"100%",  
          display:"flex",
          width:"100%",
          maxHeight:"100%",
          flexFlow:"column", alignItems:"center",
        
        }} 
        value={value} index={1}
      >
          <MemberNews/>
  
      </TabPanel>

    </div>
  );
}
export default  withRouter(PageTabs)
