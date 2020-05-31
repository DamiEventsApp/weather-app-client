import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import DashboardPage from '../containers/pages/DashboardPage';
import LoginPage from '../pages/Login';
import SearchResultsPage from '../containers/pages/SearchResultsPage';
import './app.styles.scss';
import FlashMessage from '../containers/flash-message/FlashMessage.container';
import SideBar from '../containers/side-bar/Sidebar.container';
import EventModal from '../containers/event-modal/EventModal.container';

const App = ({ loggedIn, eventModalOpen }) => {
    return (
        <Router>
            <div className="app-container row">
              {loggedIn && <SideBar />}
              {eventModalOpen && <EventModal />}
              <FlashMessage />
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
    eventModalOpen: false,
}

App.propTypes = {
    loggedIn: PropTypes.bool,
    eventModalOpen: PropTypes.bool,
}

export default App;
