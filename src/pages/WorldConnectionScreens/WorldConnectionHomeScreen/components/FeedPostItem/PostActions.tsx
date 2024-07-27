import React from "react";
import { Row } from "@/theme/GlobalComponents";
import Text from "@/components/Text";
import { CommentIcon, LikeIcon } from "@/assets/images";
import Avatar from "@/components/Avatar/Avatar";
import styled from "styled-components/native";

const PostActions = () => {
  return (
    <ActionsRow>
      <Row>
        <Avatar size="tiny" />
        <Text color="greyScale500">10</Text>
      </Row>
      <Row style={{ marginLeft: 20 }}>
        <Text color="black" size="heading6">
          5
        </Text>
        <StyledCommentIcon height={20} width={20} />
      </Row>
      <Row style={{ marginLeft: "auto" }}>
        <Text color="greyScale900" style={{right:-4}}>11</Text>
        <LikeIcon height={20} width={20} onPress={() => console.warn("pressed on like")} />
      </Row>
    </ActionsRow>
  );
};

const ActionsRow = styled(Row)`
  margin-top: 12px;
`;

const StyledCommentIcon = styled(CommentIcon)`
  top: 1px;
  left: -5px;
`;

export default PostActions;
