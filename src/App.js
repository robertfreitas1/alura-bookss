
import './App.css';
import logo from './images/logo.svg'

function App() {
  return (
    <div className='App'>
      <header className='app-header'>
        <div className='logo'>
        <img src={logo} alt="Logo da Alura"/>
        <p> <strong>Alura </strong> Books</p>

        </div>
        
      </header>
    </div>
  );
}

export default App;
