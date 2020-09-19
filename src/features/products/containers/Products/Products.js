import React from 'react';
import PropTypes from 'prop-types';
import ProductsList from '../ProductsList/ProductsList';
import { productType } from '../../types/types';
import classes from './Products.module.scss';

const Products = (props) => {
  const {
    products,
    purchasing,
    serverError,
    fetchProducts,
    onAddToBasketProduct,
  } = props;

  return (
    <>
      <div className={classes.products}>
        <div className={classes.products__title}>Stop N Shop</div>
        <div>
          <ProductsList
            products={products}
            purchasing={purchasing}
            serverError={serverError}
            fetchProducts={(queryURL) => fetchProducts(queryURL)}
            onAddToBasketProduct={onAddToBasketProduct}
          />
        </div>
      </div>
    </>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(productType).isRequired,
  purchasing: PropTypes.arrayOf(productType).isRequired,
  fetchProducts: PropTypes.func.isRequired,
  onAddToBasketProduct: PropTypes.func.isRequired,
  serverError: PropTypes.string,
};

Products.defaultProps = {
  serverError: null,
};

export default Products;
