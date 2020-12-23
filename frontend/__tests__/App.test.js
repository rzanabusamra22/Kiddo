// __tests__/App.test.js

/**
 * @jest-environment jsdom
 */

import App from "../App";
import React from "react";
import "../__mocks__/mocks";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { act } from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import { render } from "@testing-library/react-native";
import "@react-native-community/async-storage/jest/async-storage-mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// End-End test to test the entire project frontent
it("renders correctly", async () => {
  const test = render(
    <Provider store={mockStore({})}>
      <App />
    </Provider>
  ).toJSON();
  await act(async () => {
    expect(test).toMatchSnapshot();
  });
});
