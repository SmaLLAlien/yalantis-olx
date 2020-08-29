import { connect } from 'react-redux';
import { FullProduct } from './FullProduct';
import {getBasketProducts, getDetailedProduct, getHttpError} from '../../store/selectors';
import {fetchProduct, onAddToBasketProduct} from "../../store/actions";

const mapStateToProps = (state) => {
  return {
    purchasing: getBasketProducts(state),
    fullProduct: getDetailedProduct(state),
    serverError: getHttpError(state),
  };
};

const mapDispatchToProps = {
  fetchProduct,
  onAddToBasketProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(FullProduct);
