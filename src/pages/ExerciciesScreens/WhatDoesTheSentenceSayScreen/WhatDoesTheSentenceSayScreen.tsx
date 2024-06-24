import { View, TouchableOpacity } from "react-native";
import React from "react";
import ExercicesLayout from "@/layouts/ExercicesLayout";
import { theme } from "@/theme/theme";
import TextComponent from "@/components/Text";
import Button from "@/components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { ExercisesStack } from "@/interface/navigation.interface";
import TapAudioCircle from "@/assets/images/TapAudioCircle.svg";
import WordsSelectors from "../../TranslateSentenceScreen/components/WordsSelectors";
import useWhatDoesTheSentenceSay from "./useWhatDoesTheSentenceSay";
import BottomSheetAnswer from "../components/BottomSheetAnswer/BottomSheetAnswer";

const WhatDoesTheSentenceSayScreen = () => {
  const navigation = useNavigation<ExercisesStack>();
  const {
    speakSentence,
    handleCheckAnswers,
    sortWords,
    showAnswerBottom,
    showAnswer,
    translation,
    handleNavigation,
  } = useWhatDoesTheSentenceSay();

  return (
    <ExercicesLayout
      barProgressPercentage={80}
      pageTitle="What does the audio say?">
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderColor: theme.colors.greyScale300,
          borderRadius: 24,
          padding: 8,
        }}>
        <TouchableOpacity
          onPress={speakSentence}
          style={{ height: 100, marginTop: -10 }}>
          <TapAudioCircle height={120} />
        </TouchableOpacity>
        <TextComponent>Tap to play audio</TextComponent>
      </View>

      <View style={{ height: 20 }} />
      <WordsSelectors buttonDisable={() => {}} wordsExample={sortWords} />

      <ExercicesLayout.Footer>
        <Button
          backgroundColor={true ? "primary" : "greyScale300"}
          buttonText="Check Answers"
          textColor="white"
          disabled={false}
          onPressButton={showAnswerBottom}
        />
      </ExercicesLayout.Footer>
      {showAnswer && (
        <BottomSheetAnswer
          correctlyAnswered={handleCheckAnswers}
          translation={translation!}
          handleAlert={() => {}}
          handleClickContinue={handleNavigation}
          handleShare={() => {}}
        />
      )}
    </ExercicesLayout>
  );
};

export default WhatDoesTheSentenceSayScreen;
