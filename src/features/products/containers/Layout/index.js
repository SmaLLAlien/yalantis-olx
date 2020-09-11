import { connect } from 'react-redux';
import { getOrigins } from '../../store/selectors/selectors';
import {
  fetchOrigins,
  manageOrigins, resetOrigin,
  setOriginQueryToStore,
} from '../../store/actions';
import {
  getCurrentPage,
  getPerPage,
  getTotalItems,
} from '../../store/selectors/pageSelectors';
import {getCreateModalState} from "../../store/selectors/modalSelectors";
import Layout from "./Layout";

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
  resetOrigin
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
