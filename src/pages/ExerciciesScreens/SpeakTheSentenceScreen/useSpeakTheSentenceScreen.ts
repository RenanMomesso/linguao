import { IVoiceResult } from "@/hooks/useVoiceRecognition";
import { gql, useQuery } from "@apollo/client";
import { generateRandomInt } from "@/utils/maths";
import { useMemo, useState } from "react";
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
  const [showAnswer, setShowAnswer] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { data, loading, error } = useQuery<
    ListEnglishSentencesQuery,
    ListEnglishSentencesQueryVariables
  >(englishSentenceQuery);

  const sentence = useMemo(() => {
    return data?.listEnglishSentences?.items[0]?.sentence;
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
    showAnswer,
    setShowAnswer,
    setModalVisible,
    modalVisible
  };
};

export default useSpeakTheSentenceScreen;
