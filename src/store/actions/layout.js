import * as actionTypes from './actionTypes';

export const updateCurrentPath = (path) => {
    return {
        type: actionTypes.UPDATE_CURRENT_PATH,
        path: path
    }
}