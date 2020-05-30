import { connect } from "react-redux";
import TodaysEvents from "../../components/todays-events/TodaysEvents.component";
import { fetchEvents } from "../../actions/events/events.actions";

const mapStateToProps = state => ({
    events: state.eventsReducer.todaysEvents,
    pagination: state.pageReducer.todayLinks,
});

const mapDispatchToProps = dispatch => ({
    fetchEvents: (authToken, today, search, path) => dispatch(fetchEvents(authToken, today, search, path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodaysEvents);
