import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

const initialState = {
  notifications: [],
  filter: 'DEFAULT',
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NOTIFICATIONS_SUCCESS':
      return {
        ...state,
        notifications: action.payload.map((notification) => ({
          ...notification,
          isReady: false,
        })),
      };

    case MARK_AS_READ:
      return {
        notifications: state.notifications.map((notification) =>
          notification.id === action.index
            ? { ...notification, idRead: true }
            : notification
        ),
      };
    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
};

export default notificationReducer;
