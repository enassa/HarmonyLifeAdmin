import {ALERTS} from '../../contants/uiConstants';
import {ACTION_TYPES} from '../actions/ActionTypes';
const initialState = {
        joinedGroups:[],
        pendingGroups:[],
        groups:[],
        openedGroup:[]
    }
const groupReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_GROUPS:
            return {
                ...state,
                groups:[...state.groups, ...action.payload]
            }   
        case ACTION_TYPES.GET_JOINED_GROUPS:
            return {
                ...state,
                joinedGroups:action.payload
            }   
        case ACTION_TYPES.GET_PENDING_GROUPS:
            return {
                ...state,
                pendingGroups:action.payload
            }   
        case ACTION_TYPES.GET_DIF_GROUPS:
            return {
                ...state,
                groups:action.payload
            }   
        case ACTION_TYPES.OPEN_GROUP:
            return {
                ...state,
                openedGroups:action.payload
            }   
        case ACTION_TYPES.APPLY_TO_GROUP:
            // alert(action.payload)
            return {
                ...state,
                pendingGroups:[...state.pendingGroups, action.payload]
            }   
        case ACTION_TYPES.SEARCH_GROUPS:
            return {
                ...state,
                groups:action.payload
            }   
        default:
            break;
    }
    return state;
}

export default groupReducer;
