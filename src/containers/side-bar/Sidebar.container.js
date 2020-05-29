import { logout } from "../../actions/auth/auth.actions";
import { connect } from "react-redux";
import SideBar from "../../components/side-bar/SideBar.component";

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(SideBar);
