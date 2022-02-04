import {ALERTS} from '../../contants/uiConstants';
import {ACTION_TYPES} from '../actions/ActionTypes';
const initialState = {
        joinedInstitutions:[],
        pendingInstitutions:[],
        activeInstitutions:[],
        services:[],
        openedInstitutions:[]
    }
const institutionReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_ACTIVE_INSTITUTIONS:
            return {
                ...state,
                activeInstitutions:action.payload
            }   
        case ACTION_TYPES.GET_SERVICES:
            return {
                ...state,
                services:action.payload
            }   
        case ACTION_TYPES.GET_JOINED_INSTITUTIONS:
            return {
                ...state,
                joinedInstitutions:action.payload
            }   
        case ACTION_TYPES.GET_PENDING_INSTITUTIONS:
            return {
                ...state,
                pendingInstitutions:action.payload
            }   
        case ACTION_TYPES.GET_DIF_INSTITUTIONS:
            return {
                ...state,
                institutions:action.payload
            }   
        case ACTION_TYPES.OPEN_INSTITUTION:
            return {
                ...state,
                openedInstitutions:action.payload
            }   
        case ACTION_TYPES.APPLY_TO_INSTITUTION:
            // alert(action.payload)
            return {
                ...state,
                pendingInstitutions:[...state.pendingInstitutions, action.payload]
            }   
        case ACTION_TYPES.SEARCH_INSTITUTIONS:
            return {
                ...state,
                institutions:action.payload
            }   
        default:
            break;
    }
    return state;
}

export default institutionReducer;
