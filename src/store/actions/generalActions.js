import {URL_END_POINTS, TOKEN} from '../../contants/urls';
import {ACTION_TYPES} from './ActionTypes';
import axios from 'axios';
import { changeLoadingState } from './AppStateActions';
import { ANNOUNCEMENT, CONTRIBUTERS } from '../../contants/Contentobject';

let lastAnnouncementDataId = 0;
let lastContributersDataId = 0;
let announcementInnitialLoad = null;
let contributersInnitialLoad = null;
// export const getAnnouncement = (limit = undefined,initial) => {
//     if(announcementInnitialLoad ===initial){
//         return async (dispatch, getState) => {
//                 dispatch({type: ACTION_TYPES.DO_NOTHING, payload:{}})
//         }
//     }
//     if(initial==='initial'){
//         announcementInnitialLoad = initial
//     }
//     let url =  URL_END_POINTS.GET_ANNOUNCEMENT;
//     if(limit !== undefined){
//         console.log(limit)
//          url = `${URL_END_POINTS.GET_ANNOUNCEMENT}?_start=${lastAnnouncementDataId }&_limit=${lastAnnouncementDataId+limit}`
//          lastAnnouncementDataId += limit
//     }
//     return async (dispatch, getState) => {
//         axios.get(url).then((response) => {
//             dispatch({type: ACTION_TYPES.GET_ANNOUNCEMENT, payload:response.data})
//         }).catch((error) => {})
//     }
// }

// export const getContributers = (limit = undefined,initial) => {
//     if(contributersInnitialLoad===initial){
//         return async (dispatch, getState) => {
//                 dispatch({type: ACTION_TYPES.DO_NOTHING, payload:{}})
//         }
//     }
//     if(initial==='initial'){
//         contributersInnitialLoad = initial
//     }

//     let url =  URL_END_POINTS.GET_CONTRIBUTERS;
//     if(limit !== undefined){
//          url = `${URL_END_POINTS.GET_CONTRIBUTERS}?_start=${lastContributersDataId }&_limit=${lastContributersDataId +limit}`
//          lastContributersDataId += limit
//     }
//     return async (dispatch, getState) => {
//         axios.get(url).then((response) => {
//             dispatch({type: ACTION_TYPES.GET_CONTRIBUTERS, payload:response.data})
//         }).catch((error) => {})
//     }
// }
let lowerLimit = 0;
let slicedData = []
let innitialLoad = null;
export const getAnnouncement = (limit = undefined,initial) => {
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
                slicedData = ANNOUNCEMENT.slice(lowerLimit, upperLimit)
                lowerLimit = lowerLimit + limit 
                return async (dispatch, getState) => {
                        dispatch({type: ACTION_TYPES.GET_ANNOUNCEMENT, payload:slicedData})
                }
        }
}
let lowerLimit2 = 0;
let slicedData2 = []
let prevInstitutionType2 = '';
let innitialLoad2 = null;
export const getContributers = (limit = undefined,initial) => {
    // alert(limit)
    if(innitialLoad2===initial){
        return async (dispatch, getState) => {
                dispatch({type: ACTION_TYPES.DO_NOTHING, payload:{}})
        }
    }
    if(initial==='initial'){
        innitialLoad2 = initial
    }
    if(limit !== undefined){
            let upperLimit = lowerLimit2+limit
            slicedData2 = CONTRIBUTERS.slice(lowerLimit2, upperLimit)
            lowerLimit = lowerLimit2 + limit 
            return async (dispatch, getState) => {
                    dispatch({type: ACTION_TYPES.GET_CONTRIBUTERS, payload:slicedData2})
            }
    }
}
export const actionSuccessFull = (message,snackType) => {
    console.log(message)
    return async (dispatch, getState) => {
        dispatch({type: ACTION_TYPES.ACTION_SUCCESFUL, payload:{message}})
    }
}
export const resetActionState = (message,snackType) => {
    console.log(message)
    return async (dispatch, getState) => {
        dispatch({type: ACTION_TYPES.RESET_ACTION_STATE, payload:{message}})
    }
}

export const openSnackBar = (message,snackType) => {
    console.log(message)
    return async (dispatch, getState) => {
        dispatch({type: ACTION_TYPES.OPEN_SNACK_BAR, payload:{message,snackType}})
    }
}
export const closeSnackBar = () => {
    return async (dispatch, getState) => {
            dispatch({type: ACTION_TYPES.CLOSE_SNACK_BAR, payload:{}})
    }
}
export const unjoin = (organizationType,name,id) => {

    let url = `${URL_END_POINTS.GET_CONTRIBUTERS}?_start=${0}&_limit=${5}`
    return async (dispatch, getState) => {
        axios.get(url).then((response) => {
            dispatch(changeLoadingState())
            dispatch(openSnackBar('Unjoin request was successful', 'success'))
            dispatch({type: ACTION_TYPES.UNJOIN_ORGANIZATION, payload:{}})

        }).catch((error) => {})
    }
}
export const openProfileInfo = () => {
    return async (dispatch, getState) => {
            dispatch({type: ACTION_TYPES.OPEN_PROFILE_INFO, payload:{}})
    }
}
export const closeProfileInfo = () => {
    // alert("hh")
    return async (dispatch, getState) => {
            dispatch({type: ACTION_TYPES.CLOSE_PROFILE_INFO, payload:{}})
    }
}
export const doNothing = () => {

}