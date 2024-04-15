import { View, Text } from "react-native";
import React from "react";
import ArrowLeftIcon from "@/assets/images/ArrowLeft.svg";
import styled from "styled-components/native";
import { Row } from "@/theme/GlobalComponents";
import { useNavigation } from "@react-navigation/native";

const ProgressContainer = styled.View`
  flex-direction: row;
  width: 200px;
  height: 8px;
  background-color: gray;
  border-radius: 8px;
`;

const ProgressStatus = styled.View`
  width: 20px;
  height: 100%;
  background-color: red;
  border-radius: 8px;
`;

const BarProgress = () => {
  const navigation = useNavigation();

  return (
    <Row style={{gap:50}}>
      <ArrowLeftIcon onPress={() => navigation.goBack()} />
      <ProgressContainer>
        <ProgressStatus />
      </ProgressContainer>
    </Row>
  );
};

export default BarProgress;
