// __tests__/unit4.test.js

/**
 * @jest-environment jsdom
 */

import React from "react";
import "../__mocks__/mocks";
import thunk from "redux-thunk";
import Art from "../screens/Art";
import { Provider } from "react-redux";
import { act } from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import { render } from "@testing-library/react-native";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Unit test to test a functional simple component
test("renders correctly", async () => {
  const test = render(
    <Provider store={mockStore({})}>
      <Art />
    </Provider>
  ).toJSON();
  await act(async () => {
    expect(test).toMatchSnapshot();
  });
});
