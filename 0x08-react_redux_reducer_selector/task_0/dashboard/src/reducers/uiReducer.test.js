import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const newState = uiReducer(undefined, {}); // No action passed
    expect(newState).toEqual(initialState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const action = {
      type: 'SELECT_COURSE', // An unrelated action
    };

    const newState = uiReducer(undefined, action); // Passing an unrelated action
    expect(newState).toEqual(initialState);
  });

  it('should change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const action = {
      type: DISPLAY_NOTIFICATION_DRAWER, // Action to show notification drawer
    };

    const expectedState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    };

    const newState = uiReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });
});
