import React from 'react';

const ControlUnit = ({validationSchema , emailControl , passControl ,handleControlChange}) => {
    return ( 


        <section className='lower'>

                <header style={{padding:'1rem', borderBottom:'1px solid grey'}}>     
                    
                           <h2>Control Unit</h2>

                </header>

            
          <div style={{padding:'1rem'}}>

<h2>Validation Schema</h2>

<div style={{ padding: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>


  <div style={{ padding: '1rem' }}>
    <h2>Email</h2>

    <ul>

      {validationSchema.email.map(x => <li key={x.id}>

        <label>
          <input type='checkbox' checked={emailControl[x.id]} name={x.id} onChange={(e) => handleControlChange('email', e)} />

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
          <input type='checkbox' checked={passControl[x.id]} name={x.id} onChange={(e) => handleControlChange('pass', e)} />

          {x.message}

        </label>


      </li>)}

    </ul>


  </div>

</div>
</div>


        </section>
     );
}
 
export default ControlUnit;