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
import ChooseLanguageScreen from "@/pages/ChooseLanguageScreen/ChooseLanguageScreen";
import LanguageLevelScreen from "@/pages/LanguageLevelScreen.tsx/LanguageLevelScreen";
import ReasonStudyScreen from "@/pages/ReasonStudyScreen/ReasonStudyScreen";
import StudyTargetScreen from "@/pages/StudyTargetScreen/StudyTargetScreen";
import OnboardingCompleted from "@/pages/OnboardingCompleted/OnboardingCompleted";
import { NavigationStackProps } from "@/interface/navigation.interface";
import BottomNavigation from "./BottomNavigation";

const mainStackNavigationOptions: StackNavigationOptions = {
  headerShown: false,
};
const MainStackNavigation = () => {
  const Stack = createStackNavigator<NavigationStackProps>();
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
      <Stack.Screen
        name="ChooseLanguageScreen"
        component={ChooseLanguageScreen}
        options={{
          ...TransitionPresets.ModalFadeTransition,
        }}
      />
      <Stack.Screen
        name="LanguageLevelScreen"
        component={LanguageLevelScreen}
        options={{
          ...TransitionPresets.ModalFadeTransition,
        }}
      />
      <Stack.Screen
        name="ReasonStudyScreen"
        component={ReasonStudyScreen}
        options={{
          ...TransitionPresets.ModalFadeTransition,
        }}
      />
      <Stack.Screen
        name="StudyTargetScreen"
        component={StudyTargetScreen}
        options={{
          ...TransitionPresets.ModalFadeTransition,
        }}
      />
      <Stack.Screen
        name="OnboardingCompleted"
        component={OnboardingCompleted}
        options={{
          ...TransitionPresets.ModalFadeTransition,
        }}
      />
     
      <Stack.Screen
        name="UserNavigations"
        component={BottomNavigation}
        options={{
          ...TransitionPresets.ModalFadeTransition,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
