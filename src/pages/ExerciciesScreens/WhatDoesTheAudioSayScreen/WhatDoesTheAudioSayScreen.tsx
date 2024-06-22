import { View, Text, TouchableOpacity, Pressable } from "react-native";
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
import LoadingIcon from "@/components/Loading/Loading";
import ErrorComponent from "@/components/ErrorComponent/ErrorComponent";
import BottomSheetAnswer from "../components/BottomSheetAnswer/BottomSheetAnswer";

const WhatDoesTheAudioSayScreen = () => {
  const navigation = useNavigation<ExercisesStack>();
  const {
    fakeTranslatedSentence,
    handleSelectSentence,
    selectedSentence,
    sentence,
    error,
    loading,
    buttonEnabled,
    showAnswer,
    handleShowAnswer,
    isCorrectlyAnswer,
    translation
  } = useWhatDoesTheAudioSay();

  console.log({ error, loading, sentence, fakeTranslatedSentence });
  // if (loading) return <LoadingIcon />;
  // if (error || !sentence) return <ErrorComponent />;

  return (
    <ExercicesLayout
      barProgressPercentage={80}
      pageTitle="What does the sentence mean?">
      <Row
        style={{
          gap: 10,
          marginBottom: 50,
        }}>
        <SpeakerButton
          soundPlaying={false}
          handleSpeak={() => {
            speakerVoiceMessage(sentence || "");
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
          <Text>{translation}</Text>
      <View
        style={{
          gap: 16,
        }}>
        {!!fakeTranslatedSentence?.length &&
          fakeTranslatedSentence.map((sentence, index) => {
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
                onPress={() => sentence && handleSelectSentence(sentence)}>
                <TextComponent size="heading6" weight="bold" align="center">
                  {sentence}
                </TextComponent>
              </Selectable>
            );
          })}
      </View>

      <ExercicesLayout.Footer>
        <Button
          backgroundColor={buttonEnabled ? "primary" : "greyScale300"}
          buttonText="Check Answers"
          textColor="white"
          disabled={false}
          onPressButton={handleShowAnswer}
        />
      </ExercicesLayout.Footer>
      
      {showAnswer && (
        <BottomSheetAnswer
          correctlyAnswered={isCorrectlyAnswer}
          translation={translation!}
          handleAlert={() => {}}
          handleClickContinue={() => {}}
          handleShare={() => {}}
        />
      )}
    </ExercicesLayout>
  );
};

export default WhatDoesTheAudioSayScreen;
