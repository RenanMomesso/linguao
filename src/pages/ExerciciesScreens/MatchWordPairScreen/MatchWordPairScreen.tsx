import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ExercicesLayout from "@/layouts/ExercicesLayout";
import Button from "@/components/Button/Button";
import { ExercisesStack } from "@/interface/navigation.interface";
import React, { useMemo, useState } from "react";
import useMatchWordPair from "./useMatchWordPair";
import TextComponent from "@/components/Text";
import { theme } from "@/theme/theme";

interface MatchWordPairScreenProps {
  navigation: ExercisesStack;
}

const MatchWordPairScreen = ({ navigation }: MatchWordPairScreenProps) => {
  const {
    handlePress,
    isMatched,
    isSelected,
    list: words,
    selected,
    wordsPairs,
    matches,
  } = useMatchWordPair();
  console.log("🚀 ~ MatchWordPairScreen ~ matches:", matches.length < 8);

  const buttonDisabled = matches.length < 8;
  console.log("🚀 ~ MatchWordPairScreen ~ buttonDisabled:", matches.length)

  const sortedWordsEnglish = useMemo(() => {
    return !!words?.length
      ? [...words].sort((a, b) => (a?.word ?? "").localeCompare(b?.word ?? ""))
      : [];
  }, [words.length]);

  const sortedWordsPortuguese = useMemo(() => {
    return [...words].sort((a, b) =>
      (a?.translatedWord ?? "").localeCompare(b?.translatedWord ?? "")
    );
  }, [words.length]);

  return (
    <ExercicesLayout
      barProgressPercentage={80}
      pageTitle="Select the correct matches"
    >
      <View style={styles.container}>
        <View style={styles.column}>
          {sortedWordsEnglish.map(
            (word: { word: any; translatedWord?: string }, index) => {
              if (!word?.word) return null;
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.card,
                    isSelected(word, "word") && styles.selectedCard,
                    isMatched(word.word) && styles.matchedCard,
                  ]}
                  onPress={() => handlePress(word, "word")}
                >
                  <TextComponent
                    color={
                      isSelected(word, "word") || isMatched(word?.word)
                        ? "white"
                        : "greyScale900"
                    }
                  >
                    {word?.word}
                  </TextComponent>
                </TouchableOpacity>
              );
            }
          )}
        </View>
        <View style={styles.column}>
          {sortedWordsPortuguese.map((word, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.card,
                isSelected(word, "translatedWord") && styles.selectedCard,
                isMatched(word.translatedWord) && styles.matchedCard,
              ]}
              onPress={() => handlePress(word, "translatedWord")}
            >
              <TextComponent
                color={
                  isSelected(word, "translatedWord") ||
                  isMatched(word.translatedWord)
                    ? "white"
                    : "greyScale900"
                }
              >
                {word.translatedWord}
              </TextComponent>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <ExercicesLayout.Footer>
        <Button
          disabled={false}
          backgroundColor={false ? "greyScale400" : "primary"}
          buttonText="Next"
          onPressButton={() => navigation.navigate("SelectCorrectlyAudioScreen")}
          touchSoundDisabled={false}
          textColor="white"
        />
      </ExercicesLayout.Footer>
    </ExercicesLayout>
  );
};

export default MatchWordPairScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  column: {
    flex: 1,
    gap: 20,
  },
  card: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    alignItems: "center",
  },
  selectedCard: {
    backgroundColor: theme.colors.success,
  },
  matchedCard: {
    backgroundColor: theme.colors.primary,
  },
});
