import { useEffect, useState } from "react";

interface WordPair {
  word: string;
  translation: string;
  matched: boolean;
}

const wordsPairs = [
  {
    word: "Hello",
    translation: "Ola",
    matched: false,
  },
  {
    word: "Good morning",
    translation: "Bom dia",
    matched: false,
  },
  {
    word: "Nice",
    translation: "Legal",
    matched: false,
  },
  {
    word: "Man",
    translation: "Homem",
    matched: false,
  },
  {
    word: "Woman",
    translation: "Mulher",
    matched: false,
  },
  {
    word: "Happyness",
    translation: "Felicidade",
    matched: false,
  },
];

const useMatchWordPair = () => {
  const [selectedWord, setSelectedWord] = useState<WordPair | null>(null);
  const [selectedMatchWord, setSelectedMatchWord] = useState<WordPair[] | null>(
    null,
  );
  console.log("🚀 ~ useMatchWordPair ~ selectedMatchWord:", selectedMatchWord);
  const [matchedWords, setMatchedWords] = useState<WordPair[]>([]);
  console.log("🚀 ~ useMatchWordPair ~ matchedWords:", matchedWords);

  useEffect(() => {
    if (!!selectedMatchWord?.length && selectedMatchWord.length === 2) {
      if (
        selectedMatchWord[0].translation === selectedMatchWord[1].word &&
        selectedMatchWord[1].translation === selectedMatchWord[0].word
      ) {
        setMatchedWords(previous => [...previous, ...selectedMatchWord]);
        setSelectedMatchWord(null);
      } else {
        setSelectedMatchWord(null);
      }
    }
  }, []);

  const handleWordPress = (word: WordPair, text: string) => {
    console.log("oi");
    if (!!selectedMatchWord?.length && selectedMatchWord[0].word === text) {
      return;
    }

    if (!!selectedMatchWord?.length && selectedMatchWord?.[0].word !== text) {
      setSelectedMatchWord(previous => {
        if (!previous) return null;
        return [{ ...previous[0], matched: false }, word];
      });
    }

    if (!selectedMatchWord?.length) {
      setSelectedMatchWord([word]);
    }
  };

  return {
    wordsPairs,
    handleWordPress,
    selectedWord,
    selectedMatchWord,
  };
};

export default useMatchWordPair;
