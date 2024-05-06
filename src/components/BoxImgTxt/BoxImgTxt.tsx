import {
  View,
  Text,
  Pressable,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import TextComponent from "../Text";
import { TouchableOpacity } from "react-native-gesture-handler";

interface BoxImgTxtProps {
  imgUrl: string;
  text: string;
}
const BoxImgTxt = ({ imgUrl, text }: BoxImgTxtProps) => {
  const { width } = useWindowDimensions();

  return (
    <TouchableOpacity
      style={{
        flexDirection: "column",
        gap: 10,
        borderWidth: 1,
        borderRadius: 12,
        width: width / 2 - 30,
      }}>
      <Image
        source={{ uri: imgUrl }}
        style={{
          width: '100%',
          height: 140,
          borderRadius: 10,
          marginBottom: 10,
        }}
      />
      <TextComponent size="heading4">{text}</TextComponent>
    </TouchableOpacity>
  );
};

export default BoxImgTxt;
