import { Text } from "react-native";
import React from "react";
import AccountLayout from "@/layouts/AccountLayout";
import GoBack from "@/components/GoBack/GoBack";
import { signOut } from "aws-amplify/auth";

const AccountSettings = () => {
  const handleLogout = async () => {
    await signOut({
      global: true,
    });
  };

  return (
    <AccountLayout>
      <GoBack />
      <Text onPress={handleLogout}>Logout</Text>
    </AccountLayout>
  );
};

export default AccountSettings;
