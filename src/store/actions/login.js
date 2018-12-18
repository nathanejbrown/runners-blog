import * as actionTypes from './actionTypes';
import axios from '../../axios-posts';

export const login = () => {
    return {
      type: actionTypes.LOGIN
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: actionTypes.LOGOUT
    }
}

export const startLogin = (user) => {
    return dispatch => {
        const authData = {
            email: user.email,
            password: user.password
        }
        axios.post('/auth', authData)
        .then(res => {
            localStorage.setItem('token', res.data.myToken)
            dispatch(login())
        })
        .catch(err => {
          console.log(err);
        });
    }
}

export const redirect = (path) => {
    return {
        type: actionTypes.REDIRECT,
        redirect: path
    }
}

export const checkLogin = () => {
    let token = localStorage.getItem('token') || null;
    return token ? true : false
}