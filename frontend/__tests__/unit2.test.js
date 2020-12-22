/**
* @jest-environment jsdom
*/

import '../__mocks__/mocks';
import React from 'react'
import { render } from '@testing-library/react-native';
import { act } from 'react-test-renderer';
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import '@react-native-community/async-storage/jest/async-storage-mock';
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
import Video from '../screens/video';

test('renders correctly', async () => {
  const test = render(<Provider store={mockStore({})}><Video /></Provider>).toJSON()
  await act(async () => {expect(test).toMatchSnapshot();})
});