import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Routes } from '../../../../global/constants';
import classes from './FullProduct.module.scss';
import Product from '../../components/Product/Product';
import { matchType, productType } from '../../types/types';
import Errors from '../../components/Errors/Errors';

export const FullProduct = (props) => {
  const {
    match,
    fetchProduct,
    fullProduct,
    onAddToBasketProduct,
    serverError,
  } = props;

  useEffect(() => {
    if (match.params.id) {
      fetchProduct(match.params.id);
    }
  }, []);

  const buyHandler = (event, product) => {
    const { purchasing } = props;
    event.stopPropagation();
    onAddToBasketProduct(product, purchasing);
  };

  let product = <p style={{ textAlign: 'center' }}>Loading...!</p>;

  if (fullProduct && !serverError) {
    product = (
      <div className={classes.product}>
        <Product
          buy={(event, item) => buyHandler(event, item)}
          product={fullProduct}
        />
      </div>
    );
  }

  if (serverError) {
    product = (
      <div className={classes.product__error}>
        <Errors
          error={serverError}
          showError={() => fetchProduct(match.params.id)}
        />
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <Link to={Routes.PRODUCTS} className={classes.back}>
        Back to products
      </Link>
      {product}
    </div>
  );
};

FullProduct.propTypes = {
  purchasing: PropTypes.arrayOf(productType).isRequired,
  onAddToBasketProduct: PropTypes.func.isRequired,
  fetchProduct: PropTypes.func.isRequired,
  match: matchType.isRequired,
  serverError: PropTypes.string,
  fullProduct: productType,
};

FullProduct.defaultProps = {
  serverError: null,
  fullProduct: null,
};
