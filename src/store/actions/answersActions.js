import { URL_END_POINTS } from '../../contants/urls';
import {ACTION_TYPES} from './ActionTypes';
import axios from 'axios';
import { PROJECT_OBJECT, STATUS_UPDATE } from '../../contants/Contentobject';
import { searchContains, localStorageSave, saveObjectInLocalStorage, sessionSave, saveObjectInSession, checkIfArray, makeObjectArrayOfObjects, localStorageGet, getTodaysDate, getTommorowsDate, getFormData, getFormData2, convertToUrlEncoded, makeObjectFromArrayOfObjects, getAsObjectFromLocalStorage } from '../../contants/generalFunctions';
import { changeLoadingState } from './AppStateActions';
import { openSnackBar } from './generalActions';
import { store } from '../../index';

// GET PROJECT ACTION

export const sendAnswers = (answers) => {
    let collectedSoFar = store.getState().answersReducer.receivedData
    console.log(checkIfArray(collectedSoFar))
        return async (dispatch, getState) => {
            // dispatch({type: ACTION_TYPES.SUBMITION_FAILED, payload:{}})
            dispatch({type: ACTION_TYPES.SUBMITION_SUCCESS, payload: answers})
        }
    }
let converToOneObject = (arrayofObject,newObjet) => {
     arrayofObject.map((item,index) => {
        console.log(item)
    })
    // return combinedObject;
}
let lastDataId = 0;
let innitialLoad ='';
let prevStartDate =  undefined;
let prevEndDate =  undefined;
export const getAnswers = (
        limit=undefined,
        startDate,
        endDate,
        initial=undefined,institution) => {
        console.log(startDate,endDate )
    // console.log('hhhs')
    
    prevEndDate=endDate;
    prevStartDate = startDate;
    if(innitialLoad===initial){
            console.log(prevEndDate,prevStartDate)
            return async (dispatch, getState) => {
                    dispatch({type: ACTION_TYPES.DO_NOTHING, payload:{}})
            }
        }
        if(initial==='initial'){
            innitialLoad = initial
        }
        let data = getAsObjectFromLocalStorage('userData');
        let institutionInfo = data?.data?.data?.institution?.institutionId
        let url = `${URL_END_POINTS.GET_ANSWERS_BY_FILTER}/${startDate}/end/${endDate}/institutionId/${'V001'}` 
        console.log(url)
        return async (dispatch, getState) => {
            dispatch({type: ACTION_TYPES.RESET_ERRORS, payload:{}})
            dispatch(changeLoadingState())
            axios.get(url).then((response) => {
                dispatch(changeLoadingState())
                let receivedData = []
                receivedData = response?.data?.data
                console.log(receivedData)
                if(receivedData.length === 0){
                    dispatch({type: ACTION_TYPES.NO_RECORDS_ERROR, payload:{}})
                    return
                }
                console.log(response.data.data)
                dispatch({type: ACTION_TYPES.GET_ANSWERS, payload:receivedData})
            }).catch((error) => {
                if (error.response) {
                    // console.log(error?.response?.data);
                    console.log(error?.response?.status);
                    console.log(error?.response?.headers);
                    if(error.response.status === 404){
                        dispatch({type: ACTION_TYPES.URL_NOT_FOUND, payload:{}})
                    }
                    if(error.response.status === 500){
                        dispatch({type: ACTION_TYPES.SERVER_ERROR, payload:{}})
                    }
                    if(error.response.status === 405){
                        dispatch({type: ACTION_TYPES.DO_NOTHING, payload:{}})
                    }
                    if(error.response.status === 401){
                        dispatch({type: ACTION_TYPES.DO_NOTHING, payload:{}})
                    }
                  }else{
                    dispatch({type: ACTION_TYPES.NO_INTERNET_ERROR, payload:{}})

                  }
                dispatch(changeLoadingState())
            })
        }
        
}
export const sendFinalAnswers = (newData) => {
    // let collectedSoFar = store.getState().answersReducer.receivedData
    // let link = window.location.href
    // let serviceTitle = link.split('/')
    // let serviceToSendTo = ''
    // if(serviceTitle.length === 8){
    //     serviceToSendTo = serviceTitle[6]
    // }
    // let  url = URL_END_POINTS.SUBMIT_ANSWERS;
    console.log(newData)

    let  url = URL_END_POINTS.UPDATE_RECORDS
    console.log(url)
     return async (dispatch, getState) => {
        let urlEncodedData = convertToUrlEncoded(newData)
        dispatch(changeLoadingState())
            axios.post(url, urlEncodedData,
            {
                headers: {
                    'content-Type': 'application/x-www-form-urlencoded',
                }
            }
            ).then((res) => {
                dispatch(changeLoadingState())
                // if (res.data.errorCode === -222) {
                //     dispatch(openSnackBar('Invalid Credentials', 'error'))
                //     return
                // }
                console.log(prevEndDate,prevStartDate)
                dispatch(getAnswers(10,prevStartDate,prevEndDate))
                // dispatch(getAnswersBehind(10,prevEndDate,prevStartDate)) 
                console.log(res)
                dispatch({type: ACTION_TYPES.SUBMITION_SUCCESS, payload: res.data})
            }).catch((error) => {
                dispatch(changeLoadingState())
                dispatch({type: ACTION_TYPES.SUBMITION_FAILED, payload: error})
                // dispatch(changeLoadingState())
                // dispatch(openSnackBar('Login failed','error'))
            })
           
        }
    }
