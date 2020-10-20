import React from 'react';
import SplitPane from 'react-split-pane';

import './App.css';
import './pane.css';

import Input from './Input.jsx';
import RightSide from './RightSide';
import useForm from './useForm';
import ControlUnit from './ControlUnit';
import Header from './Header';

const App = () => {

  const [{ email, password }, handleChange, handleSubmit, { email: email_errors = [], password: password_errors = [] }, isError, loading] = useForm();

  return (

    <>

      <Header />

      <SplitPane
        split="vertical"
        minSize={200}
        maxSize={800}
        defaultSize={400}
        className="primary"
      >
        <div style={{ display: 'grid', alignItems: 'center', height: '100%' }}>
          <form onSubmit={handleSubmit} className='form'>

            <Input error={email_errors.length > 0} errorMessage={email_errors[0]} type='email' value={email} handleChange={handleChange} required={true} maxLength='23' placeholder='jim@example.com' />

            <Input error={password_errors.length > 0} errorMessage={password_errors[0]} type='password' value={password} handleChange={handleChange} required={true} maxLength='20' placeholder='123abcd' />

            <button disabled={isError} loading={loading} type='submit' id='submit'> Login</button>

          </form>

        </div>


        <SplitPane

          minSize={300}
          maxSize={500}
          split="horizontal">

          <RightSide email_errors={email_errors} password_errors={password_errors} />

          <ControlUnit />
          

        </SplitPane>

      </SplitPane>




    </>
  );
}

export default App;