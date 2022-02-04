import {URL_END_POINTS, TOKEN} from '../../contants/urls';
import {ACTION_TYPES} from './ActionTypes';
import axios from 'axios';
import ApiCallHandler from '../../reusable/ApiCallHandler'

let lastDataId = 0;
let innitialLoad = null;
// Album Actions
export const getAlbum = (limit = undefined, initial=undefined) => {
    if(innitialLoad===initial){
        return async (dispatch, getState) => {
                dispatch({type: ACTION_TYPES.DO_NOTHING, payload:{}})
        }
    }
    if(initial==='initial'){
        innitialLoad = initial
    }
    let url =  URL_END_POINTS.GET_PICTURES;
    if(limit !== undefined){
         url = `${URL_END_POINTS.GET_PICTURES}?_start=${lastDataId}&_limit=${lastDataId+limit}`
         lastDataId = lastDataId + limit
    }
    return async (dispatch, getState) => {
        axios.get(url).then((response) => {
            dispatch({type: ACTION_TYPES.GET_PICTURES, payload:response.data})
        }).catch((error) => {})
    }
}
export const openAlbum = (album) => {
    return (dispatch, getState) => {
            dispatch({type: ACTION_TYPES.GET_PICTURES, payload:album})
    }
}
export const createAlbum = (userData) => {
    return(dispatch, getState) => {}
}
export const updateAlbum = (userData) => {
    return(dispatch, getState) => {}
}
export const deleteAlbum = (userData) => {
    return(dispatch, getState) => {}
}
