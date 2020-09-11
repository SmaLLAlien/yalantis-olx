import { connect } from 'react-redux';
import {
  getBasketProducts,
  getProducts,
} from '../../store/selectors/selectors';
import {fetchProducts, onAddToBasketProduct, resetOrigin} from '../../store/actions';
import { getHttpError } from '../../store/selectors/httpErrorSelectors';
import Products from "./Products";

const mapStateToProps = (state) => {
  return {
    products: getProducts(state),
    purchasing: getBasketProducts(state),
    serverError: getHttpError(state),
  };
};

const mapDispatchToProps = {
  fetchProducts,
  onAddToBasketProduct,
  resetOrigin
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
