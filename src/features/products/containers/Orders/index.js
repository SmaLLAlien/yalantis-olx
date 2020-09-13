import {getOrders} from "../../store/selectors/ordersSelectors";
import {fetchOrders} from "../../store/actions";
import {connect} from "react-redux";
import {Orders} from "./Orders";

const mapStateToProps = state => {
  return {
    orders: getOrders(state)
  }
}

const mapDispatchToProps = {
  fetchOrders
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
