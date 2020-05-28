import React from 'react';
import EventModal from './event-modal/EventModal.component';
import SideBar from './side-bar/SideBar.component';
import SearchBar from './search-bar/SearchBar.component';
import EventList from './events-list/EventList.component';

const App = () => {
    return (
        <div className="row">
            <SideBar />
            <div className="main-content">
                <EventModal />
                <SearchBar />
                <EventList />
            </div>
        </div>
    )
};

export default App;
