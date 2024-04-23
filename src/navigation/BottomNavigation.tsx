import { View, Text } from "react-native";
import React from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { theme } from "@/theme/theme";
import HomeIcon from "@/assets/images/homeIconOutlined.svg";
import Home from "@/pages/Home/HomeScreen";
import ExercisesNavigation from "./ExercisesNavigation";

const bottomTabNavigationOptions: BottomTabNavigationOptions = {
  headerShown: false,

  tabBarStyle: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 10,
    marginHorizontal: 20,
    // Max Height...
    height: 70,
    borderRadius: 10,
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
    fontSize: theme.fontSize.text,
    fontFamily: theme.fontWeight.semibold,
  },
};

const BottomNavigation = () => {
  const BottomTabNavigation = createBottomTabNavigator();

  return (
    <BottomTabNavigation.Navigator screenOptions={bottomTabNavigationOptions}>
      <BottomTabNavigation.Screen
        name="Home"
        component={ExercisesNavigation}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <HomeIcon
                color={
                  focused ? theme.colors.primary : theme.colors.greyScale400
                }
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            );
          },
        }}
      />
      <BottomTabNavigation.Screen name="Leaderboard" component={View} />
      <BottomTabNavigation.Screen name="Challenge" component={View} />
      <BottomTabNavigation.Screen name="Premium" component={View} />
      <BottomTabNavigation.Screen name="Account" component={View} />
    </BottomTabNavigation.Navigator>
  );
};

export default BottomNavigation;
