import * as actionTypes from './actionTypes';
import axios from '../../axios-posts';

export const login = () => {
    return {
      type: actionTypes.LOGIN
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.LOGOUT
    }
}

export const startLogin = (user) => {
    return async dispatch => {
        try {
            const authData = {
                email: user.email,
                password: user.password
            }
            let res = await axios.post('/auth', authData)
            const expirationDate = new Date(new Date().getTime() + 7200 * 1000);
            localStorage.setItem('token', res.data.myToken);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(login())
        } catch (err) {
            console.log(err)
        }
    }
}

export const redirect = (path) => {
    return {
        type: actionTypes.REDIRECT,
        redirect: path
    }
}

export const checkLogin = () => {
    return dispatch => {
        let token = localStorage.getItem('token') || null;
        let expirationDate = new Date(localStorage.getItem('expirationDate') || null);
        if (!token) {
            dispatch(logout())
        }
        if (!expirationDate || expirationDate <= new Date()) {
            dispatch(logout())
        }
    }
}

export const newUser = (user) => {
    return async dispatch => {
        try {
            const signupData = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password
            }
            let res = await axios.post('/auth/new', signupData)
            const expirationDate = new Date(new Date().getTime() + 7200 * 1000);
            localStorage.setItem('token', res.data.myToken);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(login())
        } catch (err) {
            console.log(err)
        }
    }
}