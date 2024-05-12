import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { theme } from "@/theme/theme";
import TextComponent from "../Text";

interface ButtonProps extends TouchableOpacityProps {
  buttonText: string;
  onPressButton: () => void;
  backgroundColor: keyof typeof theme.colors;
  textColor: keyof typeof theme.colors;
}

const Button = ({
  buttonText,
  onPressButton,
  backgroundColor,
  textColor,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      {...rest}
      onPress={onPressButton}
      style={{
        backgroundColor: theme.colors[backgroundColor].toString(),
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
      }}>
      <TextComponent color={textColor} weight="bold">
        {buttonText}
      </TextComponent>
    </TouchableOpacity>
  );
};

export default Button;
