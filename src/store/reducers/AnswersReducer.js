import {ALERTS} from '../../contants/uiConstants';
import {ACTION_TYPES} from '../actions/ActionTypes';
const initialState = {
        answers:[],
        submissionState:false,
        receivedData:[],
        dataReceived:false,
        searchItems:[],
        fetchErrors:'noError',
    }
const answersReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_ANSWERS:
            console.log(action.payload)
            return {
                ...state,
                answers:action.payload,
                dataReceived:true,
            }   
        case ACTION_TYPES.GET_ANSWERS_BEHIND:
            console.log(action.payload)
            return {
                ...state,
                answers:action.payload,
                dataReceived:true,
            }   
        case ACTION_TYPES.GET_MORE_ANSWERS:
            return {
                ...state,
                answers:[...state.answers,...action.payload],
                dataReceived:true,
            }   
        case ACTION_TYPES.SEARCH_ANSWERS:
            return {
                ...state,
                searchItems:action.payload,
                dataReceived:true,
            }   
        case ACTION_TYPES.SUBMITION_SUCCESS:
            return {
                ...state,
                submissionState:true,
                receivedData:[...state.receivedData,action.payload],
                dataReceived:true,
            }   
        case ACTION_TYPES.SUBMITION_FAILED:
            return {
                ...state,
                submissionState:true,
                receivedData:action.payload,
                dataReceived:true
            }   
        case ACTION_TYPES.DATA_RECEIVED:
            return {
                ...state,
                dataReceived:true
            }
        case ACTION_TYPES.RESET_ERRORS:
            return {
                ...state,
                fetchErrors:'noError',
            }   
        case ACTION_TYPES.NO_INTERNET_ERROR:
            return {
                ...state,
                fetchErrors:'NO_INTERNET_ERROR',
            }      
        case ACTION_TYPES.NO_RECORDS_ERROR:
            return {
                ...state,
                fetchErrors:'NO_RECORDS_ERROR',
            }      
        case ACTION_TYPES.SERVER_ERROR:
            return {
                ...state,
                fetchErrors:'SERVER_ERROR',
            }      
        case ACTION_TYPES.URL_NOT_FOUND:
            return {
                ...state,
                fetchErrors:'URL_NOT_FOUND_ERROR',
            }      
        default:
            break;
    }
    return state;
}

export default answersReducer;
