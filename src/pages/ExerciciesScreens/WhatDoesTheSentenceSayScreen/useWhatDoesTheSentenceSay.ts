import React, { useMemo } from "react";
import { gql, useQuery } from "@apollo/client";
import {
  ListEnglishSentencesQuery,
  ListEnglishSentencesQueryVariables,
} from "@/API";
import { speakerVoiceMessage } from "@/utils/speakerVoice";

const GET_AUDIO = gql`
  query getSentence {
    listEnglishSentences(filter: { level: { eq: A2 } }) {
      items {
        sentence
        translation
        fakeSentences
      }
    }
  }
`;

const useWhatDoesTheSentenceSay = () => {
  const { data } = useQuery<
    ListEnglishSentencesQuery,
    ListEnglishSentencesQueryVariables
  >(GET_AUDIO);
  const sentence = data?.listEnglishSentences?.items[0]?.sentence;
  const fakeWords = data?.listEnglishSentences?.items[0]?.fakeSentences;
  const translation = data?.listEnglishSentences?.items[0]?.translation;
  const splitTranslations = translation?.split(" ") || [];

  const sortWords = useMemo(() => {
    if (!fakeWords) return;
    const copyFakeWords = [...fakeWords];
    const splitFakeWords = copyFakeWords.map((word) => word?.split(" ")).flat();
    const words = splitFakeWords.sort(() => Math.random() - 0.5);
    const concatWords = words.concat(splitTranslations);

    return concatWords;
  }, [fakeWords]);

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
