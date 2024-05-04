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
  const { wordsPairs, handleWordPress, selectedMatchWord, detectIfMatched } =
    useMatchWordPair();

  return (
    <ExercicesLayout
      barProgressPercentage={80}
      pageTitle="Select the correct matches">
      <View style={styles.container}>
        <View style={styles.column}>
          {wordsPairs.map(word => (
            <TouchableOpacity
              key={word.word}
              style={[
                styles.word,
                word.matched ? styles.matched : null,
                {
                  backgroundColor: detectIfMatched(word)
                    ? theme.colors.primary200
                    : "white",
                },
              ]}
              onPress={() => handleWordPress(word.word, "word")}>
              <TextComponent style={styles.text}>{word.word}</TextComponent>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.column}>
          {wordsPairs.map(word => (
            <TouchableOpacity
              key={word.word}
              style={[
                styles.word,
                {
                  backgroundColor: detectIfMatched(word)
                    ? theme.colors.primary200
                    : "white",
                },
              ]}
              onPress={() => handleWordPress(word.translation, "translation")}>
              <TextComponent style={styles.text}>
                {word.translation}
              </TextComponent>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <ExercicesLayout.Footer>
        <Button
          disabled={false}
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
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  column: {
    padding: 10,
    width: "50%",
  },
  word: {
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
    padding: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: theme.colors.greyScale300
  },
  matched: {
    backgroundColor: "lightgreen",
    borderColor: "green",
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
  },
});
