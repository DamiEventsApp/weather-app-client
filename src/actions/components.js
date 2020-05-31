import Axios from "axios";

export const API = Axios.create({
    baseURL: 'http://eventweatherapp.herokuapp.com/',
});

export const types = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    SET_CURRENT_EVENT: "SET_CURRENT_EVENT",
    RECEIVE_EVENTS: "RECEIVE_EVENTS",
    RECEIVE_PAGINATION: "RECEIVE_PAGINATION",
    REMOVE_CURRENT_EVENT: "REMOVE_CURRENT_EVENT",
    TOGGLE_EVENT_MODAL: "TOGGLE_EVENT_MODAL",
    CLEAR_SEARCH_RESULTS: "CLEAR_SEARCH_RESULTS",
    TOGGLE_MENU: "TOGGLE_MENU",
};