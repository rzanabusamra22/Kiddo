import 'react-native';
import React from 'react'
import App from '../App';
import '../__mocks__/matchMedia';
import { render } from '@testing-library/react-native';

it('renders correctly', () => {
  render(<App />);
});
