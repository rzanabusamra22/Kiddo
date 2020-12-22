/**
* @jest-environment jsdom
*/

import '../__mocks__/mocks';
import React from 'react'
import { render } from '@testing-library/react-native';
import { act } from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import '@react-native-community/async-storage/jest/async-storage-mock';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
import DrawerContent from '../screens/DrawerContent';

test('renders correctly', async () => {
  const test = render(<Provider store={mockStore({})}><SafeAreaProvider><DrawerContent /></SafeAreaProvider></Provider>).toJSON();
  await act(async () => {expect(test).toMatchSnapshot();})
});