export const getAnswersBehind = (
        limit=undefined,
        startDate,
        endDate,
        initial=undefined,institution) => {
        // console.log(institution )
    // console.log('hhhs')

        if(innitialLoad===initial){
            return async (dispatch, getState) => {
                    dispatch({type: ACTION_TYPES.DO_NOTHING, payload:{}})
            }
        }
        if(initial==='initial'){
            innitialLoad = initial
        }
        let data = getAsObjectFromLocalStorage('userData');
        let institutionInfo = data.data.data.institution.institutionId

        let url = `${URL_END_POINTS.GET_ANSWERS_BY_FILTER}/${startDate}/end/${endDate}/institutionId/${institutionInfo}` 
        return async (dispatch, getState) => {
            axios.get(url).then((response) => {
                let receivedData = []
                receivedData = response?.data?.data
                console.log(receivedData)                
                dispatch({type: ACTION_TYPES.GET_ANSWERS_BEHIND, payload:receivedData})
            }).catch((error) => {
                if (error.response) {
                  }else{
                  }
            })
        }
        
}
export const openAnswer = (project,changePage=()=>{}) => {
    return async (dispatch, getState) => {
           await dispatch({type: ACTION_TYPES.VIEW_ANSWER_DETAILS, payload:project})
    }
}
export const dataReceived = () => {
    return async (dispatch) => {
           await dispatch({type: ACTION_TYPES.DATA_RECEIVED, payload:{}})
    }
}
let lastDataId2 = 0;
let innitialLoad2 ='';
export const getAnswerersOfAnswer = (limit = undefined,initial=undefined) => {
    if(innitialLoad2===initial){
        return async (dispatch, getState) => {
                dispatch({type: ACTION_TYPES.DO_NOTHING, payload:{}})
        }
    }
    if(initial==='initial'){
        innitialLoad2 = initial
    }
    let url =  URL_END_POINTS.GET_ANSWERERS_OF_ANSWER;
    if(limit !== undefined){
        url = `${URL_END_POINTS.GET_ANSWERERS_OF_ANSWER}?_start=${lastDataId2}&_limit=${lastDataId2+limit}`
        lastDataId2 = lastDataId2 + limit
    }
    return async (dispatch, getState) => {
        axios.get(url).then((response) => {
            dispatch({type: ACTION_TYPES.GET_ANSWERERS_OF_ANSWER, payload:response.data})
        }).catch((error) => {})
    }
}
export const quickSerchAnswers = (searchValue,cardData) => {
    let dataToSearch = cardData
    // console.log(searchValue,dataToSearch)
    // console.log()
    // var strRegExPattern = `///${searchValue}///`; 
    let b =  [
        {
            name:"Potbelly Shack Restaurant",
            url:"/potbelly"
        },
        {
            name:"Potbelly Shack Restaurant",
            url:"/potbelly"
        },
    ]
    // console.log(searchValue)
    let searchResults = searchContains(dataToSearch,searchValue,'surname')
    console.log(searchResults)
    return(dispatch, getState) => {
        dispatch(changeLoadingState())
        dispatch({type: ACTION_TYPES.SEARCH_ANSWERS, payload:searchResults})
        dispatch(changeLoadingState())
    }
}

