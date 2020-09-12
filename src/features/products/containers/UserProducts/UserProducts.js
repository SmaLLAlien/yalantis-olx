import React, {useEffect} from "react";
import classes from "./UserProducts.module.scss";
import ProductsList from "../ProductsList/ProductsList";

const UserProducts = (props) => {
  const {
    products,
    serverError,
    fetchProducts,
  } = props;

  const mixEditable = query => {
    if (query) {
      fetchProducts(query + '&editable=true');
    } else {
      fetchProducts(query + '?editable=true');
    }
  }

  return (
    <>
      <div className={classes.productsUser}>
        <div className={classes.productsUser__title}>My Products</div>
        <div className={classes.productsUser__list}>
          <ProductsList products={products}
                        serverError={serverError}
                        fetchProducts={(queryURL) => mixEditable(queryURL)}/>
        </div>
      </div>
    </>
  )
}

export default UserProducts;
