import { useQuery } from "@apollo/client";
import { englishSentenceQuery } from "@/pages/TranslateSentenceScreen/translateSentenceQuery";
import {
  ListEnglishSentencesQuery,
  ListEnglishSentencesQueryVariables,
} from "@/API";
import { useCallback, useMemo, useState } from "react";

const useSelectCorrectlyAudioScreen = () => {
  const [selectedAudio, setSelectedAudio] = useState<string>("");
  const { data, loading, error } = useQuery<
    ListEnglishSentencesQuery,
    ListEnglishSentencesQueryVariables
  >(englishSentenceQuery, {
    fetchPolicy: "cache-and-network",
    onCompleted(data) {
      try {
        const cachedData = this.client?.readQuery({
          query: englishSentenceQuery,
        });
        if (cachedData) {
          console.log("cachedData", JSON.stringify(items, undefined, 3));
        } else {
          console.log("No cached data", data);
        }
      } catch (error) {
        console.log("Error", error);
      }
    },
  });

  const items = data?.listEnglishSentences?.items;
  const sentence = items && items[0]?.sentence;
  const fakeSentences = items && items[0]?.fakeSentences;
  const concatSentences = useMemo(() => {
    return fakeSentences && sentence && fakeSentences.concat(sentence);
  }, [fakeSentences, sentence]);

  const randomSentences = useMemo(
    () =>
      (concatSentences && concatSentences.sort(() => Math.random() - 0.5)) ||
      [],
    [concatSentences],
  );

  const handleChangeSelectedAudio = useCallback((sentence: string) => {
    setSelectedAudio(sentence);
  }, []);
  
  return {
    sentence,
    fakeSentences,
    loading,
    randomSentences,
    selectedAudio,
    handleChangeSelectedAudio,
  };
};

export default useSelectCorrectlyAudioScreen;
