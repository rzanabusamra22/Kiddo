// __tests__/unit1.test.js

/**
 * @jest-environment jsdom
 */

import React from "react";
import "../__mocks__/mocks";
import thunk from "redux-thunk";
import Videos from "../screens/Videos";
import { Provider } from "react-redux";
import { act } from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import { render } from "@testing-library/react-native";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Unit test for a list render with database GET fetch connection
test("renders correctly", async () => {
  const test = render(
    <Provider store={mockStore({})}>
      <Videos />
    </Provider>
  ).toJSON();
  await act(async () => {
    expect(test).toMatchSnapshot();
  });
});
