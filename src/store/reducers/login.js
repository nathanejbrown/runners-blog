import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loggedIn: false, 
    redirectPath: null
}

const handleLogin = (state, action) => {
    return updateObject(state, {
        loggedIn: true
    })
}

const handleLogout = (state, action) => {
    return updateObject(state, {
        loggedIn: false
    })
}

const handleRedirect = (state, action) => {
    return updateObject(state, {
        redirectPath: action.redirect
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEND_LOGIN_INFO: return handleLogin(state, action);
        case actionTypes.REDIRECT: return handleRedirect(state, action);
        case actionTypes.LOGOUT: return handleLogout(state, action);
        default: return state;
    }
}

export default reducer;