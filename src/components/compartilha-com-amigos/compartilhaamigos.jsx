import React from 'react';

import InputText from '../input-model/input'
import Button from '../button/button';


import './compartilhaamigos.css'

const CompartilhaAmigos = () => {
  return ( 
    <div className='compartilha-com-amigos'>
      <p className='texto-compartilha'>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
      <div className='inputs-compartilha'>
        <InputText label='Nome do seu amigo:' type="text"/>
        <InputText label='E-mail:' type="text"/>
      </div>
      <div className='botao-compartilha'>
        <Button btexto="Enviar agora" />
      </div>
    </div>
   );
}
 
export default CompartilhaAmigos;