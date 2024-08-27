import React from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header.js';
import './App.css';

function App() {
  return (
    <>
      <Notifications />
      <div className='App'>
        <Header />
        <hr />
        <div className='App-body'>
          <Login />
        </div>
        <hr />
        <div className='App-footer'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
