import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropeTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <>
        <div className={css(styles.menuItem)}>Your notifications</div>
        {this.props.displayDrawer ? (
          <div className={css(styles.notifications)}>
            <button
              className={css(styles.closeButton)}
              aria-label='Close'
              onClick={(e) => {
                console.log('Close button has been clicked');
              }}
            >
              <img src={closeIcon} alt='close icon' width='15px' />
            </button>
            {this.props.listNotifications.length !== 0 ? (
              <p>Here is the list of notifications</p>
            ) : null}
            <ul>
              {this.props.listNotifications.length === 0 ? (
                <NotificationItem
                  type='default'
                  value='No new notification for now'
                />
              ) : null}
              {this.props.listNotifications.map((val, idx) => {
                return (
                  <NotificationItem
                    type={val.type}
                    value={val.value}
                    html={val.html}
                    key={val.id}
                    markAsRead={this.markAsRead}
                    id={val.id}
                  />
                );
              })}
            </ul>
          </div>
        ) : null}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropeTypes.bool,
  listNotifications: PropeTypes.arrayOf(NotificationItemShape),
};

const styles = StyleSheet.create({
  menuItem: {
    position: 'absolute',
    top: '7px',
    right: '7px',
  },
  notifications: {
    border: '3px dotted var(--holberton-red)',
    padding: '6px 12px',
    position: 'absolute',
    top: '21px',
    right: '7px',
    marginTop: '12px',
    zIndex: 100,
  },
  closeButton: {
    color: '#3a3a3a',
    fontWeight: 'bold',
    background: 'none',
    border: 'none',
    fontSize: '15px',
    position: 'absolute',
    right: '3px',
    top: '3px',
    cursor: 'pointer',
    outline: 'none',
  },
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'var(--holberton-red)',
  },
});

export default Notifications;
