import { connect } from 'react-redux';
import { Products } from './Products';
import {getBasketProducts, getHttpError, getProducts} from '../../store/selectors';
import {fetchProducts, onAddToBasketProduct} from "../../store/actions";

const mapStateToProps = (state) => {
  return {
    products: getProducts(state),
    purchasing: getBasketProducts(state),
    serverError: getHttpError(state)
  };
};

const mapDispatchToProps = {
  fetchProducts,
  onAddToBasketProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
