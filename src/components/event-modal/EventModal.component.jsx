import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from '../input/Input.component';
import Button from '../button/Button.component';
import PropTypes from 'prop-types';
import './event-modal.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom';

const EventModal = ( { action, removeCurrentEvent,currentEvent, updateEvent, createNewEvent, 
                        eventModalOpen, toggleEventModal, authToken, history } ) => {

    const initialTitleState = currentEvent ? currentEvent.title : ""
    const initialLocationState = currentEvent ? currentEvent.location : ""
    const initialDateState = currentEvent ? new Date(currentEvent.date) : new Date();
    
    let [eventTitle, setEventTitle] = useState(initialTitleState);
    let [eventLocation, setEventLocation] = useState(initialLocationState);
    let [eventDate, setEventDate] = useState(initialDateState);
    
    // handle changes to the form
    const handleChange = e => {
        const value = e.target.value;

        if (e.target.id === "title") {
            setEventTitle(value);
            return;
        }

        if (e.target.id === "location") {
            setEventLocation(value);
            return;
        }
    };

    const handleModalState = () => {
        if (currentEvent) {
            removeCurrentEvent();
        }
        toggleEventModal();
    }

    // handle changes to the date
    const handleDateChange = date => {
        setEventDate(date);
    };

    const setDateToToday = (e) => {
        e.preventDefault();
        let date = new Date();
        handleDateChange(date);
    }

    const resetForm = () => {
        setEventTitle("");
        setEventLocation("");
        setEventDate(new Date());
    }

    // handle submission
    const handleSubmit = () => {
        const form = new FormData();
        eventDate = eventDate.toISOString().split("T")[0];
        form.set('title', eventTitle);
        form.set('location', eventLocation);
        form.append('date', eventDate);

        if (currentEvent) {
            form.append('id', currentEvent.id)
            updateEvent(form, authToken);
        } else {
            createNewEvent(form, authToken);
        }

        toggleEventModal();
        resetForm();
        history.push('/');
    };

    return (
        <div className={`event-modal column ${eventModalOpen ? "open" : "closed"}`}>
            <div className="event-form column">
                <div className="close-icon" onClick={handleModalState}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <Input id="title" className="modal-input" placeholder="Event Title" value={eventTitle} handleChange={handleChange} />
                <Input id="location" className="modal-input" placeholder="Event Location" value={eventLocation} handleChange={handleChange} />
                <DatePicker selected={eventDate} onChange={handleDateChange}/>
                <Button buttonAction={setDateToToday} className="event-modal-btn">Use Today's Date</Button>
                <Button buttonAction={handleSubmit} className="today-btn event-modal-btn">SUBMIT</Button>
            </div>
        </div>
    )
};

EventModal.defaultProps = {
    currentEvent: PropTypes.objectOf(PropTypes.string),
    authToken: PropTypes.objectOf(PropTypes.string),
    createNewEvent: PropTypes.func,
    updateEvent: PropTypes.func,
    removeCurrentEvent: PropTypes.func,
    toggleEventModal: PropTypes.func,
    eventModalOpen: PropTypes.bool,
}

EventModal.defaultProps = {
    currentEvent: null,
    createNewEvent: () => {},
    updateEvent: () => {},
    removeCurrentEvent: () => {},
    toggleEventModal: () => {},
    action: PropTypes.string,
    eventModalOpen: false,
    authToken: "",
}


export default withRouter(EventModal);
