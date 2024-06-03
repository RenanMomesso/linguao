import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ExercicesLayout from "@/layouts/ExercicesLayout";
import { Row } from "@/theme/GlobalComponents";
import TextComponent from "@/components/Text";
import Button from "@/components/Button/Button";
import Selectable from "@/components/Selectable/Selectable";
import { useNavigation } from "@react-navigation/native";
import { ExercisesStack } from "@/interface/navigation.interface";
import SpeakerButton from "@/components/SpeakerButton/SpeakerButton";
import useWhatDoesTheAudioSay from "./useWhatDoesTheAudioSay";
import { theme } from "@/theme/theme";
import { speakerVoiceMessage } from "@/utils/speakerVoice";

const WhatDoesTheAudioSayScreen = () => {
  const navigation = useNavigation<ExercisesStack>();
  const {
    fakeTranslatedSentence,
    handleSelectSentence,
    selectedSentence,
    sentence,
  } = useWhatDoesTheAudioSay();

  return (
    <ExercicesLayout
      barProgressPercentage={80}
      pageTitle="What does the sentence mean ?">
      <Row
        style={{
          gap: 10,
          marginBottom: 50,
        }}>
        <SpeakerButton
          soundPlaying={true}
          handleSpeak={() => {
            speakerVoiceMessage(sentence);
          }}
        />

        <TextComponent
          size="heading5"
          align="left"
          numberOfLines={2}
          weight="bold"
          style={{
            flex: 1,
            flexWrap: "wrap",
            maxWidth: "80%",
          }}>
          {sentence}
        </TextComponent>
      </Row>

      <View
        style={{
          gap: 16,
        }}>
        {fakeTranslatedSentence.map((sentence, index) => {
          return (
            <Selectable
              style={{
                borderColor:
                  selectedSentence === sentence
                    ? theme.colors.primary
                    : theme.colors.greyScale300,
                borderWidth: 3,
                backgroundColor:
                  selectedSentence === sentence
                    ? theme.colors.primary100
                    : theme.colors.greyScale100,
                    justifyContent: "center",
                    alignItems: "center",
              }}
              key={index}
              onPress={() => handleSelectSentence(sentence)}>
              <TextComponent size="heading6" weight="bold" align="center">
                {sentence}
              </TextComponent>
            </Selectable>
          );
        })}
      </View>

      <ExercicesLayout.Footer>
        <Button
          backgroundColor={true ? "primary" : "greyScale300"}
          buttonText="Check Answers"
          textColor="white"
          disabled={false}
          onPressButton={() => {
            navigation.navigate("WhatDoesTheSentenceSayScreen");
          }}
        />
      </ExercicesLayout.Footer>
      {/* {showAnswer && <AnimatedBottom />} */}
    </ExercicesLayout>
  );
};

export default WhatDoesTheAudioSayScreen;
