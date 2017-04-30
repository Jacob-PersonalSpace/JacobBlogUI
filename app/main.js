import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './stores/store.js';
import signInContainer from './containers/signin.js';
import signUpContainer from './containers/signup.js';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route exact path='/' component={signInContainer} />
                <Route path="/SignIn" component={signInContainer} />
                <Route path='/SignUp' component={signUpContainer} />
            </Router>
        </div>
    </Provider>,
    document.getElementById('app')
)