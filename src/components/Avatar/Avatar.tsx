import React, { memo } from "react";
import { AvatarContainer, AvatarEditIcon, AvatarImage } from "./Avatar.styles";

const imgPlaceholder = "https://via.placeholder.com/150";

interface AvatarProps {
  avatarUrl?: string | null | undefined;
  showEditIcon?: boolean;
  size?: "small" | "medium" | "large" | "tiny";
}

const sizes = {
  tiny:25,
  small: 40,
  medium: 50,
  large: 160,
};
const Avatar = ({
  avatarUrl = imgPlaceholder,
  showEditIcon = false,
  size = "medium",
}: AvatarProps) => {
  return (
    <AvatarContainer>
      <AvatarImage
        source={{ uri: avatarUrl || imgPlaceholder }}
        style={{
          width: sizes[size],
          height: sizes[size],
        }}
      />
      {showEditIcon && <AvatarEditIcon />}
    </AvatarContainer>
  );
};

export default memo(Avatar);
