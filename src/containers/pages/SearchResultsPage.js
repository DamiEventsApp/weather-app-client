import { connect } from "react-redux";
import SearchResultsPage from "../../pages/SearchResults";

const mapStateToProps = state => ({
    eventModalOpen: state.sharedReducer.eventModalOpen,
    pagination: state.pageReducer.searchLinks,
});

export default connect(mapStateToProps)(SearchResultsPage);
