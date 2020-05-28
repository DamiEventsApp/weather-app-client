import React from 'react';
import PropTypes, { objectOf } from 'prop-types';
import './logo.styles.scss';

const Logo = ( { userName } ) => {
    return (
        <div className="row logo-holder">
            <p className="user-name">Eventor</p>
        </div>
    )
};

export default Logo;
