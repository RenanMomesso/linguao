import { View, Text } from "react-native";
import React, { useMemo, useRef, useState } from "react";
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

  const handleShowAnswer = () => {
    setShowAnswer(true);
    navigation.navigate("SpeakTheSentenceScreen");
  };

  const handleSpeak = () => {
    speakerVoiceMessage(sentence);
    setSoundPlaying(playingSound => !playingSound);
  };

  const handleChangeButtonDisable = (changeValue: boolean) => {
    setButtonIsDisabled(changeValue);
  };

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
  };
};

export default useTranslationSentence;
