import axios from '../../axios-posts';
import * as actionTypes from './actionTypes';

export const handleProfileInfo = (data) => {
    return {
        type: actionTypes.GET_PROFILE_INFO,
        message: data.message,
        name: data.name
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
    return async dispatch => {
        try {
            dispatch(startRetrievingData())
            let res = await axios.get('/profile',
            {headers: {
                'Authorization' : `Bearer ${jwt}`
              }
            })
            dispatch(handleProfileInfo(res.data))
        } catch (err) {
            console.log(err)
        }
    }
}