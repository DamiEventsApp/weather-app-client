import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonAction, children, className, ...props }) => {
    return (
        <div className="button-holder">
            <button className={`${className}`} onClick={buttonAction} {...props}>
                {children}
            </button>
        </div>
    )
};

Button.defaultProps = {
    buttonAction: () => {},
}

Button.propTypes = {
    buttonAction: PropTypes.func,
}

export default Button;
