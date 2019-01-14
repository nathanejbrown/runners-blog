import axios from '../../axios-posts';
import * as actionTypes from './actionTypes';

export const startLoading = () => {
    return {
        type: actionTypes.START_LOADING
    }
}

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

export const allPostsByAuthor = (posts) => {
    return {
        type: actionTypes.ALL_POSTS_BY_AUTHOR,
        posts: posts
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

export const getAllPostsByAuthor = (jwt) => {
    return async dispatch => {
      try {
        dispatch(startLoading())
        let res = await axios.get('/posts/all-by-author', {
          headers: {
            'Authorization': `Bearer ${jwt}`
          }
        })
        dispatch(allPostsByAuthor(res.data))
      } catch (err) {
        console.log(err)
      }
    }
  }