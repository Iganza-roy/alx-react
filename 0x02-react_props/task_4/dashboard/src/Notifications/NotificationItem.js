import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
  return (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={html ? html : undefined}
    >
      {!html && value}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;
