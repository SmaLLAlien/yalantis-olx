import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store =  createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
