import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import { theme } from "@/theme/theme";
import TextComponent from "../Text";

export interface ButtonProps extends TouchableOpacityProps {
  buttonText: string;
  onPressButton: () => void;
  backgroundColor: keyof typeof theme.colors;
  textColor: keyof typeof theme.colors;
  buttonSize?: "small" | "medium" | "large";
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button = ({
  buttonText,
  onPressButton,
  backgroundColor,
  textColor,
  buttonSize = "medium",
  fullWidth = false,
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      id="custom-button"
      testID="custom-button"
      activeOpacity={0.9}
      {...rest}
      onPress={onPressButton}
      style={{
        flex: fullWidth ? 1 : 0,
        backgroundColor: theme.colors[backgroundColor].toString(),
        padding: buttonSize === "small" ? 5 : buttonSize === "medium" ? 10 : 15,
        borderRadius: 8,
        alignItems: "center",
        flexDirection: "row",
        width: fullWidth
          ? "100%"
          : buttonSize === "small"
          ? 100
          : buttonSize === "medium"
          ? 150
          : 200,
        height: buttonSize === "small" ? 40 : buttonSize === "medium" ? 50 : 60,
        justifyContent: "center",
      }}>
      {icon && <View style={{ marginRight: 10 }}>{icon}</View>}
      <TextComponent color={textColor} weight="bold">
        {buttonText}
      </TextComponent>
    </TouchableOpacity>
  );
};

export default Button;
