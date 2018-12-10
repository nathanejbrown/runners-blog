import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    message: null
}

const setMessage = (state, action) => {
    return updateObject(state, {
        message: action.message
      });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_PROFILE_INFO: return setMessage(state, action);
      default: return state;
    }
}

export default reducer; 