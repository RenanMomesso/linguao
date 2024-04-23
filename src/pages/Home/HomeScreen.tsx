import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Container } from "@/theme/GlobalComponents";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import HomePlays from "./components/HomePlays/HomePlays";
import { theme } from "@/theme/theme";

const Home = () => {
  return (
    <Container backgroundColor="white">
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
      <HomeHeader />
      <HomePlays />
    </Container>
  );
};

export default Home;
