import React, { useEffect, useState } from 'react';
import EventCard from '../event-card/EventCard.component';
import PropTypes, { objectOf } from 'prop-types';
import Button from '../button/Button.component';
import './event-list.styles.scss';

const EventList = ({events, fetchEvents, openEventModal, today }) => {
    let [filteredEvents, setFilteredEvents] = useState(events);

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
        let newfilteredEvents = filteredEvents.filter(event => event.id != id);
        setFilteredEvents(newfilteredEvents)
    }

    const filterEvents = query => {
        events = events.filter(event => event.title.includes(query) || event.date.includes(query));
    };

    return (
        <div className="event-list">
            {
                filteredEvents.length ? 
                <div className="filled-list">
                    <div className="events row">
                        {filteredEvents.map((event, index) => <EventCard key={index} index={index} event={event} today={today} removeFromList={removeFromList} />)} 
                    </div>
                    {today ? "" : <Button>Next</Button>}
                </div> :
                <div className="empty-event-list">
                    <Button buttonAction={openEventModal}>New Event</Button>
                    <h3>No events here yet! Make some?</h3>
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
