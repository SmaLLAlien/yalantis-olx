import { connect } from 'react-redux';
import {
  getFetchOrdersError,
  getOrders,
} from '../../store/selectors/ordersSelectors';
import { fetchOrders } from '../../store/actions';
import { Orders } from './Orders';

const mapStateToProps = (state) => {
  return {
    orders: getOrders(state),
    fetchOrdersError: getFetchOrdersError(state),
  };
};

const mapDispatchToProps = {
  fetchOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
