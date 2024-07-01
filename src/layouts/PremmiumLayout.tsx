import React from "react";
import { Container } from "@/theme/GlobalComponents";
import { StatusBar, ColorSchemeName } from "react-native";
import { theme } from "@/theme/theme";

interface PremmiumLayoutProps {
  children: React.ReactNode;
}
const PremmiumLayout = ({ children }: PremmiumLayoutProps) => {
  const colorScheme: ColorSchemeName = "light";
  console.log("🚀 ~ PremmiumLayout ~ colorScheme:", colorScheme)
  return (
    <Container
      backgroundColor="primary"
      style={{
        padding: 20,
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      {children}
    </Container>
  );
};

export default PremmiumLayout;
