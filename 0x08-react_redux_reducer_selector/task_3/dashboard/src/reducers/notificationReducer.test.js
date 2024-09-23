import notificationReducer from '../reducers/notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the default state', () => {
    const newState = notificationReducer(undefined, {});
    expect(newState).toEqual({
      notifications: [],
      filter: 'DEFAULT',
    });
  });
  it('should handle FETCH_NOTIFICATIONS_SUCCESS and return the data with isRead set to false', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' },
      ],
    };

    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: false,
        },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };

    const newState = notificationReducer(undefined, action);
    expect(newState).toEqual(expectedState);
  });
  it('should handle MARK_AS_READ and mark the correct notification as read', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: false,
        },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };

    const action = {
      type: MARK_AS_READ,
      index: 2,
    };

    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: false,
        },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: true }, // isRead updated to true
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };

    const newState = notificationReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });
  it('should handle SET_TYPE_FILTER and update the filter correctly', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: false,
        },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };

    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    };

    const expectedState = {
      filter: 'URGENT',
      notifications: [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: false,
        },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };

    const newState = notificationReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });
});
