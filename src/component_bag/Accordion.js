import React, { Component } from 'react'
import PopUpButton from './PopUpButton'
import { KeyboardArrowUpIcon } from '@mui/icons-material/KeyboardArrowUp';
import { KeyboardArrowDownIcon } from '@mui/icons-material/KeyboardArrowDown';
import { fontFamily3, fontFamily5 } from '../contants/uiConstants';
import { randomImages } from '../dummydata/dummyData';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';
import FormGenerator from '../tools/FormGenerator/FormGenerator';
import DineInForm from '../pages/DeliveryForm';
import DeliveryForm from '../pages/DineInForm';
import { getWindowWidth } from '../contants/generalFunctions';
let myData =  undefined;
let emptyButRequired = [];
let regexErrs = []
export default class Accordion extends Component {
    ejectAccordion = () => {
        const accordion = [
            {
                heading:'Delivery services feedback',
                component:<DeliveryForm 
                    dataCollector = {(dataCollectedSoFar,currentData,field,fields,allFields,requiredFields,regexPatterns,) => {dataCollector('delivery',dataCollectedSoFar,currentData,field,fields,allFields,requiredFields,regexPatterns,)}}
                />
            },
            {
                heading:'Dine in service form',
                component:<DineInForm dataCollector = {(dataCollectedSoFar,currentData,field,fields,allFields,requiredFields,regexPatterns,) => {dataCollector('dineIn',dataCollectedSoFar,currentData,field,fields,allFields,requiredFields,regexPatterns,)}}/>
            },
        ]
        let formStarted = undefined
        let dataCollector = (
            formOption,
            dataCollectedSoFar,
            currentData,
            field,
            fields,
            requiredFields,
            regexErrors,
            ) => {
            if(!this.state.formFillingStarted){
                this.setState({formFillingStarted:true})
            }

                // console.log( 
                //     formOption,
                //     dataCollectedSoFar,
                //     currentData,
                //     field,
                //     fields,
                //     requiredFields,
                //     regexPatterns,
                // )
            myData = dataCollectedSoFar
            emptyButRequired = requiredFields
            regexErrs = regexErrors

        }
        let controlExpansion = (index) => {
            const { expanded } = this.state
            if(expanded.includes(index)){
                this.setState({expanded:[]})
                return
            }
                this.setState({expanded:[index]})
        }
        const {expanded} = this.state
        return <div className='j-start f-column width-100-cent'>
            
            <div style={{fontFamily:fontFamily5, fontSize:20, fontWeight:300}} className='width-100-cent padding-t-30 j-center nate-purple-text margin-b-30 f-column'>
                {/* <span>Please fill one of the forms with reference to the service you often use </span> */}
                <FormGenerator
                removeButton
                 fields = {[
                    {
                        fieldType: FIELDS.imageBanner,
                        // title: "P🥗T BELLY F🥘RM",
                        title: "Which service did you use?",
                        name:"banner",
                        regexPattern:'#^23*&',
                        subtitle:"Select the service you use often",
                        image: randomImages,
                    }
                ]}
                >
                </FormGenerator>
                <div className='width-100-cent d-flex j-center a-center height-100-cent'>
                    {this.ejectCards()}
                </div>
            </div>
            {
                accordion.map((item,index) => {
                    return  <div key={index} style={{fontFamily:fontFamily3}} className='width-100-cent height-auto j-start f-column'>
                            <div style={{fontSize:20, fontWeight:300}} onClick = {() => {controlExpansion(index)}} className='width-100-cent cursor-pointer height-50  a-center j-space-between padding-l-10 padding-r-10'>
                                <span>{item.heading}</span>
                                {
                                    expanded[0] === index
                                    ?<KeyboardArrowUpIcon />
                                    :<KeyboardArrowDownIcon />
                                }
                            </div>
                            <div style={{height:`${expanded[0] === index?'100%':0}`, maxHeight:`${expanded[0] === index?'100%':0}`}} className='overflow-hidden width-100-cent nate-blue-bg'>
                                {item.component}
                            </div>
                        </div>
                })
            }
            <div className='width-100-cent j-end'>
                {expanded.length
                ?<PopUpButton innerStyles={{ display:"flex",
                                justifyContent:"flex-start",
                                padding: "12px 27px",
                                outline: "none",
                                border:" 0px",
                                color: "white",
                                backgroundColor: "#0C6EFD",
                                borderRadius: "50px",
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: "11px",
                                textTransform: "uppercase",
                                letterSpacing: "2.5px",
                                fontWeight: "500",
                                cursor:"pointer",
                                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",}} 
                            handleClick={()=>this.handleSubmit()}/>
                :null
            }
            </div>
       
    </div>
    }
    render() {
        const innerWidth = getWindowWidth()
        return (
            <div className={`${innerWidth<800?'width-100-cent':'width-70-cent'} above-all curved-corners height-auto elevated-blend padding-20 `}>
            {this.ejectAccordion()}
        </div>
        )
    }
}
