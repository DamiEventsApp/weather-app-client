import { combineReducers } from "redux";
import { authReducer, eventsReducer, sharedReducer, pageReducer } from './app.reducers';

export const rootReducer = combineReducers({
    authReducer,
    eventsReducer,
    sharedReducer,
    pageReducer,
});