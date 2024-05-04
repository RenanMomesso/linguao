import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import TextComponent from "../Text";
import DiamondIcon from "@/assets/images/DiamondIcon.svg";
import { Row } from "@/theme/GlobalComponents";

export const ItemInfoContainer = styled.View`
  width: 100%;
`;

export const ItemInfoTop = styled.View`
  background-color: blue;
  width: 100%;
  height: 62px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const ItemInfoBottom = styled.View`
  background-color: white;
  width: 100%;
  /* height: 62px; */
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-width: 1px;
  border-color: blue;
  padding: 10px 0px;
`;

const ItemInfo = () => {
  return (
    <ItemInfoContainer>
      <ItemInfoTop>
        <TextComponent color="white" weight="bold" size="heading4">
          Diamond
        </TextComponent>
      </ItemInfoTop>
      <ItemInfoBottom>
        <Row>
          <DiamondIcon width={40} height={40} />
          <TextComponent color="greyScale900" size="heading4">100</TextComponent>
        </Row>
      </ItemInfoBottom>
    </ItemInfoContainer>
  );
};

export default ItemInfo;
