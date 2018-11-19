import axios from '../../axios-posts';
import * as actionTypes from './actionTypes';

export const fetchPostsStart = () => {
    return {
      type: actionTypes.FETCH_POSTS_START
    }
  }

export const fetchPostsSuccess = (posts) => {
    console.log('posts', posts)
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        posts: posts
    }
}

export const fetchPosts = () => {
    return dispatch => {
      dispatch(fetchPostsStart())
      axios.get('/posts')
      .then(res => {
        dispatch(fetchPostsSuccess(res.data))
      })
      .catch(err => {
        console.log(err)
      });
    }
  }