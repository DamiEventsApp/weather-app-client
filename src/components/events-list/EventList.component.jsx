import React, { useEffect } from 'react';
import EventCard from '../../containers/event-card/EventCard.container';
import PropTypes, { objectOf } from 'prop-types';
import Button from '../button/Button.component';
import './event-list.styles.scss';

const EventList = ({events, fetchEvents, toggleEventModal, today, authToken }) => {
    useEffect(() => {
        const fetchData = async() => {
            fetchEvents(authToken, today);
        }
        fetchData();
    }, [])

    return (
        <div className="event-list">
            {
                events.length ? 
                <div className="filled-list">
                    <div className="events row">
                        {events.map((event, index) => index < 4 ? <EventCard key={index} index={index} event={event} today={today} /> : "")} 
                    </div>
                </div> :
                <div className="empty-event-list column">
                    <h3>No events here yet! Make some?</h3>
                    { <Button className="empty-event-btn" buttonAction={toggleEventModal}>New Event</Button> }
                </div>
            }
        </div>
    )
};

EventList.defaultProps = {
    fetchEvents: PropTypes.func,
    toggleEventModal: PropTypes.func,
    events: PropTypes.arrayOf(objectOf(PropTypes.string)),
};

EventList.defaultProps = {
    fetchEvents: () => {},
    toggleEventModal: () => {},
    events: [],
};

export default EventList;
