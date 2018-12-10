import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loggedIn: false
}

const handleLogin = (state, action) => {
    return updateObject(state, {
        loggedIn: true
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEND_LOGIN_INFO: return handleLogin(state, action);
        default: return state;
    }
}

export default reducer;