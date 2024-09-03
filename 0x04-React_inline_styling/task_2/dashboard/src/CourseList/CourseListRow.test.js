import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('Testing <CourseListRow />', () => {
  it('When isHeader is true and textSecondCell does not exist, the component renders one cell with colspan = 2', () => {
    let wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell='first cell test' />
    );
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toEqual('2');
    expect(wrapper.find('th').text()).toEqual('first cell test');
  });

  it('When isHeader is true and textSecondCell is present, the component renders two cells', () => {
    let wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell='first cell test'
        textSecondCell='second cell test'
      />
    );
    expect(wrapper.find('th')).toHaveLength(2);
    expect(wrapper.find('th').at(0).text()).toEqual('first cell test');
    expect(wrapper.find('th').at(1).text()).toEqual('second cell test');
  });

  it('When isHeader is false, the component renders correctly with two td elements within a tr element', () => {
    let wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell='first cell test'
        textSecondCell='second cell test'
      />
    );
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toEqual('first cell test');
    expect(wrapper.find('td').at(1).text()).toEqual('second cell test');
  });

  it('Applies the correct background color style for header rows', () => {
    let wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell='header cell' />
    );
    expect(wrapper.find('tr').prop('style')).toHaveProperty(
      'backgroundColor',
      '#deb5b545'
    );
  });

  it('Applies the correct background color style for non-header rows', () => {
    let wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell='first cell test'
        textSecondCell='second cell test'
      />
    );
    expect(wrapper.find('tr').prop('style')).toHaveProperty(
      'backgroundColor',
      '#f5f5f5ab'
    );
  });
});
