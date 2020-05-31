import { toggleEventModal } from "../../actions/events/events.actions";
import { toggleMenu } from "../../actions/shared/shared.actions";
import { connect } from "react-redux";
import Header from "../../components/header/Header.component";

const mapStateToProps = state => ({
    menuOpen: state.sharedReducer.menuOpen,
});

const mapDispatchToProps = dispatch => ({
    toggleEventModal: () => dispatch(toggleEventModal()),
    toggleMenu: () => dispatch(toggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
