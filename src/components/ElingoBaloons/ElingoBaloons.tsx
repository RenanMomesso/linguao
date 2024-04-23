import { View, Text } from "react-native";
import React from "react";
import { Row } from "@/theme/GlobalComponents";
import ElingoSmallImg from "@/assets/images/ElingoSmall.svg";

const ElingoBaloons = ({ BaloonImg }: any) => {
  return (
    <Row
      style={{
        gap: 0,
      }}>
      <ElingoSmallImg scaleX={0.9} scaleY={0.9} />
      <BaloonImg scaleX={0.9} scaleY={0.9} />
    </Row>
  );
};

export default ElingoBaloons;
