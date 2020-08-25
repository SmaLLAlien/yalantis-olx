import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CURRENCY, Routes } from '../../../../global/constants';
import classes from './Basket.module.scss';
import { productType } from '../../types/types';

export const Basket = (props) => {
  const { products, decrease, increase, total } = props;
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
              <button
                type="button"
                className={classes.product__decrease}
                onClick={() => decrease(product.id, products)}
              >
                -
              </button>
              <button
                type="button"
                className={classes.product__increase}
                onClick={() => increase(product.id, products)}
              >
                +
              </button>
            </div>
            <div className={classes.product__total}>
              Total price:
              {product.pieces * product.price} 
              {' '}
              {CURRENCY}
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className={classes.basket}>
      <Link to={Routes.PRODUCTS} className={classes.back}>
        Back to products
      </Link>
      <div className={classes.basket__info}>
        Number of products:
        {' '}
        {products.reduce((acc, product) => acc + product.pieces, 0)}
      </div>
      <div className={classes.basket__info}>
        Total price:
        {total} 
        {' '}
        {CURRENCY}
      </div>
      {productsElements}
    </div>
  );
};

Basket.propTypes = {
  products: PropTypes.arrayOf(productType).isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};
