import React from 'react';
import EventModal from '../components/event-modal/EventModal.component';
import SideBar from '../containers/side-bar/Sidebar.container';
import TodaysEvents from '../components/todays-events/TodaysEvents.component';
import Header from '../components/header/Header.component';
import MoreEvents from '../components/more-events/MoreEvents.component';


const Dashboard = () => {
    return (
        <>
            <SideBar />
            <div className="main-content">
                <Header />
                <EventModal />
                <TodaysEvents />    
                <MoreEvents />
            </div>
        </>
    )
};

export default Dashboard;
