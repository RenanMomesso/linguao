import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { ListWordListsQuery, ListWordListsQueryVariables } from "@/API";
import { LIST_WORDS_QUERY } from "./matchWordPairQuery";

type WordType = "word" | "translatedWord";
interface SelectedMatchWord {
  word: string;
  type: WordType;
}

const useMatchWordPair = () => {
  const { data, loading } = useQuery<
    ListWordListsQuery,
    ListWordListsQueryVariables
  >(LIST_WORDS_QUERY);
  const list = data?.listWordLists?.items || [];
  const wordsList = list?.map(item => item?.Words?.items) || [];
  console.log("🚀 ~ useMatchWordPair ~ wordsList:", wordsList);
  const [selected, setSelected] = useState<SelectedMatchWord[]>([]);
  const [matches, setMatches] = useState<string[]>([]);

  const handlePress = (word: { word: string; translatedWord: string }, type: WordType) => {
    if (selected.length === 1 && selected[0].type === type) {
      setSelected([]);
      return;
    }
  
    if (selected.length === 1 && selected[0].type !== type) {
      if (
        (type === "word" && selected[0].word === word.translatedWord) ||
        (type === "translatedWord" && selected[0].word === word.word)
      ) {
        setMatches([...matches, selected[0].word, word[type]]);
      }
      setSelected([]);
    } else {
      setSelected([{ word: word[type], type }]);
    }
  };

  const isMatched = (word: string) => matches.includes(word);

  const isSelected = (word: string, type: WordType) =>
    selected.some(item => item.word === word[type] && item.type === type);

  return {
    wordsPairs: list?.[0]?.Words?.items,
    handlePress,
    selected,
    isMatched,
    list,
    isSelected,
    matches,
  };
};

export default useMatchWordPair;
