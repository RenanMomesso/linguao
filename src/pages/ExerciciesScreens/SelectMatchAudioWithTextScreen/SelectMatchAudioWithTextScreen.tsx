import { View, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import React from "react";
import ExercicesLayout from "@/layouts/ExercicesLayout";
import { theme } from "@/theme/theme";
import TextComponent from "@/components/Text";
import Button from "@/components/Button/Button";

import TapAudioCircle from "@/assets/images/TapAudioCircle.svg";
import WordsSelectors from "../../TranslateSentenceScreen/components/WordsSelectors";

import BottomSheetAnswer from "../components/BottomSheetAnswer/BottomSheetAnswer";
import CustomInput from "@/components/Input/Input";
import useMatchWordPair from "../MatchWordPairScreen/useMatchWordPair";
import Selectable from "@/components/Selectable/Selectable";
import SpeakerWithBars from "../SelectCorrectlyAudioScreen/SpeakerWithBars";
import { useTypedNavigation } from "@/hooks/useNavigationTyped";
import { useNavigation } from "@react-navigation/native";
import { ExercisesStack } from "@/interface/navigation.interface";

const SelectMatchAudioWithTextScreen = (props: any) => {
  const navigation = useNavigation<ExercisesStack>()
  const {
    handlePress,
    isMatched,
    isSelected,
    sortedWordsEnglish,
    sortedWordsPortuguese,
  } = useMatchWordPair();

  return (
    <ExercicesLayout
      barProgressPercentage={80}
      pageTitle="Match the audio with the text">
      <View style={{ height: 20 }} />
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
                  onPress={() => handlePress(word, "word")}>
                  <SpeakerWithBars
                    size="small"
                    sentence={word.translatedWord}
                  />
                </TouchableOpacity>
              );
            },
          )}
        </View>
        <View style={styles.column}>
          {sortedWordsPortuguese.map((word, index) => (
            <TouchableOpacity
              key={index}
              style={[
                {alignItems:'flex-start', justifyContent:'flex-start'},
                styles.card,
                isSelected(word, "translatedWord") && styles.selectedCard,
                isMatched(word.translatedWord) && styles.matchedCard,
              ]}
              onPress={() => handlePress(word, "translatedWord")}>
              <TextComponent
                color={
                  isSelected(word, "translatedWord") ||
                  isMatched(word.translatedWord)
                    ? "white"
                    : "greyScale900"
                }>
                {word.translatedWord}
              </TextComponent>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <ExercicesLayout.Footer>
        <Button
          backgroundColor={true ? "primary" : "greyScale300"}
          buttonText="Check Answers"
          textColor="white"
          disabled={false}
          onPressButton={() => {
            navigation.navigate("LessonCompletedScreen")
          }}
        />
      </ExercicesLayout.Footer>
      {false && (
        <BottomSheetAnswer
          correctlyAnswered={true}
          translation={""}
          handleAlert={() => {}}
          handleClickContinue={() => {

          }}
          handleShare={() => {}}
        />
      )}
    </ExercicesLayout>
  );
};

export default SelectMatchAudioWithTextScreen;

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
    justifyContent: "center",
    maxHeight: 55,
    height: 55,
  },
  selectedCard: {
    backgroundColor: theme.colors.success,
  },
  matchedCard: {
    backgroundColor: theme.colors.primary,
  },
});
