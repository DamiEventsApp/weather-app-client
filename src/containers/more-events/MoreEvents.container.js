import { connect } from "react-redux";
import MoreEvents from "../../components/more-events/MoreEvents.component";
import { fetchEvents } from "../../actions/events/events.actions";

const mapStateToProps = state => ({
    events: state.eventsReducer.events,
    pagination: state.pageReducer.links,
    isLoading: state.processingReducer.events,
});

const mapDispatchToProps = dispatch => ({
    fetchEvents: (authToken, today, search, path) => dispatch(fetchEvents(authToken, today, search, path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoreEvents);
