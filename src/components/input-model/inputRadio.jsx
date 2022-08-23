import React from 'react';
import "../input-model/input.css"

const InputRadio = (props) => {
  return ( 
    <div className='input-radio'>

      <label label={props.label}> {props.labelTxt} <input type={props.type} id={props.label} name={props.name}/> </label>
      
    </div>
   );
}
 
export default InputRadio;