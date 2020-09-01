import { connect } from 'react-redux';
import { Products } from './Products';
import { getOrigins } from '../../store/selectors';
import { fetchOrigins, manageOrigins } from '../../store/actions';

const mapStateToProps = (state) => {
  return {
    productOrigins: getOrigins(state),
  };
};

const mapDispatchToProps = {
  fetchOrigins,
  manageOrigins,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
