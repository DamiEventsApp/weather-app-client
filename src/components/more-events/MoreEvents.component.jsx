import React from 'react';
import PropTypes, { objectOf } from 'prop-types';
import EventList from '../../containers/event-list/EventList.container';
import './more-events.styles.scss';
import PaginationControls from '../../containers/pagination/Pagination.container';

const MoreEvents = ( { events, pagination, fetchEvents } ) => {
    const { next, prev } = pagination;
    return (
        <div className="more-events">
            <h2 className="events-heading">More</h2>
            <EventList events={events}/>
            {next || prev ? <PaginationControls next={next} prev={prev} fetchData={fetchEvents}/> : ""}
        </div>
    )
};

MoreEvents.defaultProps = {
    events: [],
    pagination: {},
    fetchEvents: () => {},
};

MoreEvents.propTypes = {
    events: PropTypes.arrayOf(objectOf(PropTypes.string)),
    pagination: PropTypes.object,
    fetchEvents: PropTypes.func,
}

export default MoreEvents;
