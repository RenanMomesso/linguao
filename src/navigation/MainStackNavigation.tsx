import React, { useEffect, useState } from "react";
import {
  StackNavigationOptions,
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
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
import CreateProfileScreen from "@/pages/OnboardingScreens/CreateProfileScreen/CreateProfileScreen";
import { getCurrentUser } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import { HubCallback } from "@aws-amplify/core";
import { useAppDispatch } from "@/store";
import { setLoading } from "@/store/reducer/uiReducer";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_USER_QUERY } from "../Apollo/queries";
import { GetUserQuery, GetUserQueryVariables } from "@/API";
import { load } from "react-native-track-player/lib/src/trackPlayer";
import { setGlobalUser } from "@/store/reducer/userReducer";

const mainStackNavigationOptions: StackNavigationOptions = {
  headerShown: false,
};
const MainStackNavigation = () => {
  const [getUserLazyQuery] = useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GET_USER_QUERY,
  );
  const [user, setUser] = useState<any>({});
  const dispatch = useAppDispatch();
  const Stack = createStackNavigator<NavigationStackProps>();
  let loggedOutScreens = undefined;

  if (!user?.userId) {
    loggedOutScreens = (
      <>
        <Stack.Screen
          name="SigninScreen"
          component={SigninScreen}
          options={{
            ...TransitionPresets.ModalFadeTransition,
          }}
        />
        <Stack.Screen
          name="CreateProfileScreen"
          component={CreateProfileScreen}
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
      </>
    );
  }

  if (user?.userId) {
    loggedOutScreens = (
      <Stack.Screen
        name="UserNavigations"
        component={BottomNavigation}
        options={{
          ...TransitionPresets.ModalFadeTransition,
        }}
      />
    );
  }

  useEffect(() => {
    const listener: HubCallback = data => {
      const { payload, channel, patternInfo, source } = data;
      console.log({ payload, channel, patternInfo, source });
      if (payload.event === "signOut") {
        getUser();
      }
      if (channel === "auth") {
        getUser();
      }
    };
    Hub.listen("auth", listener);
  }, []);

  const getUser = async () => {
    dispatch(setLoading(true));
    try {
      const userResponse = await getCurrentUser();
      const userId = userResponse?.userId;

      setUser(userResponse);
      if (!userId) return;
      const { data, error, loading } = await getUserLazyQuery({
        variables: { id: userId },
      });
      console.log("Data", data);
      if (!data?.getUser?.email) return;
      dispatch(setGlobalUser(data?.getUser as any));
    } catch (error) {
      setUser({});
      console.log("error getting user", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={mainStackNavigationOptions}>
      {loggedOutScreens}
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
