import {hideSpinner, showSpinner} from "../../store/actions/spiner";
import {isRequestInUse} from "../../store/selectors/spiner";
import {connect} from "react-redux";
import {MainLayout} from "./MainLayout";

const mapDispatchToProps = {
  showSpinner,
  hideSpinner
}

const mapStateToProps = state => {
  return {
    isRequested: isRequestInUse(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
