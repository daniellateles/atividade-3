import React from 'react'
import InputCustomizado from './components/inputCustomizado'
import './App.css'

function App() {

  return (
    <>
      <form id='formulario'>
        <h1>Entre em contato</h1>

          <div className='campos'>
            <label>Nome:</label>
            <InputCustomizado
              type="text"
              defaultValue="Seu Nome"
              placeholder="Digite seu nome"
            />
          </div>
          <div className='campos'>
            <label>Email:</label>
            <InputCustomizado
              type="email"
              defaultValue="email@exemplo.com"
              placeholder="Digite seu email"
            />
          </div>
          <div className='campos'>
            <label>Telefone:</label>
            <InputCustomizado
              type="number"
              defaultValue="1234567890"
              placeholder="Digite seu telefone"
            />
          </div>
          <div>
            <button type="submit">Fatec: Enviar Mensagem</button>
          </div>
      </form>
    </>
  )
}

export default App
