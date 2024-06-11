import Button from "@/components/Button/Button";
import { ExercisesStack } from "@/interface/navigation.interface";
import ExercicesLayout from "@/layouts/ExercicesLayout";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const sentences = [
  { id: 1, text: "The __ is green.", blank: "color" },
  { id: 2, text: "A cat is a __ animal.", blank: "pet" },
  { id: 3, text: "We live on the planet __.", blank: "Earth" },
  { id: 4, text: "I have a red __.", blank: "car" },
  { id: 5, text: "I like to read __.", blank: "book" },
];

const words = ["color", "pet", "Earth", "car", "book"];

interface FillInTheBlanksScreenProps {
  navigation: ExercisesStack;
}

const FillInTheBlanksScreen = ({ navigation }: FillInTheBlanksScreenProps) => {
  const [filledInSentences, setFilledInSentences] = useState(
    sentences.map(sentence => ({
      ...sentence,
      userInput: "",
    })),
  );
  const [index, setIndex] = useState(0);

  const handleFill = word => {
    const newSentences = filledInSentences.map((item, idx) => {
      if (idx === index) {
        return { ...item, userInput: word };
      }
      return item;
    });
    setFilledInSentences(newSentences);
    setIndex(index + 1);
  };

  const handleClear = idx => {
    const newSentences = filledInSentences.map((item, i) => {
      if (i === idx) {
        return { ...item, userInput: "" };
      }
      return item;
    });
    setFilledInSentences(newSentences);
    setIndex(idx); // Reset index to allow re-filling the cleared sentence
  };

  return (
    <ExercicesLayout barProgressPercentage={80} pageTitle="Fill in the blanks">
      <View style={styles.container}>
        {filledInSentences.map((sentence, idx) => (
          <TouchableOpacity
            key={sentence.id}
            style={styles.sentenceContainer}
            onPress={() => handleClear(idx)}>
            <Text style={styles.sentence}>
              {sentence.text.split("__")[0]}
              <Text style={styles.blank}>{sentence.userInput || "_____"}</Text>
              {sentence.text.split("__")[1]}
            </Text>
          </TouchableOpacity>
        ))}
        <View style={styles.wordsContainer}>
          {words.map(word => (
            <TouchableOpacity
              key={word}
              style={styles.button}
              onPress={() => handleFill(word)}>
              <Text style={styles.buttonText}>{word}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <ExercicesLayout.Footer>
        <Button
          disabled={false}
          backgroundColor="primary"
          buttonText="Next"
          onPressButton={() =>
            navigation.navigate("SelectCorrectImgTextScreen")
          }
          touchSoundDisabled={false}
          textColor="Red"
        />
      </ExercicesLayout.Footer>
    </ExercicesLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sentenceContainer: {
    marginBottom: 20,
  },
  sentence: {
    fontSize: 18,
    marginBottom: 10,
  },
  blank: {
    fontWeight: "bold",
  },
  wordsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
  },
  buttonText: {
    fontSize: 16,
  },
});

export default FillInTheBlanksScreen;
