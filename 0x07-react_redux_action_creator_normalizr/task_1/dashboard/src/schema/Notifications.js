import { normalize, schema } from 'normalizr';
const notifications_data = require('../../notifications.json');

const user = new schema.Entity('users');
const message = new schema.Entity(
  'message',
  {},
  {
    idAttribute: 'guid',
  }
);
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export const normalizedData = normalize(notifications_data, [notification]);

export function getAllNotificationsByUser(userId) {
  return notifications_data
    .filter(
      (notificationId) => notifications[notificationId].author.id === userId
    )
    .map((notificationId) => {
      const contextId = notifications[notificationId].context;
      return messages[contextId];
    });
}
