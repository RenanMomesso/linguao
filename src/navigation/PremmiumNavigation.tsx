import React from "react";
import {
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";
import PremmiumScreen from "@/pages/PremmiumScreens/PremmiumScreen/PremmiumScreen";
import ChatWithAiScreen from "@/pages/PremmiumScreens/ChatWithAiScreen/ChatWithAiScreen";
import InstantaneousTranslationScreen from "@/pages/PremmiumScreens/InstantaneousTranslationScreen/InstantaneousTranslationScreen";

const PremiumStack = createStackNavigator();
const premmiumNavigationOptions: StackNavigationOptions = {
  headerShown: false,
};
const PremmiumNavigation = () => {
  return (
    <PremiumStack.Navigator screenOptions={premmiumNavigationOptions}>
      <PremiumStack.Screen name="Premium" component={PremmiumScreen} />
      <PremiumStack.Screen name="ChatWithAi" component={ChatWithAiScreen} />
      <PremiumStack.Screen
        name="InstantaneousTranslationScreen"
        component={InstantaneousTranslationScreen}
      />
    </PremiumStack.Navigator>
  );
};

export default PremmiumNavigation;
