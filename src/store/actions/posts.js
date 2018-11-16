import axios from '../../axios-posts';
import * as actionTypes from './actionTypes';

export const fetchPostsStart = () => {
    return {
      type: actionTypes.FETCH_POSTS_START
    }
  }

export const fetchOrders = (token, userId) => {
    return dispatch => {
      dispatch(fetchPostsStart())
      axios.get('/posts')
      .then(res => {
        console.log(res)
        // dispatch(fetchOrdersSuccess(fetchedOrders))
      })
      .catch(err => {
        // dispatch(fetchOrdersFailed(err))
        console.log(err)
      });
    }
  }