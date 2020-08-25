import React from 'react';
import PropTypes from 'prop-types';
import { CURRENCY } from '../../../../global/constants';
import classes from './Basket.module.scss';
import { productType } from '../../types/types';

export const Basket = (props) => {
  const { products } = props;
  let productsElements = (
    <div className={classes.basket__empty}>
      The basket is empty. But it&apos;s never too late to fix it :)
    </div>
  );

  if (products.length) {
    productsElements = products.map((product) => {
      return (
        <div key={product.id} className={classes.product}>
          <div className={classes.product__name}>{product.name}</div>
          <div>
            Country:
            {product.origin.toUpperCase()}
          </div>
          <div className={classes.product__price}>
            <div className={classes.product__pieces}>
              Pieces:
              {product.pieces}
            </div>
            <div className={classes.product__total}>
              Total price:
              {product.pieces * product.price} {CURRENCY}
            </div>
          </div>
        </div>
      );
    });
  }

  return <div className={classes.basket}>{productsElements}</div>;
};

Basket.propTypes = {
  products: PropTypes.arrayOf(productType).isRequired,
};
