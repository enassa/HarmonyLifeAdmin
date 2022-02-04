import { deleteObjFromArrayOfObject, deleteObjFromArrayOfObjects } from '../../contants/generalFunctions';
import {ALERTS} from '../../contants/uiConstants';
import {ACTION_TYPES} from '../actions/ActionTypes';
const initialState = {
        resolvedAlerts:[],
    }
const resolvedAlertsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_NEW_ALERTS:
            return {
                ...state,
                resolvedAlerts:[...state.resolvedAlerts, ...action.payload]
            }   
        case ACTION_TYPES.ALERT_MOVED:
            let arr = this.state.resolvedAlerts
            let resolvedArr = deleteObjFromArrayOfObjects(arr,'id',action.payload)
            return {
                ...state,
                resolvedAlerts:resolvedArr
            }   

        default:
            break;
    }
    return state;
}

export default resolvedAlertsReducer
