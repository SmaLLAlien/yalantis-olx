import React from 'react';
import PropTypes from 'prop-types';
import classes from './Product.module.scss';
import { CURRENCY } from '../../../../global/constants';
import { productType } from '../../types/types';

const Product = (props) => {
  const { product } = props;

  const buyBtn = product.isEditable ? null : <button
    type="button"
    className={classes.product__buy}
    onClick={(event) => props.buy(event, product)}
  > buy
  </button>

  const editLink = product.isEditable
    ? <div className={classes.product__edit}>edit</div>
    : null;

  return (
    <div className={classes.product}>
      {editLink}
      <div className={classes.product__name}>{product.name}</div>
      <div className={classes.product__origin}>
        Country:
        {product.origin.toUpperCase()}
      </div>
      <div className={classes.product__price}>
        Price:
        {product.price} {CURRENCY}
      </div>
      {buyBtn}
    </div>
  );
};

Product.propTypes = {
  product: productType.isRequired,
  buy: PropTypes.func.isRequired,
};

export default Product;
