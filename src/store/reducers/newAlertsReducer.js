import { deleteObjFromArrayOfObject, deleteObjFromArrayOfObjects } from '../../contants/generalFunctions';
import {ALERTS} from '../../contants/uiConstants';
import {ACTION_TYPES} from '../actions/ActionTypes';
const initialState = {
        joinedGroups:[],
        pendingGroups:[],
        newAlerts:[],
        openedGroup:[]
    }
const newAlertsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_NEW_ALERTS:
            return {
                ...state,
                newAlerts:[...state.newAlerts, ...action.payload]
            }   
        case ACTION_TYPES.ALERT_MOVED:
            let arr = this.state.newAlerts
            let newArr = deleteObjFromArrayOfObjects(arr,'id',action.payload)
            return {
                ...state,
                newAlerts:newArr
            }   
       
        default:
            break;
    }
    return state;
}

export default newAlertsReducer;
