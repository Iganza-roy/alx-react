import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Footer from './Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });
  it('renders Login component when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(Login).exists()).toBe(true);
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  it('renders CourseList component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login).exists()).toBe(false);
    expect(wrapper.find(CourseList).exists()).toBe(true);
  });

  it('calls logOut and shows alert when Control + h is pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    window.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();

    alertMock.mockRestore();
  });
});
