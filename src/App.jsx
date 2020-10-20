import React from 'react';
import './App.css';
import Input from './Input.jsx';
import RightSide from './RightSide';
import useForm from './useForm';

const App = () => {

  const [{ email, password }, handleChange, handleSubmit, { email: email_errors = [], password: password_errors = [] }, isError, loading] = useForm();

  return (

    <div className='container'>

      <form onSubmit={handleSubmit} className='form'>

        <Input error={email_errors.length > 0} errorMessage={email_errors[0]} type='email' value={email} handleChange={handleChange} required={true} maxLength='23' placeholder='jim@example.com' />

        <Input error={password_errors.length > 0} errorMessage={password_errors[0]}  type='password' value={password} handleChange={handleChange} required={true} maxLength='20' placeholder='123abcd' />

        <button disabled={isError} loading={loading} type='submit' id='submit'> Login</button>

      </form>

      <RightSide email_errors={email_errors} password_errors={password_errors}/>

    </div>


  );
}

export default App;