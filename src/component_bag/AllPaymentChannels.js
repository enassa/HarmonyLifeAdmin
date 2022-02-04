

import React, { Component } from 'react';
import "../css/paymentchannels.css";
import { FormControlLabel, Radio } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import PopUpButton from './PopUpButton';
import FormGenerator from '../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';
import Dropdown from './Dropdown';
import SuccesAnimation from './SuccesAnimation';

class AllPaymentChannels extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedPaymentMode:undefined,
            currentStep:0,
            lastStep:3,
            paymentMode:null,
        }
    }
    /**Function for changin payment process steps */
    changeStep = (changeType) => {
        console.log(changeType)
        if (changeType==="NEXT_STEP") this.setState({currentStep:this.state.currentStep+1})
        else if (changeType==="PREV_STEP")  this.setState({currentStep:this.state.currentStep-1})
    }
    /** Function for setting payment mode */
    handleChange = (paymentMode) => {
        this.setState({selectedPaymentMode:paymentMode,},
            this.changeStep("NEXT_STEP")
        );
    }
    /** Get payment from dropdown */
    paymentModeChangefromDropdown = (paymentMode) => {
        this.setState({selectedPaymentMode:paymentMode})
    }
    ejectPaymentChannels = () => {
      return this.props.cardData.map((card, index) => {
        return <div className="payment-card"
            onClick = {() =>{this.handleChange(card)}}
            >
            <img alt="" src={card.logo}/> 
            <div className="decision-inputs-container">
                        {/* <Radio
                            checked={this.state.selectedValue === card.name}
                            // onChange={()=>this.handleChange(card.name)}
                            value={card.name}
                            name="payment"
                            inputProps={{ 'aria-label': 'payment options' }}
                    /> */}
                    <span>{card.name}</span>
            </div>
    
            </div>
      })
    }
    /** Funtion that lists all payment options available, it calls the ejectPaymentChannels() 
     * to get the list  of available channels
     * */ 
    paymentOptionSelectionComponent = () => {
        return <div className="grid-view payments-container">
            {this.ejectPaymentChannels()}
        </div>
    }

    /**  Function that returns form for collecting payment info */
    paymentInfoCollectionComponent = () =>{
        return <div className="grid-view payments-container">
            <div className="payment-type-container">
                <Dropdown 
                    handleSelect = {(itemName)=>this.paymentModeChangefromDropdown(itemName)} 
                    pillStyles={{maxWidth:171, maxHeight:36 , 
                        minWidth:171, minHeight:36 , 
                        overFlow:"hidden",  border:"0.3px ",
                        boxShadow:" 0 1px 0 0 rgb(0 0 0 / 0%), 0 2px 10px 0 rgb(0 0 0 / 5%)",
                        border:"0.5px solid rgb(239 239 239)",
                        color:"grey"
                    }} 
                    itemList ={this.props.cardData} asType={"pill"}
                    instructionText={this.state.selectedPaymentMode.name}
                    returnObject = {true}
                />
                <div className="selection-payment-card-container">
                    <div className="selected-payment-card">
                        <img alt="" src={this.state.selectedPaymentMode.logo}/>
                        {/* <span>{this.state.selectedPaymentMode.name}</span> */}
                    </div>
                </div>
            </div>
            <div className="payment-form-container">
                <FormGenerator
                    fields = {[
                        {
                        fieldType: FIELDS.input,
                        name: "name",
                        label: "Full Name",
                        placeholder: "Username",
                        required: true,
                        },
                        
                        {
                        fieldType: FIELDS.input,
                        name: "email",
                        label: "Email",
                        placeholder: "Email",
                        required: true,
                        },
                        {
                            fieldType: FIELDS.input,
                            name: "contact",
                            label: "Contact",
                            placeholder: "Contact",
                            required: false,
                            },
                        {
                        fieldType: FIELDS.password,
                        name: "pasword",
                        label: "Paswword",
                        placeholder: "Password",
                        required: true,
                        },
                        {
                        fieldType: FIELDS.password,
                        name: "amount",
                        label: "Amount",
                        placeholder: "Amount",
                        required: true,
                        },
                        {
                        fieldType: FIELDS.password,
                        name: "address1",
                        label: "Address Line 1",
                        placeholder: "Address Line 1",
                        required: true,
                        },
                        // {
                        // fieldType: FIELDS.password,
                        // name: "address2",
                        // label: "Address Line 2",
                        // placeholder: "Address Line 2",
                        // required: true,
                        // },
                    ]}
                    handleOnSubmit = {(data, resetFunc)=>{
                        // this.changeStep(data,resetFunc)
                        this.changeStep("NEXT_STEP")
                    }}
                    handleSelect = {(itemName)=>{this.changeStep("NEXT_STEP")}}
                    buttonText={"Pay"}
                    buttonStyles={{backgroundColor:"#5E71E4", borderRadius:"5px"}}
                    inputGroupItemStyles = {{fontFamily:"'Open Sans', sans-serif"}}
                    style={{
                        boxShadow:" 0 1px 0 0 rgb(0 0 0 / 0%), 0 2px 10px 0 rgb(0 0 0 / 5%)",
                        padding:"20px",
                        height:"95%",
                        overflowY:"auto",
                        border:"0.5px solid rgb(239 239 239)",
                        borderRadius:"3px"
                        
                    }}
                />
            </div>
           
        </div>
    }
    // function that returns a success message component
    successComponent = () => {
        return <div className="payments-container">
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"100%"}}>
                    <SuccesAnimation/>
                </div>
            </div>
    }

    // function that calls components
    getStepComponent = () => {
        switch (this.state.currentStep) {
            case 0:
                return this.paymentOptionSelectionComponent();
            case 1:
                return this.paymentInfoCollectionComponent();
            case 2:
                return this.successComponent();
            default:
                break;
        }
    }
    render() {
        return <div className="payment-page">
        <div className="grid-view payments-container">
            {this.getStepComponent()}
        </div>
        <div className="flow-buttons-container">
            {/* If use has already made a choice, show previous */}
            {this.state.currentStep!=0
            ?<PopUpButton 
                    handleClick = {(value)=>this.changeStep("PREV_STEP")}
                    buttonText="Prev" 
                    innerStyles={{ minHeight:40, backgroundColor:"white", color:"grey", }}
            />:null
            }
            <div className="buttons-divider"></div>
            {/* {this.state.currentStep>=0 && this.state.currentStep<this.state.lastStep
             ?<PopUpButton 
                        handleClick = {(value)=>this.changeStep("NEXT_STEP")}
                        buttonText="Next" 
                        innerStyles={{ minHeight:40, backgroundColor:"white", color:"grey",  }}
            />:null
            } */}
            {/* {this.state.currentStep===this.state.lastStep
             ?<PopUpButton 
                        handleClick = {(value)=>this.changeStep("NEXT_STEP")}
                        buttonText="Finish" 
                        innerStyles={{ minHeight:40, backgroundColor:"white", color:"grey",  }}
            />:null
            } */}

            {/* If user has finished, show success */}
            {this.state.currentStep>this.state.lastStep
             ?<PopUpButton 
                        handleClick = {(value)=>this.changeStep("NEXT_STEP")}
                        buttonText="Finish" 
                        innerStyles={{ minHeight:40, backgroundColor:"white", color:"grey",  }}
            />:null
            }
        </div>
    </div>
    }
}

export default withRouter(AllPaymentChannels)


