import React from 'react';
import classes from './Product.module.scss';
import { CURRENCY } from '../../../../global/constants';

const Product = (props) => {
  const { product } = props;

  return (
    <div className={classes.product}>
      <div className={classes.product__name}>{product.name}</div>
      <div className={classes.product__origin}>
        Country:
        {product.origin.toUpperCase()}
      </div>
      <div className={classes.product__price}>
        Price:
        {product.price} 
        {' '}
        {CURRENCY}
      </div>
      <button
        type="button"
        className={classes.product__buy}
        onClick={(event) => props.buy(event, product)}
      >
        buy
      </button>
    </div>
  );
};

export default Product;
