import courseReducer from '../reducers/courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('should return the default state as an empty array', () => {
    const newState = courseReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('should handle FETCH_COURSE_SUCCESS and return the data with isSelected false', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };

    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];

    const newState = courseReducer(undefined, action);
    expect(newState).toEqual(expectedState);
  });
  it('should handle SELECT_COURSE and set isSelected to true for the correct course', () => {
    const initialState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];

    const action = {
      type: SELECT_COURSE,
      index: 2,
    };

    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 }, // isSelected updated to true
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];

    const newState = courseReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });
  it('should handle UNSELECT_COURSE and set isSelected to false for the correct course', () => {
    const initialState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 }, // Initially selected
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];

    const action = {
      type: UNSELECT_COURSE,
      index: 2,
    };

    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];

    const newState = courseReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });
});
