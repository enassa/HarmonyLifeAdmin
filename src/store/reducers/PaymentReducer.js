import {ACTION_TYPES} from '../actions/ActionTypes';
const initialState = {
        payments:[],
        openedPayments:[],
        paymentReceipts:[],
        paymentFormState:false,
    }
const paymentsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_PAYMENTS:
            return {
                ...state,
                payments:[...state.payments, ...action.payload]
            }   
        case ACTION_TYPES.MAKE_PAYMENT:
            return {
                ...state,
                payments:action.payload
            }   
        case ACTION_TYPES.OPEN_PAYMENT_FORM:
            return {
                ...state,
                paymentFormState:true
            }   
        case ACTION_TYPES.CLOSE_PAYMENT_FORM:
            return {
                ...state,
                paymentFormState:false
            }   
        default:
            break;
    }
    return state;
}

export default paymentsReducer;
