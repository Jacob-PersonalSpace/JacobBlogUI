import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/reducers.js';

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

const configureStore = (initialState) => {
    const store = createStoreWithMiddleware(reducers, initialState);

    if (module.hot) {
        module.hot.accept('../reducers/reducers.js', () => {
            const nextReducer = require('../reducers/reducers.js');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}

export default configureStore;