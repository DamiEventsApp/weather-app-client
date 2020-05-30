import { logout } from "../../actions/auth/auth.actions";
import { connect } from "react-redux";
import SideBar from "../../components/side-bar/SideBar.component";
import { toggleEventModal } from "../../actions/events/events.actions";

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    toggleEventModal: () => dispatch(toggleEventModal()),
});

export default connect(null, mapDispatchToProps)(SideBar);
