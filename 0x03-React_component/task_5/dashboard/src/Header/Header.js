import holberton_logo from '../Assets/holberton-logo.jpg';
import './Header.css';

const Header = () => {
  return (
    <div className='App-header'>
      <img src={holberton_logo} alt='logo' />
      <h1>School dashboard</h1>
    </div>
  );
};

export default Header;
