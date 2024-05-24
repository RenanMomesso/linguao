import { View, Text } from "react-native";
import React from "react";
import TrainingScreensLayout from "../TrainingScreensLayout";
import TextComponent from "@/components/Text";
import { Column } from "@/theme/GlobalComponents";
import Selectable from "@/components/Selectable/Selectable";
import BarProgress from "@/components/BarProgress/BarProgress";
import { TrainingStack } from "@/interface/navigation.interface";

interface TrainingListeningsScreenProps {
  navigation: TrainingStack;
}
const TrainingListeningsScreen = ({
  navigation,
}: TrainingListeningsScreenProps) => {
  return (
    <TrainingScreensLayout>
      <TextComponent
        weight="black"
        size="heading5"
        align="left"
        style={{
          marginTop: 40,
        }}>
        Listen and repeat
      </TextComponent>
      <Column
        style={{
          marginTop: 40,
        }}>
        <Selectable onPress={() => navigation.navigate("TrainingVideosScreenLevels")}>
          <TextComponent weight="bold" size="heading6">
            Videos
          </TextComponent>
          <TextComponent size="heading6">
            Listen and repeat the word
          </TextComponent>
        </Selectable>

        <Selectable>
          <TextComponent weight="bold" size="heading6">
            Sentences
          </TextComponent>
          <TextComponent size="heading6">
            Listen and repeat the sentence
          </TextComponent>
        </Selectable>

        <Selectable>
          <TextComponent weight="bold" size="heading6">
            Dialogues
          </TextComponent>
          <TextComponent size="heading6">
            Listen and repeat the dialogue
          </TextComponent>
        </Selectable>
      </Column>
    </TrainingScreensLayout>
  );
};

export default TrainingListeningsScreen;
