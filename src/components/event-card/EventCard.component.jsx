import React from 'react';
import PropTypes, { objectOf } from 'prop-types';
import Button from '../button/Button.component';
import './event-card.styles.scss';

const EventCard = ({ event, setEvent, deleteEvent, today, index, openEventModal }) => {
    const { title, id, date } = event;

    const sendEventDeleteRequest = id => {
        deleteEvent(id, today);
    }
    
    const editEvent = () => {
        setEvent(index);
        openEventModal();
    }

    const eventImageStyles = {
        backgroundImage: `url(${"https://images.unsplash.com/photo-1590614724232-5802e3173a0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"})`
    }

    return (
        <div className="event-card" >
            <div className="cover-image" style={eventImageStyles}>
                <div className="overlay">
                    <Button className="event-btns delete-btn" buttonAction={sendEventDeleteRequest}>Delete</Button>
                    <Button className="event-btns" buttonAction={editEvent}>Edit</Button>
                </div> 
                <div className="time">
                    <p>12:00am</p>
                </div>
            </div>
            <div className="event-details">
                <p>{title}</p>
            </div>
        </div>
    )
};

EventCard.defaultProps = {
    event: [],
    deleteEvent: () => {},
    setEvent: () => {},
    openEventModal: () => {},
}

EventCard.propTypes = {
    event: objectOf(PropTypes.string),
    deleteEvent: PropTypes.func,
    setEvent: PropTypes.func,
    openEventModal: PropTypes.func,
}




export default EventCard;
