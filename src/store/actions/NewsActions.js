import {URL_END_POINTS, TOKEN} from '../../contants/urls';
import {ACTION_TYPES} from './ActionTypes';
import axios from 'axios';
import ApiCallHandler from '../../reusable/ApiCallHandler'
import { NEWS_OBJECT } from '../../contants/Contentobject';



let lowerLimit = 0;
let slicedData = []
let prevInstitutionType = '';
let innitialLoad = null;
export const getNews= (limit = undefined, institutionType, initial=undefined) => {
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
            slicedData = NEWS_OBJECT.slice(lowerLimit, upperLimit)
            lowerLimit = lowerLimit + limit 
            return async (dispatch, getState) => {
                    dispatch({type: ACTION_TYPES.GET_NEWS, payload:slicedData})
            }
    }
}




// let lastDataId = 0;
// let innitialLoad = null;
// // News Actions
// export const getNews = (limit = undefined,initial=undefined) => {
//     if(innitialLoad===initial){
//         return async (dispatch, getState) => {
//                 dispatch({type: ACTION_TYPES.DO_NOTHING, payload:{}})
//         }
//     }
//     if(initial==='initial'){
//         innitialLoad = initial
//     }
//     let url =  URL_END_POINTS.GET_NEWS;
//     if(limit !== undefined){
//          url = `${URL_END_POINTS.GET_NEWS}?_start=${lastDataId}&_limit=${lastDataId+limit}`
//          lastDataId = lastDataId + limit
//     }
//     return async (dispatch, getState) => {
//         axios.get(url).then((response) => {
//             dispatch({type: ACTION_TYPES.GET_NEWS, payload:response.data})
//         }).catch((error) => {})
//     }
// }
export const openNews = (news) => {
    return (dispatch, getState) => {
            dispatch({type: ACTION_TYPES.OPEN_NEWS, payload:news})
    }
}
export const createNews = (userData) => {
    return(dispatch, getState) => {}
}
export const updateNews = (userData) => {
    return(dispatch, getState) => {}
}
export const deleteNews = (userData) => {
    return(dispatch, getState) => {}
}
