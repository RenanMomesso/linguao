import { gql, useMutation, useQuery } from "@apollo/client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ListWordListsQuery, ListWordListsQueryVariables } from "@/API";
import { LIST_WORDS_QUERY } from "./matchWordPairQuery";
import { generateRandomInt } from "@/utils/maths";

type WordType = "word" | "translatedWord";
interface SelectedMatchWord {
  word: string;
  type: WordType;
}

const useMatchWordPair = () => {
  const { data, loading, error } = useQuery<
    ListWordListsQuery,
    ListWordListsQueryVariables
  >(LIST_WORDS_QUERY);
  const list = data?.listWordLists?.items || [];
  const wordsList = list?.map(item => item?.Words?.items) || [];

  const pickOneItemList = useMemo(() => {
    return generateRandomInt(wordsList.length);
  }, []);
  const sortedList = useMemo(() => {
    return list[pickOneItemList]?.Words?.items || [];
  }, []);
  const [selected, setSelected] = useState<SelectedMatchWord[]>([]);
  const [matches, setMatches] = useState<string[]>([]);

  const handlePress = useCallback(
    (word: { word: string; translatedWord: string }, type: WordType) => {
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
    },
    [selected, matches]
  );

  const isMatched = (word: string) => matches.includes(word);

  const isSelected = (word: string | any, type: WordType | any) =>
    selected.some(item => item.word === word[type] && item.type === type);

  const sortedWordsEnglish = useMemo(() => {
    return !!sortedList?.length
      ? [...sortedList].sort((a, b) =>
          (a?.word ?? "").localeCompare(b?.word ?? ""),
        )
      : [];
  }, [sortedList.length]);

  const sortedWordsPortuguese = useMemo(() => {
    return [...sortedList].sort((a, b) =>
      (a?.translatedWord ?? "").localeCompare(b?.translatedWord ?? ""),
    );
  }, [sortedList.length]);
  return {
    wordsPairs: list?.[pickOneItemList]?.Words?.items || [],
    handlePress,
    selected,
    isMatched,
    list: sortedList || [],
    isSelected,
    matches,
    sortedWordsEnglish,
    sortedWordsPortuguese
  };
};

export default useMatchWordPair;
