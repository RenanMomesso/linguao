import React from "react";
import {
  StackNavigationOptions,
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import SplashScreen from "@/pages/OnboardingScreens/SplashScreen/SplashScreen";
import WelcomeScreen from "@/pages/OnboardingScreens/WelcomeScreen/WelcomeScreen";
import SelectLanguageScreen from "@/pages/OnboardingScreens/SelectLanguageScreen/SelectLanguageScreen";
import ChooseLanguageScreen from "@/pages/OnboardingScreens/ChooseLanguageScreen/ChooseLanguageScreen";
import LanguageLevelScreen from "@/pages/OnboardingScreens/LanguageLevelScreen.tsx/LanguageLevelScreen";
import ReasonStudyScreen from "@/pages/OnboardingScreens/ReasonStudyScreen/ReasonStudyScreen";
import StudyTargetScreen from "@/pages/OnboardingScreens/StudyTargetScreen/StudyTargetScreen";
import OnboardingCompleted from "@/pages/OnboardingScreens/OnboardingCompleted/OnboardingCompleted";
import { NavigationStackProps } from "@/interface/navigation.interface";
import BottomNavigation from "./BottomNavigation";
import SigninScreen from "@/pages/OnboardingScreens/SigninScreen/SigninScreen";

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
        name="SigninScreen"
        component={SigninScreen}
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
