import React from 'react';
import PropTypes, { objectOf } from 'prop-types';
import './name-card.styles.scss';

const NameCard = ( { userName, userImage } ) => {

    const userImageStyle = {
        backgroundImage: `url(${"https://images.unsplash.com/photo-1590614724232-5802e3173a0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2801&q=80"})`
    }

    return (
        <div className="name-card row">
            <div className="user-image" style={userImageStyle}/>
            <p className="user-name">userName</p>
        </div>
    )
};

NameCard.defaultProps = {
    userName: "",
}

NameCard.propTypes = {
    userName: PropTypes.string,
}

export default NameCard;
