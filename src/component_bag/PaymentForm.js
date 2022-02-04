import React, { Component } from 'react';
import { currency_list, WEBSITE_ADDRESS, WEBSITE_NAME, domainName, devDomainName } from '../contants/uiConstants';
import FormGenerator from '../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';
import { connect } from 'react-redux';
import { closePaymentForm, openPaymentForm, makePayment } from '../store/actions/PaymentAction';
import { openSnackBar } from '../store/actions/generalActions';
import { noPropIsEmpty, getAsObjectSession, generateRandomString, randomString, getAsObjectFromSession, checkIfLoggedIn } from '../contants/generalFunctions';
import { TOKEN, ALL_URLS} from '../contants/urls';
import { changeLoadingState } from '../store/actions/AppStateActions';
import OverlayLoader from './OverlayLoader';

class  PaymentForm extends Component {
    constructor(props){
        super(props)
        this.state = {
               user:{},
               amount:0,
        }
    }
    handleSubmit = (data, resetForm,actionCompleted) => {
        
        if(!(data.hasOwnProperty('amount')&&data.hasOwnProperty('currency'))){
            actionCompleted();
            this.props.openSnackBar('All fields are required','error')
            return 0
        }
        this.props.changeLoadingState()
        actionCompleted();
        let randomString = generateRandomString() 
        let randomString2 = generateRandomString(5) 
        let  user = getAsObjectFromSession('userData')
        if(typeof user === 'object')this.setState({user:user})
        const paymentData = {
            "clientReference":`${randomString}`,
            "description": `Payment from ${WEBSITE_NAME}`,
            "callbackUrl": ``,
            "returnUrl": `${domainName}${ALL_URLS.responsePageBase}/success`,
            "cancellationUrl":`${domainName}${ALL_URLS.responsePageBase}/failure`,
            "name": user.name,
            "email":user.email,
            "phone": user.phone,
            "billAmount": data.amount,
            "serviceCharge": 0,
            "totalAmount": data.amount,
            "billType":"donation",
            "billNo": randomString2,
            "paymentSource": "KNUST"
           }
           console.log(paymentData)
           this.props.makePayment(paymentData)
       
    //    const stopInterVal = () => {
    //             actionCompleted();
    //             this.props.openSnackBar('Transaction was succesfully','success')
    //             clearInterval (interval)
    //             this.props.closePaymentForm()
    //     }
    //     var interval = setInterval(stopInterVal, 500) 
    }
    componentDidMount(){
       
    }
    render() {
        return (
            <div 
                onClick={(e)=>{
                    e.stopPropagation() 
                    this.props.closePaymentForm()
                }
                } 
                style={{zIndex:"60"}} 
                className='anime-fade-in position-absolute d-flex f-column j-end a-center nate-black-partial-bg fill-entire-page'
            >
                {this.props.loading?OverlayLoader:null}
                <div 
                    onClick={(e)=>{
                        e.stopPropagation() 
                    }}   
                    style={{width:300, height:400}} className='slide-up-2 transition-all curved-corners nate-white-bg padding-30 d-flex j-center a-center nate-white-bg'
                >
                    <FormGenerator 
                        fields = {[
                        {
                        fieldType: FIELDS.input,
                        name: "amount",
                        label: "Amount",
                        placeholder: "Amount",
                        required: true,
                        },
                        {
                        fieldType: FIELDS.dropDown,
                        property:'label',
                        name: "currency",
                        label: "Currency",
                        placeholder: "Currency",
                        dropDownList:currency_list,
                        required: true,
                        },
                    ]}
                    handleOnSubmit = {(data, resetFunc,actionCompleted)=>{
                        this.handleSubmit(data,resetFunc,actionCompleted)
                    }}
                    // handleSelect = {(itemName)=>{this.handleSelect(itemName)}}
                    buttonText={"Pay"}
                    buttonStyles={{backgroundColor:"#5E71E4", borderRadius:"5px"}}
                    inputGroupItemStyles = {{fontFamily:"'Open Sans', sans-serif"}}
                
                />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closePaymentForm: () => dispatch(closePaymentForm()),
        openSnackBar:(message, messageType) => dispatch(openSnackBar(message, messageType)),
        openPaymentForm:() => dispatch(openPaymentForm()),
        makePayment: (paymentData) =>  dispatch (makePayment(paymentData)),
        changeLoadingState : () => dispatch(changeLoadingState())
  }
}
const mapStateToProps = (state) => {
    return {
        paymentFormState:state.payments.paymentFormState,
        loading:state.appState.loading
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PaymentForm);