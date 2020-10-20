import React from 'react';

const RightSide = ({email_errors , password_errors}) => {
    return (  


        <div>

        <div style={{ margin: '1rem' }}>
          <h3>
            email:</h3>

          {email_errors.map(item => {

            return <li>{item}</li>
          })}

        </div>

        <div style={{ margin: '1rem' }}>

          <h3>
            pass:

        </h3>

          {password_errors.map(item => {

            return <li>{item}</li>
          })}


        </div>

      </div>

    );
}
 
export default RightSide;