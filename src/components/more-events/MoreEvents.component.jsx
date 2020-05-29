import React from 'react';
import PropTypes, { objectOf } from 'prop-types';
import EventList from '../events-list/EventList.component';
import './more-events.styles.scss';

const MoreEvents = ( { events, openEventModal } ) => {
    events = [
        {
            id: 1,
            title: "Some title",
            date: "Today"
        },
        {
            id: 2,
            title: "Some title",
            date: "Today"
        },
        {
            id: 3,
            title: "Some title",
            date: "Today"
        },
        {
            id: 4,
            title: "Some title",
            date: "Today"
        },
        {
            id: 5,
            title: "Some title",
            date: "Today"
        },
    ]

    return (
        <div className="more-events">
            <h2>More</h2>
            <EventList events={events}/>
        </div>
    )
};

MoreEvents.defaultProps = {
    events: [],
};

MoreEvents.propTypes = {
    events: PropTypes.arrayOf(objectOf(PropTypes.string))
}

export default MoreEvents;
