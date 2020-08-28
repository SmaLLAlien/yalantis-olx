import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Routes } from '../../../../global/constants';
import Product from '../../components/Product/Product';
import classes from './Products.module.scss';
import { historyType, productType } from '../../types/types';

export const Products = (props) => {
  const { products, onAddToBasketProduct, fetchProducts } = props;
  const [loadError, setError] = useState(null);

  useEffect(() => {
    if (!products.length) {
      fetchProducts();
    }
  }, [])

  const buyHandler = (event, product) => {
    const { purchasing } = props;
    event.stopPropagation();
    onAddToBasketProduct(product, purchasing);
  };

  const openDetailHandler = (event, id) => {
    const { nativeEvent } = event;
    if (
      (nativeEvent instanceof KeyboardEvent && event.key === 'Enter') ||
      nativeEvent instanceof MouseEvent
    ) {
      props.history.push(`${Routes.PRODUCTS}/${id}`);
    }
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
            role="button"
            tabIndex={0}
            onKeyDown={(event) => openDetailHandler(event, product.id)}
            onClick={(event) => openDetailHandler(event, product.id)}
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

Products.propTypes = {
  products: PropTypes.arrayOf(productType).isRequired,
  purchasing: PropTypes.arrayOf(productType).isRequired,
  fetchProducts: PropTypes.func.isRequired,
  onAddToBasketProduct: PropTypes.func.isRequired,
  history: historyType.isRequired,
};
