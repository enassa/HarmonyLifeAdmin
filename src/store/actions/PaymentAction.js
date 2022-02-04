import {URL_END_POINTS, TOKEN} from '../../contants/urls';
import {ACTION_TYPES} from './ActionTypes';
import axios from 'axios';
import ApiCallHandler from '../../reusable/ApiCallHandler'
import { openSnackBar } from './generalActions';
import { changeLoadingState } from './AppStateActions';

let lastDataId = 0;
let innitialLoad = null;
// Payments Actions
export const getPayments = (limit = undefined,initial=undefined) => {
    if(innitialLoad===initial){
        return async (dispatch, getState) => {
                dispatch({type: ACTION_TYPES.DO_NOTHING, payload:{}})
        }
    }
    if(initial==='initial'){
        innitialLoad = initial
    }
    let url =  URL_END_POINTS.GET_PAYMENTS;
    if(limit !== undefined){
         url = `${URL_END_POINTS.GET_PAYMENTS}?_start=${lastDataId}&_limit=${lastDataId+limit}`
         lastDataId = lastDataId + limit
    }
    return async (dispatch, getState) => {
        axios.get(url).then((response) => {
            dispatch({type: ACTION_TYPES.GET_PAYMENTS, payload:response.data})
        }).catch((error) => {})
    }
}
export const openPayments = (Payments) => {
    return (dispatch, getState) => {
            dispatch({type: ACTION_TYPES.GET_PAYMENTS, payload:Payments})
    }
}
export const openPaymentForm = () => {
    return (dispatch, getState) => {
            dispatch({type: ACTION_TYPES.OPEN_PAYMENT_FORM, payload:{}})
    }
}
export const closePaymentForm = () => {
    return (dispatch, getState) => {
            dispatch({type: ACTION_TYPES.CLOSE_PAYMENT_FORM, payload:{}})
    }
}
export const makePayment = (paymentData) => {
    let url = URL_END_POINTS.MAKE_PAYMENT
    return async (dispatch, getState) => {
        axios.post(url, paymentData, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + ' ' + TOKEN.paymentToken,
                mode: 'no-cors'
            }
        }).then((res) => {
            dispatch(changeLoadingState())
            if(res.data.responseCode === "0000"){
                let paymentUrl = res.data.data.checkoutDirectUrl
                window.location.href = paymentUrl 
                // window.(paymentUrl)
                dispatch(closePaymentForm())
            }
            console.log(res)
        }).catch((error) => {
            dispatch(changeLoadingState())
            dispatch(openSnackBar('The Payment server not reachable','error'))
           console.log(error)
        })
    
    
    }
}
export const updatePayments = (userData) => {
    return(dispatch, getState) => {}
}
export const deletePayments = (userData) => {
    return(dispatch, getState) => {}
}
