import {ALERTS} from '../../contants/uiConstants';
import {ACTION_TYPES} from '../actions/ActionTypes';
const initialState = [{
        userData: null,
        authError: null,
        isLogedIn: false,
        verificationState:false,
        errorState:false,
    }]
const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.REGISTER_SUCCESS:
            return {
                ...state,
                userData:action.payload,
                isLogedIn:true,
                authError: ALERTS.REGISTERATION_SUCCESS
            }
        case ACTION_TYPES.REGISTER_ERROR:
            return {
                ...state,
                authError: ALERTS.REGISTERATION_ERROR,
            }               
        case ACTION_TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                userData:action.payload,
                isLogedIn:true,
                authError: ALERTS.REGISTERATION_SUCCESS,
                errorState:false
            }
            break;
        case ACTION_TYPES.LOGIN_ERROR:
            return {
                ...state,
                authError: action.payload,
                errorState:true,
            }    
            break;
        case ACTION_TYPES.LOG_OUT:
            return {
                ...state,
                userData:{},
                isLogedIn:false, 
            }
            
            break;
        case ACTION_TYPES.RESET_SUCCES:
            return {
                ...state,
                resetState:true,
            }
            break;
        case ACTION_TYPES.RESET_ERROR:

            break;
        case ACTION_TYPES.VERIFIFICATION_SUCCESS:
            return {
                ...state,
                verificationState:true,
            }
            break;
        case ACTION_TYPES.VERIFIFICATION_ERROR:

            break;
        default:
            break;
    }
    return state;
}

export default authReducer;
