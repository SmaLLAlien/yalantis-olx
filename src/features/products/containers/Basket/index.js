import { connect } from 'react-redux';
import { Basket } from './Basket';
import {
  getBasketProducts,
  getTotalBasketPrice,
} from '../../store/selectors/selectors';

import { getPostOrderError } from '../../store/selectors/ordersSelectors';
import {decreaseProductPieces, deleteProductFromBasket, increaseProductPieces} from "../../store/actions/basket";
import {orderCreated} from "../../store/actions/orders";

const mapStateToProps = (state) => {
  return {
    products: getBasketProducts(state),
    total: getTotalBasketPrice(state),
    postOrderError: getPostOrderError(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    decreaseProductPieces: (id, purchasedProducts) => dispatch(decreaseProductPieces(id, purchasedProducts)),
    increaseProductPieces: (id, purchasedProducts) => dispatch(increaseProductPieces(id, purchasedProducts)),
    deleteProductFromBasket: (id) => dispatch(deleteProductFromBasket(id)),
    order: (products) => dispatch(orderCreated(products)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
