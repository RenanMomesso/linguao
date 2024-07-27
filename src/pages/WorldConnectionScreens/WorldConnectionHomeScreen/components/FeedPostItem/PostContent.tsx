import React from "react";
import { Image } from "react-native";
import Text from "@/components/Text";
import { Row } from "@/theme/GlobalComponents";
import styled from "styled-components/native";

const PostContent = () => {
  return (
    <>
      <Row style={{ width: "90%", marginTop: 14 }}>
        <Text align="left" weight="bold" color="black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum, nunc in consequat vehicula, nunc odio tincidunt turpis,
          ac
        </Text>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <PostImage
          source={{
            uri: "https://cdn.leonardo.ai/users/cb5f23fc-275a-422e-9e2e-8ca00cd4d119/generations/c9e9587b-0361-413b-9afd-caacd4bc8b2e/Default_A_marvelously_intricate_cyborg_warrior_every_component_2.jpg",
          }}
        />
        <PostImage
          source={{
            uri: "https://cdn.leonardo.ai/users/cb5f23fc-275a-422e-9e2e-8ca00cd4d119/generations/f2228a50-23d7-4a0b-9778-85180ce6a76b/Default_design_a_mobile_screen_where_it_will_be_a_chat_message_3.jpg",
          }}
          style={{ flex: 1, resizeMode: "stretch" }}
        />
      </Row>
    </>
  );
};

const PostImage = styled(Image)`
  height: 150px;
  width: 120px;
  border-radius: 16px;
  resize-mode: cover;
`;

export default PostContent;
