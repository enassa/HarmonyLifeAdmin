import {ALERTS} from '../../contants/uiConstants';
import {ACTION_TYPES} from '../actions/ActionTypes';
const initialState = {
        projects: [],
        openedProject:{},
        projectStatuses:[],
        openedProjectStatus:[],
        statusViewerState:false,
    }
const projectReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_PROJECTS:
            return {
                ...state,
                projects:[...state.projects, ...action.payload]
            }   
        case ACTION_TYPES.GET_PROJECT_STATUS_UPDATE:
            return {
                ...state,
                projectStatuses:[...state.projectStatuses,...action.payload]
            }   
        case ACTION_TYPES.GET_DIF_PROJECTS:
            return {
                ...state,
                projects:action.payload
            }   
        case ACTION_TYPES.OPEN_PROJECT_STATUS:
            return {
                ...state,
                openedProjectStatus:action.payload,
                statusViewerState:true,
            }   
        case ACTION_TYPES.CLOSE_PROJECT_STATUS:
            return {
                ...state,
                openedProjectStatus:action.payload,
                statusViewerState:false,
            }   
        case ACTION_TYPES.OPEN_PROJECT:
            console.log(action.payload)
            return {
                ...state,
                openedProject:action.payload
            }   
        case ACTION_TYPES.SEARCH_PROJECTS:
            console.log(action.payload)
            return {
                ...state,
                projects:action.payload
            }   
        default:
            break;
    }
    return state;
}

export default projectReducer;
