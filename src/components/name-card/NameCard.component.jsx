import React from 'react';
import PropTypes, { objectOf } from 'prop-types';

const NameCard = () => {
    return (
        <div className="name-card">
            <img src="#" className="user-image" alt="user-image"/>
            <p className="user-name">John Doe</p>
        </div>
    )
};

export default NameCard;
