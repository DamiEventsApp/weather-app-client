import React from 'react';
import EventModal from '../containers/event-modal/EventModal.container';
import SideBar from '../containers/side-bar/Sidebar.container';
import TodaysEvents from '../containers/todays-events/TodaysEvent.container';
import Header from '../components/header/Header.component';
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
