import React from 'react';
import Forms from './formulario';
import Titulos from './titulos';

import './TituloeForm.css'

const TituloeForm = () => {
  return ( 
    <div className='tituloeForm-container'>
      <Titulos />
      <Forms />
    </div>
   );
}
 
export default TituloeForm;