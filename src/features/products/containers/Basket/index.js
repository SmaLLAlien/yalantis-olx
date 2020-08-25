import { connect } from 'react-redux';
import { Basket } from './Basket';
import * as actionType from '../../store/actionsTypes';
import { changePiecesCount } from '../../../../helpers/helpers';

const mapStateToProps = (state) => {
  return {
    products: state.productState.purchasing,
    total: state.productState.totalPurchasingPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    decrease: (id, purchasedProducts) => {
      const payload = changePiecesCount(id, purchasedProducts, '-');
      dispatch({ type: actionType.DECREASE_CHOSEN, payload });
    },
    increase: (id, purchasedProducts) => {
      const payload = changePiecesCount(id, purchasedProducts, '+');
      dispatch({ type: actionType.INCREASE_CHOSEN, payload });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
