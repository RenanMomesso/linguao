import React from "react";
import { Container } from "@/theme/GlobalComponents";
import AvatarWithDetails from "./AvatarWithDetails";
import PostContent from "./PostContent";
import PostActions from "./PostActions";
import styled from "styled-components/native";
import { Pressable } from "react-native";

const FeedPostItem = () => {
  return (
    <StyledContainer onPress={() => console.warn("clickou no conteudo")} padding={12}>
      <AvatarWithDetails />
      <PostContent />
      <PostActions />
    </StyledContainer>
  );
};

const StyledContainer = styled(Pressable)<any>`
  border-radius: 16px;
  max-height: 430px;
  background-color: #dfebff;
  padding: 10px;
  flex: 1;
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor || "greyScale100"]};
  position: relative;
  padding: ${({ padding }) => (padding ? padding : 0)}px;
  elevation:4;
  margin-horizontal:2px;
`;

export default FeedPostItem;
