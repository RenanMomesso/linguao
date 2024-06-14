import React from "react";
import AnimatedBottom from "@/components/AnimatedBottom/AnimatedBottom";
import { Row } from "@/theme/GlobalComponents";
import TextComponent from "@/components/Text";
import { AlertIcon, BaloonMsgIcon, ShareIcon } from "@/assets/images";
import Button from "@/components/Button/Button";

interface BottomSheetAnswerProps {
  correctlyAnswered: boolean;
  translation: string;
  handleClickContinue?: () => void;
  handleShare?: () => void;
  handleSave?: () => void;
  handleAlert?: () => void;
}
const BottomSheetAnswer: React.FC<BottomSheetAnswerProps> = ({
  correctlyAnswered,
  translation,
  handleClickContinue = () => {},
  handleShare = () => {},
  handleSave = () => {},
  handleAlert = () => {},
}) => {
  return (
    <AnimatedBottom
      height={correctlyAnswered ? 160 : 190}
      bgColor={correctlyAnswered ? "success" : "error"}>
      <Row>
        <TextComponent
          size="heading5"
          align="center"
          weight="bold"
          color="white">
          {correctlyAnswered ? "Correct" : "Incorrect"}
        </TextComponent>
        <Row style={{ marginLeft: "auto" }}>
          {<ShareIcon color="white" onPress={handleShare} />}
          {correctlyAnswered && (
            <BaloonMsgIcon color="white" onPress={handleSave} />
          )}
          <AlertIcon color="white" onPress={handleAlert} />
        </Row>
      </Row>
      {correctlyAnswered ? (
        <TextComponent size="text" align="left" weight="black" color="white">
          Congratulations! You got it right!
        </TextComponent>
      ) : (
        <>
          <TextComponent size="text" align="left" weight="black" color="white">
            The correct answer is:
          </TextComponent>
          <TextComponent size="text" align="left" color="white">
            {translation}
          </TextComponent>
        </>
      )}
      <Button
        backgroundColor="white"
        buttonText="Continue"
        textColor={correctlyAnswered ? "success" : "error"}
        onPressButton={handleClickContinue}
      />
    </AnimatedBottom>
  );
};

export default BottomSheetAnswer;
