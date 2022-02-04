import { URL_END_POINTS } from '../../contants/urls';
import {ACTION_TYPES} from './ActionTypes';
import axios from 'axios';
import { PROJECT_OBJECT, STATUS_UPDATE } from '../../contants/Contentobject';
import { searchContains, removeItemFromLocalStorage, saveObjectInLocalStorage } from '../../contants/generalFunctions';
import { changeLoadingState } from './AppStateActions';
// GET PROJECT ACTION
let lastDataId = 0;
let innitialLoad ='';
export const getAnswerers = (limit = undefined,initial=undefined) => {
        if(innitialLoad===initial){
            return async (dispatch, getState) => {
                    dispatch({type: ACTION_TYPES.DO_NOTHING, payload:{}})
            }
        }
        if(initial==='initial'){
            innitialLoad = initial
        }
        let url =  URL_END_POINTS.GET_ANSWERERS;
        if(limit !== undefined){
            url = `${URL_END_POINTS.GET_ANSWERERS}?_start=${lastDataId}&_limit=${lastDataId+limit}`
            lastDataId = lastDataId + limit
        }
        return async (dispatch, getState) => {
            axios.get(url).then((response) => {
                removeItemFromLocalStorage('openedAnswers')
                saveObjectInLocalStorage('answers', response.data)
                dispatch({type: ACTION_TYPES.GET_ANSWERERS, payload:response.data})
            }).catch((error) => {})
        }
}
export const openAnswerer = (project,changePage=()=>{}) => {
    return async (dispatch, getState) => {
           await dispatch({type: ACTION_TYPES.VIEW_ANSWERER_DETAILS, payload:project})
    }
}
let lastDataId2 = 0;
let innitialLoad2 ='';
export const getAnswersOfAnswerer = (limit = undefined,initial=undefined) => {
    if(innitialLoad2===initial){
        return async (dispatch, getState) => {
                dispatch({type: ACTION_TYPES.DO_NOTHING, payload:{}})
        }
    }
    if(initial==='initial'){
        innitialLoad2 = initial
    }
    let url =  URL_END_POINTS.GET_ANSWERS_OF_ANSWERER;
    if(limit !== undefined){
        url = `${URL_END_POINTS.GET_ANSWERS_OF_ANSWERER}?_start=${lastDataId2}&_limit=${lastDataId2+limit}`
        lastDataId2 = lastDataId2 + limit
    }
    return async (dispatch, getState) => {
        axios.get(url).then((response) => {
            dispatch({type: ACTION_TYPES.GET_ANSWERS_BY_ANSWERER, payload:response.data})
        }).catch((error) => {})
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