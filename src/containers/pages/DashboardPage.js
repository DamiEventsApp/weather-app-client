import { connect } from "react-redux";
import DashboardPage from "../../pages/Dashboard";
import { toggleMenu } from "../../actions/shared/shared.actions";

const mapStateToProps = state => ({
    menuOpen: state.sharedReducer.menuOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
