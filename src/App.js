import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppHeader from './features/products/components/Header/Header';
import AppRoutes from './components/AppRoutes/AppRoutes';
import classes from './App.module.scss';
import { configureStore } from './core/configureStore';
import ToTop from './features/products/containers/ToTop/ToTop';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={classes.App}>
          <AppHeader />
          <AppRoutes />
          <ToTop />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
