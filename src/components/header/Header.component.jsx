import React from 'react';
import SearchBar from '../../containers/search-bar/SearchBar.container';
import NameCard from '../../containers/name-card/NameCard.container';
import './header.styles.scss';

const Header = ( { userName } ) => {
    return (
        <div className="header row space-between">
            <SearchBar />
            <NameCard />
        </div>
    )
};

export default Header;
