import React from 'react';
import { useRouteMatch, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import BasketWidget from '../../containers/BasketWidget';
import { Routes } from '../../../../global/constants';
import classes from './Header.module.scss';

export const Header = (props) => {
  const { openCreateModal } = props;
  const matchBasket = useRouteMatch(Routes.BASKET);
  const matchProduct = useRouteMatch(Routes.CATALOG);
  const matchUserProduct = useRouteMatch(Routes.CREATED);
  const basket = matchBasket ? null : <BasketWidget />;
  const createBtn =
    matchProduct || matchUserProduct ? (
      <button
        type="button"
        className={classes.header__create}
        onClick={openCreateModal}
      >
        Create product
      </button>
    ) : null;

  return (
    <>
      <div className={classes.header}>
        {createBtn}
        <nav className={classes.header__navigation}>
          <NavLink
            className={classes.header__link}
            to={{ pathname: Routes.CREATED }}
            activeClassName={classes.active}
          >
            My Products
          </NavLink>
          <NavLink
            className={classes.header__link}
            to={Routes.CATALOG}
            activeClassName={classes.active}
          >
            Products
          </NavLink>
          <NavLink
            className={classes.header__link}
            to={Routes.ORDERS}
            activeClassName={classes.active}
          >
            Orders
          </NavLink>
        </nav>
        {basket}
      </div>
    </>
  );
};

Header.propTypes = {
  openCreateModal: PropTypes.func.isRequired,
};
