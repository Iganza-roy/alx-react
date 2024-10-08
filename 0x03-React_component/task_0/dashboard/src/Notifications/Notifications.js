import React from 'react';
import './Notifications.css';
import closeIcon from '../Assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

function Notifications({ displayDrawer = false, listNotifications = [] }) {
  return (
    <React.Fragment>
      {displayDrawer ? (
        <div className="'flex-area'">
          <div className='menuItem'>
            <p>Your notifications</p>
          </div>
          <div className='Notifications'>
            <ul>
              {listNotifications && listNotifications.length > 0 ? (
                listNotifications.map(({ id, html, type, value }) => (
                  <>
                    <NotificationItem
                      key={id}
                      type={type}
                      value={value}
                      html={html}
                    />
                  </>
                ))
              ) : (
                <div className=''>
                  <NotificationItem value='No new notification for now' />
                  <button
                    style={{
                      color: '#3a3a3a',
                      fontWeight: 'bold',
                      background: 'none',
                      border: 'none',
                      fontSize: '10px',
                      position: 'absolute',
                      right: '2px',
                      top: '2px',
                      cursor: 'pointer',
                    }}
                    aria-label='Close'
                    onClick={console.log('Close button has been clicked')}
                  >
                    <img src={closeIcon} alt='closeIcon' width='10px' />
                  </button>
                </div>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div className='menuItem'>
          <p>Your notifications</p>
        </div>
      )}
    </React.Fragment>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
