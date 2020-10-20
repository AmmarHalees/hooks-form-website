import React from 'react';

const RightSide = ({ email_errors, password_errors }) => {
  return (


    <div className='upper'>
      <h2>Errors</h2>


      <div style={{ margin: '1rem' }}>
        <h3>
          email:</h3>

        <ul>
          {email_errors.map(item => {

            return <li>{item}</li>
          })}

        </ul>

      </div>

      <div style={{ margin: '1rem' }}>

        <h3>
          pass:

        </h3>

       <ul>

       {password_errors.map(item => {

return <li>{item}</li>
})}

       </ul>


      </div>

    </div>

  );
}

export default RightSide;