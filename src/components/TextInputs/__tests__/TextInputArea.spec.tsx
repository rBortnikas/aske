import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import TextInputArea from "../TextInputArea";

beforeEach(cleanup);

describe("<TextInputArea />", () => {
  it("text input is rendered", () => {
    const { getByTestId } = render(<TextInputArea />);
    expect(getByTestId("text-input-area")).toBeTruthy();
  });

  it("calls onChange when string is entered/changed", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<TextInputArea onChange={onChange} />);
    const inputField = getByTestId("text-input-area");
    fireEvent.change(inputField, {
      target: { value: "testy1" }
    });
    fireEvent.change(inputField, {
      target: { value: "testy2" }
    });
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it("calls onPressEnter when input is focused and enter is pressed", () => {
    const onPressEnter = jest.fn();
    const { getByTestId } = render(
      <TextInputArea onPressEnter={onPressEnter} />
    );
    const inputField = getByTestId("text-input-area");
    fireEvent.keyPress(inputField, {
      key: "Enter",
      code: 13,
      charCode: 13
    });
    expect(onPressEnter).toHaveBeenCalled();
  });
});
