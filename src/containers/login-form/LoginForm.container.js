import { login } from "../../actions/auth/auth.actions";
import { connect } from "react-redux";
import LoginForm from "../../components/login-form/LoginForm.component";

const mapDispatchToProps = dispatch => ({
    login: (form) => dispatch(login(form)),
});

const mapStateToProps = state => ({
    isLoading: state.processingReducer.login,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
