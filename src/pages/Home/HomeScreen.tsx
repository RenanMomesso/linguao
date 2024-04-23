import { View, Text } from "react-native";
import React from "react";
import { Container } from "@/theme/GlobalComponents";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import HomePlays from "./components/HomePlays/HomePlays";

const Home = () => {
  return (
    <Container backgroundColor="white">
      <HomeHeader />
      <HomePlays />
    </Container>
  );
};

export default Home;
