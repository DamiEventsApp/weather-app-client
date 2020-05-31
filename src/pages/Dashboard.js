import React from 'react';
import EventModal from '../containers/event-modal/EventModal.container';
import SideBar from '../containers/side-bar/Sidebar.container';
import Header from '../containers/header/Header.container';
import TodaysEvents from '../containers/todays-events/TodaysEvent.container';
import MoreEvents from '../containers/more-events/MoreEvents.container';


const DashboardPage = ( { eventModalOpen } ) => {
    return (
        <>
            <SideBar />
            <div className="main-content">
                <Header />
                {eventModalOpen && <EventModal />}
                <TodaysEvents />    
                <MoreEvents />
            </div>
        </>
    )
};

export default DashboardPage;
