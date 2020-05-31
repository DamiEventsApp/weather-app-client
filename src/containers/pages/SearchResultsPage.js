import { connect } from "react-redux";
import SearchResultsPage from "../../pages/SearchResults";
import { toggleEventModal } from "../../actions/events/events.actions";

const mapStateToProps = state => ({
    eventModalOpen: state.sharedReducer.eventModalOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleEventModal: () => dispatch(toggleEventModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage);
