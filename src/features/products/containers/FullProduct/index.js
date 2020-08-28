import { connect } from 'react-redux';
import { onProductChosen } from '../../../../helpers/helpers';
import * as actionTypes from '../../store/actionsTypes';
import { FullProduct } from './FullProduct';
import { getBasketProducts } from '../../store/selectors';

const mapStateToProps = (state) => {
  return {
    purchasing: getBasketProducts(state),
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
