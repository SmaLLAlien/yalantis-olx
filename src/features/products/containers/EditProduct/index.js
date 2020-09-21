import { connect } from 'react-redux';
import {
  getDetailedProduct,
  getOrigins,
} from '../../store/selectors/selectors';
import {
  getErrorModalState,
  getLoading,
  getSavingStatus,
} from '../../store/selectors/modalSelectors';
import {
  closeCreateModal,
  editProduct,
  fetchProduct,
} from '../../store/actions/products';
import { EditProduct } from './EditProduct';
import { fetchOrigins } from '../../store/actions/origins';

const mapStateToProps = (state) => {
  return {
    origins: getOrigins(state),
    product: getDetailedProduct(state),
    saveError: getErrorModalState(state),
    isSaved: getSavingStatus(state),
    isSavingInProgress: getLoading(state),
  };
};

const mapDispatchToProps = {
  fetchProduct,
  closeCreateModal,
  fetchOrigins,
  editProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
