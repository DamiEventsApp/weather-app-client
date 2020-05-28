import React, { useEffect, useState } from 'react';
import EventCard from '../event-card/EventCard.component';
import PropTypes, { objectOf } from 'prop-types';
import Button from '../button/Button.component';

const EventList = ({ events, fetchEvents, openEventModal }) => {

    useEffect(() => {
        const fetchData = async() => {
            fetchEvents();
        }
        fetchData();
    }, [])

    const removeFromList = id => {
        removeEvent(id);
    }

    const removeEvent = (id) => {
        events = events.filter(event => event.id != id);
    }

    const filterEvents = query => {
        events = events.filter(event => event.title.includes(query) || event.date.includes(query));
    };

    return (
        <div className="event-list row">
           {
               events.length ? events.map((event, index) => <EventCard key={index} event={event} removeFromList={removeFromList} />) :
               <div className="empty-event-list">
                   <h3>No events here yet! Make some?</h3>
                   <Button buttonAction={openEventModal}>New Event</Button>
               </div>
           }
        </div>
    )
};

EventList.defaultProps = {
    fetchEvents: PropTypes.func,
    events: PropTypes.arrayOf(objectOf(PropTypes.string)),
};

EventList.defaultProps = {
    fetchEvents: () => {},
    events: [],
};

export default EventList;
