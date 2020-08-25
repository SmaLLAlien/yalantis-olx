import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './BasketWidget.module.scss';
import basket from '../../../../global/images/basket.svg';
import { CURRENCY, Routes } from '../../../../global/constants';

export const BasketWidget = (props) => {
  const { total } = props;

  return (
    <div className={classes.container}>
      <Link to={Routes.BASKET}>
        <div className={classes.basket}>
          <div
            className={classes.basket__icon}
            style={{ background: `url(${basket}) no-repeat` }}
          />
          <div className={classes.basket__counter}>
            {' '}
            {total} {CURRENCY}
          </div>
        </div>
      </Link>
    </div>
  );
};

BasketWidget.propTypes = {
  total: PropTypes.number.isRequired,
};
