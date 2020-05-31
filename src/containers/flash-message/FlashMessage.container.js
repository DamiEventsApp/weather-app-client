import { connect } from "react-redux";
import FlashMessage from "../../components/flash-message/FlashMessage.component";

const mapStateToProps = state => ({
   flashMessage: state.sharedReducer.flashMessage,
});

export default connect(mapStateToProps)(FlashMessage)
