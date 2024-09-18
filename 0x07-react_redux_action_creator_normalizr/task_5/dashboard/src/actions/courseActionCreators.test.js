import { selectCourse, unselectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('Course action creators', () => {
  it('should create an action to select a course', () => {
    const expectedAction = {
      type: SELECT_COURSE,
      payload: { index: '1' },
    };
    const action = selectCourseAction(1);
    expect(action).toEqual(expectedAction);
  });

  it('should create an action to unselect a course', () => {
    const expectedAction = {
      type: UNSELECT_COURSE,
      payload: { index: 1 },
    };
    const action = unselectCourse(1);
    expect(action).toEqual(expectedAction);
  });
});
