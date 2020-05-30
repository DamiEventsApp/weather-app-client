import { connect } from "react-redux";
import DashboardPage from "../../pages/Dashboard";

const mapStateToProps = state => ({
    eventModalOpen: state.sharedReducer.eventModalOpen,
});

export default connect(mapStateToProps)(DashboardPage);
