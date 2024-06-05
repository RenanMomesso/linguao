import { Image, Pressable, Text, View } from "react-native";
import React, { useCallback } from "react";
import AccountLayout from "@/layouts/AccountLayout";
import { HR, Row } from "@/theme/GlobalComponents";
import LinguaoIconSvg from "@/assets/images/LinguaoIconSmall.svg";
import TextComponent from "@/components/Text";
import EditIconSvg from "@/assets/images/EditIcon.svg";
import { useNavigation } from "@react-navigation/native";
import ShareIcon from "@/assets/images/ShareIcon.svg";
import SettingsIcon from "@/assets/images/SettingsIcon.svg";
import { useAppSelector } from "@/store";
import useAccountScreen from "./useAccountScreen";
import Avatar from "@/components/Avatar/Avatar";

const AccountScreen = () => {
  const { user } = useAppSelector(state => state.user);
  const { userData, id } = useAccountScreen();
  console.log("🚀 ~ AccountScreen ~ data:", userData);
  const navigation = useNavigation();
  const handlePressSettings = () => {
    navigation.navigate("AccountSettings");
  };

  const [changeState, setChangeState] = React.useState(false);

  const changeStatFunction = useCallback(() => {
    setChangeState(t => !t);
  }, []);

  return (
    <AccountLayout>
      <Row>
        <LinguaoIconSvg />
        <TextComponent size="heading5" weight="bold">
          Account
        </TextComponent>
        <Row style={{ marginLeft: "auto" }}>
          <ShareIcon />
          <SettingsIcon onPress={handlePressSettings} />
        </Row>
      </Row>
      <Pressable onPress={changeStatFunction}>
        <TextComponent>Change</TextComponent>
      </Pressable>
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
