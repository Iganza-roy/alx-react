import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActions';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

describe('UI Action Creators', () => {
  it('should create an action to log in', () => {
    const email = 'user@example.com';
    const password = 'password123';
    const expectedAction = {
      type: LOGIN,
      user: { email, password },
    };
    const action = login(email, password);
    expect(action).toEqual(expectedAction);
  });

  it('should create an action to log out', () => {
    const expectedAction = {
      type: LOGOUT,
    };
    const action = logout();
    expect(action).toEqual(expectedAction);
  });

  it('should create an action to display the notification drawer', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    const action = displayNotificationDrawer();
    expect(action).toEqual(expectedAction);
  });

  it('should create an action to hide the notification drawer', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER,
    };
    const action = hideNotificationDrawer();
    expect(action).toEqual(expectedAction);
  });
});
