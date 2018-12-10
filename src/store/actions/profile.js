import axios from '../../axios-posts';
import * as actionTypes from './actionTypes';

export const handleProfileInfo = (message) => {
    return {
        type: actionTypes.GET_PROFILE_INFO,
        message: message
    }
}

export const getProfileInfo = (jwt) => {
    return dispatch => {
        axios.get('/profile',
        {headers: {
            'Authorization' : `Bearer ${jwt}`
          }
        })
        .then(res => {
            dispatch(handleProfileInfo(res.data.message))
        })
        .catch(err => {
          console.log(err);
        });
    }
}