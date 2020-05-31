import React from 'react';
import Header from '../containers/header/Header.container';
import TodaysEvents from '../containers/todays-events/TodaysEvent.container';
import MoreEvents from '../containers/more-events/MoreEvents.container';


const DashboardPage = ( { eventModalOpen, toggleEventModal } ) => {
    return (
        <>
            <div className="main-content">
                <Header />
                <TodaysEvents />    
                <MoreEvents />
            </div>
        </>
    )
};

export default DashboardPage;
