import { schema } from 'normalizr';
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

export function getAllNotificationsByUser(userId) {
  return notifications_data
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}
