import { connect } from 'react-redux';
import { Products } from './Products';
import { getOrigins } from '../../store/selectors/selectors';
import { fetchOrigins, manageOrigins } from '../../store/actions';
import {getCurrentPage, getPerPage, getTotalItems} from "../../store/selectors/pageSelectors";

const mapStateToProps = (state) => {
  return {
    productOrigins: getOrigins(state),
    currentPage: getCurrentPage(state),
    perPage: getPerPage(state),
    totalItems: getTotalItems(state),
  };
};

const mapDispatchToProps = {
  fetchOrigins,
  manageOrigins,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
