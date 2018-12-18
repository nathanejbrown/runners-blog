import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loggedIn: localStorage.getItem('token') != null, 
    redirectPath: null
}

const handleLoggedInChange = (state, action) => {
    return updateObject(state, {
        loggedIn: localStorage.getItem('token') != null
    })
}

const handleRedirect = (state, action) => {
    return updateObject(state, {
        redirectPath: action.redirect
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN: return handleLoggedInChange(state, action);
        case actionTypes.REDIRECT: return handleRedirect(state, action);
        case actionTypes.LOGOUT: return handleLoggedInChange(state, action);
        default: return state;
    }
}

export default reducer;