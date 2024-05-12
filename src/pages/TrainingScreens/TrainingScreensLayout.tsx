import React from "react";
import { Container } from "@/theme/GlobalComponents";
import { HeaderContainer } from "../Home/components/HomeHeader/HomeHeader.styles";
import BarProgress from "@/components/BarProgress/BarProgress";

const TrainingScreensLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container backgroundColor="white" style={{ padding: 20 }}>
      <BarProgress percentageStatus={0} />
      {children}
    </Container>
  );
};

export default TrainingScreensLayout;
