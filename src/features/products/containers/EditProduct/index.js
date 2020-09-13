import { connect } from 'react-redux';
import {
  getDetailedProduct,
  getOrigins,
} from '../../store/selectors/selectors';
import {
  getErrorModalState,
  getSavingStatus,
} from '../../store/selectors/modalSelectors';
import {
  closeCreateModal,
  editProduct,
  fetchOrigins,
  fetchProduct,
  resetIsSaved,
} from '../../store/actions';
import { EditProduct } from './EditProduct';

const mapStateToProps = (state) => {
  return {
    origins: getOrigins(state),
    product: getDetailedProduct(state),
    saveError: getErrorModalState(state),
    isSaved: getSavingStatus(state),
  };
};

const mapDispatchToProps = {
  fetchProduct,
  closeCreateModal,
  fetchOrigins,
  editProduct,
  resetIsSaved,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
