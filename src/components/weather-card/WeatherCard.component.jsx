import React, { useEffect, useState } from 'react';
import { weatherAPI } from '../../actions/weather.actions';
import './weather-card.styles.scss';
import { getLocation } from '../../actions/location.actions';

const WeatherCard = () => {
    let  [ weatherInfo, setWeatherInfo ] = useState("");
    let  [ weatherIcon, setWeatherIcon ] = useState("");
    let [countryLocation, setCountryLocation] = useState("");
    const formatDate = () => {
        let dateToday = new Date().toDateString();
        dateToday = dateToday.split(' ');
        dateToday[0] = dateToday[0] + ",";
        return dateToday.join(' ');
    };

    let dateToday = formatDate();

    useEffect(() => {
        const location = getLocation();
        setCountryLocation(location)
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

    return (
        <div className="weather-card column">
            <img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt="weather-icon"/>
            <h3>{dateToday}</h3>
            <h4>{countryLocation}</h4>
            <h5>{weatherInfo}</h5>
        </div>
    )
};

WeatherCard.defaultProps = {
}

WeatherCard.propTypes = {
}




export default WeatherCard;
