import { connect } from 'react-redux';
import { Products } from './Products';
import { getOrigins } from '../../store/selectors/selectors';
import {
  fetchOrigins,
  manageOrigins,
  setOriginQueryToStore,
} from '../../store/actions';
import {
  getCurrentPage,
  getPerPage,
  getTotalItems,
} from '../../store/selectors/pageSelectors';
import {getCreateModalState} from "../../store/selectors/modalSelectors";

const mapStateToProps = (state) => {
  return {
    productOrigins: getOrigins(state),
    currentPage: getCurrentPage(state),
    perPage: getPerPage(state),
    totalItems: getTotalItems(state),
    isCreateModalOpen: getCreateModalState(state)
  };
};

const mapDispatchToProps = {
  fetchOrigins,
  manageOrigins,
  setOriginQueryToStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
