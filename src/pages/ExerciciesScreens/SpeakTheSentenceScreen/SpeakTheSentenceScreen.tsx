import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import ExercicesLayout from "@/layouts/ExercicesLayout";

import EmptyBaloon from "@/assets/images/EmptyBaloon.svg";
import ElingoBaloons from "@/components/ElingoBaloons/ElingoBaloons";
import TextComponent from "@/components/Text";

import { theme } from "@/theme/theme";
import { HR, Row } from "@/theme/GlobalComponents";
import Selectable from "@/components/Selectable/Selectable";

import MicrophoneIcon from "@/assets/images/MicrophoneIcon.svg";
import Button from "@/components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { ExercisesStack } from "@/interface/navigation.interface";
import useVoiceRecognition from "@/hooks/useVoiceRecognition";
import SpeakerButton from "@/components/SpeakerButton/SpeakerButton";
import { speakerVoiceMessage } from "@/utils/speakerVoice";
import useSpeakTheSentenceScreen from "./useSpeakTheSentenceScreen";
import BottomSheetAnswer from "../components/BottomSheetAnswer/BottomSheetAnswer";
import BugProblemModal from "@/pages/TranslateSentenceScreen/components/BugProblemModal";

const SpeakTheSentenceScreen = () => {
  const { cancelRecognizing, startRecognizing, stopRecognizing, voiceResult } =
    useVoiceRecognition();
  const {
    sentence,
    checkAnswersMatches,
    showAnswer,
    setShowAnswer,
    modalVisible,
    setModalVisible,
    modalType,
    setModalType,
    handleNavigation,
  } = useSpeakTheSentenceScreen({
    voiceResult,
  });
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
  const navigation = useNavigation<ExercisesStack>();
  const [soundPlaying, setSoundPlaying] = useState(false);

  const handleSpeak = () => {
    speakerVoiceMessage(sentence + ".");
    setSoundPlaying(playingSound => !playingSound);
  };

  useEffect(() => {
    if (voiceResult.end) {
      setButtonIsDisabled(false);
    }
  }, [voiceResult]);

  const { result, similarity } = checkAnswersMatches();

  return (
    <ExercicesLayout barProgressPercentage={60} pageTitle="Speak the sentence">
      <Row>
        <SpeakerButton
          soundPlaying={soundPlaying}
          handleSpeak={
            soundPlaying || showAnswer ? () => {} : () => handleSpeak
          }
        />
        <TextComponent
          style={{ flex: 1 }}
          size="heading6"
          weight="bold"
          align="left">
          {sentence}
        </TextComponent>
      </Row>
      <HR
        style={{
          marginVertical: 20,
          backgroundColor: theme.colors.greyScale300,
        }}
      />
      <Selectable
        disabled={voiceResult.isRecording || showAnswer}
        onPressIn={startRecognizing}
        onPressOut={stopRecognizing}
        style={{
          borderColor: voiceResult.isRecording
            ? theme.colors.primary
            : theme.colors.greyScale300,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 24,
        }}>
        <Row>
          <MicrophoneIcon />
          <TextComponent
            size="heading6"
            weight="bold"
            align="center"
            color="primary">
            Tap to talk
          </TextComponent>
        </Row>
      </Selectable>
      <ExercicesLayout.Footer>
        <Button
          backgroundColor={!buttonIsDisabled ? "primary" : "greyScale300"}
          buttonText="Check Answers"
          textColor="white"
          disabled={false}
          onPressButton={() => setShowAnswer(true)}
        />
      </ExercicesLayout.Footer>
      {showAnswer && (
        <BottomSheetAnswer
          correctlyAnswered={similarity}
          translation={sentence!}
          handleAlert={() => setModalType("bug")}
          handleClickContinue={handleNavigation}
        />
      )}
      {modalType === "bug" && (
        <BugProblemModal
          modalVisible={true}
          onCloseModal={() => setModalType("")}
        />
      )}
    </ExercicesLayout>
  );
};

export default SpeakTheSentenceScreen;
