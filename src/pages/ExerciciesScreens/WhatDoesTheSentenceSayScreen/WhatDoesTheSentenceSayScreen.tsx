import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ExercicesLayout from "@/layouts/ExercicesLayout";
import { Row } from "@/theme/GlobalComponents";
import { theme } from "@/theme/theme";
import LottieView from "lottie-react-native";
import TextComponent from "@/components/Text";
import Button from "@/components/Button/Button";
import Selectable from "@/components/Selectable/Selectable";
import { useNavigation } from "@react-navigation/native";
import { ExercisesStack } from "@/interface/navigation.interface";
import TapAudioCircle from "@/assets/images/TapAudioCircle.svg";
import WordsSelectors from "../../TranslateSentenceScreen/components/WordsSelectors";
import useWhatDoesTheSentenceSay from "./useWhatDoesTheSentenceSay";

const wordsExample =
  "This is a small text with limited words to show in the screen.";
const splitWords = wordsExample.split(" ");
const WhatDoesTheSentenceSayScreen = () => {
  const navigation = useNavigation<ExercisesStack>();
  const { speakSentence, sentence, sortWords } = useWhatDoesTheSentenceSay();
  console.log("🚀 ~ WhatDoesTheSentenceSayScreen ~ sortWords:", sortWords)

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
      <WordsSelectors
        buttonDisable={() => {}}
        wordsExample={!!sortWords?.length ? sortWords : ["No words"]}
      />

      <ExercicesLayout.Footer>
        <Button
          backgroundColor={true ? "primary" : "greyScale300"}
          buttonText="Check Answers"
          textColor="white"
          disabled={false}
          onPressButton={() => {
            navigation.navigate("MatchWordPairScreen");
          }}
        />
      </ExercicesLayout.Footer>
      {/* {showAnswer && <AnimatedBottom />} */}
    </ExercicesLayout>
  );
};

export default WhatDoesTheSentenceSayScreen;
