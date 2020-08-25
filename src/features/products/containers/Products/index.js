import { connect } from 'react-redux';
import * as actionTypes from '../../store/actionsTypes';
import onProductChosen from '../../../../helpers/helpers';
import { Products } from './Products';

const mapStateToProps = (state) => {
  return {
    products: state.productState.products,
    purchasing: state.productState.purchasing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadProducts: (products) =>
      dispatch({ type: actionTypes.PRODUCTS_LOADED, payload: products }),

    onAddToBasketProduct: (product, purchasing) => {
      const payload = onProductChosen(product, purchasing);
      dispatch({ type: actionTypes.PRODUCT_CHOSEN, payload });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
