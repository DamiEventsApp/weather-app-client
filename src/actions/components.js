import Axios from "axios";

export const API = Axios.create({
    baseURL: 'http://eventweatherapp.herokuapp.com/',
});

export const types = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    SET_CURRENT_EVENT: "SET_CURRENT_EVENT",
    RECEIVE_EVENTS: "RECEIVE_EVENTS",
    REMOVE_CURRENT_EVENT: "REMOVE_CURRENT_EVENT",
};