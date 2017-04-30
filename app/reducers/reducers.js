import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import signInReducer from './signin.js';
import signUpReducer from './signup.js';

const reducers = combineReducers({
    signin: signInReducer,
    signup: signUpReducer,
    routing: routerReducer
});

export default reducers;