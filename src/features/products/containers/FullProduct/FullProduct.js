import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from '../../../../core/api';
import { URLs } from '../../../../global/constants';
import classes from './FullProduct.module.scss';
import Product from '../../components/Product/Product';
import * as actionTypes from '../../../store/actionsTypes';

const FullProduct = (props) => {
  const [fullProduct, setFullProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = () => {
      if (props.match.params.id) {
        axios(`${URLs.PRODUCTS}/${props.match.params.id}`)
          .then(({ data }) => {
            setError(null);
            setFullProduct(data);
          })
          .catch((err) => setError(err));
      }
    };

    loadProduct();
  }, []);

  const buyHandler = (event, product) => {
    event.stopPropagation();
    props.onAddToBasketProduct(product);
  };

  let product = <p style={{ textAlign: 'center' }}>Loading...!</p>;

  if (fullProduct && !error) {
    product = (
      <div className={classes.product}>
        <Product
          buy={(event, item) => buyHandler(event, item)}
          product={fullProduct}
        />
      </div>
    );
  }

  if (error) {
    product = <div className={classes.product__error}>{error.toString()}</div>;
  }

  return <div className={classes.container}>{product}</div>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToBasketProduct: (product) =>
      dispatch({ type: actionTypes.PRODUCT_CHOSEN, payload: product }),
  };
};

export default connect(null, mapDispatchToProps)(FullProduct);
