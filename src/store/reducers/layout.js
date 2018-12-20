import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    path: null
}

const handleUpdateCurrentPath = (state, action) => {
    return updateObject(state, {
        path: action.path
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_CURRENT_PATH: return handleUpdateCurrentPath(state, action);
        default: return state;
    }
}

export default reducer;