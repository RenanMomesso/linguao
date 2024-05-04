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

const FillInTheBlanksScreen = ({navigation}:FillInTheBlanksScreenProps) => {
  const [filledInSentences, setFilledInSentences] = useState(
    sentences.map(sentence => ({
      ...sentence,
      userInput: "",
    })),
  );

  const handleFill = (word, index) => {
    const newSentences = filledInSentences.map((item, idx) => {
      if (idx === index) {
        return { ...item, userInput: word };
      }
      return item;
    });
    setFilledInSentences(newSentences);
  };

  return (
    <ExercicesLayout barProgressPercentage={80} pageTitle="Fill in the blanks">
      <View style={styles.container}>
        {filledInSentences.map((sentence, index) => (
          <View key={sentence.id} style={styles.sentenceContainer}>
            <Text style={styles.sentence}>
              {sentence.text.replace(
                "__",
                sentence.userInput || <Text style={styles.blank}>_____</Text>,
              )}
            </Text>
            <View style={styles.wordsContainer}>
              {words.map(word => (
                <TouchableOpacity
                  key={word}
                  style={styles.button}
                  onPress={() => handleFill(word, index)}>
                  <Text style={styles.buttonText}>{word}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </View>
      <ExercicesLayout.Footer>
        <Button
          disabled={false}
          backgroundColor="primary"
          buttonText="Next"
          onPressButton={() => navigation.navigate("LessonCompletedScreen")}
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
    padding: 20,
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
  },
  button: {
    backgroundColor: "skyblue",
    padding: 8,
    margin: 4,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default FillInTheBlanksScreen;
