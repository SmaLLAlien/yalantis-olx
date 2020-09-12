import React from 'react';
import {useRouteMatch, Link, NavLink} from 'react-router-dom';
import BasketWidget from '../../containers/BasketWidget';
import { Routes } from '../../../../global/constants';
import classes from './Header.module.scss';
import {openCreateModal, resetOrigin} from "../../store/actions";
import {connect} from "react-redux";

const Header = (props) => {
  const {openCreateModal} = props;
  const match = useRouteMatch(Routes.BASKET);
  const basket = match ? null : <BasketWidget />;

  return <>
    <div className={classes.header}>
      <button type='button' className={classes.header__create} onClick={openCreateModal}>Create product</button>
      <nav className={classes.header__navigation}>
        <NavLink className={classes.header__link} to={{pathname: Routes.CREATED}} activeClassName={classes.active}>My Products</NavLink>
        <NavLink className={classes.header__link} to={Routes.CATALOG} activeClassName={classes.active}>Products</NavLink>
      </nav>
      {basket}
    </div>
  </>;
};

const mapDispatchToProps = {
  openCreateModal,
  resetOrigin
}

export default connect(null, mapDispatchToProps)(Header);
