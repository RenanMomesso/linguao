import { View, Text } from "react-native";
import React from "react";
import ArrowLeftIcon from "@/assets/images/ArrowLeft.svg";
import styled from "styled-components/native";
import { Row } from "@/theme/GlobalComponents";
import { useNavigation } from "@react-navigation/native";
import TextComponent from "../Text";
import { NavigationProps } from "@/interface/navigation.interface";

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
  showSkip = false
}: {
  percentageStatus: number;
  icon?: any;
  showSkip?: boolean;
}) => {
  const navigation = useNavigation<NavigationProps>();
  const handleSkipInformation = () => {
    navigation.navigate("CreateProfileScreen");
  };

  return (
    <Row style={{ gap: 50 }}>
      {icon ? icon : <ArrowLeftIcon onPress={() => navigation.goBack()} />}
      <ProgressContainer>
        <ProgressStatus percentageStatus={percentageStatus} />
      </ProgressContainer>
      {showSkip && <TextComponent onPress={handleSkipInformation}>Skip</TextComponent>}
    </Row>
  );
};

export default BarProgress;
