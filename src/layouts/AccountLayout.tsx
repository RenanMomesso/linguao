import { View, Text } from "react-native";
import React from "react";
import { Container } from "@/theme/GlobalComponents";

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container backgroundColor="white" style={{ padding: 20 }}>
      {children}
    </Container>
  );
};

export default AccountLayout;
