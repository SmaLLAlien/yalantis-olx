import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import classes from './FullProduct.module.scss';
import Product from '../../components/Product/Product';
import { matchType, productType } from '../../types/types';
import Errors from '../../components/Errors/Errors';
import { Routes } from '../../../../global/constants';

export const FullProduct = (props) => {
  const {
    match,
    fetchProduct,
    fullProduct,
    onAddToBasketProduct,
    serverError,
    deleteProduct,
  } = props;

  const history = useHistory();

  useEffect(() => {
    if (match.params.id) {
      fetchProduct(match.params.id);
    }
  }, [match.params.id]);

  const buyHandler = (event, product) => {
    const { purchasing } = props;
    event.stopPropagation();
    onAddToBasketProduct(product, purchasing);
  };

  const returnHandler = () => {
    history.push(Routes.CATALOG);
  };

  const editRedirectHandler = (id) => {
    history.push(`${Routes.EDIT}/${id}`);
  };

  const deleteRedirect = (id) => {
    deleteProduct(id, '');
    returnHandler();
  };

  let product = <p style={{ textAlign: 'center' }}>Loading...!</p>;

  if (fullProduct && !serverError) {
    product = (
      <div className={classes.product}>
        <Product
          buy={(event, item) => buyHandler(event, item)}
          openEdit={(item) => {
            editRedirectHandler(item);
          }}
          deleteProduct={(id) => deleteRedirect(id)}
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
      <button type="button" onClick={returnHandler} className={classes.back}>
        Back to products
      </button>
      {product}
    </div>
  );
};

FullProduct.propTypes = {
  purchasing: PropTypes.arrayOf(productType).isRequired,
  onAddToBasketProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  fetchProduct: PropTypes.func.isRequired,
  match: matchType.isRequired,
  serverError: PropTypes.string,
  fullProduct: productType,
};

FullProduct.defaultProps = {
  serverError: null,
  fullProduct: null,
};
