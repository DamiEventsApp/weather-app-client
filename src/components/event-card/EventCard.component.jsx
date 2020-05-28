import React from 'react';
import PropTypes, { objectOf } from 'prop-types';
import Button from '../button/Button.component';

const EventCard = ({ event, removeFromList, deleteEvent }) => {
    const { title, id, date } = event;

    const sendEventDeleteRequest = () => {
        deleteEvent();
    }
    
    const removeEvent = event => {
        removeFromList(event);
    }

    return (
        <div className="event">
            <p>{title}</p>
            <p>{date}</p>
            <Button buttonAction={removeEvent}>Remove</Button>
            <Button buttonAction={sendEventDeleteRequest}>Delete</Button>
        </div>
    )
};

EventCard.defaultProps = {
    event: [],
}

EventCard.propTypes = {
    event: objectOf(PropTypes.string),
    deleteEvent: PropTypes.func,
    removeFromList: PropTypes.func,
}




export default EventCard;
