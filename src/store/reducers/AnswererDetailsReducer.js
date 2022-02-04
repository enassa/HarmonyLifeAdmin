import {ALERTS} from '../../contants/uiConstants';
import {ACTION_TYPES} from '../actions/ActionTypes';
const initialState = {
        openedAnswerer:[],
        answersByAnswerer:[]
    }
const answererDetailsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.VIEW_ANSWERER_DETAILS:
            return {
                ...state,
                openedAnswerer:action.payload
            }   
        case ACTION_TYPES.GET_ANSWERS_BY_ANSWERER:
            return {
                ...state,
                answersByAnswerer:action.payload
            }   
        case ACTION_TYPES.GET_MORE_ANSWERERS_OF_ANSWER:
            return {
                ...state,
                answersByAnswerer:[this.state.answersByAnswerer,...action.payload]
            }   
        default:
            break;
    }
    return state;
}

export default answererDetailsReducer;
