import { connect } from 'react-redux';
import { Basket } from './Basket';
import {
  getBasketProducts,
  getTotalBasketPrice,
} from '../../store/selectors/selectors';
import {
  decreaseProductPieces,
  deleteProductFromBasket,
  increaseProductPieces, order
} from '../../store/actions';

const mapStateToProps = (state) => {
  return {
    products: getBasketProducts(state),
    total: getTotalBasketPrice(state),
  };
};

const mapDispatchToProps = {
  decreaseProductPieces,
  increaseProductPieces,
  deleteProductFromBasket,
  order
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
