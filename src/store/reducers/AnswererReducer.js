import {ALERTS} from '../../contants/uiConstants';
import {ACTION_TYPES} from '../actions/ActionTypes';
const initialState = {
        answerers:[],
    }
const answerersReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_ANSWERERS:
            return {
                ...state,
                answerers:action.payload,
            }   
        case ACTION_TYPES.GET_MORE_ANSWERERS:
            return {
                ...state,
                answerers:[...state.answerers,...action.payload]
        }   
        default:
            break;
    }
    return state;
}

export default answerersReducer;
