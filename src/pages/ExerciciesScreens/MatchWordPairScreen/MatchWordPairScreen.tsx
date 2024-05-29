import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ExercicesLayout from "@/layouts/ExercicesLayout";
import Button from "@/components/Button/Button";
import { ExercisesStack } from "@/interface/navigation.interface";
import React, { useState } from "react";
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
    list,
    selected,
    wordsPairs,
    matches,
  } = useMatchWordPair();
    console.log("🚀 ~ MatchWordPairScreen ~ matches:", matches.length < 8)

  const buttonDisabled = matches.length < 8;

  const words = list?.[0].Words?.items || [];

  const sortedWordsEnglish = [...words].sort((a, b) =>
    a?.english?.localeCompare(b.english),
  );
  const sortedWordsPortuguese = [...words].sort((a, b) =>
    a?.portuguese?.localeCompare(b.portuguese),
  );

  return (
    <ExercicesLayout
      barProgressPercentage={80}
      pageTitle="Select the correct matches">
      <View style={styles.container}>
        <View style={styles.column}>
          {sortedWordsEnglish.map((word, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.card,
                isSelected(word, "languange") && styles.selectedCard,
                isMatched(word.languange) && styles.matchedCard,
              ]}
              onPress={() => handlePress(word, "languange")}>
              <TextComponent
                color={
                  isSelected(word, "languange") || isMatched(word.languange)
                    ? "white"
                    : "greyScale900"
                }>
                {word.languange}
              </TextComponent>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.column}>
          {sortedWordsPortuguese.map((word, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.card,
                isSelected(word, "portuguese") && styles.selectedCard,
                isMatched(word.portuguese) && styles.matchedCard,
              ]}
              onPress={() => handlePress(word, "portuguese")}>
              <TextComponent
                color={
                  isSelected(word, "portuguese") || isMatched(word.portuguese)
                    ? "white"
                    : "greyScale900"
                }>
                {word.portuguese}
              </TextComponent>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <ExercicesLayout.Footer>
        <Button
          disabled={buttonDisabled}
          backgroundColor="Blue"
          buttonText="Next"
          onPressButton={() => navigation.navigate("FillInTheBlanksScreen")}
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
