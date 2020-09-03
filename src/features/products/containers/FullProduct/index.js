import { connect } from 'react-redux';
import { FullProduct } from './FullProduct';
import {
  getBasketProducts,
  getDetailedProduct,
} from '../../store/selectors/selectors';
import { fetchProduct, onAddToBasketProduct } from '../../store/actions';
import {getHttpError} from "../../store/selectors/httpErrorSelectors";

const mapStateToProps = (state) => {
  return {
    purchasing: getBasketProducts(state),
    fullProduct: getDetailedProduct(state),
    serverError: getHttpError(state),
  };
};

const mapDispatchToProps = {
  fetchProduct,
  onAddToBasketProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(FullProduct);
