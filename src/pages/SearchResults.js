import React from 'react';
import SearchResults from '../containers/search-results/SearchResults.container';
import Header from '../containers/header/Header.container';

const SearchResultsPage = ({ eventModalOpen, toggleEventModal }) => {
    if (eventModalOpen) toggleEventModal();
    return (
        <div className="search-results-holder column">
            <Header />
            <div className="main-content column">
                <SearchResults />    
            </div>
        </div>
    )
};

export default SearchResultsPage;
