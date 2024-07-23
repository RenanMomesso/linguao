import { Pressable, View } from "react-native";
import React from "react";
import { FlashCards } from "@/API";
import { theme } from "@/theme/theme";
import Text from "@/components/Text";
import { Column } from "@/theme/GlobalComponents";
import { useNavigation } from "@react-navigation/native";

const FlashCardItem = ({
  title,
  description,
  audioUrl,
  imageUrl,
  ...item
}: FlashCards) => {
  const { navigate } = useNavigation<any>();

  const handlePress = () => {
    navigate("CreateFlashCardModal", {
      title,
      description,
      audioUrl,
      imageUrl,
    });
  };

  return (
    <Pressable
      onPress={handlePress}
      style={{
        borderColor: "black",
        flex: 1,
        backgroundColor: theme.colors.greyScale200,
        elevation: 5,
        padding: 10,
        borderRadius: 12,
        overflow: "hidden",
        height:210
      }}>
      <View style={{ height: "50%" }}>
        <Text align="left" size="heading5" weight="bold">
          {title}
        </Text>
      </View>
      <Column style={{ alignItems: "flex-start" }}>
        <Text size="heading6" weight="black" align="left">
          Description
        </Text>
        <Text size="small" align="left" numberOfLines={3}>
          {description?.length && description.length > 150
            ? `${description.slice(0, 150)}...`
            : description}
        </Text>
      </Column>
    </Pressable>
  );
};

export default FlashCardItem;
