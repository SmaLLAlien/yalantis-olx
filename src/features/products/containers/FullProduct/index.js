import { connect } from 'react-redux';
import { FullProduct } from './FullProduct';
import {
  getBasketProducts,
  getDetailedProduct,
} from '../../store/selectors/selectors';
import {deleteProduct, fetchProduct, onAddToBasketProduct} from '../../store/actions/products';
import { getHttpError } from '../../store/selectors/httpErrorSelectors';

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
  deleteProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(FullProduct);
