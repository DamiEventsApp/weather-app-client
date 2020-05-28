import React, { useEffect, useState } from 'react';
import EventCard from '../event-card/EventCard.component';
import Axios from 'axios';

const EventList = ({ fetchEvents, eventQuery }) => {
    const [events, setEvents] = useState({events: []});

    useEffect(() => {
        fetchEvents();
    }, []);

    const removeFromList = event => {
        filterEvents(event);
    }

    const filterEvents = () => {
        events = events.filter(event => event.title.includes(eventQuery));
    };

    return (
        <div className="event-list row">
           {
               events && events.map((event, index) => <EventCard key={index} event={event} removeFromList={removeFromList} />)
           }
        </div>
    )
};

EventList.defaultProps = {
    fetchEvents: PropTypes.func,
    eventQuery: PropTypes.string,
}

EventList.defaultProps = {
    fetchEvents: () => {},
    eventQuery: "",
}

export default EventList;
