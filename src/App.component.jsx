import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import './app.styles.scss';

const App = ({ loggedIn }) => {
    return (
        <Router>
            <div className="app-container row">
                <Switch>
                    <Route path="/" component={ loggedIn ? Dashboard : Login }/>
                    <Route path="/login" component={loggedIn ? Dashboard : Login }/>
                </Switch>
            </div>
        </Router>
    )
};

App.defaultProps = {
    loggedIn: false,
}

App.propTypes = {
    loggedIn: PropTypes.bool,
}

export default App;
