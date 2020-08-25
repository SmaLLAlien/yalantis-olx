import { connect } from 'react-redux';
import { BasketWidget } from './BusketWidget';

const mapStateToProps = (state) => {
  return {
    total: state.totalPurchasingPrice,
  };
};

export default connect(mapStateToProps, null)(BasketWidget);
