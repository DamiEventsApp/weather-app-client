import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.component';
import './index.scss';

const Index = () => {
    return (
        <App />
    )
};

ReactDOM.render(<App />, document.getElementById("root"));