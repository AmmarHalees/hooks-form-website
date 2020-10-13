import React from 'react';

const Input = ({type , value ,handleChange ,required =true ,maxLength ,placeholder , error}) => {
    return ( 

        <label htmlFor={type} >

        <h2>{type}</h2>

        <input className={`input ${error ? 'error' : ''}`} id={type} name={type} maxLength={maxLength} value={value} onChange={handleChange} placeholder={placeholder}/>

      </label>
     );
}
 
export default Input;