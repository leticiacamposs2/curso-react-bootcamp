import React from 'react';

const FormInput = () => ({ label, value, name, inputType, placeholder}) => {

    return (
        <div>
            <label>{label}</label>
            <input 
                value={value}
                name={name}
                type={inputType}
                placeholder={placeholder}
            />
        </div>
    );
}

export default FormInput;