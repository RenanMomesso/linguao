// .storybook/stories/Button.stories.tsx
import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import MyButton, { ButtonProps } from "./Button";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@/theme/theme";

// Extract color keys from the theme
type ColorKeys = keyof typeof theme.colors;

const MyButtonMeta: Meta<ButtonProps> = {
  title: "Button-storybook",
  component: MyButton,
  argTypes: {
    onPressButton: {
      defaultValue: { action: "clicked" },
      description: "Function to be called when the button is pressed",
    },
    backgroundColor: {
      control: { type: "select" },
      options: Object.keys(theme.colors) as ColorKeys[],
    },
    textColor: {
      control: { type: "select" },
      options: Object.keys(theme.colors) as ColorKeys[],
    },
  },
  args: {
    buttonText: "Hello worldasdasdasd",
    onPressButton: () => {},
    backgroundColor: "primary",
    textColor: "secondary",
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

export default MyButtonMeta;

export const MainButtonStoryBook: StoryObj<ButtonProps> = {};

export const MainExample: StoryObj<ButtonProps> = {
  args: {
    buttonText: "Custom Button",
    onPressButton: () => {},
    backgroundColor: "primary",
    textColor: "secondary",
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
  storyName: "Button Example",
};
