import axios from '../../axios-posts';
import * as actionTypes from './actionTypes';

export const fetchPostsStart = () => {
    return {
      type: actionTypes.FETCH_POSTS_START
    }
  }

export const fetchPostsSuccess = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        posts: posts
    }
}

export const fetchNewestPost = () => {
    return dispatch => {
      dispatch(fetchPostsStart())
      axios.get('posts/newest-post')
      .then(res => {
        dispatch(fetchPostsSuccess(res.data))
      })
      .catch(err => {
        console.log(err)
      });
    }
  }