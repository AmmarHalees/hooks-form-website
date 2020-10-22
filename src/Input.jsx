import React from 'react';
import {ReactComponent as CloseIcon} from './assets/x.svg';

const Input = ({ type, value, errorMessage, handleChange, required = true, maxLength, placeholder, error ,handleClear }) => {
  return (

    <div className='inputcontainer'>
      <label htmlFor={type} >

        <h2>{type}</h2>

        <button onClick={() =>handleClear (type)}type='reset' className='clearbutton' title='clear'>

          <CloseIcon/>

        </button>
        <input className={`input ${error ? 'error' : ''}`} id={type} name={type} maxLength={50} value={value} onChange={handleChange} placeholder={placeholder} />

      </label>

      <div className='error_text'>

        {errorMessage}
      </div>

    </div>

  );
}

export default Input;