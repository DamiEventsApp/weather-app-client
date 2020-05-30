import { searchEvents, clearSearchResults } from "../../actions/events/events.actions"
import { connect } from "react-redux";
import SearchBar from "../../components/search-bar/SearchBar.component";

const mapDispatchToProps = dispatch => ({
    searchEvents: (authToken, today, searchParams) => dispatch(searchEvents(authToken, today, searchParams)),
    clearSearchResults: () => dispatch(clearSearchResults()),
});

const mapStateToProps = state => ({
    authToken: state.authReducer.authToken,
});

export default connect(mapStateToProps  , mapDispatchToProps)(SearchBar);
