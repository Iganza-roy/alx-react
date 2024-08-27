import React from 'react';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils';
import closeIcon from '../Assets/close-icon.png';
import PropTypes from 'prop-types';
import './Notifications.css';

function Notifications({ displayDrawer }) {
  return (
    <>
      <div className='menuItem'>Your notifications</div>
      {displayDrawer && (
        <div className='Notifications'>
          <p>Here is the list of notifications</p>
          <button
            style={{
              float: 'right',
              marginTop: '-40px',
              backgroundColor: '#fff',
              border: 'none',
            }}
            aria-label='Close'
          >
            <img src={closeIcon} alt='close' />
          </button>
          <ul>
            <NotificationItem type='default' value='New course available' />
            <NotificationItem type='urgent' value='New resume available' />
            <NotificationItem
              type='urgent'
              html={{ __html: getLatestNotification() }}
            />
          </ul>
        </div>
      )}
    </>
  );
}

// PropTypes for the Notifications component
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

// Default props
Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
