import { ACTION_TYPES } from '../actions/ActionTypes';
const innitialState = {
    loading:false,
}

const appStateReducer= (state=innitialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOADING:
            return {...state, loading:!state.loading}
        default:
            break;
    }
    return state;
}

export default appStateReducer;