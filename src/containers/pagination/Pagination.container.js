import { connect } from "react-redux";
import PaginationControls from "../../components/pagination/PaginationControls.component";

const mapStateToProps = state => ({
    authToken: state.authReducer.authToken,
});

export default connect(mapStateToProps)(PaginationControls);
