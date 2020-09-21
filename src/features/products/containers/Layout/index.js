import { connect } from 'react-redux';
import { getOrigins } from '../../store/selectors/selectors';
import { resetPage, resetPerPage } from '../../store/actions/products';
import {
  getCurrentPage,
  getPerPage,
  getTotalItems,
} from '../../store/selectors/pageSelectors';
import { getCreateModalState } from '../../store/selectors/modalSelectors';
import Layout from './Layout';
import {
  fetchOrigins,
  manageOrigins,
  resetOrigin,
  setOriginQueryToStore,
} from '../../store/actions/origins';

const mapStateToProps = (state) => {
  return {
    productOrigins: getOrigins(state),
    currentPage: getCurrentPage(state),
    perPage: getPerPage(state),
    totalItems: getTotalItems(state),
    isCreateModalOpen: getCreateModalState(state),
  };
};

const mapDispatchToProps = {
  fetchOrigins,
  manageOrigins,
  setOriginQueryToStore,
  resetOrigin,
  resetPerPage,
  resetPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
