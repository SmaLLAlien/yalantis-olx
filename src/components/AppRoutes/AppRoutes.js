import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Routes } from '../../global/constants';
import FullProduct from '../../features/products/containers/FullProduct';
import Basket from '../../features/products/containers/Basket';
import NotFound from '../NotFound/NotFound';
import Layout from "../../features/products/containers/Layout";

const AppRoutes = () => (
  <Switch>
    <Route path={Routes.PRODUCTS} component={Layout} />
    <Route path={Routes.PRODUCT_DETAIL} exact component={FullProduct} />
    <Route path={Routes.BASKET} exact component={Basket} />

    <Route exact path="/">
      <Redirect to={Routes.CATALOG} />
    </Route>
    <Route path="*" component={NotFound} />
  </Switch>
);

export default AppRoutes;
