import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders three NotificationItem components', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the text in the notifications', () => {
    const text = 'Here is the list of notifications';
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('p').text()).toBe(text);
  });

  it('first NotificationItem element renders the correct html', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const firstNotification = wrapper.find(NotificationItem).first();

    expect(firstNotification.prop('type')).toBe('default');
    expect(firstNotification.prop('value')).toBe('New course available');
  });

  it('third NotificationItem element renders the correct html with dangerouslySetInnerHTML', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const thirdNotification = wrapper.find(NotificationItem).at(2);

    expect(thirdNotification.prop('type')).toBe('urgent');
    expect(thirdNotification.prop('html')).toEqual({ __html: '<u>test</u>' });
  });

  it('menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem').text()).toBe('Your notifications');
  });

  it('div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });

  it('menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').text()).toBe('Your notifications');
  });

  it('div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });
});
