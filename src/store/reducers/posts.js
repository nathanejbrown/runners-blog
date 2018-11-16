import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: null,
    loading: false
}

const fetchPostsStart = (state, action) => {
    return updateObject(state, {loading: true});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FETCH_POSTS_START: return fetchPostsStart(state, action);
      default: return state;
    }
}

export default reducer; 
