import React from 'react';
import './logo.styles.scss';
import { withRouter } from 'react-router-dom';

const Logo = ( { history } ) => {

    const handleClick = () => {
      history.push('/');
    }

    return (
        <div className="row logo-holder" onClick={handleClick}>
            <div className={`logo-img`} />
        </div>
    )
};

export default withRouter(Logo);
