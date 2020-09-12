import { connect } from 'react-redux';
import {
  getProducts,
} from '../../store/selectors/selectors';
import {fetchProducts} from '../../store/actions';
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
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProducts);
