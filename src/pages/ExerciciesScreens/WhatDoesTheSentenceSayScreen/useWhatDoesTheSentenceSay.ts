import React, { useMemo, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import {
  ListEnglishSentencesQuery,
  ListEnglishSentencesQueryVariables,
} from "@/API";
import { speakerVoiceMessage } from "@/utils/speakerVoice";
import { englishSentenceQuery } from "@/pages/TranslateSentenceScreen/translateSentenceQuery";
import { useTypedNavigation } from "@/hooks/useNavigationTyped";

const useWhatDoesTheSentenceSay = () => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const { data } = useQuery<
    ListEnglishSentencesQuery,
    ListEnglishSentencesQueryVariables
  >(englishSentenceQuery);
  const sentence = data?.listEnglishSentences?.items[0]?.sentence;
  const fakeWords = data?.listEnglishSentences?.items[0]?.fakeWords;
  const translation = data?.listEnglishSentences?.items[0]?.translation;
  const splitTranslations = translation?.split(" ") || [];

  const sortWords = useMemo(() => {
    if (!fakeWords) return;
    const copyFakeWords = [...fakeWords];
    const splitFakeWords = copyFakeWords.map(word => word?.split(" ")).flat();
    const words = splitFakeWords.sort(() => Math.random() - 0.5);
    const concatWords = words.concat(sentence?.split(" ") || []);
    return concatWords;
  }, [fakeWords]) as string[];

  const handleCheckAnswers = useMemo(() => {
    const correctAnswer = [...splitTranslations].join(" ");
    const userAnswer = [...sortWords].join(" ");
    return correctAnswer === userAnswer;
  }, [sortWords, splitTranslations]);

  const showAnswerBottom = () => {
    setShowAnswer(true);
  };

  const speakSentence = () => {
    if (!sentence) return;
    speakerVoiceMessage(sentence);
  };

  const navigation = useTypedNavigation();
  const handleNavigation = () => {
    navigation.navigate("MatchWordPairScreen");
  
  }

  return {
    sentence,
    translation,
    sortWords,
    speakSentence,
    showAnswerBottom,
    handleCheckAnswers,
    showAnswer,
    handleNavigation
  };
};

export default useWhatDoesTheSentenceSay;
