/**
* @jest-environment jsdom
*/

import '../__mocks__/mocks';
import React from 'react'
import App from '../App';
import { render } from '@testing-library/react-native';
import { act } from 'react-test-renderer';




it('renders correctly', async () => {
  render(<App />);
  await act(async () => {})
});
