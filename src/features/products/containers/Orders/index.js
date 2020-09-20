import { connect } from 'react-redux';
import {
  getFetchOrdersError,
  getOrders,
} from '../../store/selectors/ordersSelectors';
import { Orders } from './Orders';
import {loadOrders} from "../../store/actions/orders";

const mapStateToProps = (state) => {
  return {
    orders: getOrders(state),
    fetchOrdersError: getFetchOrdersError(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: () => dispatch(loadOrders())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
