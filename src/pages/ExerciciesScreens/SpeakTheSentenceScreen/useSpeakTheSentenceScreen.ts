import { IVoiceResult } from "@/hooks/useVoiceRecognition";
import { gql, useQuery } from "@apollo/client";
import { generateRandomInt } from "@/utils/maths";
import { useMemo, useState } from "react";
import { englishSentenceQuery } from "@/pages/TranslateSentenceScreen/translateSentenceQuery";
import {
  ListEnglishSentencesQuery,
  ListEnglishSentencesQueryVariables,
} from "@/API";
import { useNavigation } from "@react-navigation/native";
import {
  ExercisesStack,
  ExercisesStackProps,
} from "@/interface/navigation.interface";

type ModalType = "bug" | "share" | "save" | "";

const useSpeakTheSentenceScreen = ({
  voiceResult,
}: {
  voiceResult: IVoiceResult;
}) => {
  const navigation = useNavigation<ExercisesStack>();
  const [showAnswer, setShowAnswer] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("");
  const { data, loading, error } = useQuery<
    ListEnglishSentencesQuery,
    ListEnglishSentencesQueryVariables
  >(englishSentenceQuery);

  const generateRandomIntNumber = useMemo(() => {
    const length = data?.listEnglishSentences?.items.length;
    return length ? generateRandomInt(length) : 0;
  }, [data]);

  const sentence = useMemo(() => {
    return data?.listEnglishSentences?.items[generateRandomIntNumber]?.sentence;
  }, [data]);

  const checkAnswersMatches = () => {
    let result = "";
    let similarity = false;
    for (let i = 0; i < voiceResult.results.length; i++) {
      if (
        voiceResult.results[i].toLocaleLowerCase() ===
        sentence?.toLocaleLowerCase()
      ) {
        console.log("Entrou aqui em");
        result = voiceResult.results[i];
        similarity = true;
        break;
      } else {
        similarity = false;
      }
    }
    return { result, similarity };
  };

  const handleNavigation = () => {
    navigation.navigate("WhatDoesTheAudioSayScreen");
  };
  return {
    sentence,
    loading,
    error,
    checkAnswersMatches,
    showAnswer,
    setShowAnswer,
    setModalVisible,
    modalVisible,
    setModalType,
    modalType,
    handleNavigation,
  };
};

export default useSpeakTheSentenceScreen;
