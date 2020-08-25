import { connect } from 'react-redux';
import { Basket } from './Basket';

const mapStateToProps = (state) => {
  return {
    products: state.purchasing,
  };
};

export default connect(mapStateToProps, null)(Basket);
