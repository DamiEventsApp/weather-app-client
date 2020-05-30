import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import DashboardPage from '../../containers/pages/DashboardPage';
import LoginPage from '../../pages/Login';
import SearchResultsPage from '../../containers/pages/SearchResultsPage';
import './app.styles.scss';

const App = ({ loggedIn }) => {
    return (
        <Router>
            <div className="app-container row">
                <Switch>
                    <Route exact path="/" component={ loggedIn ? DashboardPage : LoginPage }/>
                    <Route exact path="/search" component={ loggedIn ? SearchResultsPage : LoginPage }/>
                    <Route exact path="/login" component={loggedIn ? DashboardPage : LoginPage }/>
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
