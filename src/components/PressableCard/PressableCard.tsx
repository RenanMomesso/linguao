import { View, Text, Pressable, Image, ImageRequireSource } from "react-native";
import React from "react";
import { TextContainer } from "../Text";
import { useNavigation } from "@react-navigation/native";

interface PressableCardProps {
  imgUrl: ImageRequireSource;
  title: string;
  navigationTo?: any;
}

const PressableCard = ({ imgUrl, title, navigationTo }: PressableCardProps) => {
  const navigation = useNavigation();
  const handlePressItem = () => {
    navigation.navigate(navigationTo || "ChatWithAiScreen");
  };
  return (
    <Pressable
      onPress={handlePressItem}
      style={{
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white",
        margin: 10,
        width: "42.5%",
      }}>
      <Image
        source={imgUrl}
        style={{
          height: 100,
          borderRadius: 10,
          width: 100,
        }}
      />
      <TextContainer weight="bold" color="primary">
        {title}
      </TextContainer>
    </Pressable>
  );
};

export default PressableCard;
