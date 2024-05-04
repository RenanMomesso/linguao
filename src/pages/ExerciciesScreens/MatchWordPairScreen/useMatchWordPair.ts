import { Word } from "@/components/DuoDragAndDrop";
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

interface SelectedMatchWord {
  word: string;
  type: "word" | "translation";
}

const useMatchWordPair = () => {
  const [selectedWord, setSelectedWord] = useState<WordPair | null>(null);
  const [selectedMatchWord, setSelectedMatchWord] = useState<
    SelectedMatchWord[] | null
  >(null);
  console.log("🚀 ~ useMatchWordPair ~ selectedMatchWord:", selectedMatchWord);
  const [matchedWords, setMatchedWords] = useState<WordPair[]>([]);
  console.log("🚀 ~ useMatchWordPair ~ matchedWords:", matchedWords);

  useEffect(() => {
    if (selectedMatchWord?.length === 2) {
      const [firstWord, secondWord] = selectedMatchWord;

      // if same type, reset
      if (firstWord.type === secondWord.type) {
        setTimeout(() => {
          setSelectedMatchWord([]);
        }, 1000);
        return;
      }

      // if diffenrt type but din't match

      const firstWordPair = () => {
        if (firstWord.type === "word") {
          return wordsPairs.find(wordPair => wordPair.word === firstWord.word);
        }
        return wordsPairs.find(
          wordPair => wordPair.translation === firstWord.word,
        );
      };

      const secondWordPair = () => {
        if (secondWord.type === "word") {
          return wordsPairs.find(wordPair => wordPair.word === secondWord.word);
        }
        return wordsPairs.find(
          wordPair => wordPair.translation === secondWord.word,
        );
      };

      if (!firstWordPair() || !secondWordPair()) {
        setSelectedMatchWord([]);
        return;
      }
    }
  }, [selectedMatchWord, wordsPairs]);

  const handleWordPress = (text: string, isWord: "word" | "translation") => {
    if (!selectedMatchWord?.length) {
      setSelectedMatchWord([{ word: text, type: isWord }]);
      return;
    }

    if (!!selectedMatchWord?.length) {
      setSelectedMatchWord(previousData => {
        if (!previousData) return null;
        return [...previousData, { word: text, type: isWord }];
      });
    }

    if (!!selectedMatchWord.length && selectedMatchWord.length >= 2) {
      setSelectedMatchWord([]);
    }
  };

  const detectIfMatched = (word: WordPair) => {
    const isSelectedWord = selectedMatchWord?.some(
      selectedWord => selectedWord.word === word.translation,
    );
    if (!isSelectedWord) return false;

    const matchedWordsContain = matchedWords.some(
      matchedWord =>
        matchedWord.word === word.word &&
        matchedWord.translation === word.translation,
    );

    return matchedWordsContain;
  };

  return {
    wordsPairs,
    handleWordPress,
    selectedWord,
    selectedMatchWord,
    detectIfMatched,
  };
};

export default useMatchWordPair;
