import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [values, setValues] = useState({

    email: 'geoff@example.com',
    password: '1234'

  });

  const { email, password } = values;




  function handleSubmit(e) {


      e.preventDefault();

      console.log(e.target.values)

  }


  function handleChange({ target: { value, name } }) {

    setValues(prevValues => ({

      ...prevValues,

      [name]: value


    }))


  }


  return (

    <form onSubmit={handleSubmit}>

      {/* ----------Email---------- */}

      <label htmlFor='email'>

        <h2>Email</h2>

        <input id='email' name='email' type='email' value={email} onChange={handleChange} />

      </label>

      {/* -------Password--------- */}

      <label htmlFor='password'>

        <h2>Password</h2>

        <input id='password' name='password' type='password' value={password} onChange={handleChange} />

      </label>

      {/* -------Submit--------- */}


        <button type='submit'> Login</button>


    </form>

  );
}

export default App;