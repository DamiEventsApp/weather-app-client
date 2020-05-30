import { API, types } from "../components";

const receiveEvents = (events, today=false, search=false) => ({
    type: types.RECEIVE_EVENTS,
    today,
    search,
    events
});

const receivePagination = (links, today=false, search=false) => ({
    type: types.RECEIVE_PAGINATION,
    links,
    today
});

export const fetchEvents = (authToken, today=false, search=false, path=false) => async(dispatch) => {
    const headers = {
        'Authorization': authToken,
    }

    try {

        if (!path && today) {
            path = '/todays_events'
        } 
        if(!path){
            path = '/events'
        }

        const res = await API.get(`${path}`, {params: {today: today}, headers: headers})
        const { data } = res;
        const {events, meta: {pagination: {links}}} = data
        dispatch(receiveEvents(events, today, search));
        dispatch(receivePagination(links, today));

    } catch(error) {

    }
};

export const createNewEvent = (form, authToken) => async(dispatch) => {
    let config = {
        headers: { "Authorization": authToken }
    }

    try {
        await API.post('/events', form, config)
        dispatch(fetchEvents(authToken));
        dispatch(fetchEvents(authToken, true));
    } catch(error) {

    }
};

export const searchEvents = (authToken, form) => async(dispatch) => {

    const params = {
        date: form.get('date'),
        term: form.get('term'),
    }

    const headers = {
        'Authorization': authToken,
    }

    try {
        const res = await API.get(`/search_events`, {params, headers: headers})
        const { data } = res;
        const {events, meta: {pagination: {links}}} = data
        dispatch(receiveEvents(events, false, true));
        dispatch(receivePagination(links, false, true));
    } catch(error) {

    }
};


export const deleteEvent = (id, authToken) => async(dispatch) => {
    try {
        await API.delete(`/events/${id}`, {params: {id: id} , headers: { Authorization: authToken }})
        dispatch(fetchEvents(authToken));
        dispatch(fetchEvents(authToken, true));
    } catch(error) {

    }
};

export const updateEvent = (form, authToken) => async(dispatch) => {
    const id = form.get('id');
    let config = {
        headers: { "Authorization": authToken }
    }
    try {
        await API.put(`/events/${id}`, form , config)
        dispatch(fetchEvents(authToken));
        dispatch(fetchEvents(authToken, true));
    } catch(error) {

    }
};

export const clearSearchResults = () => ({
    type: types.CLEAR_SEARCH_RESULTS,
});

export const setCurrentEvent = index => ({
    type: types.SET_CURRENT_EVENT,
    index,
});

export const removeCurrentEvent = index => ({
    type: types.REMOVE_CURRENT_EVENT,
});

export const toggleEventModal = () => ({
    type: types.TOGGLE_EVENT_MODAL,
});