import { connect } from 'react-redux';
import { openCreateModal } from '../../store/actions/products';
import { Header } from './Header';
import { resetOrigin } from '../../store/actions/origins';

const mapDispatchToProps = {
  openCreateModal,
  resetOrigin,
};

export default connect(null, mapDispatchToProps)(Header);
