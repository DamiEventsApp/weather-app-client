import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SearchBar from '../../containers/search-bar/SearchBar.container';
import './header.styles.scss';
import NewEventButton from '../new-event-button/NewEventButton.component';

const Header = ({ toggleEventModal, toggleMenu }) => {
    return (
        <div className="header row">
            <div className="menu-icon-holder" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} className="menu-icon"/>
            </div>
            <SearchBar />
            <NewEventButton buttonAction={toggleEventModal}/>
        </div>
    )
};

Header.defaultProps = {
    toggleEventModal: () => {},
    toggleMenu: () => {},
}

Header.propTypes = {
    toggleEventModal: PropTypes.func,
    toggleMenu: PropTypes.func,
}

export default Header;
