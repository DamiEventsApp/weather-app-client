import { connect } from "react-redux";
import App from "../../App.component";

const mapStateToProps = state => ({
   loggedIn: state.authReducer.loggedIn, 
});

export default connect(mapStateToProps)(App)
