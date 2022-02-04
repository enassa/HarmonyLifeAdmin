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
import { ArrowRightAlt, ArrowRightAltTwoTone, Backspace, SubdirectoryArrowLeft, ArrowRight, KeyboardReturn, CommentSharp,} from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NewsCard from './NewsCard';
import NewsDetails from '../pages/MemberPages/NewsPages/NewsDetails';


  const Comments = [
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

  const News = [
    {
        id:"1",sender:"Richard Asamoah", date:"24th September, 2021",
        likes:"200",
        dislikes:"20",
        shares:"30",
        comments:[
            {
                id:"1",
                sender:"Amanor Kofi", 
                date:"26th September", 
                body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                Suspendisse congue vulputate lobortis. Pellentesque at interdum
                tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
                metus, efficitur lobortis nisi quis, molestie porttitor metus.
                Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
                lectus vitae ex.`,
                image:"https://source.unsplash.com/random"
            },
            {
                id:"1",
                sender:"Amanor Kofi", 
                date:"26th September", 
                body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                Suspendisse congue vulputate lobortis. Pellentesque at interdum
                tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
                metus, efficitur lobortis nisi quis, molestie porttitor metus.
                Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
                lectus vitae ex.`,
                image:"https://source.unsplash.com/random"
            },
            {
                id:"1",
                sender:"Amanor Kofi", 
                date:"26th September", 
                body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                Suspendisse congue vulputate lobortis. Pellentesque at interdum
                tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
                metus, efficitur lobortis nisi quis, molestie porttitor metus.
                Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
                lectus vitae ex.`,
                image:"https://source.unsplash.com/random"
            },
            
            ],
        title:" Details jThe 2014 year group will be embarking on a project called. Operation dumsor ewu. The head of the group, Asamoah Daniel Richmond, said contrinutions are welcome from every where",
        body:`it is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
        content here', making it look like readable English. Many desktop publishing packages and 
        web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
        will uncover many web sites still in their infancy. Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like).
        it is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
        content here', making it look like readable English. Many desktop publishing packages and 
        web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
        will uncover many web sites still in their infancy. Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like).
        it is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
        content here', making it look like readable English. Many desktop publishing packages and 
        web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
        will uncover many web sites still in their infancy. Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like).",
        contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"`},
    {
        id:"2",sender:"Richard Asamoah", date:"24th September, 2021",
        likes:"200",
        dislikes:"20",
        shares:"30",
        comments:[
            {
                id:"1",
                newsId:"3",
                sender:"Amanor Kofi", 
                date:"26th September", 
                body:"Another project,thats wonderful"
            },
            {
                id:"1",
                sender:"Amanor Kofi", 
                date:"26th September", 
                body:"Another project,thats wonderful"
            },
            {
                id:"1",
                sender:"Amanor Kofi", 
                date:"26th September", 
                body:"Another project,thats wonderful"
            },
            {
                id:"1",
                sender:"Amanor Kofi", 
                date:"26th September", 
                body:"Another project,thats wonderful"
            },
           
            ],
        title:" Details jThe 2014 year group will be embarking on a project called. Operation dumsor ewu. The head of the group, Asamoah Daniel Richmond, said contrinutions are welcome from every where",
        body:`it is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
        content here', making it look like readable English. Many desktop publishing packages and 
        web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
        will uncover many web sites still in their infancy. Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like).
        it is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
        content here', making it look like readable English. Many desktop publishing packages and 
        web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
        will uncover many web sites still in their infancy. Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like).
        it is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
        content here', making it look like readable English. Many desktop publishing packages and 
        web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
        will uncover many web sites still in their infancy. Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like).",
        contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"`},
    {
        id:"3",sender:"Richard Asamoah", date:"24th September, 2021",
        likes:"200",
        dislikes:"20",
        shares:"30",
        comments:[
            {
                id:"1",
                sender:"Amanor Kofi", 
                date:"26th September", 
                body:"Another project,thats wonderful"
            },
            {},
            {}
            ],
        title:" Details jThe 2014 year group will be embarking on a project called. Operation dumsor ewu. The head of the group, Asamoah Daniel Richmond, said contrinutions are welcome from every where",
        body:`it is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
        content here', making it look like readable English. Many desktop publishing packages and 
        web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
        will uncover many web sites still in their infancy. Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like).
        it is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
        content here', making it look like readable English. Many desktop publishing packages and 
        web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
        will uncover many web sites still in their infancy. Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like).
        it is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
        content here', making it look like readable English. Many desktop publishing packages and 
        web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
        will uncover many web sites still in their infancy. Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like).",
        contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"`},
    {
        id:"4",sender:"Richard Asamoah", date:"24th September, 2021",
        likes:"200",
        dislikes:"20",
        shares:"30",
        comments:[
            {
                id:"1",
                sender:"Amanor Kofi", 
                date:"26th September", 
                body:"Another project,thats wonderful"
            },
            {},
            {}
            ],
        title:" Details jThe 2014 year group will be embarking on a project called. Operation dumsor ewu. The head of the group, Asamoah Daniel Richmond, said contrinutions are welcome from every where",
        body:`it is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
        content here', making it look like readable English. Many desktop publishing packages and 
        web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
        will uncover many web sites still in their infancy. Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like).
        it is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
        content here', making it look like readable English. Many desktop publishing packages and 
        web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
        will uncover many web sites still in their infancy. Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like).
        it is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
        content here', making it look like readable English. Many desktop publishing packages and 
        web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
        will uncover many web sites still in their infancy. Various versions have evolved over the years, 
        sometimes by accident, sometimes on purpose (injected humour and the like).",
        contributions:"$4 / 20",activities:"4 / 20",levels:"4 / 20"`},
   
  ]
  const Stages = [
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
class MemberNews extends Component {
    constructor(props){
        super(props)
        this.state = {
            cardName:null,
            cardType:null,  
            cardId:null, 
            openedNewsCard:{},
            selectedNews:null,
        }
    }
    fetchNewsDetails = (card) => {
        return <NewsDetails cardData={this.state.openedNewsCard}/>
      }
    setNewsData= (card) => {
        this.setState({newsData:card})
    }
    fetchNewsList = () => {
        return News.map((card, index) => {
            return <NewsCard  key={index}
            handleExpandNews={(news,newsId) => { 
            this.setState({openedNewsCard:news},
                this.props.history.push(`${ALL_URLS.memberListNews}/${newsId}`)
            )
            }} 
            cardData={card}
            />
        })
    }
   
    ejectNewsComments = () => {
    return Comments.map((card, index) => {
        return <StageCard  key={index}
        handleClick={(cardType,cardName,cardId) => { 
        this.setNavTitle(cardType,cardName,cardId)
        }} 
        cardData={card}
        />
    })
    }
      
    getSubPage=()=>{
        // console.log(this.props.match.path)
        switch (this.props.match.path ) {
          case ALL_URLS.memberListNews:
            return this.fetchNewsList();
          case ALL_URLS.memberViewNews:
            return this.fetchNewsDetails();
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
              marginTop:"30px", width:"100%", paddingLeft:"20px"
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
              alignItems:"center",
              padding: "20px 20px 50px 20px"
            }}
            >
                <div style={{width:"100%", height:"100%", marginBottom:"40px", overflow:"scroll",padding:"20px 0px"}}>
                   {this.getSubPage()}
                </div>
               
            {/* {this.getSubPage()} */}
          </div>
          </div>
        );
    }
}
export default withRouter(MemberNews);