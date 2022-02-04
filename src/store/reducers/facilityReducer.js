import {ALERTS} from '../../contants/uiConstants';
import {ACTION_TYPES} from '../actions/ActionTypes';
const initialState = {
        faciliytCreationState:'',
    }
const facilityReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CREATE_FACILITY:
            return {
                ...state,
                faciliytCreationState:action.payload
            }   
        default:
            break;
    }
    return state;
}
export default facilityReducer;
