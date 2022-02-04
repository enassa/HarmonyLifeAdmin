import {ALERTS} from '../../contants/uiConstants';
import {ACTION_TYPES} from '../actions/ActionTypes';
const initialState = {
        NEWSs:[],
        openedNews:[]
    }
const albumReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_PICTURES:
            return {
                ...state,
                news:action.payload
            }   
        case ACTION_TYPES.OPEN_PICTURE:
            return {
                ...state,
                openedNews:action.payload
            }   
        default:
            break;
    }
    return state;
}

export default albumReducer;
