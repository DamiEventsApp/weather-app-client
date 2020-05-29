import { login } from "../../actions/auth/auth.actions";
import { connect } from "react-redux";
import LoginForm from "../../components/login-form/LoginForm.component";

const mapDispatchToProps = dispatch => ({
    login: (form) => dispatch(login(form)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
