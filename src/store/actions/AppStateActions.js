import { ACTION_TYPES } from './ActionTypes';
export const changeLoadingState = (payload) => {
    return (dispatch, getState) => {
        dispatch({type:ACTION_TYPES.LOADING, payload:payload})
    }
}