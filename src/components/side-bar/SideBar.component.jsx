import React from 'react';
import NameCard from '../name-card/NameCard.component';
import TodaysEvents from '../todays-events/TodaysEvents.component';
import Button from '../button/Button.component';
import PropTypes from 'prop-types';

const SideBar = ( { logout } ) => {
    return (
        <div className="side-bar">
            <NameCard />
            <TodaysEvents />
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
