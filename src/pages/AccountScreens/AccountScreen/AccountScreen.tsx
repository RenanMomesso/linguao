import React, { useCallback } from "react";
import AccountLayout from "@/layouts/AccountLayout";
import { HR, Row } from "@/theme/GlobalComponents";
import TextComponent from "@/components/Text";
import { useNavigation } from "@react-navigation/native";
import { ShareIcon, SettingsIcon, LinguaoIconSmall } from "@/assets/images";
import { useAppSelector } from "@/store";
import useAccountScreen from "./useAccountScreen";
import Avatar from "@/components/Avatar/Avatar";

const AccountScreen = () => {
  const { user } = useAppSelector(state => state.user);
  const { userData, id } = useAccountScreen();

  const navigation = useNavigation();

  const handlePressSettings = () => {
    navigation.navigate("AccountSettings");
  };

  return (
    <AccountLayout>
      <Row>
        <LinguaoIconSmall />
        <TextComponent size="heading5" weight="bold">
          Account
        </TextComponent>
        <Row style={{ marginLeft: "auto" }}>
          <ShareIcon />
          <SettingsIcon onPress={handlePressSettings} />
        </Row>
      </Row>

      <Avatar avatarUrl={user.avatar} />

      <TextComponent size="heading3" weight="bold" style={{ marginTop: 20 }}>
        {user.name}
      </TextComponent>
      <TextComponent size="text" weight="regular" style={{ marginTop: 10 }}>
        Joined since 20 june 2020
      </TextComponent>
      <HR style={{ marginTop: 20 }} />
    </AccountLayout>
  );
};

export default AccountScreen;

