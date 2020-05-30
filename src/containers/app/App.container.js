import { connect } from "react-redux";
import App from "../../components/app/App.component";

const mapStateToProps = state => ({
   loggedIn: state.authReducer.loggedIn, 
});

export default connect(mapStateToProps)(App)
