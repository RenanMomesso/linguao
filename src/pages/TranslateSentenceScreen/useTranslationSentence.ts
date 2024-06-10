import { View, Text } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { DuoDragDropRef } from "@/components/DuoDragAndDrop";
import { useQuery } from "@apollo/client";
import { englishSentenceQuery } from "./translateSentenceQuery";
import { useNavigation } from "@react-navigation/native";
import { ExercisesStack } from "@/interface/navigation.interface";
import { speakerVoiceMessage } from "@/utils/speakerVoice";

const useTranslationSentence = () => {
  const wordsRef = useRef<DuoDragDropRef>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [soundPlaying, setSoundPlaying] = useState(true);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  const { data, loading } = useQuery(englishSentenceQuery);

  const sentence = data?.listEnglishSentences?.items[0]?.sentence;

  const translation = data?.listEnglishSentences?.items[0]?.translation;
  const splitWordsTranslation = useMemo(() => {
    return translation?.split(" ")?.sort(() => Math.random() - 0.5);
  }, [translation]);

  const wordsExample = data?.listEnglishSentences?.items[0]?.fakeWords.concat(
    splitWordsTranslation,
  );
  const navigation = useNavigation<ExercisesStack>();

  const handleShowAnswer = useCallback(() => {
    setShowAnswer(true);
    navigation.navigate("SpeakTheSentenceScreen");
  }, [navigation]);

  const handleSpeak = useCallback(() => {
    speakerVoiceMessage(sentence);
    setSoundPlaying(playingSound => !playingSound);
  }, [sentence]);

  const handleChangeButtonDisable = useCallback((changeValue: boolean) => {
    setButtonIsDisabled(false);
    setButtonIsDisabled(changeValue);
  }, []);

  return {
    wordsRef,
    showAnswer,
    soundPlaying,
    buttonIsDisabled,
    sentence,
    wordsExample,
    handleShowAnswer,
    handleSpeak,
    handleChangeButtonDisable,
    loadingQuery: loading,
  };
};

export default useTranslationSentence;
