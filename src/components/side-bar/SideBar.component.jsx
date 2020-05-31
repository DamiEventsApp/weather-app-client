import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '../button/Button.component';
import Logo from '../logo/Logo.component';
import './side-bar.styles.scss';

const SideBar = ( { logout, toggleEventModal, history, eventModalOpen } ) => {
    const handleClick = () => {
      history.push('/search')
      if (!eventModalOpen) return;
      toggleEventModal();
    }

    return (
      <div className="side-bar column">
        <Logo />
        <Button buttonAction={toggleEventModal} className="new-event-btn side-bar-btn">New Event</Button>
        <Button  buttonAction={handleClick} className="search-btn side-bar-btn">Search</Button>
        <Button buttonAction={logout} className="logout-btn side-bar-btn">Logout</Button>
      </div>
    )
};

SideBar.defaultProps = {
    logout: () => {},
    toggleEventModal: () => {},
    eventModalOpen: false,
}

SideBar.propTypes = {
    logout: PropTypes.func,
    toggleEventModal: PropTypes.func,
    eventModalOpen: PropTypes.bool,
}

export default withRouter(SideBar);
