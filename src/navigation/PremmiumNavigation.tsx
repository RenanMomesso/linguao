import React from "react";
import { StackNavigationOptions, createStackNavigator } from "@react-navigation/stack";
import PremmiumScreen from "@/pages/PremmiumScreens/PremmiumScreen/PremmiumScreen";
import ChatWithAiScreen from "@/pages/PremmiumScreens/ChatWithAiScreen/ChatWithAiScreen";

const PremiumStack = createStackNavigator();
const premmiumNavigationOptions: StackNavigationOptions = {
    headerShown: false,
}
const PremmiumNavigation = () => {
  return (
    <PremiumStack.Navigator screenOptions={premmiumNavigationOptions}> 
      <PremiumStack.Screen name="Premium" component={PremmiumScreen} />
      <PremiumStack.Screen name="ChatWithAi" component={ChatWithAiScreen} />
    </PremiumStack.Navigator>
  );
};

export default PremmiumNavigation;
