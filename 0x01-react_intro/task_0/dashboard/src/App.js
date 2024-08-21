import logo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  return (
    <div>
      <header className='App-header'>
        <img src={logo} alt='logo' />
        <h1>School dashboard</h1>
      </header>
      <hr />
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
      </body>
      <hr />
      <footer className='App-footer'>
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </footer>
    </div>
  );
}

export default App;
