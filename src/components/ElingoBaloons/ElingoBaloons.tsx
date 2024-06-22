import React from "react";
import { Row } from "@/theme/GlobalComponents";
import ElingoSmallImg from "@/assets/images/ElingoSmall.svg";
import styled from "styled-components/native";
import SpeakerButton from "../SpeakerButton/SpeakerButton";
import Svg, { Polygon } from "react-native-svg";
import { theme } from "@/theme/theme";

const BalloonContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin: 10px;
  position: relative;
`;

const Balloon = styled.View`
  background-color: #fafafa;
  padding: 10px 6px;
  border-radius: 10px;
  border: 2px solid #eeeeee;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  max-width: 83%;
  min-height: 100px;
`;

const BalloonText = styled.Text<{ padding?: boolean }>`
  color: #333;
  font-size: 18px;
  flex: 1;
  font-family: ${theme.fontWeight.bold};
  color: ${theme.colors.greyScale900};
  text-align: ${({ padding }) => (padding ? "left" : "left")};
  padding: ${({ padding }) => (padding ? "0px 0px" : "0")};
`;

interface ElingoBaloonsProps {
  baloonText: string;
  handleSpeak?: null | (() => void);
}

const ElingoBaloons = ({
  baloonText,
  handleSpeak = null,
}: ElingoBaloonsProps) => {
  return (
    <Row style={{ width: "100%" }}>
      <ElingoSmallImg height={100} width={100} />
      <BalloonContainer>
        <Svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          style={{
            top: "35%",
            zIndex: 999,
            position: "absolute",
            left: -17,
          }}>
          <Polygon
            points="0,10 20,0 20,20"
            fill="#fafafa"
            stroke="#eeeeee"
            strokeWidth="1"
          />
        </Svg>
        <Balloon>
          {!!handleSpeak && (
            <SpeakerButton soundPlaying={false} handleSpeak={handleSpeak} />
          )}
          <BalloonText padding={!!handleSpeak}>{baloonText}</BalloonText>
        </Balloon>
      </BalloonContainer>
    </Row>
  );
};

export default ElingoBaloons;
