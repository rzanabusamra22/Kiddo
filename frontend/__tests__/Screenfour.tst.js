import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Art from '../screens/art';

test('renders correctly', () => {
  const test = renderer.create(<Art />).toJSON();
  expect(test).toMatchSnapshot();
});