import React from 'react';
import PropTypes from 'prop-types';
import './flash-message.styles.scss';

const FlashMessage = ({ flashMessage }) => {
    console.log(flashMessage)
    return (
      <div className={`flash-message ${flashMessage === "" ? "" : "show"}`}>
        <p>
          {flashMessage}
        </p>
      </div>
    )
};

FlashMessage.defaultProps = {
    flashMessage: "",
}

FlashMessage.propTypes = {
    flashMessage: PropTypes.string,
}




export default FlashMessage;
