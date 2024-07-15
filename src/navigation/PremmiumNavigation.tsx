import React from "react";
import {
  CardStyleInterpolators,
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";
import PremmiumScreen from "@/pages/PremmiumScreens/PremmiumScreen/PremmiumScreen";
import ChatWithAiScreen from "@/pages/PremmiumScreens/ChatWithAiScreen/ChatWithAiScreen";
import InstantaneousTranslationScreen from "@/pages/PremmiumScreens/InstantaneousTranslationScreen/InstantaneousTranslationScreen";
import CreateFlashCardModal from "@/pages/PremmiumScreens/CreateFlashCardModal/CreateFlashCardModal";

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
      <PremiumStack.Screen
        options={{
          headerShown: false,
          presentation: "modal",
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          cardStyle: { backgroundColor: "rgba(0,0,0,0.2)" },
        }}
        name="CreateFlashCardModal"
        component={CreateFlashCardModal}
      />
    </PremiumStack.Navigator>
  );
};

export default PremmiumNavigation;
