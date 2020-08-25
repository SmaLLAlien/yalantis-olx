import React from 'react';
import { withRouter } from 'react-router-dom';
import BasketWidget from '../../features/products/components/BasketWidget';
import { Routes } from '../../global/constants';
import { locationType } from '../../features/products/types/types';

const Header = (props) => {
  const { location } = props;
  const url = location.pathname;
  const basket = url === Routes.BASKET ? null : <BasketWidget />;

  return <>{basket}</>;
};

export default withRouter(Header);

Header.propTypes = {
  location: locationType.isRequired,
};
