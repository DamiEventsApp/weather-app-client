import Axios from "axios"

const API_KEY = "AIzaSyD-8Ts9UpNL2YpmveDmw3dx1EEDWChi0rQ";

const weatherAPI = Axios.create({
    baseURL:  `https://maps.googleapis.com/maps/api/geocode`,
});


export const getLocation = () => {
    navigator.geolocation.getCurrentPosition((getWeatherForLocation) => {
    });
}

export const getWeatherForLocation = async(position) => {
    let {long, lat} = position.coords;
    let res = await weatherAPI.get(`/json?latlng=${lat},${long}&key=${API_KEY}`)
    console.log(res)
};