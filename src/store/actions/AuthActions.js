import {URL_END_POINTS, TOKEN, ALL_URLS} from '../../contants/urls';
import {ACTION_TYPES} from './ActionTypes';
import axios from 'axios';
import {changeLoadingState} from './AppStateActions';
import {
    saveObjectInSession,
    getAsObjectSession,
    sessionSave,
    noPropIsEmpty,
    clearSessionStorage,
    saveObjectInLocalStorage,
    localStorageSave,
    clearLocalStorage,
    localStorageGet,
    checkIfLoggedIn,
    getAsObjectFromLocalStorage,
    convertToUrlEncoded
} from '../../contants/generalFunctions';
import { openSnackBar, closeProfileInfo } from './generalActions';
export const registerAction = (userData) => {
    return(dispatch, getState) => {
        axios.post(URL_END_POINTS.REGISTER, userData, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + ' ' + TOKEN.devToken,
                mode: 'no-cors'
            }
        }).then((res) => {
            if (res.data.errorCode === -222) {
                dispatch(openSnackBar('An account with this email already exist', 'error'))
                dispatch(changeLoadingState())
                return
            }
            console.log(res)
            saveObjectInSession('userData', res.data)
            sessionSave('isActive', "1")
            saveObjectInLocalStorage('userData', res.data)
            localStorageSave('isActive', "1")
            dispatch({type: ACTION_TYPES.REGISTER_SUCCESS, payload: res.data})
            dispatch(changeLoadingState())
        }).catch((error) => {
            try {
                if (error.response.data.errorCode === -222) {
                    dispatch(openSnackBar('An account with this email already exist', 'error'))
                    dispatch(changeLoadingState())
                }
            } catch (error) {
                dispatch(openSnackBar('Server is currently unreachable', 'error'))
                dispatch(changeLoadingState())

            }
            
        })
    }
}

export const loginAction = (userData) => {
    console.log(URL_END_POINTS.LOGIN_FACILITY)
    let urlEncodedData = convertToUrlEncoded(userData)
    console.log(urlEncodedData)
    return(dispatch, getState) => { 
        axios.post(URL_END_POINTS.LOGIN_FACILITY, urlEncodedData
            , {
                headers: {
                    'content-Type': 'application/x-www-form-urlencoded',
                }
            }
        ).then((res) => {
            console.log(res.data)
            dispatch(changeLoadingState())
            // console.log(res)
            if (!res?.data?.data) {
                dispatch({type: ACTION_TYPES.LOGIN_ERROR, payload: res?.data?.message})
                return
            }
            saveObjectInSession('userData', res)
            sessionSave('isActive', "1")
            saveObjectInLocalStorage('userData', res)
            localStorageSave('isActive', "1")
            window.location.assign('/facility/admin')
            dispatch({type: ACTION_TYPES.LOGIN_SUCCESS, payload: res.data})
        }).catch((error) => {
            dispatch(changeLoadingState())
            dispatch(openSnackBar('Login failed','error'))
        })
    }
}
export const checkLoginState = () =>{
    return(dispatch, getState) => { 
        if(checkIfLoggedIn()){
            let data = getAsObjectFromLocalStorage('userData')
            dispatch({type: ACTION_TYPES.LOGIN_SUCCESS, payload: data})
        }  
    }
}
export const logOut = (userData) => {
    return(dispatch, getState) => { 
        clearSessionStorage()
        clearLocalStorage()
        dispatch(closeProfileInfo())
        dispatch({type: ACTION_TYPES.LOG_OUT, payload: {}})
       
    }
}
export const verifyEmailAction = (userData) => {
    return(dispatch, getState) => { 
        axios.get(`${URL_END_POINTS.VERIFY }/${ userData.email }`, 
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + ' ' + TOKEN.devToken,
                mode: 'no-cors'
            }
        }).then((res) => {
            dispatch(changeLoadingState())
            if (res.data.errorCode === -111) {
                dispatch(openSnackBar('Your email is not in our records','error'))
            } else if (res.data.pin !== "") {
                console.log(res.data)
                window.location = ALL_URLS.resetMember
                // dispatch({type: ACTION_TYPES.VERIFIFICATION_SUCCESS, payload: {}})
            }
        }).catch((error) => {
            dispatch(changeLoadingState())
            // dispatch(openSnackBar(error.response.data.errorMessage,'error'))
            dispatch(openSnackBar('Verification failed, unknown error','error'))
        })
    }
}
export const resetPasswordAction = (userData) => {
    return(dispatch, getState) => { 
        axios.put(URL_END_POINTS.RESET, userData, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + ' ' + TOKEN.devToken,
                mode: 'no-cors'
            }
        }).then((res) => {
            dispatch(changeLoadingState)
            this.props.history.push()
            if (res.data.errorCode == 500) {
                dispatch(openSnackBar('Reset failed,reset code invalid','error'))
                dispatch({type: ACTION_TYPES.RESET_ERROR, payload: {}})
            } else {
                window.location = ALL_URLS.loginMember
                dispatch({type: ACTION_TYPES.RESET_SUCCES, payload: {}})
            }
        }).catch((error) => {
            dispatch(changeLoadingState())
            // dispatch(openSnackBar(error.response.data.errorMessage,'error'))
            dispatch(openSnackBar('Password reset failed, unknown error','error'))
            console.log(error.response.data)
        })
    }
}
