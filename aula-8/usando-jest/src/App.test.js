// import { render } from '@testing-library/react';
// import { shallow } from 'enzyme';

// it('renders without crashing', () => {
//   shallow(<App />);
// });

// it('renders welcome message', () => {
//   const wrapper = shallow(<App />);
//   const welcome = <h2>Welcome to React</h2>;
//   // expect(wrapper.contains(welcome)).toBe(true);
//   expect(wrapper.contains(welcome)).toEqual(true);
// });

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


import React from 'react';
import { mount } from 'enzyme';
import App from './App';


describe('App', () => {
  it('renders without crashing', () => {
    mount(<App />);
  });
})