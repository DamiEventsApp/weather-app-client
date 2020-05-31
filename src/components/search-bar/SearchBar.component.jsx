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
    let [searchBy, setSearchBy] = useState("term");

    const handleChange = e => {
        const term = e.target.value;
        setSearchTerm(term);
    };

    
    const handleDateChange = (date) => {
        setEventDate(date);
        handleSubmit(false, date);
    };
    
    const handleSearchSelect = e => {
        setSearchBy(e.target.value)
    }
    
    const handleSubmit = (e, date) => {
        if (e) {
            e.preventDefault();
        }
        
        if (!searchTerm && !eventDate) return;
        
        clearSearchResults();
        
        const form = new FormData();
        
        if (searchBy === "term") {
            form.set('term', searchTerm);
        } else {
            date = date ? date : eventDate;
            eventDate = date.toISOString().split("T")[0];
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
            <div className="select-holder row">
                <select className="search-select" type="select" onChange={handleSearchSelect} value={searchBy}>
                    <option value="term">By Term</option>
                    <option value="date">By Date</option>
                </select>
            </div>
                { searchBy === "term" ? 
                        <Input 
                            value={searchTerm}
                            handleChange={handleChange}
                            placeholder={"Can't find what you are looking for? Try a location or title"}
                            type="text"
                            className="search-input page-search-input"
                        /> 
                    : <ReactDatePicker selected={eventDate} onChange={handleDateChange}/>
                }
                { searchBy === "term" ? <div className="header-search-icon" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faSearch} /> 
                </div> : "" }
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
