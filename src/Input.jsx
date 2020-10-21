import React from 'react';

const Input = ({ type, value, errorMessage, handleChange, required = true, maxLength, placeholder, error }) => {
  return (

    <div className='inputcontainer'>
      <label htmlFor={type} >

        <h2>{type}</h2>

        <input className={`input ${error ? 'error' : ''}`} id={type} name={type} maxLength={50} value={value} onChange={handleChange} placeholder={placeholder} />

      </label>

      <div className='error_text'>

        {errorMessage}
      </div>

    </div>

  );
}

export default Input;