// let lowerLimit = 0;
// let slicedData = []
// let prevInstitutionType = '';
// export const getAnswers = (limit = undefined,initial=undefined) => {
//         if(innitialLoad===initial){
//             return async (dispatch, getState) => {
//                     dispatch({type: ACTION_TYPES.DO_NOTHING, payload:{}})
//             }
//         }
//         if(initial==='initial'){
//             innitialLoad = initial
//         }
//         if(limit !== undefined){
//                 let upperLimit = lowerLimit+limit
//                 slicedData = PROJECT_OBJECT.slice(lowerLimit, upperLimit)
//                 removeItemFromLocalStorage('openedProject')
//                 saveObjectInLocalStorage('projects', PROJECT_OBJECT)
//                 lowerLimit = lowerLimit + limit 
//                 return async (dispatch, getState) => {
//                         dispatch({type: ACTION_TYPES.GET_PROJECTS, payload:slicedData})
//                 }
//         }
// }
// export const openProject = (project,changePage=()=>{}) => {
//     removeItemFromLocalStorage('openedProject')
//     saveObjectInLocalStorage('openedProject', project)
//     return async (dispatch, getState) => {
//            await dispatch({type: ACTION_TYPES.OPEN_PROJECT, payload:project})
//         //    window.location.href = 
//     }
// }


// GET PROJECT STATUS UPDATE
// let lastDataId2 = 0;
// let innitialLoad2 ='';
// export const getProjectStatusUpdate = (limit = undefined,initial=undefined) => {
//     let url = ''
//     if(innitialLoad2===initial){
//         return async (dispatch, getState) => {
//                 dispatch({type: ACTION_TYPES.DO_NOTHING, payload:{}})
//         }
//     }
//     if(initial==='initial'){
//         innitialLoad2 = initial
//     }
//     if(limit !== undefined){
//         url = `${URL_END_POINTS.GET_PROJECTS_STATUS_UPDATE}?_start=${lastDataId2}&_limit=${lastDataId2+limit}`
//         lastDataId2 += limit
//     }
//     return async (dispatch, getState) => {
//         axios.get(url).then((response) => {
//             dispatch({type: ACTION_TYPES.GET_PROJECT_STATUS_UPDATE, payload:response.data})

//         }).catch((error) => {})
//     }
// }
export const openProjectStatus = (status) => {
    return async (dispatch, getState) => {
            dispatch({type: ACTION_TYPES.OPEN_PROJECT_STATUS, payload:status})
    }
}
export const  closeProjectStatus = (status) => {
    return async (dispatch, getState) => {
            dispatch({type: ACTION_TYPES.CLOSE_PROJECT_STATUS, payload:{}})
    }
}
export const createProjects = (userData) => {
    return(dispatch, getState) => {}
}
export const updateProjects = (userData) => {
    return(dispatch, getState) => {}
}
export const deleteProjects = (userData) => {
    return(dispatch, getState) => {}
}
export const quickSerchProjects = (searchValue,institutionType) => {
    let dataToSearch = PROJECT_OBJECT
    // var strRegExPattern = `///${searchValue}///`; 
    let searchResults = searchContains(dataToSearch,searchValue,'projectName')    
    return(dispatch, getState) => {
        dispatch(changeLoadingState())
        dispatch({type: ACTION_TYPES.SEARCH_PROJECTS, payload:searchResults})
        dispatch(changeLoadingState())

    }
}


let lowerLimit4 = 0;
let slicedData4 = []
let prevInstitutionType4 = '';
let innitialLoad4 = null;
export const getProjectStatusUpdate = (limit = undefined,  initial=undefined) => {
    if(innitialLoad4===initial){
        return async (dispatch, getState) => {
                dispatch({type: ACTION_TYPES.DO_NOTHING, payload:{}})
        }
    }
    if(initial==='initial'){
        innitialLoad4 = initial
    }

    if(limit !== undefined){

            let upperLimit = lowerLimit4+limit
            slicedData4 = STATUS_UPDATE.slice(lowerLimit4, upperLimit)
            lowerLimit4 = lowerLimit4 + limit 
            return async (dispatch, getState) => {
                console.log(slicedData4)
                    dispatch({type: ACTION_TYPES.GET_PROJECT_STATUS_UPDATE, payload:slicedData4})
            }
    }
}




// export const getFromDifferentProjectsType =  (limit = undefined, institutionType, initial=undefined) => {
//     if(innitialLoad===initial){
//         return async (dispatch, getState) => {
//                 dispatch({type: ACTION_TYPES.DO_NOTHING, payload:{}})
//         }
//     }
//     if(initial==='initial'){
//         innitialLoad = initial
//     }
//     if(limit !== undefined){
//             lowerLimit = 0;
//             let upperLimit = lowerLimit+limit
//             slicedData = PROJECT_OBJECT.slice(lowerLimit, upperLimit)
//             lowerLimit = lowerLimit + limit 
//             return async (dispatch, getState) => {
//                     dispatch({type: ACTION_TYPES.GET_DIF_PROJECTS, payload:slicedData})
//                     prevInstitutionType = institutionType
//                 } 
       
//     }
// }