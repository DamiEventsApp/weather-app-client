import { connect } from "react-redux";
import SearchResults from "../../components/search-results/SearchResults.component";
import { fetchEvents } from "../../actions/events/events.actions";

const mapStateToProps = state => ({
    events: state.eventsReducer.searchResults,
});

const mapDispatchToProps = dispatch => ({
    fetchEvents: (authToken, today, search, path) => dispatch(fetchEvents(authToken, today, search, path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
