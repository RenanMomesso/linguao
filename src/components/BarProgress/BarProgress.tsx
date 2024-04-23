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

const ProgressStatus = styled.View<{ percentageStatus: number }>`
  width: ${({ percentageStatus }) => `${percentageStatus}%`};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`;

const BarProgress = ({
  percentageStatus,
  icon,
}: {
  percentageStatus: number;
  icon?: any;
}) => {
  const navigation = useNavigation();

  return (
    <Row style={{ gap: 50 }}>
      {icon ? icon : <ArrowLeftIcon onPress={() => navigation.goBack()} />}
      <ProgressContainer>
        <ProgressStatus percentageStatus={percentageStatus} />
      </ProgressContainer>
    </Row>
  );
};

export default BarProgress;
