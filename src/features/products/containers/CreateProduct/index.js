import { connect } from 'react-redux';
import { getOrigins } from '../../store/selectors/selectors';
import {
  getErrorModalState,
  getLoading,
} from '../../store/selectors/modalSelectors';
import { closeCreateModal, saveProduct } from '../../store/actions';
import { CreateProduct } from './CreateProduct';

const mapStateToProps = (state) => {
  return {
    origins: getOrigins(state),
    saveError: getErrorModalState(state),
    isSavingInProgress: getLoading(state),
  };
};

// const mapDispatchToProps = dispatch =>  {
//   return {
//     closeCreateModal: () => dispatch(closeCreateModal()),
//     saveProduct: (product, isUserPage) => dispatch(saveProduct(product, isUserPage)),
//   }
// };

const mapDispatchToProps = {
  closeCreateModal,
  saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);
