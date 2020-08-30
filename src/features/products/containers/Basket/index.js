import { connect } from 'react-redux';
import { Basket } from './Basket';
import { getBasketProducts, getTotalBasketPrice } from '../../store/selectors';
import {
  decreaseProductPieces,
  increaseProductPieces,
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
