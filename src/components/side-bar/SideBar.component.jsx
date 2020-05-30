import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../button/Button.component';
import Logo from '../logo/Logo.component';
import './side-bar.styles.scss';
import WeatherCard from '../weather-card/WeatherCard.component';


const SideBar = ( { logout, toggleEventModal } ) => {
    return (
        <div className="side-bar column">
            <Logo />
            <Button buttonAction={toggleEventModal} className="new-event-btn side-bar-btn">New Event</Button>
            <Link to="/search" className="search-btn side-bar-btn">Search</Link>
            <Button buttonAction={logout} className="logout-btn side-bar-btn">Logout</Button>
            <WeatherCard />
        </div>
    )
};

SideBar.defaultProps = {
    logout: () => {},
    toggleEventModal: () => {},
}

SideBar.propTypes = {
    logout: PropTypes.func,
    toggleEventModal: PropTypes.func,
}

export default SideBar;
