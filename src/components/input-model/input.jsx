import React from 'react';
import './input.css'

const Textodoinput = (props) => {
  return ( 
    <div className='input-geral'>
      <label>{props.label}</label>
      <input className='input' type={props.Type} id={props.id}/>
    </div>
   );
}
 
export default Textodoinput;