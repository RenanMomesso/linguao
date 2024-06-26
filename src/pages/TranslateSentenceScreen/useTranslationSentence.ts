import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DuoDragDropRef } from "@/components/DuoDragAndDrop";
import { useQuery } from "@apollo/client";
import { englishSentenceQuery } from "./translateSentenceQuery";
import { useNavigation } from "@react-navigation/native";
import { ExercisesStack } from "@/interface/navigation.interface";
import { speakerVoiceMessage } from "@/utils/speakerVoice";
import { imgToBase64 } from "@/utils/imgToBase64";
import { generateRandomInt } from "@/utils/maths";

const useTranslationSentence = () => {
  const wordsRef = useRef<DuoDragDropRef>(null);

  const [showAnswer, setShowAnswer] = useState(false);
  const [soundPlaying, setSoundPlaying] = useState(true);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  const [correctlyAnswered, setCorrectlyAnswered] = useState(false);
  const [img, setImg] = useState("");

  const { data, loading, error } = useQuery(englishSentenceQuery, {
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

  const generateRandomIntNumber = useMemo(() => {
    return generateRandomInt(data?.listEnglishSentences?.items.length);
  }, [data]);

  const sentence =
    data?.listEnglishSentences?.items[generateRandomIntNumber]?.sentence;
  const audioUrl =
    data?.listEnglishSentences?.items[generateRandomIntNumber]?.audioUrl;

  const translation =
    data?.listEnglishSentences?.items[generateRandomIntNumber]?.translation;
  const splitWordsTranslation = useMemo(() => {
    return translation?.split(" ")?.sort(() => Math.random() - 0.5);
  }, [translation]);

  const wordsExample = data?.listEnglishSentences?.items[0]?.fakeWords.concat(
    splitWordsTranslation,
  );
  const navigation = useNavigation<ExercisesStack>();

  const handleNavigation = useCallback(() => {
    navigation.navigate("SpeakTheSentenceScreen");
    setSoundPlaying(false);
    setShowAnswer(false);
    setButtonIsDisabled(true);
  }, []);

  const handleShowAnswer = () => {
    const answeredWords = wordsRef.current?.getAnsweredWords();
    const joinedAnsweredWords = answeredWords?.join(" ");
    const checkAnswer = joinedAnsweredWords === translation;
    setShowAnswer(true);
    setCorrectlyAnswered(checkAnswer);
  };

  const handleSpeak = useCallback(() => {
    speakerVoiceMessage(sentence);
    setSoundPlaying(playingSound => !playingSound);
  }, [sentence]);

  const handleChangeButtonDisable = (value: boolean) => {
    setButtonIsDisabled(value);
  };

  useEffect(() => {
    if (audioUrl) {
      // getImgUrlToBase64();
    }
    setImg(audioUrl);
  }, [audioUrl]);

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
    imgUrl: audioUrl,
    img,
  };
};

export default useTranslationSentence;
