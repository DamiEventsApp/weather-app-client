import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/index.reducer';
import thunk from 'redux-thunk';
import App from './containers/app/App.container';
import './index.scss';

const saveStateToLocalStorage = state => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
}

const getStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');

        if (serializedState) {
            const parsedState = JSON.parse(serializedState);
            return parsedState;
        }
        return undefined;
    } catch(error) {
        return undefined;
    }
}

const initialState = getStateFromLocalStorage();

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
)

const AppWrapper = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
};

store.subscribe(() => saveStateToLocalStorage(store.getState()));

ReactDOM.render(<AppWrapper />, document.getElementById("root"));