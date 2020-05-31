import { connect } from "react-redux";
import SearchResults from "../../components/search-results/SearchResults.component";
import { fetchEvents, toggleEventModal } from "../../actions/events/events.actions";

const mapStateToProps = state => ({
    events: state.eventsReducer.searchResults,
    pagination: state.pageReducer.searchLinks,
});

const mapDispatchToProps = dispatch => ({
    fetchEvents: (authToken, today, search, path) => dispatch(fetchEvents(authToken, today, search, path)),
    toggleEventModal: () => dispatch(toggleEventModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
