import React from "react";
import { Container } from "@/theme/GlobalComponents";
import { StatusBar, ColorSchemeName } from "react-native";
import { ColorsKeys, theme } from "@/theme/theme";

interface PremmiumLayoutProps {
  children: React.ReactNode;
  backgroundColor?: ColorsKeys;
}
const PremmiumLayout = ({ children, backgroundColor }: PremmiumLayoutProps) => {
  const colorScheme: ColorSchemeName = "light";
  return (
    <Container backgroundColor={backgroundColor} padding={20}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      {children}
    </Container>
  );
};

export default PremmiumLayout;
