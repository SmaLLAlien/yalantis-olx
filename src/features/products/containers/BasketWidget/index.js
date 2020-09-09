import { connect } from 'react-redux';
import { BasketWidget } from './BusketWidget';
import { getTotalBasketPrice } from '../../store/selectors/selectors';

const mapStateToProps = (state) => {
  return {
    total: getTotalBasketPrice(state),
  };
};

export default connect(mapStateToProps, null)(BasketWidget);
