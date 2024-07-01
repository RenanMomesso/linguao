import React from "react";
import { render } from "@testing-library/react-native";
import CustomInput from "./Input"; // Adjust the import path as necessary

describe("CustomInput", () => {
  it("renders a text input correctly", () => {
    const { getByPlaceholderText } = render(
      <CustomInput type="text" placeholder="Enter text" />
    );

    const input = getByPlaceholderText("Enter text");
    expect(input).toBeTruthy();
  });

  it("renders a textarea correctly", () => {
    const { getByPlaceholderText } = render(
      <CustomInput type="textarea" placeholder="Enter multiline text" />
    );

    const textarea = getByPlaceholderText("Enter multiline text");
    expect(textarea).toBeTruthy();
  });

  it("applies correct styles for text input", () => {
    const { getByPlaceholderText } = render(
      <CustomInput type="text" placeholder="Enter text" />
    );

    const input = getByPlaceholderText("Enter text");
    expect(input.props.multiline).toBe(false);
    expect(input.props.numberOfLines).toBe(1);
  });

  it("applies correct styles for textarea", () => {
    const { getByPlaceholderText } = render(
      <CustomInput type="textarea" placeholder="Enter multiline text" />
    );

    const textarea = getByPlaceholderText("Enter multiline text");
    expect(textarea.props.multiline).toBe(true);
    expect(textarea.props.numberOfLines).toBe(10);
  });
});
