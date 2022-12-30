import React from 'react';

function FormInput({ id, label, type, register, defaultValue }) {
    return (
        <div className='form-input'>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} {...register} defaultValue={defaultValue} required />
        </div>
    );
}

export default FormInput;