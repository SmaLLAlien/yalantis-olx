import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Routes } from '../../global/constants';
import FullProduct from '../../features/products/containers/FullProduct';
import Basket from '../../features/products/containers/Basket';
import NotFound from '../NotFound/NotFound';
import Layout from '../../features/products/containers/Layout';
import EditProduct from '../../features/products/containers/EditProduct';
import Orders from "../../features/products/containers/Orders";
import Order from "../../features/products/containers/Order";

const AppRoutes = () => (
  <Switch>
    <Route path={Routes.PRODUCTS} component={Layout} />
    <Route path={Routes.PRODUCT_DETAIL} exact component={FullProduct} />
    <Route path={Routes.BASKET} exact component={Basket} />
    <Route path={Routes.EDIT_PRODUCT} exact component={EditProduct} />
    <Route path={Routes.ORDERS} exact component={Orders} />
    <Route path={Routes.ORDER_DETAIL} exact component={Order} />

    <Route exact path="/">
      <Redirect to={Routes.CATALOG} />
    </Route>
    <Route path="*" component={NotFound} />
  </Switch>
);

export default AppRoutes;
