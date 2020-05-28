import React from 'react';
import Button from '../button/Button.component';
import PropTypes from 'prop-types';
import Logo from '../logo/Logo.component';
import './side-bar.styles.scss';


const SideBar = ( { logout } ) => {
    return (
        <div className="side-bar column">
            <Logo />
            <Button buttonAction={logout} className="logout-btn side-bar-btn">New Event</Button>
            <Button buttonAction={logout} className="logout-btn side-bar-btn">Logout</Button>
        </div>
    )
};

SideBar.defaultProps = {
    logout: () => {},
}

SideBar.propTypes = {
    logout: PropTypes.func,
}

export default SideBar;
