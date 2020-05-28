import React from 'react';
import NameCard from '../name-card/NameCard.component';
import Button from '../button/Button.component';
import PropTypes from 'prop-types';
import './side-bar.styles.scss';
import Logo from '../logo/Logo.component';


const SideBar = ( { logout } ) => {
    return (
        <div className="side-bar column">
            <Logo />
            <Button buttonAction={logout} className="logout-btn">Logout</Button>
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
