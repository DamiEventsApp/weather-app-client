import React, { useEffect } from 'react';
import PropTypes, { objectOf } from 'prop-types';
import EventCard from '../event-card/EventCard.component';
import Button from '../button/Button.component';

const TodaysEvents = ( { fetchEvents, events, openEventModal } ) => {
    useEffect(() => {
        const fetchData = async() => {
            fetchEvents({today: true});
        }
        fetchData();
    }, [])

    const removeFromList = id => {
        removeEvent(id);
    }

    const removeEvent = (id) => {
        events = events.filter(event => event.id != id);
    }

    return (
        <div className="todays-events">
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

TodaysEvents.defaultProps = {
    fetchEvents: () => {},
    events: [],
};

TodaysEvents.propTypes = {
    fetchEvents: PropTypes.func,
    events: PropTypes.arrayOf(objectOf(PropTypes.string))
}

export default TodaysEvents;
