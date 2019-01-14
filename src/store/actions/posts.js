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

export const fetchPostsFailure = () => {
  return {
    type: actionTypes.FETCH_POSTS_FAILURE
  }
}

export const newPostSuccess = (post) => {
  return {
    type: actionTypes.NEW_POST_SUCCESS,
    post: post
  }
}

export const fetchNewestPost = () => {
    return async dispatch => {
      try {
        dispatch(fetchPostsStart())
        let res = await axios.get('posts/newest-post')
        dispatch(fetchPostsSuccess(res.data))
      } catch (err) {
        dispatch(fetchPostsFailure())
        console.log(err)
      }
    }
  }

export const createNewPost = (post, jwt) => {
  const newPost = {
    title: post.title,
    body: post.body
  }
  return async dispatch => {
    try {
      let res = await axios.post('posts/new', newPost, {
        headers: {
        'Authorization': `Bearer ${jwt}`
      }})
      dispatch(newPostSuccess(res.data[0]))
    } catch (err) {
      console.log(err)
    }

  }
}