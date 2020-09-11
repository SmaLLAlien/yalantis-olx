import { connect } from 'react-redux';
import {
  getProducts,
} from '../../store/selectors/selectors';
import {fetchProducts, resetOrigin} from '../../store/actions';
import { getHttpError } from '../../store/selectors/httpErrorSelectors';
import UserProducts from "./UserProducts";

const mapStateToProps = (state) => {
  return {
    products: getProducts(state),
    serverError: getHttpError(state),
  };
};

const mapDispatchToProps = {
  fetchProducts,
  resetOrigin
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProducts);
