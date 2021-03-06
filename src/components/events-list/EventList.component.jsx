import React, { useEffect, useCallback } from 'react';
import EventCard from '../../containers/event-card/EventCard.container';
import PropTypes, { objectOf } from 'prop-types';
import Button from '../button/Button.component';
import './event-list.styles.scss';
import Loading from '../loading/Loading.component';

const EventList = ({events, fetchEvents, toggleEventModal, today, authToken, isLoading }) => {

    const fetchData = useCallback(() => {
        fetchEvents(authToken, today);
    },[authToken, fetchEvents, today]);

    useEffect(() => {
        fetchData();
    },[fetchData])

    return (
        <div className="event-list">
            <Loading isLoading={isLoading} />
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
    isLoading: PropTypes.bool,
};

EventList.defaultProps = {
    fetchEvents: () => {},
    toggleEventModal: () => {},
    events: [],
    isLoading: false,
};

export default EventList;
