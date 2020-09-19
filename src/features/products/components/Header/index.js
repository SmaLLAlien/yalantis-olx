import { connect } from 'react-redux';
import { openCreateModal, resetOrigin } from '../../store/actions';
import { Header } from './Header';

const mapDispatchToProps = {
  openCreateModal,
  resetOrigin,
};

export default connect(null, mapDispatchToProps)(Header);
