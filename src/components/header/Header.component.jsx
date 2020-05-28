import React from 'react';
import PropTypes, { objectOf } from 'prop-types';
import SearchBar from '../search-bar/SearchBar.component';
import NameCard from '../name-card/NameCard.component';
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
