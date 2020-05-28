import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from '../input/Input.component';
import Button from '../button/Button.component';
import PropTypes from 'prop-types';
import './event-modal.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const EventModal = ( { action, currentEvent, updateEvent, createNewEvent } ) => {
    let [eventTitle, setEventTitle] = useState("");
    let [eventDate, setEventDate] = useState(new Date());
    let [eventEpoch, setEventEpoch] = useState(0);

    if (currentEvent) {
        eventDate = currentEvent.date; 
    }; 
        
    // handle changes to the form
    const handleChange = (e) => {
        const value = e.target.value;

        if (e.target.id === "title") {
            setEventTitle(value);
            return;
        }

        setEventDate(value);
    };

    // handle changes to the date
    const handleDateChange = date => {
        setEventDate(date);
        setEventEpoch(date.getTime()/1000)
    };

    const setDateToToday = (e) => {
        e.preventDefault();
        const epoch = Date.now()
        let date = new Date(epoch);
        handleDateChange(date);
        setEventEpoch(epoch);
    }

    // handle submission
    const handleSubmit = () => {
        const form = new FormData();
        if (currentEvent) {
            updateEvent(form);
            return;
        }
        createNewEvent(form);
    };

    return (
        <div className="event-modal column">
            <div className="event-form column">
                <div className="close-icon">
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <Input id="title" className="modal-input" placeholder="Event Title" value={currentEvent ? currentEvent.title : eventTitle} onChange={handleChange} />
                <DatePicker selected={eventDate} onChange={handleDateChange}/>
                <Button buttonAction={setDateToToday} className="event-modal-btn">Use Today's Date</Button>
                <Button buttonAction={handleSubmit} className="event-modal-btn">SUBMIT</Button>
            </div>
        </div>
    )
};

EventModal.defaultProps = {
    currentEvent: PropTypes.objectOf(PropTypes.string),
    createNewEvent: PropTypes.func,
    updateEvent: PropTypes.func,
    action: "",
}

EventModal.defaultProps = {
    currentEvent: null,
    createNewEvent: () => {},
    updateEvent: () => {},
    action: PropTypes.string,
}


export default EventModal;
