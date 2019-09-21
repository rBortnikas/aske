import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import ActionButton from "../ActionButton";

beforeEach(cleanup);

describe("<ActionButton />", () => {
  it("button is rendered", () => {
    const { getByTestId } = render(
      <ActionButton label="testButton" onClick={() => {}} />
    );
    expect(getByTestId("action-button")).toBeTruthy();
  });

  it("calls onClick when clicked", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <ActionButton label="testButton" onClick={onClick} />
    );
    fireEvent.click(getByTestId("action-button"));
    expect(onClick).toHaveBeenCalled();
  });

  it("does nothing when disabled and clicked", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <ActionButton label="testButton" onClick={onClick} disabled />
    );
    fireEvent.click(getByTestId("action-button"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("displays a label", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <ActionButton label="testButton" onClick={onClick} />
    );
    expect(getByText("testButton")).toBeTruthy();
  });
});
