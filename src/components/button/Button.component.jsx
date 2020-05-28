import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonAction, children }) => {
    return (
        <div className="button">
            <button className="form-submit" onClick={buttonAction}>
                {children}
            </button>
        </div>
    )
};

Button.defaultProps = {
    buttonAction: () => {},
    children: "",
}

Button.propTypes = {
    buttonAction: PropTypes.func,
    children: PropTypes.string,
}

export default Button;
