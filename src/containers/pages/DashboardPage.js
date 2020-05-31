import { connect } from "react-redux";
import DashboardPage from "../../pages/Dashboard";
import { toggleEventModal } from "../../actions/events/events.actions";

const mapStateToProps = state => ({
    eventModalOpen: state.eventsReducer.eventModalOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleEventModal: () => dispatch(toggleEventModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
