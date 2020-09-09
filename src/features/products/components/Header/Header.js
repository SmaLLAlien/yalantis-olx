import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import BasketWidget from '../../containers/BasketWidget';
import { Routes } from '../../../../global/constants';
import classes from './Header.module.scss';
import {openCreateModal} from "../../store/actions";
import {connect} from "react-redux";

const Header = (props) => {
  const {openCreateModal} = props;
  const match = useRouteMatch(Routes.BASKET);
  const basket = match ? null : <BasketWidget />;

  return <>
    <div className={classes.header}>
      <button type='button' className={classes.header__create} onClick={openCreateModal}>Create product</button>
      {basket}
    </div>
  </>;
};

const mapDispatchToProps = {
  openCreateModal
}

export default connect(null, mapDispatchToProps)(Header);
