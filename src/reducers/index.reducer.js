import { combineReducers } from "redux";
import { authReducer, eventsReducer, sharedReducer, pageReducer, processingReducer } from './app.reducers';

export const rootReducer = combineReducers({
    authReducer,
    eventsReducer,
    sharedReducer,
    pageReducer,
    processingReducer,
});