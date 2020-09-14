import { connect } from 'react-redux';
import { Basket } from './Basket';
import {
  getBasketProducts,
  getTotalBasketPrice,
} from '../../store/selectors/selectors';
import {
  decreaseProductPieces,
  deleteProductFromBasket,
  increaseProductPieces, orderProduct
} from '../../store/actions';
import {getPostOrderError} from "../../store/selectors/ordersSelectors";

const mapStateToProps = (state) => {
  return {
    products: getBasketProducts(state),
    total: getTotalBasketPrice(state),
    postOrderError: getPostOrderError(state)
  };
};

const mapDispatchToProps = {
  decreaseProductPieces,
  increaseProductPieces,
  deleteProductFromBasket,
  order: orderProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
