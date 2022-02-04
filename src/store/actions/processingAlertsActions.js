import {URL_END_POINTS} from '../../contants/urls';
import {ACTION_TYPES} from './ActionTypes';
import axios from 'axios';
import { changeLoadingState } from './AppStateActions';




let url=''
let lowerLimit = 0;
let slicedData = []
let prevgroupType = '';
let innitialLoad = null;
export const getProcessingAlerts = (limit = undefined, initial=undefined) => {
    // Prevent double componenent mounting from calling twice
    if(innitialLoad===initial){
        return async (dispatch, getState) => {
                dispatch({type: ACTION_TYPES.DO_NOTHING, payload:{}})
        }
    }
    if(initial==='initial'){
        innitialLoad = initial
    }
    if(limit !== undefined){
            let upperLimit = lowerLimit+limit
            url = `${URL_END_POINTS.GET_PROCESSING_ALERTS}?_start=${lowerLimit}&_limit=${upperLimit}`
            lowerLimit = lowerLimit + limit 
            return async (dispatch, getState) => {
                axios.get(url).then((response) => {
                    dispatch({type: ACTION_TYPES.GET_PROCESSING_ALERTS, payload:response.data})
                }).catch((error) => {})
            }
    }
}
export const markAsProcessing = (alert) => {    
    return(dispatch, getState) => {
        dispatch(changeLoadingState())
        dispatch({type: ACTION_TYPES.MARK_AS_PROCESSING, payload:alert})
        dispatch(changeLoadingState())

    }
}
