import React, { Component } from 'react';
import { colors, RANDOM, months, letteringColor6 } from '../contants/uiConstants';
import { getRandomColor, getRandomFromArray} from '../contants/generalFunctions';
import styles from '../css/paymentcard.module.css'
import { connect } from 'react-redux';
import { openPaymentForm } from '../store/actions/PaymentAction';
class PaymentCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            hovered:false
        }
    }
    handleClick = (amount) => {
        this.props.openPaymentForm(amount)
    }
    render() {
        const {cardData} = this.props
        const randomColor = getRandomColor()
        const amount = `${cardData.id}000`
         const {hovered} = this.state
        return (
            <div style={{color:"grey",fontWeight:"300", fontFamily:"Helvetica Neue"}} className="d-flex j-center f-column a-center">
                <div onClick = {() => {this.handleClick(amount)}} id={styles['sub-container']} style={{borderLeft:`10px solid ${this.props.color?this.props.color:randomColor}`}}  className={`d-flex nate-white-bg  j-center margin-b-10 f-column a-center width-200 height-100 transition-all-fast  ${hovered?'elevated-all':'elevated-card'} cursor-pointer curved-corners-light`}>
                    <span style={{color:`${this.props.color?this.props.color:randomColor}`, fontSize:"40px" }}>&#8373; {amount}</span>
                </div>
                <div>
                    <span style={{color:`${letteringColor6}`}}>{`${!cardData?cardData.title:getRandomFromArray(months)} dues`}</span>
                </div>
               
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return { 
        openPaymentForm:(amount) =>  dispatch(openPaymentForm(amount))
  }
}
const mapStateToProps = (state) => {
    return {
        payments: state.payments.payments,
        paymentstatuses: state.payments.paymentstatuses,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PaymentCard);


