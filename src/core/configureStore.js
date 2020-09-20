import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import api from './api';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store =  createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument(api), sagaMiddleware)),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
