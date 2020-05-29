import { types } from "../actions/components";

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