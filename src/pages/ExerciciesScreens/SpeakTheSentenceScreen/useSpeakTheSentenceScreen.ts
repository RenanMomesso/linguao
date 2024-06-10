import { IVoiceResult } from "@/hooks/useVoiceRecognition";
import { gql, useQuery } from "@apollo/client";
import { generateRandomInt } from "@/utils/maths";
import { useMemo } from "react";
import { englishSentenceQuery } from "@/pages/TranslateSentenceScreen/translateSentenceQuery";
import {
  ListEnglishSentencesQuery,
  ListEnglishSentencesQueryVariables,
} from "@/API";

const getSentenceQuery = gql`
  query getSentence {
    listSentences(limit: 2, filter: { level: { eq: A1 } }) {
      items {
        id
        phrase
      }
    }
  }
`;

const useSpeakTheSentenceScreen = ({
  voiceResult,
}: {
  voiceResult: IVoiceResult;
}) => {
  const { data, loading, error } = useQuery<
    ListEnglishSentencesQuery,
    ListEnglishSentencesQueryVariables
  >(englishSentenceQuery);
  console.log("🚀 ~ data:", data);

  const sentence = useMemo(() => {
    return data?.listEnglishSentences?.items[generateRandomInt()]?.sentence;
  }, [data]);

  const checkAnswersMatches = () => {
    let result = "";
    let similarity = false;
    for (let i = 0; i < voiceResult.results.length; i++) {
      if (
        voiceResult.results[i].toLocaleLowerCase() ===
        sentence?.toLocaleLowerCase()
      ) {
        result = voiceResult.results[i];
        similarity = true;
      } else {
        similarity = false;
      }
    }
    return { result, similarity };
  };
  return {
    sentence,
    loading,
    error,
    checkAnswersMatches,
  };
};

export default useSpeakTheSentenceScreen;
