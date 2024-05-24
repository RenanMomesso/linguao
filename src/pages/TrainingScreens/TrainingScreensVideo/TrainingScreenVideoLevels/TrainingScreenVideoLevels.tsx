import React from "react";
import { Container } from "@/theme/GlobalComponents";
import TextComponent from "@/components/Text";
import Selectable from "@/components/Selectable/Selectable";
import { TrainingStack } from "@/interface/navigation.interface";
import BarProgress from "@/components/BarProgress/BarProgress";
interface TrainingScreenVideoLevelsProps {
  navigation: TrainingStack;
}
const TrainingScreenVideoLevels = ({
  navigation,
}: TrainingScreenVideoLevelsProps) => {
  const handleNavigation = (level: string) => {
    navigation.navigate("TrainingVideosScreen", {
      level: level,
    });
  };

  return (
    <Container
      backgroundColor="white"
      style={{
        padding: 20,
      }}>
      <BarProgress percentageStatus={0} />
      <TextComponent weight="black" size="heading5" align="left">
        Choose level of training
      </TextComponent>

      <Container
        backgroundColor="white"
        style={{
          gap: 20,
          marginTop: 50,
        }}>
        <Selectable onPress={() => handleNavigation("A1")}>
          <TextComponent weight="bold" size="heading6">
            A1
          </TextComponent>
          <TextComponent size="heading6">
            Learn basic words and phrases
          </TextComponent>
        </Selectable>

        <Selectable onPress={() => navigation.navigate("TrainingListening")}>
          <TextComponent weight="bold" size="heading6">
            A2
          </TextComponent>
          <TextComponent size="heading6">
            Learn basic sentences and dialogues
          </TextComponent>
        </Selectable>

        <Selectable>
          <TextComponent weight="bold" size="heading6">
            B1
          </TextComponent>
          <TextComponent size="heading6">
            Learn intermediate words and phrases
          </TextComponent>
        </Selectable>

        <Selectable>
          <TextComponent weight="bold" size="heading6">
            B2
          </TextComponent>
          <TextComponent size="heading6">
            Learn intermediate sentences and dialogues
          </TextComponent>
        </Selectable>
        <Selectable>
          <TextComponent weight="bold" size="heading6">
            C1
          </TextComponent>
          <TextComponent size="heading6">
            Learn advanced words and phrases
          </TextComponent>
        </Selectable>
        <Selectable>
          <TextComponent weight="bold" size="heading6">
            C2
          </TextComponent>
          <TextComponent size="heading6">
            Learn advanced sentences and dialogues
          </TextComponent>
        </Selectable>
      </Container>
    </Container>
  );
};

export default TrainingScreenVideoLevels;
