import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Button from '../button/Button.component';
import Logo from '../logo/Logo.component';
import './side-bar.styles.scss';

const SideBar = ( { logout, 
                    toggleEventModal, 
                    history, 
                    eventModalOpen, 
                    menuOpen, toggleMenu } ) => {

    const handleClick = () => {
      history.push('/search')
      if (eventModalOpen) {
        toggleEventModal();
      }

      if (menuOpen) {
        toggleMenu();
      }
    }

    return (
      <div className={`side-bar column ${menuOpen ? "open-menu" : ""}`}>
        <div className="close-icon-holder" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
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
    toggleMenu: () => {},
    eventModalOpen: false,
    menuOpen: false,
}

SideBar.propTypes = {
    logout: PropTypes.func,
    toggleEventModal: PropTypes.func,
    toggleMenu: PropTypes.func,
    eventModalOpen: PropTypes.bool,
    menuOpen: PropTypes.bool,
}

export default withRouter(SideBar);
