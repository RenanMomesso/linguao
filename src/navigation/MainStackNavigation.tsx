import { View, Text } from "react-native";
import React from "react";
import {
  StackNavigationOptions,
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Test from "@/components/Test";
import SplashScreen from "@/pages/SplashScreen/SplashScreen";
import WelcomeScreen from "@/pages/WelcomeScreen/WelcomeScreen";
import SelectLanguageScreen from "@/pages/SelectLanguageScreen/SelectLanguageScreen";

const mainStackNavigationOptions: StackNavigationOptions = {
  headerShown: false,
};
const MainStackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={mainStackNavigationOptions}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          ...TransitionPresets.ModalFadeTransition,
        }}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          ...TransitionPresets.ModalFadeTransition,
        }}
      />
      <Stack.Screen
        name="SelectLanguageScreen"
        component={SelectLanguageScreen}
        options={{
          ...TransitionPresets.ModalFadeTransition,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
