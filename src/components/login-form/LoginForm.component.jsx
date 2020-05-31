import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../input/Input.component';
import Button from '../button/Button.component';
import './login-form.styles.scss';
import Logo from '../logo/Logo.component';
import Loading from '../loading/Loading.component';

const LoginForm = ({ login, isLoading }) => {
    let [ email, setEmail ] = useState("")
    let [ password, setPassword ] = useState("")
    let [buttonEnabled, setButtonEnabled] = useState(false);

    const handleChange = e => {
        const value = e.target.value;

        if (e.target.id === 'email') {
            setEmail(value);
            return;
        }


        setPassword(value);
    }

    const checkButtonState = () => {
        return email && password
    }

    const handleLogin = e => {
        e.preventDefault();
        if(checkButtonState()){
            const form = new FormData();
            form.set('email', email);
            form.set('password', password);
            login(form);
            resetForm();
        }
    }

    const resetForm = () => {
        setEmail("");
        setPassword("");
        setButtonEnabled(false);
    }
    
    return (
        <div className="login-form column">
            <Loading isLoading={isLoading}/>
            <Logo />
            <form>
                <div className="login-form-element">
                    <Input type="email" placeholder="Email Address" className="login-input" id="email" value={email} handleChange={handleChange} />
                </div>
                <div className="login-form-element">
                    <Input type="password" placeholder="Password" className="login-input" id="password" value={password} handleChange={handleChange}/>
                </div>
                <div className="login-form-element">
                    <Button disabled={buttonEnabled} className="login-input" buttonAction={handleLogin}>Login</Button>
                </div>
            </form>
        </div>
    )
};

LoginForm.defaultProps = {
    login: () => {},
    isLoading: false,
}

LoginForm.propTypes = {
    login: PropTypes.func,
    isLoading: PropTypes.bool,
}

export default LoginForm;
