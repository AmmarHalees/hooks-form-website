import React from 'react';

const Input = ({ type, value, errorMessage, handleChange, required = true, maxLength, placeholder, error }) => {
  return (

    <div>
      <label htmlFor={type} >

        <h2>{type}</h2>

        <input className={`input ${error ? 'error' : ''}`} id={type} name={type} maxLength={maxLength} value={value} onChange={handleChange} placeholder={placeholder} />

      </label>

      <div className={'error_text'}>
        {errorMessage}
      </div>

    </div>

  );
}

export default Input;