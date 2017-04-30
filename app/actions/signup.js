import fetch from 'isomorphic-fetch';

import { SIGNUP_POST, PENDING, ERROR, SUCCESS, GOTO_SIGNIN } from './constants';

const signUpPending = () => {
    return {
        type: SIGNUP_POST,
        status: PENDING
    }
}

const signUpError = (err) => {
    return {
        type: SIGNUP_POST,
        status: ERROR,
        response: err
    }
}

const signUpSuccess = (res) => {
    return {
        type: SIGNUP_POST,
        status: SUCCESS,
        response: res
    }
}

export const onSignUpClick = (firstName, lastName, userName, email, password) => {
    return (dispatch, getState) => {
        dispatch(signUpPending());
        fetch(url)
            .then(res => res.json())
            .then(res => {
                dispatch(signUpSuccess(res));
            }, err => {
                dispatch(signUpError(err));
            });
    }
}

export const onGoToSignInClick = () => {
    return {
        type: GOTO_SIGNIN
    }
}