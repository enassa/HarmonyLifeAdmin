import { Campaign, Login } from '@mui/icons-material';
import React, { Component } from 'react';
import { fontFamily5, fontFamily3 } from '../contants/uiConstants';
import { withRouter } from 'react-router-dom';
let styles;
 class SimpleNavbar extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    getList = () => {
        const list = [
            {title:"About us"},
            {title:"Contact Us"},
        ]
        return list.map((item, index) => {
            return <li style={styles.listStyles} className='margin-r-20 cursor-pointer height-100-cent list-style-type-none  text-decoration-none'>{item.title}</li>
        })
    }
    handleClick = (buttonType) => {
      if(buttonType==='BUTTON_ONE')
      { 
        this.props.handleButtonOneClick?this.props.handleButtonOneClick(buttonType):alert('pass a function "handleButtonOneClick"')
      } else if(buttonType==='TWO'){
        this.props.handleButtonTwoClick?this.props.handleButtonTwoClick(buttonType):alert('pass a function "handleButtonTwoClick"')
      }
    }
  render() {
    
      const logoDetails = {
        logo:<Campaign style={{fontSize:50}}/>,
        name:"MySay.io",
        buttonOneText:this.props.buttonOneText?this.props.buttonOneText:"Login",
        buttonTwoText:this.props.buttonTwoText?this.props.buttonTwoText:"Sign up",
      }
      styles = {
          logoStyles:{

          },
          listStyles:{
            fontSize:20,
            fontFamily:fontFamily3,
            fontWeight:300,
          },
          buttonOneStyle:{
            // backgroundColor:"#BCBAD2",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"transparent",
            borderRadius:10,
            // color:"#BCBAD2",
            // border:"1px solid #BCBAD2",
            color:"#01B000",
            border:"1px solid #01B000",
            width:120,
            height:40,
            fontFamily:fontFamily3,
            // fontWeight:300,
            cursor:"pointer"
          },
          buttonOneIconStyles:{
            marginRight:10,
          },
          buttonTwoStyles:{
            display:"none",
            backgroundColor:"transparent",
            borderRadius:30,
            color:"#01B000",
            border:"1px solid #01B000",
            width:70,
            height:40,
            cursor:"pointer"
          }
      }
    
    return <div style={{fontFamily:fontFamily5,fontWeight:300, fontSize:30}} className='width-100-cent padding-20 height-60 a-center j-space-between '>
        <div style={{visibility:this.props.noLogo?"hidden":"visible"}} className='a-center j-center'>
            <span className='margin-r-10 a-center height-100-cent'>{logoDetails?.logo}</span>
            <span className='margin-r-10 a-center height-100-cent'>{logoDetails?.name}</span>
        </div>
        <div   className='j-space-between a-center width-100-cent height-100-cent '>
            <ul style={{visibility:this.props.noMenuList?"hidden":"visible"}} className='j-start height-100-cent  a-center margin-r-40 width-100-cent j-end'>
                {this.getList()}
            </ul>
            {
                    <div className='height-100-cent a-center j-center'>
                        <button style={styles.buttonOneStyle} onClick={() => {
                          this.handleClick('BUTTON_ONE')
                        }}>
                            {<Login style={styles.buttonOneIconStyles} />}
                            {logoDetails.buttonOneText}
                        </button>
                        {
                          this.props.showButtonTwo?
                          <button style={styles.buttonTwoStyles}
                          onClick={() => {
                            this.handleClick('BUTTON_TWO')
                          }}>
                            {logoDetails.buttonTwoText}
                          </button>
                          :null
                        }
                    </div>
                }
        </div>
    </div>;
  }
}
export default withRouter(SimpleNavbar)