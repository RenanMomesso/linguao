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
import DumbbellsIcon from "@/assets/images/DumbbellsIcon.svg";
import TicketStar from "@/assets/images/TicketStar.svg";
import TicketStarActived from "@/assets/images/TicketStarIconActived.svg";
import TextComponent from "@/components/Text";
import TrainingStackNavigation from "./TrainingStackNavigation";

const bottomTabNavigationOptions: BottomTabNavigationOptions = {
  headerShown: false,

  tabBarStyle: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 10,
    marginHorizontal: 10,
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
    fontSize: 11,
    fontFamily: theme.fontWeight.semibold,
    marginBottom: 10,
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
                color={
                  focused ? theme.colors.primary : theme.colors.greyScale400
                }
                style={{}}
              />
            );
          },
          tabBarLabel(props) {
            return (
              <TextComponent
                color="primary"
                style={{ color: props.color, fontSize: 11, marginBottom: 10 }}>
                Training
              </TextComponent>
            );
          },
        }}
      />
      <BottomTabNavigation.Screen
        name="Challenge"
        component={View}
        options={{
          tabBarIcon: ({ focused }) => {
            return !focused ? <TicketStar /> : <TicketStarActived />;
          },
        }}
      />
      <BottomTabNavigation.Screen name="Premium" component={View} />
      <BottomTabNavigation.Screen name="Account" component={View} />
    </BottomTabNavigation.Navigator>
  );
};

export default BottomNavigation;
