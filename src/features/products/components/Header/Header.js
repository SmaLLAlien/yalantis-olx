import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import BasketWidget from '../../containers/BasketWidget';
import { Routes } from '../../../../global/constants';
import classes from './Header.module.scss';

const Header = () => {
  const match = useRouteMatch(Routes.BASKET);
  const basket = match ? null : <BasketWidget />;

  return <>
    <div className={classes.header}>
      <button type='button' className={classes.header__create}>Create product</button>
      {basket}
    </div>
  </>;
};

export default Header;
