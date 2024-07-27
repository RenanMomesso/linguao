import React from "react";
import { TouchableOpacity, View } from "react-native";
import Avatar from "@/components/Avatar/Avatar";
import Text from "@/components/Text";
import { Column, Row } from "@/theme/GlobalComponents";
import { theme } from "@/theme/theme";
import styled from "styled-components/native";

const AvatarWithDetails = () => {
  return (
    <Row>
      <Avatar size="medium" />
      <Column
        style={{
          alignItems: "flex-start",
          justifyContent: "space-around",
          gap: 4,
        }}>
        <Text weight="black">George Lobko</Text>
        <Text size="tiny" color="greyScale600" weight="regular">
          2 hours ago
        </Text>
      </Column>
      <MenuButton>
        <MenuDot />
        <MenuDot />
      </MenuButton>
    </Row>
  );
};

const MenuButton = styled(TouchableOpacity)`
  margin-left: auto;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  align-items: center;
  border-width: 1px;
  padding: 6px;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  border-color: ${theme.colors.greyScale400};
`;

const MenuDot = styled(View)`
  height: 6px;
  width: 6px;
  border-radius: 50px;
  background-color: black;
`;

export default AvatarWithDetails;
