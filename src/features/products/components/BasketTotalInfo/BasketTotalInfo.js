import React from 'react';
import PropTypes from 'prop-types';
import { CURRENCY } from '../../../../global/constants';
import { productType } from '../../types/types';
import classes from './BasketTotalInfo.module.scss';

const BasketTotalInfo = (props) => {
  const { total, products } = props;
  return (
    <>
      <div className={classes.basket__info}>
        Number of products:{' '}
        {products.reduce((acc, product) => acc + product.pieces, 0)}
      </div>
      <div className={classes.basket__info}>
        Total price:
        {total} {CURRENCY}
      </div>
    </>
  );
};

BasketTotalInfo.propTypes = {
  total: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(productType).isRequired,
};

export default BasketTotalInfo;
