import React from "react";
import { render, fireEvent, within } from "@testing-library/react-native";
import Button from "./Button"; // Adjust the import path as necessary
import { ThemeProvider } from "styled-components/native";
import { theme } from "@/theme/theme";
import "jest-styled-components";
import '@testing-library/jest-native/extend-expect';

describe("Button", () => {
  const mockOnPress = jest.fn();

  const renderWithTheme = (children: React.ReactNode) => {
    return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
  };

  it("renders the button with the correct text", () => {
    const { getByText } = renderWithTheme(
      <Button
        buttonText="Click me"
        onPressButton={mockOnPress}
        backgroundColor="primary"
        textColor="secondary"
      />,
    );

    const buttonText = getByText("Click me");
    expect(buttonText).toBeTruthy();
  });

  it("applies the correct background and text colors", () => {
    const { getByTestId } = renderWithTheme(
      <Button
        buttonText="Click me"
        onPressButton={mockOnPress}
        backgroundColor="primary"
        textColor="secondary"
      />,
    );

    const button = getByTestId("custom-button");
    expect(button).toHaveStyle({ backgroundColor: theme.colors.primary });
    const { getByText } = within(button);
    expect(getByText("Click me")).toHaveStyle({ color: theme.colors.secondary });
  });

  it("calls the onPressButton function when pressed", () => {
    const { getByTestId } = renderWithTheme(
      <Button
        buttonText="Click me"
        onPressButton={mockOnPress}
        backgroundColor="primary"
        textColor="secondary"
      />,
    );

    const button = getByTestId("custom-button");
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });
});
