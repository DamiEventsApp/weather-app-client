import { logout } from "../../actions/auth/auth.actions";
import { connect } from "react-redux";
import SideBar from "../../components/side-bar/SideBar.component";
import { toggleEventModal } from "../../actions/events/events.actions";

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    toggleEventModal: () => dispatch(toggleEventModal()),
});

const mapStateToProps = state => ({
    eventModalOpen: state.sharedReducer.eventModalOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
