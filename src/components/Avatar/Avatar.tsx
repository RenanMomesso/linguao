import React, { memo } from "react";
import { AvatarContainer, AvatarEditIcon, AvatarImage } from "./Avatar.styles";

const imgPlaceholder = "https://via.placeholder.com/150";

interface AvatarProps {
  avatarUrl?: string | null | undefined;
}
const Avatar = ({ avatarUrl = imgPlaceholder }: AvatarProps) => {
  console.log("avatar rendered");
  return (
    <AvatarContainer>
      <AvatarImage source={{ uri: avatarUrl || imgPlaceholder }} />
      <AvatarEditIcon />
    </AvatarContainer>
  );
};

export default memo(Avatar);
