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
      <ElingoSmallImg height={100} width={100} />
      {/* <BaloonImg height={100} width={100} /> */}
    </Row>
  );
};

export default ElingoBaloons;
