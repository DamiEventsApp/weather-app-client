import Axios from "axios"

export const API_KEY = "AIzaSyD-8Ts9UpNL2YpmveDmw3dx1EEDWChi0rQ";

export const locationAPI = Axios.create({
    baseURL:  `https://maps.googleapis.com/maps/api/geocode`,
});