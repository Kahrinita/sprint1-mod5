import React from 'react';
import Button from '../button/button';

import './header.css'

const Header = () => {
  return ( 
    <div className='header-container'>
      <p classe="p-um">uma seleção de produtos</p>
      <p classe="p-dois">especiais para você</p>
      <p classe="p-tres">todos os produtos dessa lista foram selecionados a partir da sua navegação. Aproveite!</p>

      <div className='header-botoes'>
        <Button btexto="Conheça a Linx" />
        <Button btexto="Ajude o algoritmo" />
        <Button btexto="Seus produtos" />
        <Button btexto="Compartilhe" />
      </div>

    </div>
   );
}
 
export default Header;