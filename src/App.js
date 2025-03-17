
import React from 'react';
import './App.css';
import Logo from './componentes/logo'
import perfil from '../src/images/perfil.svg'
import sacola from '../src/images/sacola.svg'


const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const icones = [perfil, sacola]

function App(){
  return(
    <div className='App'>
      <header className='app-header'>
        <Logo></Logo>
        <ul className='opcoes' >
          {textoOpcoes.map((texto) => (
            <li className='opcao'><p>{texto}</p> </li>
          ) )}
        </ul>

        <ul className='icones'>
            { icones.map( (icone) => (
              <li><img src={icone}></img></li>
            )) }
        </ul>
          
      </header>

    </div>
  )
}
export default App;

