import React, { Component } from 'react';
import { ALL_URLS } from '../contants/urls';
import { withRouter } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import StageCard from './StageCard';
import ActivityCard from './ActivityCard';
import AllPaymentChannels from './AllPaymentChannels';
import paypallogo from "../resources/images/paypal.jpg"
import momologo from "../resources/images/mtn_momo.jpg"
import vodacash from "../resources/images/vodacashreal.png"
import worldremit from "../resources/images/worldremit_logo.png"
import visalogo from "../resources/images/visa.jpg"
import { ArrowRightAlt, ArrowRightAltTwoTone, Backspace, SubdirectoryArrowLeft, ArrowRight, KeyboardReturn,} from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Projects = [
    {id:"1",name:" Build a market for the school and add more bus..",source:"2020 class"},
    {id:"2",name:" Build a market for the school and add more bus..",source:"2020 class"},
    {id:"3",name:" Build a market for the school and add more bus..",source:"2020 class"},
    {id:"4",name:" Build a market for the school and add more bus..",source:"2020 class"},
    {id:"5",name:" Build a market for the school and add more bus..",source:"2020 class"},
    {id:"6",name:" Build a market for the school and add more bus..",source:"2020 class"},
    {id:"7",name:" Build a market for the school and add more bus..",source:"2020 class"},
    {id:"8",name:" Build a market for the school and add more bus..",source:"2020 class"},
    {id:"9",name:" Build a market for the school and add more bus..",source:"2020 class"},
    {id:"10",name:" Build a market for the school and add more bus..",source:"2020 class"},
    {id:"11",name:" Build a market for the school and add more bus..",source:"2020 class"},
    {id:"12",name:" Build a market for the school and add more bus..",source:"2020 class"},
    {id:"13",name:" Build a market for the school and add more bus..",source:"2020 class"},
    {id:"14",name:" Build a market for the school and add more bus..",source:"2020 class"},
    {id:"15",name:" Build a market for the school and add more bus..",source:"2020 class"},
    {id:"16",name:" Build a market for the school and add more bus..",source:"2020 class"},
    {id:"17",name:" Build a market for the school and add more bus..",source:"2020 class"},
    {id:"18",name:" Build a market for the school and add more bus..",source:"2020 class"},
    {id:"19",name:" Nathaniel is for the school and add more bus..",source:"2020 class"},
  ]
  const Stages = [
    {id:"1",projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Purchasing and transportortaion of items",contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"},
    {id:"2",projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Purchasing and transportortaion of items",contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"},
    {id:"3",projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Purchasing and transportortaion of items",contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"},
    {id:"4",projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Purchasing and transportortaion of items",contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"},
    {id:"5",projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Purchasing and transportortaion of items",contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"},
    {id:"6",projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Purchasing and transportortaion of items",contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"},
    {id:"7",projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Purchasing and transportortaion of items",contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"},
    {id:"8",projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Purchasing and transportortaion of items",contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"},
    {id:"9",projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Purchasing and transportortaion of items",contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"},
    {id:"10",projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Purchasing and transportortaion of items",contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"},
    {id:"11",projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Purchasing and transportortaion of items",contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"},
    {id:"12",projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Purchasing and transportortaion of items",contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"},
    {id:"13",projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Purchasing and transportortaion of items",contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"},
    {id:"14",projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Purchasing and transportortaion of items",contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"},
    {id:"15",projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Purchasing and transportortaion of items",contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"},
    {id:"16",projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Purchasing and transportortaion of items",contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"},
    {id:"17",projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Purchasing and transportortaion of items",contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"},
    {id:"18",projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Purchasing and transportortaion of items",contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"},
    {id:"19",projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Nathaniel is for the school and add more bus",contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"},
  ]
  const Activities = [
    {id:"1", projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Witdraw money from bank",cost:"$20",title:"Activitiy:1 - Purchase items",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:"2", projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Drive to Casantey tech shop",cost:"$30",title:"Activitiy:1 - Purchase items",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:"3", projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Fill Car with Petrol",cost:"$60",title:"Activitiy:1 - Purchase items",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:"4", projectId:"1",projectName:"Build a market for the school and add more bus..",name:" Do something nice😎",cost:"$20",title:"Activitiy:1 - Purchase items",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    
  ]
  const Channels = [
    {name:"MTN Momo",logo:momologo},
    {name:"Voda Cash",logo:vodacash},
    {name:"Visa Card",logo:visalogo},
    {name:"Paypal",logo:paypallogo},
    {name:"World remit",logo:worldremit},
   
  ]
class MemberProjects extends Component {
    constructor(props){
        super(props)
        this.state = {
            cardName:null,
            cardType:null,  
            cardId:null, 
        }
    }
    setNavTitle = (cardType, cardName, cardId) => {
        this.setState({cardName:cardName})
        this.setState({cardType:cardType})
        this.setState({cardId:cardId})
    }
    fetchProjects = () =>{
        return Projects.map((card,index) =>{
          return <ProjectCard key={index}
            handleClick={(cardType,cardName,cardId) => { 
              this.setNavTitle(cardType,cardName,cardId)
            }} 
            cardData={card}
          />
        })
      }
      fetchStages = () => {
        return Stages.map((card, index) => {
          return <StageCard  key={index}
          handleClick={(cardType,cardName,cardId) => { 
            this.setNavTitle(cardType,cardName,cardId)
          }} 
          cardData={card}
          />
        })
      }
      fetchActivities = () => {
          return <ActivityCard 
          handleClick={(cardType,cardName,cardId) => { 
            this.setNavTitle(cardType,cardName,cardId)
          }} 
          cardData={Activities}
          />
      }
      fetchPaymentChannels = () => {
          return <AllPaymentChannels cardData={Channels} />
      }
       
    getSubPage=()=>{
        let url = this.props.match.path 
        switch (url) {
          case ALL_URLS.memberListProjects:
            return this.fetchProjects();
          case ALL_URLS.memberListStages:
            return this.fetchStages();
          case ALL_URLS.memberListActivities:
            return this.fetchActivities();
          case ALL_URLS.memberViewActivity:
            return this.fetchProjects();
          case ALL_URLS.memberContribute:
            return this.fetchPaymentChannels();
          default:
            break;
        }
    }
    render() {
        const {cardId,cardName,cardType} = this.state;
        return (
            <div 
            style={{
              height:"100%",
              maxHeight:"100%", 
              width:"100%",
              display:"flex",
              flexFlow:"column", alignItems:"center",
              position:"relative",
              justifyContent:"flex-start",
              overflow:"hidden"
            }} 
          >
              
          {/** Check if we are listing projects, unmount header*/}
          {this.props.match.path!==ALL_URLS.memberListProjects
         ?<div style={{
              display:"flex", zIndex:"10", 
              color:"#0F80EC", backgroundColor:"white", 
              height:"50px", justifyContent:"flex-start", 
              alignItems:"center", 
              top:"0px", width:"100%", paddingLeft:"20px"
            }}
            >
            <ArrowRight/>
            <span style={{
              display:"flex",
              justifyContent:"flex-start", 
              alignItems:"center", 
              marginRight:"15px",
              fontSize:"15px"
            }}>
              {`${cardType} ${cardId}: ${cardName}`}
            </span>
            <button 
              style={{ display:"flex", justifyContent:"center", 
              alignItems:"center",border:"1px solid #0F80EC",
              backgroundColor:"transparent", borderRadius:"10px", 
              color:"#0F80EC",height:"25px"}
             }
             onClick = {()=>{this.props.history.goBack()}
            }>
              <KeyboardReturn style={{width:"15px",height:"15px" }}/> 
            </button>
          </div>
          :null
          }
          <div 
            style={{
              display:"flex", width:"100%", 
              height:"100%",flexFlow:"column",
              alignItems:"center",overflow:"auto",
              padding: "20px 20px 50px 20px"
            }}
            >
            {this.getSubPage()}
          </div>
          </div>
        );
    }
}
export default withRouter(MemberProjects);