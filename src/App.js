import React from 'react';
import './App.css';
import Input from './Input';
import useForm from './useForm';

const App = () => {

  const [email, password, handleChange, handleSubmit] = useForm()

  return (

    <form onSubmit={handleSubmit}>


      <Input type='email' value={email} handleChange={handleChange} required={true} />

      <Input type='password' value={password} handleChange={handleChange} required={true} />

      <button type='submit' id='submit'> Login</button>

    </form>

  );
}

export default App;