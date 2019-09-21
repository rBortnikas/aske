import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "../App";

beforeEach(cleanup);

describe("<App />", () => {
  it("app is rendered", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("application")).toBeTruthy();
  });
});
