import { connect } from 'react-redux';
import { getProducts } from '../../store/selectors/selectors';
import {deleteProduct, fetchProducts} from '../../store/actions/products';
import { getHttpError } from '../../store/selectors/httpErrorSelectors';
import UserProducts from './UserProducts';

const mapStateToProps = (state) => {
  return {
    products: getProducts(state),
    serverError: getHttpError(state),
  };
};

const mapDispatchToProps = {
  fetchProducts,
  deleteProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProducts);
