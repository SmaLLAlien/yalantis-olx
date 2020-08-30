import { Products } from './Products';
import {connect} from 'react-redux'
import { getOrigins} from "../../store/selectors";
import {fetchOrigins, fetchProducts, manageOrigins} from "../../store/actions";

const mapStateToProps = state => {
  return {
    productOrigins: getOrigins(state),
  }
}

const mapDispatchToProps = {
  fetchOrigins,
  fetchProducts,
  manageOrigins
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
