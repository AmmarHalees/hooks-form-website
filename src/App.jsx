import React, { useState } from 'react';
import SplitPane from 'react-split-pane';

import ControlUnit from './components/ControlUnit';
import Header from './components/Header';
import Input from './components/Input';
import RightSide from './components/RightSide';
import useForm from './hooks/useForm';
import { validationSchema } from './utils/validationSchema';

import './assets/styles/App.css';
import './assets/styles/pane.css';
import useRenderCounter from './hooks/useRenderCounter';


const App = () => {

  const renderString = useRenderCounter('app');

  const [emailControl, setEmailControl] = useState({

    'required': true,
    'minLength': true,
    'properFormatting': true

  });

  const [passControl, setPassControl] = useState({

    'required': true,
    'minLength': true,
    'noSpace': true,
    'oneLowerCase': true,
    'oneUpperCase': true,
    'oneNumeric': true,
    'oneSpecialChar': true

  });
  const [{ email, password }, handleChange, handleSubmit, { email: email_errors = [], password: password_errors = [] }, isError, loading, didSubmit, handleClear, newValidationSchema] = useForm(emailControl, passControl);


  function handleControlChange(type, { target: { checked, name } }) {


    if (type === 'email') {

      setEmailControl(

        (prevEmailControl) => ({

          ...prevEmailControl,
          [name]: checked

        })

      )
    } else {



      setPassControl(

        (prevPassControl) => ({

          ...prevPassControl,
          [name]: checked

        })

      );


    }




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

            <Input handleClear={handleClear} error={email_errors.length > 0} errorMessage={email_errors[0]} type='email' value={email} handleChange={handleChange} required={true} maxLength='23' placeholder='jim@example.com' />

            <Input handleClear={handleClear} error={password_errors.length > 0} errorMessage={password_errors[0]} type='password' value={password} handleChange={handleChange} required={true} maxLength='20' placeholder='123abcd' />

            <button disabled={isError} loading={loading} type='submit' id='submit'> Login</button>

          </form>

        </div>


        <SplitPane

          minSize={300}
          maxSize={500}
          split="horizontal">

          <RightSide email_errors={email_errors} password_errors={password_errors} didSubmit={didSubmit} email={email} password={password} />

          <div>

            <ControlUnit validationSchema={validationSchema} emailControl={emailControl} passControl={passControl} handleControlChange={handleControlChange} />

{/* 
            <div style={{ padding: '1rem' }}>

              <h2>Benchmark</h2>

              <div style={{padding:'1rem'}}>

                {renderString}


              </div>
            </div> */}

          </div>

        </SplitPane>

      </SplitPane>




    </>
  );
}

export default React.memo(App);