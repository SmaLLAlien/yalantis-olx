import {fetchOrder} from "../../store/actions";
import {connect} from "react-redux";
import {Order} from "./Order";
import {getOrder} from "../../store/selectors/ordersSelectors";

const mapStateToProps = state => {
  return {
    order: getOrder(state)
  }
}

const mapDispatchToProps = {
  fetchOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);
