import {URL_END_POINTS, TOKEN} from '../../contants/urls';
import {ACTION_TYPES} from './ActionTypes';
import axios from 'axios';
import ApiCallHandler from '../../reusable/ApiCallHandler'
import { GROUPS, INSTITUTIONS, JOINED_INSTITUTIONS, PENDING_INSTITUTIONS } from '../../contants/uiConstants';
import { checkIfObjectExistInArray, searchContains } from '../../contants/generalFunctions';
import { changeLoadingState } from './AppStateActions';
import { openSnackBar } from './generalActions';




let lowerLimit = 0;
let slicedData = []
let prevInstitutionType = '';
let innitialLoad = null;
export const getInstitutions = (limit = undefined, institutionType, initial=undefined) => {
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
            slicedData = INSTITUTIONS[institutionType].slice(lowerLimit, upperLimit)
            lowerLimit = lowerLimit + limit 
            return async (dispatch, getState) => {
                    dispatch({type: ACTION_TYPES.GET_INSTITUTIONS, payload:slicedData})
            }
    }
}
export const getJoinedInstitutions = (limit = undefined) => {
            return async (dispatch, getState) => {
                    dispatch({type: ACTION_TYPES.GET_JOINED_INSTITUTIONS, payload:JOINED_INSTITUTIONS})
            }
}
export const getPendingInstitutions = (limit = undefined) => {
            return async (dispatch, getState) => {
                    dispatch({type: ACTION_TYPES.GET_PENDING_INSTITUTIONS, payload:PENDING_INSTITUTIONS})
            }
}
export const getFromDifferentInstutionType =  (limit = undefined, institutionType, initial=undefined) => {
    if(innitialLoad===initial){
        return async (dispatch, getState) => {
                dispatch({type: ACTION_TYPES.DO_NOTHING, payload:{}})
        }
    }
    if(initial==='initial'){
        innitialLoad = initial
    }
    if(limit !== undefined){
            lowerLimit = 0;
            let upperLimit = lowerLimit+limit
            slicedData = INSTITUTIONS[institutionType].slice(lowerLimit, upperLimit)
            lowerLimit = lowerLimit + limit 
            return async (dispatch, getState) => {
                    dispatch({type: ACTION_TYPES.GET_DIF_INSTITUTIONS, payload:slicedData})
                    prevInstitutionType = institutionType
                } 
       
    }
}
export const openInstitution = (institution) => {
    return (dispatch, getState) => {
            dispatch({type: ACTION_TYPES.OPEN_INSTITUTION, payload:institution})
    }
}
export const applyToInstitution = (institution) => {
    if(checkIfObjectExistInArray(PENDING_INSTITUTIONS,institution)){
        // console.log(checkIfObjectExistInArray(PENDING_INSTITUTIONS,institution))
        return (dispatch, getState) => {
            dispatch(openSnackBar('You have already applied to this institution', 'error'))
            dispatch({type: ACTION_TYPES.OPEN_SNACK_BAR, payload:institution})
    
        }
    }
    else{
        return (dispatch, getState) => {
            dispatch({type: ACTION_TYPES.APPLY_TO_INSTITUTION, payload:institution})
            dispatch(openSnackBar('Request sent succesfully', 'success'))

        }
    }
    
}
export const createInstitution = (userData) => {
    return(dispatch, getState) => {}
}
export const updateInstitution = (userData) => {
    return(dispatch, getState) => {}
}
export const deleteInstitution = (userData) => {
    return(dispatch, getState) => {}
}
export const quickSerch = (searchValue,institutionType) => {
    let dataToSearch = INSTITUTIONS[institutionType]
    // var strRegExPattern = `///${searchValue}///`; 
    let searchResults = searchContains(dataToSearch,searchValue,'Institution')    
    return(dispatch, getState) => {
        dispatch(changeLoadingState())
        dispatch({type: ACTION_TYPES.SEARCH_INSTITUTIONS, payload:searchResults})
        dispatch(changeLoadingState())

    }
}




// Get institutions from server
    // let url =  URL_END_POINTS.GET_INSTITUTIONS;
    // if(limit !== undefined){
    //      url = `${URL_END_POINTS.GET_INSTITUTIONS}?_start=${lowerLimit}&_limit=${lowerLimit+limit}`
    //      lowerLimit = lowerLimit + limit
    // }
    // return async (dispatch, getState) => {
    //     axios.get(url).then((response) => {
    //         dispatch({type: ACTION_TYPES.GET_INSTITUTIONS, payload:response.data})
    //     }).catch((error) => {})
    // }
    // 
 // else if(institutionType === 'SECONDARY'){
        //     let upperLimit = lowerLimit+limit
        //     slicedData = INSTITUTIONS[1].slice(lowerLimit, upperLimit)
        //     lowerLimit = lowerLimit + limit 
        //     return async (dispatch, getState) => {
        //         dispatch({type: ACTION_TYPES.GET_INSTITUTIONS, payload:slicedData})
        //         slicedData = []
        // }
        // }