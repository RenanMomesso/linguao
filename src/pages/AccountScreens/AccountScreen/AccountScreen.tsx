import { Image, Pressable, View } from "react-native";
import React from "react";
import AccountLayout from "@/layouts/AccountLayout";
import { HR, Row } from "@/theme/GlobalComponents";
import LinguaoIconSvg from "@/assets/images/LinguaoIconSmall.svg";
import TextComponent from "@/components/Text";
import EditIconSvg from "@/assets/images/EditIcon.svg";
import { useNavigation } from "@react-navigation/native";
import ShareIcon from "@/assets/images/ShareIcon.svg";
import SettingsIcon from "@/assets/images/SettingsIcon.svg";

const imgPlaceholder = "https://via.placeholder.com/150";
const AccountScreen = () => {
  const navigation = useNavigation();
  const handlePressSettings = () => {
    navigation.navigate("AccountSettings");
  };

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
      <View
        style={{
          backgroundColor: "red",
          width: 120,
          height: 120,
          borderRadius: 75,
          alignSelf: "center",
          marginTop: 30,
        }}>
        <Image
          source={{ uri: imgPlaceholder }}
          style={{
            width: 120,
            height: 120,
            borderRadius: 75,
            alignSelf: "center",
          }}
        />
        <EditIconSvg style={{ position: "absolute", bottom: 0, right: 10 }} />
      </View>

      <TextComponent size="heading3" weight="bold" style={{ marginTop: 20 }}>
        Renan Momesso
      </TextComponent>
      <TextComponent size="text" weight="regular" style={{ marginTop: 10 }}>
        Joined since 20 june 2020
      </TextComponent>
      <HR style={{marginTop:20}}/>
    </AccountLayout>
  );
};

export default AccountScreen;
