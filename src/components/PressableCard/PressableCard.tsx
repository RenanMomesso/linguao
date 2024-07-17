import { View, Text, Pressable, Image, ImageRequireSource } from "react-native";
import React from "react";
import { TextContainer } from "../Text";
import { useNavigation } from "@react-navigation/native";
import {
  PremmiumStack,
  PremmiumStackProps,
} from "@/interface/navigation.interface";
import { useAppDispatch } from "@/store";
import { toggleBottomNavigation } from "@/store/reducer/uiReducer";

interface PressableCardProps {
  imgUrl: ImageRequireSource;
  title: string;
  navigationTo?: keyof PremmiumStackProps;
}

const PressableCard = ({
  imgUrl,
  title,
  navigationTo = "ChatWithAi",
}: PressableCardProps) => {
  const navigation = useNavigation<PremmiumStack>();
  const appDispatch = useAppDispatch();
  const handlePressItem = () => {
    navigation.navigate(navigationTo);
    appDispatch(toggleBottomNavigation(false));
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
          height: 60,
          borderRadius: 10,
          width: 60,
        }}
      />
      <TextContainer weight="bold" color="primary">
        {title}
      </TextContainer>
    </Pressable>
  );
};

export default PressableCard;
