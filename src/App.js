import React from 'react'

import Header from './components/header/header'
import TituloeForm from './components/titulo-e-form/TituloeForm'
import Produtos from './components/produtos/produtos'
import CompartilhaAmigos from './components/compartilha-com-amigos/compartilhaamigos'
import Footer from './components/footer/footer'

import './App.css'



function App() {
  return (
    <div className="App">
      <Header />
      <TituloeForm />
      <Produtos />
      <CompartilhaAmigos />
      <Footer />
    </div>
  )
}

export default App;
