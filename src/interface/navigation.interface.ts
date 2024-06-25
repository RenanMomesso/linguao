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
  UserNavigations: undefined;
  SigninScreen: undefined;
  CreateProfileScreen: undefined;
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
  HomePlay: undefined;
  ExercicesLoading: undefined;
  TranslateSentenceScreen: undefined;
  SpeakTheSentenceScreen: undefined;
  WhatDoesTheAudioSayScreen: undefined;
  WhatDoesTheSentenceSayScreen: undefined;
  FillInTheBlanksScreen: undefined;
  MatchWordPairScreen: undefined;
  SelectTheCorrectImageScreen: undefined;
  LessonCompletedScreen: undefined;
  SelectCorrectImgTextScreen: undefined;
  SelectCorrectlyAudioScreen: undefined;
};

export type TrainingStackProps = {
  Training: undefined;
  TrainingListening: undefined;
  TrainingReading: undefined;
  TrainingSpeaking: undefined;
  TrainingWriting: undefined;
  TrainingVideosScreenLevels: undefined;
  TrainingVideosScreen: {
    level: string;
  };
  TrainingVideoScreen: {
    videoUrl: string;
  };
};

export type TrainingStack = StackNavigationProp<TrainingStackProps>;
export type ExercisesStack = StackNavigationProp<ExercisesStackProps>;

export type BottomNavigationStack =
  BottomTabNavigationProp<NavigationBottomProps>;

export type NavigationProps = AuthenticationStack &
  BottomNavigationStack &
  ExercisesStack &
  TrainingStackProps;
