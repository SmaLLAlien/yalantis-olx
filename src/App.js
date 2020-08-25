import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import AppHeader from './components/Header/Header';
import AppRoutes from './components/AppRoutes/AppRoutes';
import classes from './App.module.scss';
import rootReducer from "./core/rootReducer";

const initialState = {};

const store = createStore(rootReducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={classes.App}>
          <AppHeader />
          <AppRoutes />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
