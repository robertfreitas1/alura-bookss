
import React from 'react';
import './App.css';
import logo from './images/logo.svg'

function App(){
  return(
    <div className='App'>
      <header className='app-header'>
        <div className='logo'>
        <img src={logo} className="App-logo" alt="logo" />

          <p> <strong>Alura</strong> Books </p>

        </div>
      </header>

    </div>
  )
}
export default App

