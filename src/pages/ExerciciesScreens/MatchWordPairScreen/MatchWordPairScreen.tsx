import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ExercicesLayout from "@/layouts/ExercicesLayout";
import Button from "@/components/Button/Button";
import { ExercisesStack } from "@/interface/navigation.interface";
import React, { useState } from "react";
import useMatchWordPair from "./useMatchWordPair";

interface MatchWordPairScreenProps {
  navigation: ExercisesStack;
}

const MatchWordPairScreen = ({ navigation }: MatchWordPairScreenProps) => {
  const { wordsPairs, handleWordPress, selectedMatchWord, selectedWord } =
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
                  backgroundColor:
                    selectedMatchWord?.[0].word === word.word
                      ? "lightblue"
                      : "white",
                },
              ]}
              onPress={() => handleWordPress(word, word.word)}>
              <Text style={styles.text}>{word.word}</Text>
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
                  backgroundColor:
                    selectedMatchWord?.[1]?.translation === word.translation
                      ? "lightblue"
                      : "white",
                },
              ]}
              onPress={() => handleWordPress(word, word.translation)}>
              <Text style={styles.text}>{word.translation}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <ExercicesLayout.Footer>
        <Button
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
