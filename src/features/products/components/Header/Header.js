import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import BasketWidget from '../../containers/BasketWidget';
import { Routes } from '../../../../global/constants';

const Header = () => {
  const match = useRouteMatch(Routes.BASKET);
  const basket = match ? null : <BasketWidget />;

  return <>{basket}</>;
};

export default Header;
