import React from 'react';
import EventModal from './event-modal/EventModal.component';
import SideBar from './side-bar/SideBar.component';
import TodaysEvents from './todays-events/TodaysEvents.component';
import './app.styles.scss';
import Header from './header/Header.component';
import MoreEvents from './more-events/MoreEvents.component';

const App = () => {
    return (
        <div className="app-container row">
            <SideBar />
            <div className="main-content">
                <Header />
                <EventModal />
                <TodaysEvents />    
                <MoreEvents />
            </div>
        </div>
    )
};

export default App;
