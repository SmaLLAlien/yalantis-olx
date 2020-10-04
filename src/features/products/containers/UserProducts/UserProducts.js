import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import classes from './UserProducts.module.scss';
import ProductsList from '../ProductsList/ProductsList';
import { productType } from '../../types/types';

const UserProducts = (props) => {
  const { products, serverError, fetchProducts, deleteProduct } = props;
  const searchParams = useLocation().search;

  const mixEditable = (query) => {
    if (query) {
      fetchProducts(`${query}&editable=true`);
    } else {
      fetchProducts(`${query}?editable=true`);
    }
  };

  return (
    <>
      <div className={classes.productsUser}>
        <div className={classes.productsUser__title}>My Products</div>
        <div className={classes.productsUser__list}>
          <ProductsList
            products={products}
            serverError={serverError}
            productDelete={(id) => deleteProduct(id, searchParams)}
            fetchProducts={(queryURL) => mixEditable(queryURL)}
          />
        </div>
      </div>
    </>
  );
};

UserProducts.propTypes = {
  products: PropTypes.arrayOf(productType).isRequired,
  serverError: PropTypes.string,
  fetchProducts: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};
UserProducts.defaultProps = {
  serverError: null,
};

export default UserProducts;
