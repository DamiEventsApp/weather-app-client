import React from 'react';
import PropTypes from 'prop-types';
import './input.styles.scss';

const Input = ({ handleChange, value, placeholder, id }) => {
    return (
            <input 
                id={id}
                type="text" 
                placeholder={placeholder}
                onChange={handleChange} 
                className="input"
                value={value}
            />
    )
};

Input.defaultProps = {
    handleChange: () => {},
    value: "",
    placeholder: "",
}

Input.propTypes = {
    handleChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
}




export default Input;
