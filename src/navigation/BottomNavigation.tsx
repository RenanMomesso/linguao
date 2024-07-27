import { View, Text } from "react-native";
import React, { useEffect } from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { theme } from "@/theme/theme";
import HomeIcon from "@/assets/images/homeIconOutlined.svg";
import Home from "@/pages/Home/HomeScreen";
import ExercisesNavigation from "./ExercisesNavigation";
import DumbbellsIcon from "@/assets/images/DumbbellsIcon.svg";
import ProfileIcon from "@/assets/images/Profile.svg";
import StarIcon from "@/assets/images/StarIcon.svg";
import TicketStar from "@/assets/images/TicketStar.svg";
import TicketStarActived from "@/assets/images/TicketStarIconActived.svg";
import TextComponent from "@/components/Text";
import TrainingStackNavigation from "./TrainingStackNavigation";
import AccountNavigation from "./AccountNavigation";
import { getCurrentUser } from "aws-amplify/auth";
import PremmiumNavigation from "./PremmiumNavigation";
import { useAppSelector } from "@/store";
import LottieView from "lottie-react-native";
import { WordConnection } from "@/assets/json";
import WorldConnectionNavigation from "./WorldConnectionNavigation";

const bottomTabNavigationOptions: BottomTabNavigationOptions = {
  headerShown: false,

  tabBarStyle: {
    backgroundColor: "white",
    // Max Height...
    height: 70,
    // Shadow...
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },

    paddingHorizontal: 20,
  },
  tabBarLabelStyle: {
    display: "none",
  },
};

const BottomNavigation = () => {
  const BottomTabNavigation = createBottomTabNavigator();
  const { showBottomNavigation } = useAppSelector(state => state.ui);

  return (
    <BottomTabNavigation.Navigator
      screenOptions={{
        ...bottomTabNavigationOptions,
        tabBarStyle: showBottomNavigation
          ? bottomTabNavigationOptions.tabBarStyle
          : { position: "absolute", bottom: -1000 },
      }}>
      <BottomTabNavigation.Screen
        name="Home"
        component={ExercisesNavigation}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <HomeIcon
                height={30}
                width={30}
                color={
                  focused ? theme.colors.primary : theme.colors.greyScale400
                }
                style={{}}
              />
            );
          },
        }}
      />
      <BottomTabNavigation.Screen
        name="Training"
        component={TrainingStackNavigation}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <DumbbellsIcon
                height={50}
                width={50}
                color={
                  focused ? theme.colors.primary : theme.colors.greyScale400
                }
                style={{}}
              />
            );
          },
        }}
      />
      <BottomTabNavigation.Screen
        name="Challenge"
        component={WorldConnectionNavigation}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <LottieView
                source={WordConnection}
                autoPlay
                loop
                style={{ height: 50, width: 50 }}
              />
            );
          },
        }}
      />
      <BottomTabNavigation.Screen
        name="Premium"
        component={PremmiumNavigation}
        options={{
          tabBarIcon: ({ focused }) => {
            return !focused ? (
              <StarIcon height={30} width={30} />
            ) : (
              <StarIcon height={30} width={30} />
            );
          },
        }}
      />
      <BottomTabNavigation.Screen
        name="AccountNavigation"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ focused }) => {
            return !focused ? (
              <ProfileIcon height={35} width={35} />
            ) : (
              <ProfileIcon height={35} width={35} />
            );
          },
        }}
      />
    </BottomTabNavigation.Navigator>
  );
};

export default BottomNavigation;
