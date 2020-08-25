import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Routes } from '../../global/constants';
import Products from '../../features/products/containers/Products/Products';
import FullProduct from '../../features/products/containers/FullProduct/FullProduct';
import Basket from '../../features/products/containers/Basket/Basket';
import NotFound from "../NotFound/NotFound";

const AppRoutes = () => (
  <Switch>
    <Route path={Routes.PRODUCTS} exact component={Products} />
    <Route path={`${Routes.PRODUCTS}/:id`} exact component={FullProduct} />
    <Route path={Routes.BASKET} exact component={Basket} />

    <Route exact path="/">
      <Redirect to={Routes.PRODUCTS} />
    </Route>
    <Route path='*' component={NotFound} />
  </Switch>
);

export default AppRoutes;
