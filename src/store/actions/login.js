import * as actionTypes from './actionTypes';
import axios from '../../axios-posts';

export const sendLoginInfo = () => {
    return {
      type: actionTypes.SEND_LOGIN_INFO
    }
}

export const startLogin = (user) => {
    return dispatch => {
        dispatch(sendLoginInfo())
        const authData = {
            email: user.email,
            password: user.password
        }
        axios.post('/auth', authData)
        .then(res => {
            console.log(res)
        //   dispatch(fetchPostsSuccess(res.data))
        })
        .catch(err => {
          console.log('Incorrect Login Information');
        });
    }
}