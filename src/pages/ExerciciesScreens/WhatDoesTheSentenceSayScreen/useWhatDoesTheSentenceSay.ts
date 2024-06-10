import React, { useMemo } from "react";
import { gql, useQuery } from "@apollo/client";
import {
  ListEnglishSentencesQuery,
  ListEnglishSentencesQueryVariables,
} from "@/API";
import { speakerVoiceMessage } from "@/utils/speakerVoice";
import { englishSentenceQuery } from "@/pages/TranslateSentenceScreen/translateSentenceQuery";

const useWhatDoesTheSentenceSay = () => {
  const { data } = useQuery<
    ListEnglishSentencesQuery,
    ListEnglishSentencesQueryVariables
  >(englishSentenceQuery);
  const sentence = data?.listEnglishSentences?.items[0]?.sentence;
  console.log("🚀 ~ useWhatDoesTheSentenceSay ~ sentence:", sentence);
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

  const speakSentence = () => {
    if (!sentence) return;
    speakerVoiceMessage(sentence);
  };

  return {
    sentence,
    translation,
    sortWords,
    speakSentence,
  };
};

export default useWhatDoesTheSentenceSay;
