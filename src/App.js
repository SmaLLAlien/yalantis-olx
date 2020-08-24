import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppHeader from './components/Header/Header';
import AppRoutes from './components/AppRoutes/AppRoutes';
import reducer from './features/store/reducer';
import classes from './App.module.scss';

const store = createStore(reducer);

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
