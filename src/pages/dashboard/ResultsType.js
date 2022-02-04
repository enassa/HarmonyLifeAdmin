import React, { Component } from 'react'
import FormGenerator from '../../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../../tools/FormGenerator/FormGeneratorFields';
import potbelly from '../../assets/images/potbelly.jpeg';
import { getWindowWidth } from '../../contants/generalFunctions';
import { ALL_URLS } from '../../contants/urls';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendAnswers } from '../../store/actions/answersActions';
import { openSnackBar } from '../../store/actions/generalActions';
import SnackBar from '../../component_bag/SnackBars';
import GroupCard from '../../component_bag/GroupCard';
import { randomImages } from '../../dummydata/dummyData';
import orderImage from '../../assets/images/potbellyorder.jpeg'
import takeoutImage from '../../assets/images/takeout.jpeg'
import dineInImage from '../../assets/images/dinein.jpeg'
import { deliVery, delivery2, dinein, fontFamily5, foood2, foood9, potbelly1, takeout2, vertical, dineinNow, motoBike } from '../../contants/uiConstants';

let myData =  undefined;
let emptyButRequired = [];
let regexErrs = []
let cardData = undefined
class ResultsType extends Component {
    constructor(props){
        super(props)
        this.state = {
            expanded:[],
            formFillingStarted:false,
            emptyRequiredFields:[],
            regexErrors:[],
            data:{}
        }
    }
    handleSubmit = (data,field,completed) => {
        console.log(emptyButRequired)
        if(this.state.formFillingStarted!==true){
            this.props.openSnackBar(`Please fill one of the forms below`)
            return
        }
        // if(emptyButRequired.length>=3){
        //     this.props.openSnackBar(`Please ensure all required fields are filled`)
        //     console.log(emptyButRequired)
        //     return
        // }
       if(regexErrs.length !==0){
            this.props.openSnackBar(`Invalid inputs`)
            return
        }
        this.props.sendAnswers(myData)
        this.props.history.push(ALL_URLS.sent)
    }
    ejectCards() {
          return cardData.map((data, index)=>{
            return  <GroupCard  cardData={data} innerStyles={{maxHeight:200,minHeight:200}} outerStyles={{minWidth:200,marginBottom:40}}/>
          })
    }
     
    render() {
        const innerWidth = getWindowWidth()
        cardData = [
            {
                id:1,
                image:motoBike,
                groupName:"Delivery Results",
                url:"/potbelly"
            },
            {
                id:2,
                image:dineinNow,
                groupName:"Dine in Results",
                url:"no-forms"
            },
            {
                id:3,
                image:deliVery,
                groupName:"Take-out Results",
                url:"no-forms"
            },
        ]
        return (
            <div style={{backgroundImage:`url(${potbelly1})`}}  className={` ${innerWidth<800?'padding-0':'padding-20'} fit-background width-100-cent height-100-cent nate-white-bg overflow-hidden a-center  y-scroll f-column j-star`}>
            {this.props.snackBarState?<SnackBar/>:null}
            <div  className={`${innerWidth<800?'width-100-cent':'width-70-cent'}   above-all nate-white-partial-bg elevated-blend curved-corners height-auto padding-20 `}>
                {/* <FormGenerator
                removeButton
                 fields = {[
                    {
                        fieldType: FIELDS.imageBanner,
                        // title: "P🥗T BELLY F🥘RM",
                        title: "Which service did you use?",
                        name:"banner",
                        regexPattern:'#^23*&',
                        subtitle:"Select the service you often use",
                        image: '',

                    }
                ]}
                >
                    
                </FormGenerator> */}
                <div 
                    style={{display:"flex",position:"relative", borderRadius:`${innerWidth<800?'10px':'10px'}` ,backgroundPosition:"center",
                            backgroundSize:"cover", height:`${innerWidth<900?innerWidth<700?'120px':'200px':'200px'}`, width:"100%", flexFlow:"column",
                            justifyContent:"center",alignItems:"center", 
                            fontSize:`${innerWidth<900?innerWidth<600?'25px':'30px':'50px'}`,
                            fontFamily:fontFamily5,
                            overflow:"hidden",
                            color:"rgb(0,0,0,0.5)",
                    }}
                    >
                        <div style={{width:"100%", height:"100%",position:"absolute" ,backgroundColor:"rgb(0,0,0,0.0)",}} ></div>
                        <div style={{width:"100%", height:"100%",zIndex:1,display:"flex", justifyContent:`${innerWidth<700?'center':'center'}`,flexFlow:"column", alignItems:"center"}}>
                            <span style={{fontSize:"70%"}}>Please select a service to view results</span>
                            {/* <div style={{fontSize:"40%"}}>Please select the service you often use</div> */}
                        </div>
                       
            </div>
                <div style={{backdropFilter: "blur(5px)"}} className={`${innerWidth<800?'f-column padding-20 j-start y-scroll x-hidden a-center j-center':'width-70-cent x-scroll j-start'}  d-flex width-100-cent height-auto  padding-t-50 padding-b-50`}>
                    {this.ejectCards()}
                </div>
                </div>
                {!vertical?<img className=' left-right position-absolute bottom-0  pointer-events-none' alt='' src={foood9}></img>:null}
                {!vertical?<img className='above-all right-left position-absolute bottom-0 flip  pointer-events-none' alt='' src={foood9}></img>:null}
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendAnswers: (answers) => dispatch(sendAnswers(answers)),
        openSnackBar: (message,snacType) => dispatch(openSnackBar(message,snacType)),
  }
}
const mapStateToProps = (state) => {
    return {  
        submissionState:state.answersReducer.submissionState,
        receivedData:state.answersReducer.receivedData,
        snackBarState:state.generalReducer.snackBarState,
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ResultsType));
