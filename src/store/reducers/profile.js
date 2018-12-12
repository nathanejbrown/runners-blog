import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    message: null,
    loading: false
}

const setMessage = (state, action) => {
    return updateObject(state, {
        message: action.message,
        loading: false
      });
}

const startLoading = (state, action) => {
    return updateObject(state, {
        loading: true
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_PROFILE_INFO: return setMessage(state, action);
      case actionTypes.START_RETRIEVING_PROFILE_DATA: return startLoading(state, action);
      default: return state;
    }
}

export default reducer; 