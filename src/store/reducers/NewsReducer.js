import {ACTION_TYPES} from '../actions/ActionTypes';
const initialState = {
        news:[],
        openedNews:[]
    }
const newsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_NEWS:
            return {
                ...state,
                news:[...state.news, ...action.payload]
            }   
        case ACTION_TYPES.OPEN_NEWS:
            return {
                ...state,
                openedNews:action.payload
            }   
        default:
            break;
    }
    return state;
}

export default newsReducer;
