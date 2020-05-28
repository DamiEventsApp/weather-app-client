import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../input/Input.component';
import Button from '../button/Button.component';

const SearchBar = ({ searchEvents }) => {
    let [searchTerm, setSearchTerm] = useState('')
    const handleChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchEvents(searchTerm);
    }

    return (
        <div className="search-bar row">
            <Input 
                value={searchTerm}
                handleChange={handleChange}
                placeholder={"What event are you looking for?"}
                id="search-bar"
            />
            <Button buttonAction={handleSubmit}>
                Search
            </Button>
        </div>
    )
};

SearchBar.defaultProps = {
    searchEvents: PropTypes.func,
}

SearchBar.defaultProps = {
    searchEvents: () => {},
}

export default SearchBar;
