import axios from '../../axios-posts';
import * as actionTypes from './actionTypes';

export const handleProfileInfo = (message) => {
    return {
        type: actionTypes.GET_PROFILE_INFO,
        message: message
    }
}

export const startRetrievingData = () => {
    return {
        type: actionTypes.START_RETRIEVING_PROFILE_DATA
    }
}

export const profileInfoFailure = () => {
    return {
        type: actionTypes.PROFILE_INFO_FAILURE
    }
}

export const getProfileInfo = (jwt) => {
    return dispatch => {
        dispatch(startRetrievingData())
        axios.get('/profile',
        {headers: {
            'Authorization' : `Bearer ${jwt}`
          }
        })
        .then(res => {
            dispatch(handleProfileInfo(res.data.message))
        })
        .catch(err => {
            dispatch(profileInfoFailure())
            console.log(err);
        });
    }
}