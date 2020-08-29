import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import api from './api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = (initialState = {}) =>
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument(api))),
  );
