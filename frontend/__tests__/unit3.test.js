// __tests__/unit3.test.js

/**
 * @jest-environment jsdom
 */

import React from "react";
import "../__mocks__/mocks";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { act } from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import DrawerContent from "../screens/DrawerContent";
import { render } from "@testing-library/react-native";
import "@react-native-community/async-storage/jest/async-storage-mock";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Unit test to test a screen with icons and animation
test("renders correctly", async () => {
  const test = render(
    <Provider store={mockStore({})}>
      <SafeAreaProvider>
        <DrawerContent />
      </SafeAreaProvider>
    </Provider>
  ).toJSON();
  await act(async () => {
    expect(test).toMatchSnapshot();
  });
});
