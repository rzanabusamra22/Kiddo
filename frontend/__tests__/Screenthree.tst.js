import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import DrawerContent from '../screens/DrawerContent';

test('renders correctly', () => {
  const test = renderer.create(<DrawerContent />).toJSON();
  expect(test).toMatchSnapshot();
});