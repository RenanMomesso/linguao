import React from "react";
import { Row } from "@/theme/GlobalComponents";
import { theme } from "@/theme/theme";
import GoBack from "@/components/GoBack/GoBack";
import Avatar from "@/components/Avatar/Avatar";
import Text from "@/components/Text";

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
        backgroundColor: theme.colors.Blue,
        borderRadius: 12,
        elevation: 8,
      }}>
      <GoBack />
      <Text size="heading5">{aiName}</Text>
      <Avatar size={"small"} avatarUrl={aiAvatar} />
    </Row>
  );
};

export default HeaderChat;
