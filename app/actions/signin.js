import fetch from 'isomorphic-fetch';

import { SIGNIN_POST, ERROR, PENDING, SUCCESS, GOTO_SIGNUP } from './constants';

const signInPending = () => {
    return {
        type: SIGNIN_POST,
        status: PENDING
    }
}

const signInError = (err) => {
    return {
        type: SIGNIN_POST,
        status: ERROR,
        response: err
    }
}

const signInSuccess = (res) => {
    return {
        type: SIGNIN_POST,
        status: SUCCESS,
        response: res
    }
}

export const onSignInClick = (account, password) => {
    return (dispatch, getState) => {
        dispatch(signInPending());
        fetch(url, {})
            .then(res => res.json())
            .then(res => {
                dispatch(signInSuccess(res));
            }, err => {
                dispatch(signInError(err));
            });
    }
}

export const onGoToSignUpClick = () => {
    return {
        type: GOTO_SIGNUP
    }
}