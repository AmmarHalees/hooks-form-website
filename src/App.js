import React from 'react';
import './App.css';
import Input from './Input';
import useForm from './useForm';

const App = () => {

  const [{ email, password }, handleChange, handleSubmit, { email: email_errors = [], password: password_errors = [] }, isError , loading] = useForm();

  console.log(email_errors)

  return (

    <div style={{

      display: 'grid',
      justifyContent: 'center',
      gridTemplateColumns: '1fr 1fr'

    }}>
      <form onSubmit={handleSubmit} style={{

        display:'grid',
        alignItems:'center',
        justifyContent:'center',
        width:'600px'

      }}>


        <Input error={email_errors.length > 0} type='email' value={email} handleChange={handleChange} required={true} maxLength='23' placeholder='jim@example.com' />
        
          <div className={email_errors.length > 0 ? 'error_text' : ''}>
          {email_errors && email_errors[0]}

          </div>


        <Input error={password_errors.length > 0} type='password' value={password} handleChange={handleChange} required={true} maxLength='20' placeholder='123abcd' />
       
        <div className={password_errors.length > 0 ? 'error_text' : ''}>

         {password_errors && password_errors[0]}

        </div>

        <button
         disabled={isError 
          
          // || loading
        
        } 
         
         loading={loading} type='submit' id='submit'> Login
        
          {/* {loading && '...'} */}
        </button>

      </form>

      <div>

        <div style={{margin:'1rem'}}>
          <h3>
          email:</h3> 
          
           {email_errors.map(item =>{

           return <li>{item}</li>
           })}

        </div>

        <div style={{margin:'1rem'}}>

        <h3>
        pass:

        </h3>

        {password_errors.map(item =>{

        return <li>{item}</li>
        })}        


</div>

      </div>

    </div>


  );
}

export default App;