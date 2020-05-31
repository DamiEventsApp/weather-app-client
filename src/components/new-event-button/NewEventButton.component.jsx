import React from 'react';
import './new-event-button.styles.scss';
import Button from '../button/Button.component';

const NewEventButton = ({ buttonAction }) => {

    return (
        <div className="new-event-btn">
            <Button buttonAction={buttonAction} className='new-btn'>New Event +</Button>
        </div>
    )
};

export default NewEventButton;
