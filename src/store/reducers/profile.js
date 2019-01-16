import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    message: null,
    loading: false,
    name: null,
    posts: null,
    profileImageUrl: null
}

const setMessage = (state, action) => {
    return updateObject(state, {
        message: action.message,
        loading: false,
        name: action.name,
        profileImageUrl: action.profileImageUrl
      });
}

const startLoading = (state) => {
    return updateObject(state, {
        loading: true
    })
}

const noProfileInfo = (state) => {
    return updateObject(state, {
        loading: false
    })
}

const setPosts = (state, action) => {
    return updateObject(state, {
        posts: action.posts,
        loading: false
    })
}

const changeInfo = (state, action) => {
    return updateObject(state, {
        [action.key]: [action.value]
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_PROFILE_INFO: return setMessage(state, action);
      case actionTypes.START_RETRIEVING_PROFILE_DATA: return startLoading(state, action);
      case actionTypes.PROFILE_INFO_FAILURE: return noProfileInfo(state);
      case actionTypes.ALL_POSTS_BY_AUTHOR: return setPosts(state, action);
      case actionTypes.START_LOADING: return startLoading(state);
      case actionTypes.CHANGE_PROFILE_INFO: return changeInfo(state, action);
      default: return state;
    }
}

export default reducer; 