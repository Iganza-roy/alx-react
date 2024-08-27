import React from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import './App.css';

function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
      <div className='App'>
        <Header />
        <hr />
        <div className='App-body'>
          {isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <hr />
        <div className='App-footer'>
          <Footer />
        </div>
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
