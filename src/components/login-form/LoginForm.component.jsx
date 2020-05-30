import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../input/Input.component';
import Button from '../button/Button.component';
import './login-form.styles.scss';
import Logo from '../logo/Logo.component';

const LoginForm = ({ login }) => {
    let [ email, setEmail ] = useState("")
    let [ password, setPassword ] = useState("")

    const handleChange = e => {
        const value = e.target.value;

        if (e.target.id === 'email') {
            setEmail(value);
            return;
        }

        setPassword(value);
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData();
        form.set('email', email);
        form.set('password', password);
        login(form);
        resetForm();
    }

    const resetForm = () => {
        setEmail("");
        setPassword("");
    }
    
    return (
        <div className="login-form column">
            <Logo />
            <form>
                <div className="login-form-element">
                    <Input type="email" placeholder="Email Address" className="login-input" id="email" value={email} handleChange={handleChange} />
                </div>
                <div className="login-form-element">
                    <Input type="password" placeholder="Password" className="login-input" id="password" value={password} handleChange={handleChange}/>
                </div>
                <div className="login-form-element">
                    <Button className="login-input" buttonAction={handleLogin}>Login</Button>
                </div>
            </form>
        </div>
    )
};

LoginForm.defaultProps = {
    login: () => {},
}

LoginForm.propTypes = {
    login: PropTypes.func,
}

export default LoginForm;
