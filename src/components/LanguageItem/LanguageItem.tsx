import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import TextComponent from "../Text";
import { theme } from "@/theme/theme";

const { width } = Dimensions.get("window");
interface LanguageItemProps {
  onPressItem: () => void;
  itemText: string;
  itemImage: string;
  selectedLanguage: {
    languages: string;
    flags: string;
  };
}
const LanguageItem = ({
  onPressItem,
  itemText,
  itemImage,
  selectedLanguage,
}: LanguageItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPressItem}
      style={{
        flexDirection: "row",
        borderWidth: selectedLanguage.languages === itemText ? 2 : 1,
        alignItems: "center",
        borderRadius: 24,
        width: width - 40,
        paddingHorizontal: 30,
        gap: 30,
        paddingVertical: 10,
        backgroundColor:
          selectedLanguage.languages === itemText
            ? theme.colors.primary100
            : theme.colors.white,
        borderColor:
          selectedLanguage.languages === itemText
            ? theme.colors.primary
            : theme.colors.greyScale300,
      }}>
      <Image
        source={{ uri: itemImage }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 30,
        }}
      />
      <TextComponent size="heading5" weight="bold">
        {itemText}
      </TextComponent>
    </TouchableOpacity>
  );
};

export default LanguageItem;
