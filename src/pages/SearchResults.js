import React from 'react';
import SearchResults from '../containers/search-results/SearchResults.container';
import Header from '../containers/header/Header.container';
import EventModal from '../containers/event-modal/EventModal.container';

const SearchResultsPage = ({ eventModalOpen }) => {
    return (
        <div className="search-results-holder">
            <Header />
            <div className="main-content">
                {eventModalOpen && <EventModal />}
                <SearchResults />    
            </div>
        </div>
    )
};

export default SearchResultsPage;
