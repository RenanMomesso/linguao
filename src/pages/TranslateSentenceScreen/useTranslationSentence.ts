import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DuoDragDropRef } from "@/components/DuoDragAndDrop";
import { useQuery } from "@apollo/client";
import { englishSentenceQuery } from "./translateSentenceQuery";
import { useNavigation } from "@react-navigation/native";
import { ExercisesStack } from "@/interface/navigation.interface";
import { speakerVoiceMessage } from "@/utils/speakerVoice";
import { imgToBase64 } from "@/utils/imgToBase64";
import { generateRandomInt } from "@/utils/maths";
import {
  ListEnglishSentencesQuery,
  ListEnglishSentencesQueryVariables,
} from "@/API";

const useTranslationSentence = () => {
  const wordsRef = useRef<DuoDragDropRef>(null);

  const [showAnswer, setShowAnswer] = useState(false);
  const [soundPlaying, setSoundPlaying] = useState(true);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  const [correctlyAnswered, setCorrectlyAnswered] = useState(false);
  const [img, setImg] = useState("");

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
          console.log("cachedData", cachedData);
        } else {
          console.log("No cached data", data);
        }
      } catch (error) {
        console.log("Error", error);
      }
    },
  });

  console.log(
    "🚀 ~ useTranslationSentence ~ data:",
    data?.listEnglishSentences?.items.length,
  );

  const generateRandomIntNumber = useMemo(() => {
    return generateRandomInt(data?.listEnglishSentences?.items.length!);
  }, [data]);

  const sentence = data?.listEnglishSentences?.items[generateRandomIntNumber]?.sentence;
  const imgUrl = data?.listEnglishSentences?.items[generateRandomIntNumber]?.imageUrl;
  const translation = data?.listEnglishSentences?.items[generateRandomIntNumber]?.translation;

  const splitWordsTranslation = useMemo(() => {
    return translation?.split(" ")?.sort(() => Math.random() - 0.5);
  }, [translation]) as string[];

  const wordsExample = data?.listEnglishSentences?.items[0]?.fakeWords.concat(splitWordsTranslation);

  const navigation = useNavigation<ExercisesStack>();

  const handleNavigation = useCallback(() => {
    navigation.navigate("SpeakTheSentenceScreen");
    setSoundPlaying(false);
    setShowAnswer(false);
    setButtonIsDisabled(true);
  }, [navigation]);

  const handleShowAnswer = () => {
    const answeredWords = wordsRef.current?.getAnsweredWords();
    const joinedAnsweredWords = answeredWords?.join(" ");
    const checkAnswer = joinedAnsweredWords === translation;
    setShowAnswer(true);
    setCorrectlyAnswered(checkAnswer);
  };

  const handleSpeak = useCallback(() => {
    if (!sentence) return;
    speakerVoiceMessage(sentence);
    setSoundPlaying(playingSound => !playingSound);
  }, [sentence]);

  const handleChangeButtonDisable = useCallback(
    (value: boolean) => {
      setButtonIsDisabled(value);
    },
    [setButtonIsDisabled],
  );

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
    correctlyAnswered,
    translation,
    handleNavigation,
    imgUrl,
    img,
  };
};

export default useTranslationSentence;
