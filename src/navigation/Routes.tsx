import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigation from "./MainStackNavigation";
import { useAppSelector } from "@/store";
import LoadingIcon from "@/components/Loading/Loading";

const Routes = () => {
  const loading = useAppSelector(state => state.ui.loading);
  return (
    <NavigationContainer>
      {loading && <LoadingIcon />}
      <MainStackNavigation />
    </NavigationContainer>
  );
};

export default Routes;
