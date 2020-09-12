import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CURRENCY, Routes } from '../../../../global/constants';
import classes from './Basket.module.scss';
import { productType } from '../../types/types';
import BasketTotalInfo from '../../components/BasketTotalInfo/BasketTotalInfo';
import PiecesControl from '../../components/PiecesControl/PiecesControl';

export const Basket = (props) => {
  const {
    products,
    decreaseProductPieces,
    increaseProductPieces,
    total,
    deleteProductFromBasket,
  } = props;
  let productsElements = (
    <div className={classes.basket__empty}>
      The basket is empty. But it&apos;s never too late to fix it :)
    </div>
  );

  if (products.length) {
    productsElements = products.map((product) => {
      return (
        <div key={product.id} className={classes.product}>
          <div className={classes.product__name}>{product.name}</div>
          <div>
            Country:
            {product.origin.toUpperCase()}
          </div>
          <div className={classes.product__price}>
            <div className={classes.product__pieces}>
              Pieces:
              {product.pieces}
              <PiecesControl
                btnClass="product__decrease"
                clicked={() => decreaseProductPieces(product.id, products)}
              >
                -
              </PiecesControl>
              <PiecesControl
                btnClass="product__increase"
                clicked={() => increaseProductPieces(product.id, products)}
              >
                +
              </PiecesControl>
            </div>
            <div className={classes.product__total}>
              Total price:
              {product.pieces * product.price} {CURRENCY}
            </div>
          </div>
          <button
            type="button"
            className={classes.product__delete}
            onClick={() => deleteProductFromBasket(product.id)}
          >
            x
          </button>
        </div>
      );
    });
  }

  return (
    <div className={classes.basket}>
      <Link to={Routes.CATALOG} className={classes.back}>
        Back to products
      </Link>
      <BasketTotalInfo total={total} products={products} />
      {productsElements}
    </div>
  );
};

Basket.propTypes = {
  products: PropTypes.arrayOf(productType).isRequired,
  increaseProductPieces: PropTypes.func.isRequired,
  decreaseProductPieces: PropTypes.func.isRequired,
  deleteProductFromBasket: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};
