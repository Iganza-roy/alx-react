const notifications_data = require('../../notifications.json');

export function getAllNotificationsByUser(userId) {
  return notifications_data
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}
