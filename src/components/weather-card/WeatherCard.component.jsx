import React, { useEffect, useState } from 'react';
import { weatherAPI } from '../../actions/weather.actions';
import { locationAPI, API_KEY } from '../../actions/location.actions';
import './weather-card.styles.scss';

const WeatherCard = () => {
    let  [ weatherInfo, setWeatherInfo ] = useState("");
    let  [ weatherIcon, setWeatherIcon ] = useState("");
    let  [ position, setPosition ] = useState({long: 40.4637, lat: 3.7492});
    let [countryLocation, setCountryLocation] = useState("");

    const formatDate = () => {
        let dateToday = new Date().toDateString();
        dateToday = dateToday.split(' ');
        dateToday[0] = dateToday[0] + ",";
        return dateToday.join(' ');
    };

    const getLocationData = async() => {
        const { long, lat } = position;
        let locationResult = await locationAPI.get(`/json?latlng=${lat},${long}&key=${API_KEY}`);
        const {data} = locationResult;
        const {results} = data;
        const countryData = results[4];
        const country = countryData.formatted_address;
        setCountryLocation(country);
    }

    let dateToday = formatDate();

    useEffect(() => {
        const fetchData = async() => {
            await getLocationData()
            if (countryLocation) {
                const weatherResult = await weatherAPI.get("/weather", {params: {q: "kenya"}});
                const { data } = weatherResult;
                const { weather } = data;
                const [ weatherData ] = weather;
                const { description, icon } = weatherData;
                setWeatherInfo(description)
                setWeatherIcon(icon)
            }

        }

        fetchData();
    })

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
