import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../input/Input.component';
import './search-bar.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom';
import ReactDatePicker from 'react-datepicker';

const SearchBar = ({ searchEvents, history, authToken, clearSearchResults }) => {
    let [searchTerm, setSearchTerm] = useState('');
    let [eventDate, setEventDate] = useState(new Date());
    let [searchByTerm, setSearchByTerm] = useState(true);

    const handleChange = e => {
        const term = e.target.value;
        setSearchTerm(term);
    };

    const handleDateChange = date => {
        setEventDate(date);
    };

    const handleCheckBox = e => {
        setSearchByTerm(e.target.checked)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!searchTerm) return;

        clearSearchResults();

        const form = new FormData();

        if (searchByTerm === true) {
            form.set('term', searchTerm);
        } else {
            eventDate = eventDate.toISOString().split("T")[0];
            form.set('date', eventDate);
        }
        
        searchEvents(authToken, form);
        history.push('/search');
        clearInputs();
    };

    const clearInputs = () => {
        setSearchTerm("");
        setEventDate(new Date());
    }

    return (
        <div className="search-holder column">
            <div className="search-bar row">
                { searchByTerm ? 
                        <Input 
                            value={searchTerm}
                            handleChange={handleChange}
                            placeholder={"Can't find what you are looking for? Try a location or title"}
                            id="search-bar"
                            type="text"
                            className="search-input"
                        /> 
                    : <ReactDatePicker selected={eventDate} onChange={handleDateChange}/>
                }
                <div className="header-search-icon" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
            <div className="checkbox-holder row">
                <input type="checkbox" onChange={handleCheckBox} checked={searchByTerm}/>
                {searchByTerm ? <span className="search-type">Search by Term?</span> : <span className="search-type">Search by Date?</span>}
            </div>
        </div>
    )
};

SearchBar.defaultProps = {
    searchEvents: PropTypes.func,
    clearSearchResults: PropTypes.func,
    authToken: PropTypes.string,
};

SearchBar.defaultProps = {
    searchEvents: () => {},
    clearSearchResults: () => {},
    authToken: "",
};

export default withRouter(SearchBar);
