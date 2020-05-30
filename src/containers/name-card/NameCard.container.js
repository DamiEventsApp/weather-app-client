import { connect } from "react-redux";
import NameCard from "../../components/name-card/NameCard.component";

const mapStateToProps = state => ({
    userName: state.authReducer.currentUser.name,
});

export default connect(mapStateToProps)(NameCard);
