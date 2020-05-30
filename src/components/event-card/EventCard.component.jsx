import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button.component';
import './event-card.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { weatherAPI } from '../../actions/weather.actions';

const EventCard = ({ event, setCurrentEvent, 
                     deleteEvent, 
                     today, 
                     index, 
                     toggleEventModal, 
                     authToken, 
                  }) => {
    let { title, id, date, location } = event;
    let  [ weatherInfo, setWeatherInfo ] = useState("")
    let  [ weatherIcon, setWeatherIcon ] = useState("")
 
    date = new Date(date).toDateString();
    
    useEffect(() => {
        const fetchData = async() => {
            const res = await weatherAPI.get("/weather", {params: {q: location}});
            const { data } = res;
            const { weather } = data;
            const [ weatherData ] = weather;
            const { description, icon } = weatherData;
            console.log(description, icon)
            setWeatherInfo(description)
            setWeatherIcon(icon)
        }
        fetchData();
    },[])

    const sendEventDeleteRequest = e => {
        e.preventDefault();
        deleteEvent(id, authToken);
    }
    
    const editEvent = e => {
        e.preventDefault();
        setCurrentEvent(index);
        toggleEventModal();
    }

    const eventImageStyles = {
        backgroundImage: `url(${"https://images.unsplash.com/photo-1590614724232-5802e3173a0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"})`
    }


    return (
        <div className="event-card" >
            <div className="cover-image" style={eventImageStyles}>
                <div className="overlay row ">
                    <Button className="event-btns delete-btn" buttonAction={sendEventDeleteRequest}>Delete</Button>
                    {
                        today ? "" : <Button className="event-btns" buttonAction={editEvent}>Edit</Button>
                    }
                </div> 
                <div className="location row">
                    <FontAwesomeIcon className="location-icon" icon={faMapMarkerAlt}/><p>{location}, {weatherInfo}</p>
                    <img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt=""/>
                </div>
            </div>
            <div className="event-details">
                <p>{title}, {date}</p>
            </div>
        </div>
    )
};

EventCard.defaultProps = {
    event: [],
    deleteEvent: () => {},
    setCurrentEvent: () => {},
    toggleEventModal: () => {},
    authToken: "",
}

EventCard.propTypes = {
    event: PropTypes.object,
    deleteEvent: PropTypes.func,
    setCurrentEvent: PropTypes.func,
    toggleEventModal: PropTypes.func,
    authToken: PropTypes.string,
}




export default EventCard;
