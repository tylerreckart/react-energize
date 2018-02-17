import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Energize from '../src';

const initialState = {
  count: 0,
};

test('Component recieves injected state', () => {
  const Component = Energize(<div />, initialState);

  const wrapper = shallow(<Component />);

  expect(wrapper.props().state.count).toEqual(initialState.count);
});
