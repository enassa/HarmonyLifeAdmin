import {ALERTS} from '../../contants/uiConstants';
import {ACTION_TYPES} from '../actions/ActionTypes';
const initialState = {
        openedAnswer:[],
        answerersOfAnswer:[],
    }
const answerDetailsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.VIEW_ANSWER_DETAILS:
            return {
                ...state,
                openedQuestion:action.payload
            }   
        case ACTION_TYPES.GET_ANSWERERS_OF_ANSWER:
            return {
                ...state,
                answerersOfAnswer:action.payload
            }   
        case ACTION_TYPES.GET_MORE_ANSWERERS_OF_ANSWER:
            return {
                ...state,
                answerersOfAnswer:[this.state.answerersOfAnswer,...action.payload]
            }   
        default:
            break;
    }
    return state;
}

export default answerDetailsReducer;
