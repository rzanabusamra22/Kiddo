import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Videos from '../screens/videos';

test('renders correctly', () => {
  const test = renderer.create(<Videos />).toJSON();
  expect(test).toMatchSnapshot();
});