import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from '../../../../core/api';
import * as actionTypes from '../../../store/actionsTypes';
import { Routes, URLs } from '../../../../global/constants';
import Product from '../../components/Product/Product';
import classes from './Products.module.scss';

const Products = (props) => {
  const { products } = props;
  const [loadError, setError] = useState(null);

  useEffect(() => {
    axios(`${URLs.PRODUCTS}`)
      .then((response) => {
        if (!products.length) {
          props.onLoadProducts(response.data.items);
        }
        setError(null);
        return response;
      })
      .catch((error) => setError(error));
  }, []);

  const buyHandler = (event, product) => {
    event.stopPropagation();
    props.onAddToBasketProduct(product);
  };

  const openDetailHandler = (id) => {
    props.history.push(`${Routes.PRODUCTS}/${id}`);
  };

  return (
    <div className={classes.products}>
      {loadError ? (
        <div className={classes.products__error}>{loadError.toString()}</div>
      ) : (
        products.map((product) => (
          <div
            className={classes.products__link}
            key={product.id}
            onClick={() => openDetailHandler(product.id)}
          >
            <Product
              className={classes.products__item}
              buy={(event, item) => buyHandler(event, item)}
              product={product}
            />
          </div>
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadProducts: (products) =>
      dispatch({ type: actionTypes.PRODUCTS_LOADED, payload: products }),
    onAddToBasketProduct: (product) =>
      dispatch({ type: actionTypes.PRODUCT_CHOSEN, payload: product }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
