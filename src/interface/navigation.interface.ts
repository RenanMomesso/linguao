import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";

export type NavigationStackProps = {
  SplashScreen: undefined;
  WelcomeScreen: undefined;
  SelectLanguageScreen: undefined;
  ChooseLanguageScreen: undefined;
  LanguageLevelScreen: undefined;
  ReasonStudyScreen: undefined;
  StudyTargetScreen: undefined;
  OnboardingCompleted: undefined;
  UserNavigations: undefined
};

export type AuthenticationStack = StackNavigationProp<NavigationStackProps>;

export type NavigationBottomProps = {
  Home?: undefined;
  Discover?: undefined;
  Wishlist?: undefined;
  Purchased?: undefined;
  Account?: undefined;
};

export type ExercisesStackProps = {
  Home: undefined;
  ExercicesLoading: undefined;
  TranslateSentenceScreen: undefined
  SpeakTheSentenceScreen: undefined
  WhatDoesTheAudioSayScreen: undefined
  WhatDoesTheSentenceSayScreen: undefined
  FillInTheBlanksScreen: undefined
  MatchWordPairScreen: undefined
  SelectTheCorrectImageScreen: undefined
}

export type ExercisesStack = StackNavigationProp<ExercisesStackProps>;

export type BottomNavigationStack =
  BottomTabNavigationProp<NavigationBottomProps>;

export type NavigationProps = AuthenticationStack & BottomNavigationStack & ExercisesStack;
