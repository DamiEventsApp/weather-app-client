import React, { useEffect, useCallback } from 'react';
import SearchResults from '../containers/search-results/SearchResults.container';
import Header from '../containers/header/Header.container';

const SearchResultsPage = ({ menuOpen, toggleMenu }) => {
    const closeMenu = useCallback(() => {
        if (menuOpen) toggleMenu();
    }, [toggleMenu, menuOpen])
    
    useEffect(() => {
        closeMenu();
    },[closeMenu])

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
