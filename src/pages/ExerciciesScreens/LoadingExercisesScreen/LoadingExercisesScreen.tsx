import React, { useCallback } from "react";
import { Container } from "@/theme/GlobalComponents";
import LinguaoMeditation from "@/assets/images/LinguaoMeditation.svg";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ExercisesStack } from "@/interface/navigation.interface";
import { useAppDispatch } from "@/store";
import { toggleBottomNavigation } from "@/store/reducer/uiReducer";
import useTranslationSentence from "@/pages/TranslateSentenceScreen/useTranslationSentence";

const screens = {
  TranslateSentenceScreen: undefined,
  SpeakTheSentenceScreen: undefined,
  WhatDoesTheAudioSayScreen: undefined,
  WhatDoesTheSentenceSayScreen: undefined,
  FillInTheBlanksScreen: undefined,
  MatchWordPairScreen: undefined,
  SelectCorrectImgTextScreen: undefined,
};

function getRandomScreen(): keyof typeof screens {
  const screenKeys = Object.keys(screens);
  const randomIndex = Math.floor(Math.random() * screenKeys.length);
  return screenKeys[randomIndex] as keyof typeof screens;
}

const LoadingExercisesScreen = () => {
  const navigation = useNavigation<ExercisesStack>();
  const dispatch = useAppDispatch();
  const { sentence } = useTranslationSentence();
  console.log("🚀 ~ LoadingExercisesScreen ~ sentence:", sentence)

  useFocusEffect(
    useCallback(() => {
      dispatch(toggleBottomNavigation(false));
      setTimeout(() => {
        navigation.navigate("TranslateSentenceScreen");
      }, 2000);
    }, []),
  );

  return (
    <Container
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}>
      <LinguaoMeditation />
    </Container>
  );
};

export default LoadingExercisesScreen;
