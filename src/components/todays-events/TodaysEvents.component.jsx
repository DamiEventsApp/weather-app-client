import React, { useEffect, useState } from 'react';
import PropTypes, { objectOf } from 'prop-types';
import EventCard from '../event-card/EventCard.component';
import Button from '../button/Button.component';
import EventList from '../events-list/EventList.component';

const TodaysEvents = ( { events, openEventModal } ) => {
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
        <div className="todays-events">
            <h2>Today</h2>
            <EventList today={true} events={events}/>
        </div>
    )
};

TodaysEvents.defaultProps = {
    fetchEvents: () => {},
    events: [],
};

TodaysEvents.propTypes = {
    fetchEvents: PropTypes.func,
    events: PropTypes.arrayOf(objectOf(PropTypes.string))
}

export default TodaysEvents;
