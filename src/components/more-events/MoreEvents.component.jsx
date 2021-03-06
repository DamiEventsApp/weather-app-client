import React from 'react';
import PropTypes from 'prop-types';
import EventList from '../../containers/event-list/EventList.container';
import './more-events.styles.scss';
import PaginationControls from '../../containers/pagination/Pagination.container';

const MoreEvents = ( { events, pagination, fetchEvents, isLoading } ) => {
    const { next, prev } = pagination;
    return (
        <div className="more-events">
            <h2 className="events-heading">More</h2>
            <EventList events={events} isLoading={isLoading} />
            {next || prev ? <PaginationControls next={next} prev={prev} fetchData={fetchEvents}/> : ""}
        </div>
    )
};

MoreEvents.defaultProps = {
    events: [],
    pagination: {},
    fetchEvents: () => {},
    isLoading: false,
};

MoreEvents.propTypes = {
    events: PropTypes.array,
    pagination: PropTypes.object,
    fetchEvents: PropTypes.func,
    isLoading: PropTypes.bool,
}

export default MoreEvents;
