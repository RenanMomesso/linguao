import { Word } from "@/components/DuoDragAndDrop";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { wordListsQuery } from "./matchWordPairQuery";

interface SelectedMatchWord {
  word: string;
  type: "word" | "translation";
}

const useMatchWordPair = () => {
  const { data, loading } = useQuery(wordListsQuery);
  const list = data?.listWordLists?.items || [];
  const [selected, setSelected] = useState([]);
  const [matches, setMatches] = useState([]);

  const handlePress = (word, type) => {
    if (selected.length === 1 && selected[0].type === type) {
      setSelected([]);
      return;
    }

    if (selected.length === 1 && selected[0].type !== type) {
      if (
        (type === "languange" && selected[0].word === word.portuguese) ||
        (type === "portuguese" && selected[0].word === word.languange)
      ) {
        setMatches([...matches, selected[0].word, word[type]]);
      }
      setSelected([]);
    } else {
      setSelected([{ word: word[type], type }]);
    }
  };

  const isMatched = word => matches.includes(word);

  const isSelected = (word, type) =>
    selected.some(item => item.word === word[type] && item.type === type);

  return {
    wordsPairs: list?.listWordLists?.items[0]?.Words?.items,
    handlePress,
    selected,
    isMatched,
    list,
    isSelected,
    matches
  };
};

export default useMatchWordPair;
