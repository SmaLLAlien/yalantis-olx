import { connect } from 'react-redux';
import onProductChosen from '../../../../helpers/helpers';
import * as actionTypes from '../../store/actionsTypes';
import { FullProduct } from './FullProduct';

const mapStateToProps = (state) => {
  return {
    purchasing: state.productState.purchasing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToBasketProduct: (product, purchasing) => {
      const payload = onProductChosen(product, purchasing);
      dispatch({ type: actionTypes.PRODUCT_CHOSEN, payload });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FullProduct);
