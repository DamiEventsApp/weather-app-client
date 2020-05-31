import React from 'react';
import PropTypes from 'prop-types';
import EventList from '../../containers/event-list/EventList.container';
import './search-results.styles.scss';
import SearchBarComponent from '../../containers/search-bar/SearchBar.container';
import PaginationControls from '../../containers/pagination/Pagination.container';

const SearchResults = ( { events, fetchEvents, pagination } ) => {
    const { prev, next } = pagination;

    return (
        <div className="search-results column">
            <SearchBarComponent />
            <EventList events={events}/>
            {next ? <PaginationControls next={next} prev={prev} fetchData={fetchEvents} search={true}/> : ""}
        </div>
    )
};

SearchResults.defaultProps = {
    events: [],
    fetchEvents: () => {},
    pagination: {},
};

SearchResults.propTypes = {
    events: PropTypes.array,
    pagination: PropTypes.object,
    fetchEvents: PropTypes.func,
}

export default SearchResults;
