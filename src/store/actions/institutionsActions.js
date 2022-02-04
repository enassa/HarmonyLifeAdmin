import {base_url, TOKEN, URL_END_POINTS} from '../../contants/urls';
import {ACTION_TYPES} from './ActionTypes';
import axios from 'axios';
import { changeLoadingState } from './AppStateActions';
import { actionSuccessFull, openSnackBar, resetActionState } from './generalActions';
import { convertToUrlEncoded, localStorageSave, makeObjectFromArrayOfObjects, saveObjectInLocalStorage, saveObjectInSession, sessionSave } from '../../contants/generalFunctions';




let url=''
let lowerLimit = 0;
let slicedData = []
let prevgroupType = '';
let innitialLoad = null;
export const getResolvedAlerts = (limit = undefined, initial=undefined) => {
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
            url = `${URL_END_POINTS.GET_RESOLVED_ALERTS}?_start=${lowerLimit}&_limit=${upperLimit}`
            lowerLimit = lowerLimit + limit 
            return async (dispatch, getState) => {
                axios.get(url).then((response) => {
                    dispatch({type: ACTION_TYPES.GET_RESOLVED_ALERTS, payload:response.data})
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
// ==============================================SUPER ADMIN ==========================================
export const createOrganisation = (userData) => {
    return async (dispatch, getState) => {
        console.log(userData)
        //    dispatch({type: ACTION_TYPES.SUBMITION_SUCCESS, payload: userData})
        //    if(1) {
            //    let dataToString = makeObjectFromArrayOfObjects(collectedSoFar,answers)
            let urlEncodedData = convertToUrlEncoded(userData)
            console.log(userData)
            axios.post(URL_END_POINTS.CREATE_ORGANISATION, urlEncodedData,
                {
                    headers: {
                        'content-Type': 'application/x-www-form-urlencoded',
                    }
                }
                ).then((res) => {
                    dispatch(changeLoadingState())
                    dispatch(actionSuccessFull())
                    setTimeout(()=>{
                        dispatch(resetActionState())
                    },500)
                    // if (res.data.errorCode === -222) {
                        //     dispatch(openSnackBar('Invalid Credentials', 'error'))
                        //     return
                        // }
                        console.log(res)
                        dispatch({type: ACTION_TYPES.SUBMITION_SUCCESS, payload: res.data})
                    }).catch((error) => {
                        dispatch({type: ACTION_TYPES.SUBMITION_FAILED, payload: error})
                        // dispatch(changeLoadingState())
                        // dispatch(openSnackBar('Login failed','error'))
                    })
                    
                    //    }
                    //    else{
                        dispatch({type: ACTION_TYPES.DO_NOTHING, payload: {}})
                        //    }
                    }
                }
        // ============================================== INSTITUTION ADMIN ==========================================
        export const inntialResetInstitutionPassword = (userData) => {
            return async (dispatch, getState) => {
        console.log(userData)
        //    dispatch({type: ACTION_TYPES.SUBMITION_SUCCESS, payload: userData})
        //    if(1) {
            //    let dataToString = makeObjectFromArrayOfObjects(collectedSoFar,answers)
               let urlEncodedData = convertToUrlEncoded(userData)
               console.log(userData)
               axios.post(URL_END_POINTS.INNITIAL_INSTITUTION_PASSWORD_RESET,urlEncodedData, 
               {
                   headers: {
                    'content-Type': 'application/x-www-form-urlencoded',
                   }
               }
               ).then((res) => {
                   dispatch(changeLoadingState())
                   dispatch(actionSuccessFull())
                   setTimeout(()=>{
                    dispatch(resetActionState())
                   },500)
                   // if (res.data.errorCode === -222) {
                   //     dispatch(openSnackBar('Invalid Credentials', 'error'))
                   //     return
                   // }
                   console.log(res)
                   dispatch({type: ACTION_TYPES.SUBMITION_SUCCESS, payload: res.data})
               }).catch((error) => {
                   dispatch({type: ACTION_TYPES.SUBMITION_FAILED, payload: error})
                   // dispatch(changeLoadingState())
                   // dispatch(openSnackBar('Login failed','error'))
               })
              
        //    }
        //    else{
               dispatch({type: ACTION_TYPES.DO_NOTHING, payload: {}})
        //    }
}
}
        export const loginInstitution = (userData) => {
            return async (dispatch, getState) => {
                dispatch(changeLoadingState())

        console.log(userData)
        //    dispatch({type: ACTION_TYPES.SUBMITION_SUCCESS, payload: userData})
        //    if(1) {
            //    let dataToString = makeObjectFromArrayOfObjects(collectedSoFar,answers)
               let urlEncodedData = convertToUrlEncoded(userData)
               console.log(urlEncodedData)
               axios.post(URL_END_POINTS.LOGIN_INSTITUTION,urlEncodedData, 
               {
                   headers: {
                    'content-Type': 'application/x-www-form-urlencoded',
                   }
               }
               ).then((res) => {
                   console.log(res)
                   if(res?.data?.data !==  false){
                        window.location.assign('/institution/admin')
                   }
                   console.log(res)
                    saveObjectInSession('userData', res.data)
                    sessionSave('isActive', "1")
                    saveObjectInLocalStorage('userData', res)
                    localStorageSave('isActive', "1")
                    dispatch({type: ACTION_TYPES.REGISTER_SUCCESS, payload: res.data})
                    dispatch(changeLoadingState())
                }).catch((error) => {
                    try {
                        if (error?.response?.data?.errorCode === -222) {
                            dispatch(openSnackBar('An account with this email already exist', 'error'))
                            dispatch(changeLoadingState())
                        }
                    } catch (error) {
                        dispatch(openSnackBar('Server is currently unreachable', 'error'))
                        dispatch(changeLoadingState())

                    }
                    
                })
              
        //    }
        //    else{
               dispatch({type: ACTION_TYPES.DO_NOTHING, payload: {}})
        //    }
}
}
export const getActiveInstitJutions = (userData) => {
    return async (dispatch, getState) => {
        dispatch(changeLoadingState())

        console.log(userData)
        //    dispatch({type: ACTION_TYPES.SUBMITION_SUCCESS, payload: userData})
        //    if(1) {
            //    let dataToString = makeObjectFromArrayOfObjects(collectedSoFar,answers)
        let urlEncodedData = convertToUrlEncoded(userData)
        console.log(urlEncodedData)
        axios.post(URL_END_POINTS.LOGIN_INSTITUTION,urlEncodedData, 
        {
            headers: {
            'content-Type': 'application/x-www-form-urlencoded',
            }
        }
        ).then((res) => {
            console.log(res)
            if(res?.data?.data !==  false){
                window.location.assign('/institution/admin')
            }
            console.log(res)
            saveObjectInSession('userData', res.data)
            sessionSave('isActive', "1")
            saveObjectInLocalStorage('userData', res)
            localStorageSave('isActive', "1")
            dispatch({type: ACTION_TYPES.REGISTER_SUCCESS, payload: res.data})
            dispatch(changeLoadingState())
        }).catch((error) => {
            try {
                if (error?.response?.data?.errorCode === -222) {
                    dispatch(openSnackBar('An account with this email already exist', 'error'))
                    dispatch(changeLoadingState())
                }
            } catch (error) {
                dispatch(openSnackBar('Server is currently unreachable', 'error'))
                dispatch(changeLoadingState())

            }
            
        })
        
//    }
//    else{
        dispatch({type: ACTION_TYPES.DO_NOTHING, payload: {}})
        //    }
}
}
export const getActiveInstitutions = (limit = undefined, initial=undefined) => {
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
            lowerLimit = lowerLimit + limit 
            return async (dispatch, getState) => {
                axios.get(URL_END_POINTS.GET_ACTIVE_INSTITUTIONS)
                .then((res) => {
                    // console.log(res)
                    dispatch({type: ACTION_TYPES.GET_ACTIVE_INSTITUTIONS, payload:res.data.data})
                }).catch((error) => {})
            }
    }
}
export const getServices = (limit = undefined, initial=undefined) => {
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
            lowerLimit = lowerLimit + limit 
            return async (dispatch, getState) => {
                axios.get(URL_END_POINTS.GET_SERVICES)
                .then((res) => {
                    console.log(res)
                    dispatch({type: ACTION_TYPES.GET_SERVICES, payload:res})
                }).catch((error) => {})
            }
    }
}
