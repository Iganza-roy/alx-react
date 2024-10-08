import './Notifications.css';
import React from 'react';

const NotificationItem = ({ type, html, value }) => {
  return (
    <li data-notification-type={type}>
      {html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : value}
    </li>
  );
};

export default NotificationItem;
