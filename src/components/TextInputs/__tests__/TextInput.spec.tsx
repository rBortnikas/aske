import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import TextInput from "../TextInput";

beforeEach(cleanup);

describe("<TextInput />", () => {
  it("text input is rendered", () => {
    const { getByTestId } = render(<TextInput />);
    expect(getByTestId("text-input")).toBeTruthy();
  });

  it("calls onChange when string is entered/changed", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<TextInput onChange={onChange} />);
    const inputField = getByTestId("text-input");
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
    const { getByTestId } = render(<TextInput onPressEnter={onPressEnter} />);
    const inputField = getByTestId("text-input");
    fireEvent.keyPress(inputField, {
      key: "Enter",
      code: 13,
      charCode: 13
    });
    expect(onPressEnter).toHaveBeenCalled();
  });
});
