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
const words = [
  { english: "hello", portuguese: "ola" },
  { english: "bye", portuguese: "tchau" },
  { english: "man", portuguese: "homem" },
  { english: "girl", portuguese: "garota" },
];
const MatchWordPairScreen = ({ navigation }: MatchWordPairScreenProps) => {
  const { wordsPairs, handleWordPress, selectedMatchWord, detectIfMatched } =
    useMatchWordPair();

  const [selected, setSelected] = useState([]);
  const [matches, setMatches] = useState([]);

  const handlePress = (word, type) => {
    if (selected.length === 1 && selected[0].type === type) {
      setSelected([]);
      return;
    }

    if (selected.length === 1 && selected[0].type !== type) {
      if (
        (type === "english" && selected[0].word === word.portuguese) ||
        (type === "portuguese" && selected[0].word === word.english)
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

  return (
    <ExercicesLayout
      barProgressPercentage={80}
      pageTitle="Select the correct matches">
      <View style={styles.container}>
        <View style={styles.column}>
          {words.map((word, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.card,
                isSelected(word, "english") && styles.selectedCard,
                isMatched(word.english) && styles.matchedCard,
              ]}
              onPress={() => handlePress(word, "english")}>
              <Text>{word.english}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.column}>
          {words.map((word, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.card,
                isSelected(word, "portuguese") && styles.selectedCard,
                isMatched(word.portuguese) && styles.matchedCard,
              ]}
              onPress={() => handlePress(word, "portuguese")}>
              <Text>{word.portuguese}</Text>
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
    padding: 20,
  },
  column: {
    flex: 1,
  },
  card: {
    padding: 20,
    margin: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    alignItems: "center",
  },
  selectedCard: {
    backgroundColor: "#ffeb3b",
  },
  matchedCard: {
    backgroundColor: "#4caf50",
  },
});
