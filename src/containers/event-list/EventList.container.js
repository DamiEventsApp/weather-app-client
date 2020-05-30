import { fetchEvents, toggleEventModal } from "../../actions/events/events.actions";
import { connect } from "react-redux";
import EventList from "../../components/events-list/EventList.component";

const mapDispatchToProps = dispatch => ({
    fetchEvents: (authToken, today) => dispatch(fetchEvents(authToken, today)),
    toggleEventModal: () => dispatch(toggleEventModal()),
});

const mapStateToProps = state => ({
    authToken: state.authReducer.authToken,
});

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
