import React from 'react';
import './button.css'

const Button = (props) => {
  return ( 
    <button className='button' onClick={props.onClick}>{props.btexto}</button>
   );
}
 
export default Button;