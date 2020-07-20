import React from 'react';
import './add-property-form-input.scss';

const AddPropertyFormInput = ({ label,name, type, handleChange, ...otherProps }) => {
    return (
        <div className="group-input-pty">
            <label>{label}</label>
            <input 
                onChange={handleChange}
                {...otherProps}
            />
        </div>



        // <div className='group'>
        //     <label className={`${label} add-pty-form-input-label`}>
        //         {label}    
        //     </label>
        //     <input 
        //         className='add-pty-form-input'
        //         {...otherProps}
        //     />
        // </div>
    )
}

export default AddPropertyFormInput
