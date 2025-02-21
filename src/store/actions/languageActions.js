import {SET_HOME, SET_LANGUAGE} from '../types';
export const setSelectedLanguage = (data) => {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            dispatch({
                type: SET_LANGUAGE,
                payload: data,
            });
            resolve();
        });
    };
}

export const setHomeScreen = (data) => {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            dispatch({
                type: SET_HOME,
                payload: data,
            });
            resolve();
        });
    };
}

