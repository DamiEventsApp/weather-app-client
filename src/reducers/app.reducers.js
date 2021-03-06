import { types } from "../actions/components";

export const sharedReducer = (state={}, action) => {
    switch(action.type) {
        case types.TOGGLE_EVENT_MODAL: {
            return Object.assign({}, state, { eventModalOpen: !state.eventModalOpen })
        }

        case types.TOGGLE_MENU: {
            return Object.assign({}, state, { menuOpen: !state.menuOpen })
        }

        case types.SHOW_MESSAGE: {
          return Object.assign({}, state, { flashMessage: action.message })
        }

        case types.HIDE_MESSAGE: {
          return Object.assign({}, state, { flashMessage: undefined })
        }

        default:{
            return state;
        }
    }
};

export const authReducer = (state={}, action) => {
    switch(action.type) {
        case types.LOGIN: {
            return Object.assign(
                {}, 
                state, 
                {
                    loggedIn: true, 
                    currentUser: action.user, 
                    authToken: action.authToken
                }
            );
        }

        case types.LOGOUT: {
            return Object.assign(
                {}, 
                state, 
                {
                    loggedIn: false, 
                    currentUser: action.user, 
                    authToken: action.authToken
                }
            );
        }

        default: {
            return state;
        }
    }
};

export const eventsReducer = (state={}, action) => {
    switch(action.type) {
        case types.RECEIVE_EVENTS: {
            if (action.today) {
                return Object.assign({}, state, { todaysEvents: action.events })
            }

            if (action.search) {
                return Object.assign({}, state, { searchResults: action.events })
            }

            return Object.assign({}, state, { events: action.events })
        }

        case types.SET_CURRENT_EVENT: {
            return Object.assign({}, state, { currentEvent: state.events[action.index] })
        }

        case types.REMOVE_CURRENT_EVENT: {
            return Object.assign({}, state, { currentEvent: null })
        }

        case types.CLEAR_SEARCH_RESULTS: {
            return Object.assign({}, state, { searchResults: [] })
        }

        default: {
            return state;
        }
    }
};

export const pageReducer = (state={}, action) => {
    switch(action.type) {
        case types.RECEIVE_PAGINATION: {
            if (action.today) {
            return Object.assign({}, state, { todayLinks: action.links })
            }

            if (action.search) {
                return Object.assign({}, state, { searchLinks: action.links })
            }

            return Object.assign({}, state, { links: action.links })
        }

        default: {
            return state;
        }
    }
};

export const processingReducer = (state={}, action) => {
    switch(action.type) {
        case types.START_LOGIN: {
            return Object.assign({}, state, { login: true })
        }

        case types.STOP_LOGIN: {
            return Object.assign({}, state, { login: false })
        }

        case types.START_FETCHING_EVENTS: {
            if (action.today) {
                return Object.assign({}, state, { todaysEvents: true })
            }
            return Object.assign({}, state, { events: true })
        }

        case types.STOP_FETCHING_EVENTS: {
            if (action.today) {
                return Object.assign({}, state, { todaysEvents: false })
            }
            return Object.assign({}, state, { events: false })
        }

        case types.START_FETCHING_TODAYS_EVENTS: {
            return Object.assign({}, state, { todaysEvents: true })
        }

        case types.STOP_FETCHING_TODAYS_EVENTS: {
            return Object.assign({}, state, { todaysEvents: false })
        }
        
        default: {
            return state;
        }
    }
};