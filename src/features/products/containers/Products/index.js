import { connect } from 'react-redux';
import { onProductChosen } from '../../../../helpers/helpers';
import { Products } from './Products';
import { getBasketProducts, getProducts } from '../../store/selectors';
import {fetchProducts, onAddToBasketProduct} from "../../store/actions";

const mapStateToProps = (state) => {
  return {
    products: getProducts(state),
    purchasing: getBasketProducts(state),
  };
};

const mapDispatchToProps = {
  fetchProducts,
  onAddToBasketProduct
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchProducts: () => dispatch(fetchProducts()),
//
//     onAddToBasketProduct: (product, purchasing) => {
//       const payload = onProductChosen(product, purchasing);
//       dispatch({ type: actionTypes.PRODUCT_CHOSEN, payload });
//     },
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
