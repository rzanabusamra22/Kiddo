import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Video from '../screens/video';

test('renders correctly', () => {
  const test = renderer.create(<Video />).toJSON();
  expect(test).toMatchSnapshot();
});