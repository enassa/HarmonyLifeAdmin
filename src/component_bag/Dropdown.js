import React, { Component } from 'react'
import { ExpandLess, ExpandMore } from '@mui/icons-material';
var styles, myClasses;
export default class Dropdown extends Component {
  constructor(props){
    super(props)
    this.state = {
      hover:null,
      select:null,
      selectedText:this.props.instructionText?this.props.instructionText:"Select usser",
      iconHovered:false,
      expand:this.props.expandFromOutSide?true:false,
      // expandFromOutSide:this.props.expandFromOutSide,
    }
  }

  /** Definition of all other constants */
 handleItemClick=(item)=>{

  this.setState({ expand:!this.state.expand, selectedText:item.name},
    )
  if(this.props.handleSelect&&this.props.returnObject){
    this.props.handleSelect(item)
  }
  else if(this.props.handleSelect&&!this.props.returnObject){
    this.props.handleSelect(item.name,item.icon)
  }
 }

  /** Definition of all functions here  */
  ejectItems=()=>{
    // console.log(this.props.itemList)
    let numberOfItems = this.props.itemList.length;
     if(this.props.itemList){
      //  alert("dddd")
        return this.props.itemList.map((item, index)=>{
          return (
          <div key={index} 
            onMouseOver={()=>{this.setState({hover:item.name})}} 
            onClick={()=>{this.handleItemClick(item)}}
            onMouseOut={()=>{this.setState({hover:null})}}
            className={myClasses.listItem} 
            style={
              (this.state.hover==item.name&&this.state.selectedText!=item.name)
              ?
              styles.listItemHovered
              :
              (this.state.selectedText==item.name)
              ?
              styles.listItemSelected
              :
              styles.listItem
            }
          >
            <div className={myClasses.innerSurround}>
                {
                  item.icon
                  ?
                  <div className={myClasses.iconsContainer}>
                    {item.icon}
                  </div>
                  :
                  null
                }
                <div className={myClasses.textsContainer}>
                  {this.props.cutText?`${item.name.slice(0,this.props.charLength)}...`:item.name}
                </div>
            </div>
            {/* {this.props.DIVIDER?this.props.DIVIDER:null} */}
            {(index!==(numberOfItems-1)
            ?
            this.props.DIVIDER
            :
            null
            )}
             
          </div>
          )
        })
     }
  }
  componentDidMount(){
    // this.props.clickFromOutside(clic);
  }
  getComponenent = () => {
      if(this.props.asType === "button"){
        return <button  style={styles.buttonStyles}>
          {
          this.props.textInput  // Is text 
          ?<span>{this.props.textInput}</span>
          :this.props.cutText?`${this.state.selectedText.slice(0,this.props.charLength)}...`:this.state.selectedText
          } 
          {this.state.expand?<ExpandLess/>:<ExpandMore/>}
        </button>
      }
      else if(this.props.asType === "pill"){
        return <button  style={styles.pillStyles}>
          {
          this.props.textInput  // Is text 
          ?<span style={{}}>{this.props.textInput}</span>
          :this.props.cutText?`${this.state.selectedText.slice(0,this.props.charLength)}...`:this.state.selectedText
          } 
          {this.state.expand?<ExpandLess/>:<ExpandMore/>}
        </button> 
      }
      else{
        this.state.expand?<ExpandLess/>:<ExpandMore/>
      }
      
  }
  render(){
    myClasses = { 
      NULL:null,
      mainContainer:`d-flex height-auto`,
      subContainer:`height-auto`,
      // contentArea:`${this.state.expand?"  d-flex f-column pop-up-rise":"slide-down-vanish d-none"} width overflow-auto max-height-400 z-high height-auto nate-white-bg position-absolute width-auto pop-up-shadow`,
      listItem:`width-auto  d-inliine-block j-start f-row a-center width-100-cent height-50 cursor-pointer padding-l-20 padding-r-20`,
      contentArea:`${this.state.expand?"pop-up-rise":"slide-down-vanish"} overflow-auto max-height-400 z-high height-auto nate-white-bg position-absolute margin-t-30 width-200 pop-up-shadow`,
      // listItem:`d-flex j-start f-row a-center width-100-cent height-50 cursor-pointer `,
      innerSurround:`d-flex j-start f-row a-center width-100-cent height-100-cent cursor-pointer`,
      listItemHovered:`d-flex j-start f-flow a-center width-100-cent height-50 cursor-pointer`,
      iconsContainer:`d-flex j-center a-center min-width-50 height-100-cent`,
      textsContainer:`d-flex j-start a-center width-100-cent height-100-cent`,
      clickToOpen:`cursor-pointer ${this.state.iconHovered?"anime-bounce-y":null}`
    } 
    styles = {
      NULL:null,
      mainContainer:{
        backgroundColor:``,
        ...this.props.outerStyles
      },
      listItem:{
        color:`${this.props.textOriginalColor?this.props.textOriginalColor:"rgb(108, 108, 108)"}`,
        // padding: "0px 20px",
      },
      listItemHovered:{
        color:`${this.props.textOnHoverColor?this.props.textOnHoverColor:"#4a4a4a"}`,
        backgroundColor:`${this.props.onHoverBg?this.props.onHoverBg:"#f5f5f5"}`,
        // padding: "0px 20px",
      },
      listItemSelected:{
        color:`${this.props.textSelected?this.props.textSelected:"#4a4a4a"}`,
        backgroundColor:`${this.props.onSelectedBg?this.props.onSelectedBg:"#f5f5f5"}`,
      },
      contentArea:{
          padding: "9px 0px",
          backgroundColor: "#102C60",
          borderRadius: "3px",
      },
      buttonStyles:{ 
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
        padding: "12px 27px",
        outline: "none",
        border:" 0px",
        color: "white",
        backgroundColor: "black",
        borderRadius: "50px",
        fontFamily: "'Roboto', sans-serif",
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "2.5px",
        fontWeight: "500",
        cursor:"Pointer",
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
        ...this.props.buttonStyles,
      },
      pillStyles:{ 
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding: "6px 20px",
        outline: "none",
        border:" 1px solid black",
        color: "black",
        backgroundColor: "white",
        borderRadius: "50px",
        fontFamily: "'Roboto', sans-serif",
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "2.5px",
        fontWeight: "500",
        cursor:"Pointer",
        // boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
        ...this.props.pillStyles,
      }
    }
    
      return (
        <div className={myClasses.mainContainer} style={styles.mainContainer}>
        <div className={myClasses.subContainer} style={styles.NULL}>
            <div 
              className={myClasses.clickToOpen}
              onClick={()=>{
                this.setState({expand:!this.state.expand})
              }}
              onMouseOver={()=>{this.setState({iconHovered:!this.state.iconHovered})}} 
              onMouseOut={()=>{this.setState({iconHovered:!this.state.iconHovered})}} 
            >
              {this.getComponenent()}
            </div>
            {this.state.expand
            ?
            <div className={myClasses.contentArea} style={styles.contentArea}>
                {this.ejectItems()}
            </div>
            :
            null  
          }
          </div>
        </div>
      )
    }
}
