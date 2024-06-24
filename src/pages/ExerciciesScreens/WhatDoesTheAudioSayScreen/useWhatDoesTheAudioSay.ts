import {
  ListEnglishSentencesQuery,
  ListEnglishSentencesQueryVariables,
} from "@/API";
import { useTypedNavigation } from "@/hooks/useNavigationTyped";
import { generateRandomInt } from "@/utils/maths";
import { gql, useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { useMemo, useState } from "react";

const GET_SENTENCE = gql`
  query getSentence {
    listEnglishSentences(limit: 10) {
      items {
        sentence
        translation
        fakeSentences
      }
    }
  }
`;

const useWhatDoesTheAudioSay = () => {
  const { data, loading, error } = useQuery<
    ListEnglishSentencesQuery,
    ListEnglishSentencesQueryVariables
  >(GET_SENTENCE);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const generateRandomIntNumber = useMemo(() => {
    const length = data?.listEnglishSentences?.items.length;
    return length ? generateRandomInt(length) : 0;
  }, [data]);

  const item = data?.listEnglishSentences?.items[generateRandomIntNumber];

  const sentence = item?.sentence;
  const fakeTranslatedSentence = item?.fakeSentences?.concat(
    item.translation || [],
  );

  const sortedFakeTranslatedSentence = useMemo(() => {
    return (
      (!!fakeTranslatedSentence?.length &&
        [...fakeTranslatedSentence].sort((a, b) => Math.random() - 0.5)) ||
      []
    );
  }, [item?.sentence]);

  const [selectedSentence, setSelectedSentence] = useState<string>("");

  const handleSelectSentence = (sentence: string) => {
    const alreadySelectedSentence = selectedSentence === sentence;
    setSelectedSentence(alreadySelectedSentence ? "" : sentence);
  };

  const buttonEnabled = selectedSentence.length > 0;
  const handleShowAnswer = () => {
    setShowAnswer(true);
  };
  const isCorrectlyAnswer = selectedSentence === item?.translation;
  const handleNavigation = useTypedNavigation();
  const handleNavigationToNextScreen = () => {
    handleNavigation.navigate("WhatDoesTheSentenceSayScreen");
  };

  return {
    sentence,
    fakeTranslatedSentence: sortedFakeTranslatedSentence,
    selectedSentence,
    setSelectedSentence,
    handleSelectSentence,
    loading,
    error,
    buttonEnabled,
    showAnswer,
    handleShowAnswer,
    isCorrectlyAnswer,
    translation: item?.translation,
    handleNavigationToNextScreen,
  };
};

export default useWhatDoesTheAudioSay;
