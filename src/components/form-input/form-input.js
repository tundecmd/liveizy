import React from 'react';
import './form-input.scss';

const FormInput = ({ type, label, name, ...otherProps }) => {
    return (
        <div className='group'>
            <label className={`${label} form-input-label`}>
                {label}    
            </label>
            <input 
                className='form-input'
                {...otherProps}
            /> 
        </div>
    )
}

export default FormInput
