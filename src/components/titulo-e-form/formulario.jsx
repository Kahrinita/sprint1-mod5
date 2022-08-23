import React from 'react';

import Textodoinput from '../input-model/input';
import InputRadio from '../input-model/inputRadio';
import Button from '../button/button';
import './formulario.css'


const Forms = () => {
  return ( 
    <form className='formulario-um'>
      <Textodoinput label='Seu nome' type="text" />
      <Textodoinput label='E-mail' type="text" />
      <Textodoinput label='CPF' type="text" />
      <div className='radios'>
        <InputRadio  labelTxt='Masculino' type="radio" name="genero" /> 
        <InputRadio  labelTxt='Feminino' type="radio" name="genero"/> 
      </div>
      <Button className='botaoForms' btexto="Enviar" />

    </form>
   );
}
 
export default Forms;