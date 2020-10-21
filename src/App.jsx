import React, { useState } from 'react';
import SplitPane from 'react-split-pane';

import './App.css';
import './pane.css';

import Input from './Input.jsx';
import RightSide from './RightSide';
import useForm from './useForm';
import ControlUnit from './ControlUnit';
import Header from './Header';
import { validationSchema } from './validationSchema';

const App = () => {

  const [emailControl, setEmailControl] = useState({

    'required': true,
    'minLength' : true,
    'properFormatting':true

  });

  
  const [{ email, password }, handleChange, handleSubmit, { email: email_errors = [], password: password_errors = [] }, isError, loading, didSubmit] = useForm(emailControl);


  function handleControlChange(id, {target:{checked ,name}}){

    console.log(name, checked)

    setEmailControl(

      (prevEmailControl) =>({

        ...prevEmailControl,
        [name]: checked

      })

    )

  }


  return (

    <>

      <Header />

      <SplitPane
        split="vertical"
        minSize={200}
        maxSize={800}
        defaultSize={500}
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

          <RightSide email_errors={email_errors} password_errors={password_errors} didSubmit={didSubmit} email={email} password={password} />

          {/* <ControlUnit /> */}

          <div style={{ padding: '1rem', display:'grid', gridTemplateColumns:'1fr 1fr' }}>


            <div style={{ padding: '1rem' }}>
              <h2>Email</h2>

              <ul>

                {validationSchema.email.map(x => <li key={x.id}>

                  <label>
                    <input type='checkbox' checked={emailControl[x.id]} name={x.id} onChange={(e) =>handleControlChange(x.id ,e)}/>

                    {x.message}

                  </label>


                </li>)}

              </ul>


            </div>

            
            <div style={{ padding: '1rem' }}>
              <h2>Password</h2>

              <ul>

                {validationSchema.password.map(x => <li key={x.id}>

                  <label>
                    <input type='checkbox' />

                    {x.message}

                  </label>


                </li>)}

              </ul>


            </div>

          </div>


        </SplitPane>

      </SplitPane>




    </>
  );
}

export default App;