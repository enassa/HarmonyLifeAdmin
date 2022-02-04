import {ACTION_TYPES} from './ActionTypes';
import {cardData, GROUPS, PENDING_GROUPS } from '../../contants/uiConstants';
import { checkIfObjectExistInArray, searchContains } from '../../contants/generalFunctions';
import { changeLoadingState } from './AppStateActions';
import { openSnackBar } from './generalActions';
import { randomImages } from '../../dummydata/dummyData';



let url=''
let lowerLimit = 0;
let slicedData = []
let prevgroupType = '';
let innitialLoad = null;

export const getGroups = (limit = undefined, institutionType, initial=undefined) => {
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
            slicedData = cardData.slice(lowerLimit, upperLimit)
            lowerLimit = lowerLimit + limit 
            return async (dispatch, getState) => {
                    dispatch({type: ACTION_TYPES.GET_GROUPS, payload:slicedData})
            }
    }
}

export const getPendingGroups= (limit = undefined) => {
            return async (dispatch, getState) => {
                    dispatch({type: ACTION_TYPES.GET_PENDING_GROUPS, payload:PENDING_GROUPS})
            }
}
export const openGroup = (group) => {
    return (dispatch, getState) => {
            dispatch({type: ACTION_TYPES.OPEN_GROUP, payload:group})
    }
}

export const quickSerchGroups = (searchValue) => {
    let dataToSearch = cardData
    console.log(searchValue,dataToSearch)
    // var strRegExPattern = `///${searchValue}///`; 
    let searchResults = searchContains(dataToSearch,searchValue,'groupName')    
    return(dispatch, getState) => {
        dispatch(changeLoadingState())
        dispatch({type: ACTION_TYPES.SEARCH_GROUPS, payload:searchResults})
        dispatch(changeLoadingState())
    }
}
// export const quickSerchGroups = (searchValue) => {
//     let dataToSearch = JOINED_GROUPS
//     // var strRegExPattern = `///${searchValue}///`; 
//     let searchResults = searchContains(dataToSearch,searchValue,'title')    
//     return(dispatch, getState) => {
//         dispatch(changeLoadingState())
//         dispatch({type: ACTION_TYPES.SEARCH_GROUPS, payload:searchResults})
//         dispatch(changeLoadingState())

//     }
// }

export const applyToGroup = (group) => {
    if(checkIfObjectExistInArray(cardData,group)){
        return (dispatch, getState) => {
            dispatch(openSnackBar('You have already applied to this group', 'error'))
            dispatch({type: ACTION_TYPES.OPEN_SNACK_BAR, payload:group})
    
        }
    }
    else{
        return (dispatch, getState) => {
            dispatch({type: ACTION_TYPES.APPLY_TO_GROUP, payload:group})
            dispatch(openSnackBar('Request sent succesfully', 'success'))

        }
    }
    
}
export const getFromDifferentGroupType =  (limit = undefined, groupType, initial=undefined) => {
    if(innitialLoad===initial){
        return async (dispatch, getState) => {
                dispatch({type: ACTION_TYPES.GET_DIF_GROUPS, payload:{}})
        }
    }
    if(initial==='initial'){
        innitialLoad = initial
    }
    if(limit !== undefined){
            lowerLimit = 0;
            let upperLimit = lowerLimit+limit
            slicedData = cardData.slice(lowerLimit, upperLimit)
            lowerLimit = lowerLimit + limit 
            return async (dispatch, getState) => {
                    dispatch({type: ACTION_TYPES.GET_DIF_GROUPS, payload:slicedData})
                    prevgroupType = groupType
                } 
    }
}


export const createGroup= (userData) => {
    return(dispatch, getState) => {}
}
export const updateGroup= (userData) => {
    return(dispatch, getState) => {}
}
export const deleteGroup= (userData) => {
    return(dispatch, getState) => {}
}




// Get GROUPS from server
    // let url =  URL_END_POINTS.GET_GROUPS;
    // if(limit !== undefined){
    //      url = `${URL_END_POINTS.GET_GROUPS}?_start=${lowerLimit}&_limit=${lowerLimit+limit}`
    //      lowerLimit = lowerLimit + limit
    // }
    // return async (dispatch, getState) => {
    //     axios.get(url).then((response) => {
    //         dispatch({type: ACTION_TYPES.GET_GROUPS, payload:response.data})
    //     }).catch((error) => {})
    // }
    // 
 // else if(groupType === 'SECONDARY'){
        //     let upperLimit = lowerLimit+limit
        //     slicedData = GROUPS[1].slice(lowerLimit, upperLimit)
        //     lowerLimit = lowerLimit + limit 
        //     return async (dispatch, getState) => {
        //         dispatch({type: ACTION_TYPES.GET_GROUPS, payload:slicedData})
        //         slicedData = []
        // }
        // }