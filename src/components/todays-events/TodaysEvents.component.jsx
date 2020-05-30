import React from 'react';
import PropTypes from 'prop-types';
import EventList from '../../containers/event-list/EventList.container';
import PaginationControls from '../../containers/pagination/Pagination.container';

const TodaysEvents = ( { events, pagination, fetchEvents } ) => {
    const { next, prev } = pagination;
    return (
        <div className="todays-events">
            <h2 className="events-heading">Today</h2>
            <EventList today={true} events={events}/>
            {next || prev ? <PaginationControls next={next} prev={prev} fetchData={fetchEvents} today={true}/> : ""}
        </div>
    )
};

TodaysEvents.defaultProps = {
    fetchEvents: () => {},
    events: [],
    pagination: {},

};

TodaysEvents.propTypes = {
    fetchEvents: PropTypes.func,
    events: PropTypes.array,
    pagination: PropTypes.object,

}

export default TodaysEvents;
