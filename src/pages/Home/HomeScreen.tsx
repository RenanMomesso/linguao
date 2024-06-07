import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Container } from "@/theme/GlobalComponents";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import HomePlays from "./components/HomePlays/HomePlays";
import { theme } from "@/theme/theme";
import { useAppSelector } from "@/store";
import HomeMenuItem from "./components/HomeMenuItem/HomeMenuItem";


const Home = () => {
  const { homeMenuItem } = useAppSelector(state => state.ui);
  const homeItemOptions = {
    language: <HomeMenuItem />,
  };
  const HomeItem =
    homeMenuItem && homeItemOptions[homeMenuItem]
      ? homeItemOptions[homeMenuItem]
      : null;
  return (
    <Container backgroundColor="white">
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <HomeHeader />
      {HomeItem}
      <HomePlays />
    </Container>
  );
};

export default Home;
