import React from "react";
import { Container } from "@/theme/GlobalComponents";
import { StatusBar } from "react-native";
import { theme } from "@/theme/theme";

interface PremmiumLayoutProps {
  children: React.ReactNode;
}
const PremmiumLayout = ({ children }: PremmiumLayoutProps) => {
  return (
    <Container
      backgroundColor="primary"
      style={{
        padding: 20,
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.Blue}
      />
      {children}
    </Container>
  );
};

export default PremmiumLayout;
