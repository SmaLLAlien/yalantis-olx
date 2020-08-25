import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from '../../../../core/api';
import { URLs } from '../../../../global/constants';
import classes from './FullProduct.module.scss';
import Product from '../../components/Product/Product';
import { matchType, productType } from '../../types/types';

export const FullProduct = (props) => {
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
    const { purchasing } = props;
    event.stopPropagation();
    props.onAddToBasketProduct(product, purchasing);
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

FullProduct.propTypes = {
  purchasing: PropTypes.arrayOf(productType).isRequired,
  onAddToBasketProduct: PropTypes.func.isRequired,
  match: matchType.isRequired,
};
