import {ALERTS} from '../../contants/uiConstants';
import {ACTION_TYPES} from '../actions/ActionTypes';
const initialState = {
        announcements:[],
        contributers:[],
        snackBarState:false,
        snackBarMessage:'',
        snackBarType:'',
        profileInfoState:false,
        unjoined:[],
        actionSuccesFul:false,
    }
const generalReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ACTION_SUCCESFUL:  
        // console.log(action.payload)
            return {
                ...state,
                actionSuccesFul:true
            }   
        case ACTION_TYPES.RESET_ACTION_STATE:  
        // console.log(action.payload)
            return {
                ...state,
                actionSuccesFul:false
            }   
        case ACTION_TYPES.OPEN_SNACK_BAR:
            // alert("opeeen")
            return {
                ...state,
                snackBarMessage:action.payload.message,
                snackBarType:action.payload.snackType,
                snackBarState:true,
            }   
        case ACTION_TYPES.CLOSE_SNACK_BAR:
            return {
                ...state,
                snackBarState:false,
            }   
        case ACTION_TYPES.OPEN_PROFILE_INFO:
            return {
                ...state,
                profileInfoState:true,
            }   
        case ACTION_TYPES.CLOSE_PROFILE_INFO:
            return {
                ...state,
                profileInfoState:false,
            }   
        case ACTION_TYPES.UNJOIN_ORGANIZATION:
            return {
                ...state,
                unjoined:false,
            }   
        default:
            break;
    }
    return state;
}

export default generalReducer;
