import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import CustomInput, { InputProps } from "./Input";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@/theme/theme";

// Extract color keys from the theme
type ColorKeys = keyof typeof theme.colors;

const CustomInputMeta: Meta<InputProps> = {
  title: "CustomInput",
  component: CustomInput,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "textarea"],
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text for the input field",
    },
    value: {
      control: { type: "text" },
      description: "Value of the input field",
    },
    onChangeText: {
      action: "changed text",
    },
  },
  args: {
    type: "text",
    placeholder: "Enter text here",
  },
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
};

export default CustomInputMeta;

export const TextType: StoryObj<InputProps> = {
  args: {
    type: "text",
    placeholder: "Enter text here",
  },
};

export const TextAreaType: StoryObj<InputProps> = {
  args: {
    type: "textarea",
    placeholder: "Enter multiline text here",
  },
};
