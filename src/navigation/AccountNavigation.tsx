import React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import AccountScreen from "@/pages/AccountScreens/AccountScreen/AccountScreen";
import AccountSettings from "@/pages/AccountScreens/AccountSettings/AccountSettings";

const accountNavigationOptions: StackNavigationOptions = {
  headerShown: false,
};
const AccountNavigation = () => {
  const AccountNavigationStack = createStackNavigator();

  return (
    <AccountNavigationStack.Navigator screenOptions={accountNavigationOptions}>
      <AccountNavigationStack.Screen name="Account" component={AccountScreen} />
      <AccountNavigationStack.Screen name="AccountSettings" component={AccountSettings} />
    </AccountNavigationStack.Navigator>
  );
};

export default AccountNavigation;
