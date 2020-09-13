import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Routes } from '../../../../global/constants';
import classes from './ProductsList.module.scss';
import Errors from '../../components/Errors/Errors';
import Product from '../../components/Product/Product';
import { productType } from '../../types/types';

const ProductsList = (props) => {
  const { products, onAddToBasketProduct, fetchProducts, serverError } = props;
  const history = useHistory();
  const params = useLocation();
  const searValue = params.search;

  useEffect(() => {
    fetchProducts(searValue);
  }, [searValue]);

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
      history.push(`${Routes.PRODUCT}/${id}`);
    }
  };

  const editRedirectHandler = (id) => {
    history.push(`${Routes.EDIT}/${id}`);
  };

  return (
    <div className={classes.products}>
      {serverError ? (
        <div className={classes.products__error}>
          <Errors error={serverError} showError={() => fetchProducts()} />
        </div>
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
              openEdit={(item) => {
                editRedirectHandler(item);
              }}
              product={product}
            />
          </div>
        ))
      )}
    </div>
  );
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(productType).isRequired,
  purchasing: PropTypes.arrayOf(productType),
  fetchProducts: PropTypes.func.isRequired,
  onAddToBasketProduct: PropTypes.func,
  serverError: PropTypes.string,
};

ProductsList.defaultProps = {
  serverError: null,
  purchasing: [],
  onAddToBasketProduct: null,
};

export default ProductsList;
