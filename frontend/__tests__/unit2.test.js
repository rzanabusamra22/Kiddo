// __tests__/unit2.test.js

/**
 * @jest-environment jsdom
 */

import React from "react";
import "../__mocks__/mocks";
import thunk from "redux-thunk";
import Video from "../screens/Video";
import { Provider } from "react-redux";
import { act } from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import { render } from "@testing-library/react-native";
import "@react-native-community/async-storage/jest/async-storage-mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Unit test for a webview render with database POST fetch connection
test("renders correctly", async () => {
  const test = render(
    <Provider store={mockStore({})}>
      <Video />
    </Provider>
  ).toJSON();
  await act(async () => {
    expect(test).toMatchSnapshot();
  });
});
