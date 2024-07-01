import React from "react";
import { Row } from "@/theme/GlobalComponents";
import { theme } from "@/theme/theme";
import GoBack from "@/components/GoBack/GoBack";
import Avatar from "@/components/Avatar/Avatar";
import Text from "@/components/Text";
import { View } from "react-native";
import { SettingsOutlineIcon } from "@/assets/images";

interface HeaderChatProps {
  aiName: string;
  aiAvatar: string;
}
const HeaderChat = ({ aiName, aiAvatar }: HeaderChatProps) => {
  return (
    <Row
      style={{
        alignItems: "center",
        height: 60,
        borderRadius: 12,
        borderBottomWidth: 1,
        borderColor: theme.colors.greyScale200,
      }}>
      <GoBack />
      <Avatar size={"small"} avatarUrl={aiAvatar} />
      <Text size="heading6">{aiName}</Text>
      <SettingsOutlineIcon style={{
        marginLeft: "auto",
      }} />
    </Row>
  );
};

export default HeaderChat;
