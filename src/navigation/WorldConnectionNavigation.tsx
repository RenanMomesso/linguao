import React from "react";
import {
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";
import PremmiumScreen from "@/pages/PremmiumScreens/PremmiumScreen/PremmiumScreen";
import WorldConnectionHomeScreen from "@/pages/WorldConnectionScreens/WorldConnectionHomeScreen/WorldConnectionHomeScreen";
import { PostStack, PostStackProps } from "@/interface/navigation.interface";
import CreatePost from "@/pages/WorldConnectionScreens/CreatePostScreen/CreatePostScreen";

const WolrdConnectionStack = createStackNavigator<PostStackProps>();
const worldConnectionOptions: StackNavigationOptions = {
  headerShown: false,
};
const WorldConnectionNavigation = () => {
  return (
    <WolrdConnectionStack.Navigator screenOptions={worldConnectionOptions}>
      <WolrdConnectionStack.Screen
        name="WorldConnectionHomeScreen"
        component={WorldConnectionHomeScreen}
      />
      <WolrdConnectionStack.Screen
        name="CreatePost"
        component={CreatePost}
      />
    </WolrdConnectionStack.Navigator>
  );
};

export default WorldConnectionNavigation;
