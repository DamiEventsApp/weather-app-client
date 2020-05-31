import { connect } from "react-redux";
import App from "../../app/App.component";

const mapStateToProps = state => ({
   loggedIn: state.authReducer.loggedIn,
   flashMessage: state.sharedReducer.flashMessage,
   eventModalOpen: state.eventsReducer.eventModalOpen,
});

export default connect(mapStateToProps)(App)
