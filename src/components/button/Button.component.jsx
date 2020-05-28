import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonAction, children, className }) => {
    return (
        <div className="button-holder">
            <button className={`${className}`} onClick={buttonAction}>
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
