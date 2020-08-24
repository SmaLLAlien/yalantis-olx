import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './BasketWidget.module.scss';
import basket from '../../../../global/images/basket.svg';
import { CURRENCY, Routes } from '../../../../global/constants';

const BasketWidget = (props) => {
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
            {total} 
            {' '}
            {CURRENCY}
          </div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    total: state.totalPurchasingPrice,
  };
};

export default connect(mapStateToProps, null)(BasketWidget);
