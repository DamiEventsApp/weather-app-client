import React from 'react';
import NameCard from '../name-card/NameCard.component';
import TodaysEvents from '../todays-events/TodaysEvents.component';

const SideBar = () => {
    return (
        <div className="side-bar">
            <NameCard />
            <TodaysEvents />
        </div>
    )
};

export default SideBar;
