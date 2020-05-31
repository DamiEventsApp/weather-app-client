import React, { useState, useEffect } from 'react';
import SearchResults from '../containers/search-results/SearchResults.container';
import Header from '../containers/header/Header.container';

const SearchResultsPage = ({ menuOpen, toggleMenu }) => {
    const [mount, setMount] = useState(false)

    const closeMenu = useCallback(() => {
        toggleMenu();
    },[toggleMenu])

    useEffect(() => {
        if(!mount) {
            setMount(true);
            if (menuOpen) {
                closeMenu();
            }
        }
    },[closeMenu, menuOpen, mount]);
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
