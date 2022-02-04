import { deleteObjFromArrayOfObject, deleteObjFromArrayOfObjects } from '../../contants/generalFunctions';
import {ALERTS} from '../../contants/uiConstants';
import {ACTION_TYPES} from '../actions/ActionTypes';
const initialState = {
        joinedGroups:[],
        pendingGroups:[],
        processingAlerts:[],
        openedGroup:[]
    }
const processingAlertsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_PROCESSING_ALERTS:
            return {
                ...state,
                processingAlerts:[...state.processingAlerts, ...action.payload]
            }   
        case ACTION_TYPES.ALERT_MOVED:
            let arr = this.state.processingAlerts
            let processingArr = deleteObjFromArrayOfObjects(arr,'id',action.payload)
            return {
                ...state,
                processingAlerts:processingArr
            }   
       
        default:
            break;
    }
    return state;
}

export default processingAlertsReducer;
