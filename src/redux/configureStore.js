import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Deals } from './deals';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            deals: Deals,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}