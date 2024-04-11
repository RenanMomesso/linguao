import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Test from "@/components/Test";

const MainStackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Test} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
