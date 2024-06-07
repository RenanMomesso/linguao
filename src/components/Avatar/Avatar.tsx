import React, { memo } from "react";
import { AvatarContainer, AvatarEditIcon, AvatarImage } from "./Avatar.styles";

const imgPlaceholder = "https://via.placeholder.com/150";

interface AvatarProps {
  avatarUrl?: string | null | undefined;
  showEditIcon?: boolean;
}
const Avatar = ({
  avatarUrl = imgPlaceholder,
  showEditIcon = false,
}: AvatarProps) => {
  console.log("avatar rendered");
  return (
    <AvatarContainer>
      <AvatarImage source={{ uri: avatarUrl || imgPlaceholder }} />
      {showEditIcon && <AvatarEditIcon />}
    </AvatarContainer>
  );
};

export default memo(Avatar);
