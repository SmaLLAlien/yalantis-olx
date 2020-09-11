import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductsList from '../ProductsList/ProductsList';
import {originType, productType} from '../../types/types';
import classes from './Products.module.scss';


 const Products = (props) => {
  const {
    // productOrigins,
    // fetchOrigins,
    // manageOrigins,
    // currentPage,
    // perPage,
    // totalItems,
    // setOriginQueryToStore,
    // isCreateModalOpen
    products,
    purchasing,
    serverError,
    fetchProducts,
    onAddToBasketProduct,
    resetOrigin
  } = props;

   useEffect(() => {
     // resetOrigin()
   }, [])


  return (
    <>
      <div className={classes.products}>
        <div className={classes.products__title}>Stop N Shop</div>
        <div>
          <ProductsList products={products}
          purchasing={purchasing}
          serverError={serverError}
          fetchProducts={(queryURL) => fetchProducts(queryURL)}
          onAddToBasketProduct={onAddToBasketProduct} />
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

export default Products;
