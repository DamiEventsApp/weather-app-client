import React from 'react';
import PropTypes, { objectOf } from 'prop-types';

const NameCard = ( { userName } ) => {
    return (
        <div className="name-card">
            <img src="#" className="user-image" alt="user-image"/>
            <p className="user-name">userName</p>
        </div>
    )
};

export default NameCard;
