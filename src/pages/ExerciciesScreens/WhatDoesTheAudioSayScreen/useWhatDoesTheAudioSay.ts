import {
  ListEnglishSentencesQuery,
  ListEnglishSentencesQueryVariables,
} from "@/API";
import { generateRandomInt } from "@/utils/maths";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { load } from "react-native-track-player/lib/src/trackPlayer";

const GET_SENTENCE = gql`
  query getSentence {
    listEnglishSentences(limit: 2) {
      items {
        sentence
        translation
        fakeSentences
      }
    }
  }
`;

const useWhatDoesTheAudioSay = () => {
  const { data, loading, error } =
    useQuery<ListEnglishSentencesQuery>(GET_SENTENCE);
  const sentence =
    data?.listEnglishSentences?.items[0]?.sentence;
  const fakeTranslatedSentence =
    data?.listEnglishSentences?.items[0]?.fakeSentences;
  const [selectedSentence, setSelectedSentence] = useState<string>("");

  const handleSelectSentence = (sentence: string) => {
    const alreadySelectedSentence = selectedSentence === sentence;
    setSelectedSentence(alreadySelectedSentence ? "" : sentence);
  };

  return {
    sentence,
    fakeTranslatedSentence,
    selectedSentence,
    setSelectedSentence,
    handleSelectSentence,
    loading,
    error,
  };
};

export default useWhatDoesTheAudioSay;
