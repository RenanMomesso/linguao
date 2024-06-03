import { useState } from "react";

const sentence = "What does the audio say?";
const fakeTranslatedSentence = [
  "O que o homem diz?",
  "O que a mulher diz?",
  "O que o cachorro diz?",
  "O que o audio diz?",
];
const useWhatDoesTheAudioSay = () => {
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
    handleSelectSentence
  };
};

export default useWhatDoesTheAudioSay;
