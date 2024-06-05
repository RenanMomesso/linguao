import React from "react";
import { AvatarContainer, AvatarEditIcon, AvatarImage } from "./Avatar.styles";

const imgPlaceholder = "https://via.placeholder.com/150";

const Avatar = ({}) => {
  console.log("avatar rendered");
  return (
    <AvatarContainer>
      <AvatarImage source={{ uri: imgPlaceholder }} />
      <AvatarEditIcon />
    </AvatarContainer>
  );
};

export default Avatar;
