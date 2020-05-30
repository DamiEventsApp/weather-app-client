import { deleteEvent, toggleEventModal, setCurrentEvent } from "../../actions/events/events.actions";
import { connect } from "react-redux";
import EventCard from "../../components/event-card/EventCard.component";

const mapStateToProps = state => ({
    authToken: state.authReducer.authToken,
});

const mapDispatchToProps = dispatch => ({
    deleteEvent: (id, authToken) => dispatch(deleteEvent(id, authToken)),
    toggleEventModal: () => dispatch(toggleEventModal()),
    setCurrentEvent: (index) => dispatch(setCurrentEvent(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);
