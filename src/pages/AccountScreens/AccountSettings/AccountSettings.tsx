import { View, Text } from "react-native";
import React from "react";
import AccountLayout from "@/layouts/AccountLayout";
import GoBack from "@/components/GoBack/GoBack";
import { useNavigation } from "@react-navigation/native";

const AccountSettings = () => {

    const navigation = useNavigation();

    const handleLogout = () => {
        navigation.navigate("Login");
    
    }

  return (
    <AccountLayout>
      <GoBack />
      <Text onPress={handleLogout}>Logout</Text>
    </AccountLayout>
  );
};

export default AccountSettings;
