import React from 'react';

const Input = ({type , value ,handleChange ,required =true}) => {
    return ( 

        <label htmlFor={type}>

        <h2>{type}</h2>

        <input id={type} name={type} type={type} value={value} onChange={handleChange} required ={required}/>

      </label>
     );
}
 
export default Input;