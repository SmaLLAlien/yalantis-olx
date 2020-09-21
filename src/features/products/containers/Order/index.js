import { connect } from 'react-redux';
import { Order } from './Order';
import {
  getFetchOrderError,
  getOrder,
} from '../../store/selectors/ordersSelectors';
import { loadOrder } from '../../store/actions/orders';

const mapStateToProps = (state) => {
  return {
    order: getOrder(state),
    fetchOrderError: getFetchOrderError(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrder: (id) => dispatch(loadOrder(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
