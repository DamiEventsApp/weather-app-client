import { combineReducers } from "redux";
import { authReducer } from './app.reducers';

export const rootReducer = combineReducers({
    authReducer,
});