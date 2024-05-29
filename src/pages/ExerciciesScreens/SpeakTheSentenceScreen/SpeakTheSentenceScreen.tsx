import { View, Text } from "react-native";
import React, { useState } from "react";
import ExercicesLayout from "@/layouts/ExercicesLayout";

import EmptyBaloon from "@/assets/images/EmptyBaloon.svg";
import ElingoBaloons from "@/components/ElingoBaloons/ElingoBaloons";
import TextComponent from "@/components/Text";

import PlaySound from "@/assets/images/PlaySoundPrimary.svg";
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

const SpeakTheSentenceScreen = () => {
  const { cancelRecognizing, startRecognizing, stopRecognizing, voiceResult } =
    useVoiceRecognition();
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
  const navigation = useNavigation<ExercisesStack>();
  const [soundPlaying, setSoundPlaying] = useState(false);
  const handleSpeak = () => {
    speakerVoiceMessage("The call is from your mother");
    setSoundPlaying(playingSound => !playingSound);
  }

  return (
    <ExercicesLayout barProgressPercentage={60} pageTitle="Speak the sentence">
      <ElingoBaloons
        BaloonImg={() => (
          <View style={{ marginLeft: -15 }}>
            <EmptyBaloon />
            <Row
              style={{
                marginTop: 20,
                position: "absolute",
                left: 40,
                alignItems: "center",
              }}>
              <SpeakerButton soundPlaying={soundPlaying} handleSpeak={handleSpeak}  />
              <TextComponent size="heading6" weight="bold" align="justify">
                The call is from {"\n"}your mother
              </TextComponent>
            </Row>
          </View>
        )}
      />
      <HR
        style={{
          marginVertical: 20,
          backgroundColor: theme.colors.greyScale300,
        }}
      />
      <Selectable
        onPressIn={startRecognizing}
        onPressOut={stopRecognizing}
        style={{
          borderColor: theme.colors.greyScale300,
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
      <TextComponent>{JSON.stringify(voiceResult)}</TextComponent>
      <ExercicesLayout.Footer>
        <Button
          backgroundColor={!buttonIsDisabled ? "primary" : "greyScale300"}
          buttonText="Check Answers"
          textColor="white"
          disabled={false}
          onPressButton={() => {
            navigation.navigate("WhatDoesTheAudioSayScreen");
          }}
        />
      </ExercicesLayout.Footer>
    </ExercicesLayout>
  );
};

export default SpeakTheSentenceScreen;
