import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a div with the class App-header', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('div.App-header').exists()).toBe(true);
  });

  it('renders a div with the class App-body', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('div.App-body').exists()).toBe(true);
  });

  it('renders a div with the class App-footer', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('div.App-footer').exists()).toBe(true);
  });
});
