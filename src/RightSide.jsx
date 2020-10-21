import React from 'react';

const RightSide = ({ email_errors, password_errors, didSubmit, email, password }) => {


  console.log(email_errors)

  return (


    <div className='upper'>

      <div>
        <h2>Errors</h2>


        <div style={{ margin: '1rem' }}>
          <h3>
            Email Errors {email_errors.length > 0 ? `(${email_errors.length}) - Ordered by priority ` : '' }:
            
            </h3>

          <ol>
            {email_errors.map((item , i) => {

              return <li className='erroritem' style={(i === 0) && email_errors.length > 1 ? {borderBottom:'2px solid black' , fontStyle:'italic'} : {}} key={i}>{item}</li>
            })}

          </ol>

        </div>

        <div style={{ margin: '1rem' }}>

          <h3>
          Password Errors {password_errors.length > 0 ? `(${password_errors.length}) - Ordered by priority ` : '' }:
  </h3>

          <ol>

            {password_errors.map(item => {

              return <li>{item}</li>
            })}

          </ol>


        </div>


      </div>


      <div>

        <h2>Tests/Result</h2>

        <h3>

          {didSubmit ?
            (email_errors.length > 0 || password_errors.length > 0 ? <p className='error_text'>Failed</p> : <div>

              <p className='pass'>PASS</p>

                  <p style={{width:'200px', wordBreak:'break-word' , fontWeight:'lighter'}}>

                  {JSON.stringify({

                      email,
                      password

                  })}

                  </p>

            </div>)
            : ''
          }

        </h3>

      </div>

    </div>

  );
}

export default RightSide;