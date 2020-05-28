import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ handleChange, value, placeholder, id }) => {
    return (
        <div className="form-input">
            <input 
                id={id}
                type="text" 
                placeholder={placeholder}
                onChange={handleChange} 
                className="search-input"
                value={value}
            />
        </div>
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
