import React from 'react';
import {ReactComponent as CloseIcon} from '../assets/img/x.svg';

const Input = ({ type, value, errorMessage, handleChange, required = true, maxLength, placeholder, error ,handleClear }) => {
 
  
  return (

    <div className='inputcontainer'>
      <label htmlFor={type} >

        <h2>{`${type[0].toUpperCase()}${type.slice(1)}` }</h2>

        <button disabled={value.length === 0} onClick={() =>handleClear (type)}type='reset' className='clearbutton' title='clear'>

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

export default React.memo(Input);