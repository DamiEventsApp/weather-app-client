import { logout } from "../../actions/auth/auth.actions";
import { connect } from "react-redux";
import SideBar from "../../components/side-bar/SideBar.component";
import { toggleEventModal } from "../../actions/events/events.actions";
import { toggleMenu } from "../../actions/shared/shared.actions";

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    toggleEventModal: () => dispatch(toggleEventModal()),
    toggleMenu: () => dispatch(toggleMenu()),
});

const mapStateToProps = state => ({
    eventModalOpen: state.sharedReducer.eventModalOpen,
    menuOpen: state.sharedReducer.menuOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
