import React from "react";
import { Container } from "@/theme/GlobalComponents";
import TextComponent from "@/components/Text";
import Selectable from "@/components/Selectable/Selectable";
import { TrainingStack } from "@/interface/navigation.interface";
import BarProgress from "@/components/BarProgress/BarProgress";
import GoBack from "@/components/GoBack/GoBack";
interface TrainingScreenPresentationProps {
  navigation: TrainingStack;
}
const TrainingScreenPresentation = ({
  navigation,
}: TrainingScreenPresentationProps) => {
  return (
    <Container
      backgroundColor="white"
      style={{
        padding: 20,
      }}>
      <GoBack />
      <TextComponent
        weight="black"
        size="heading5"
        align="left"
        style={{
          marginTop: 40,
        }}>
        Choose a training type
      </TextComponent>
      <Container
        backgroundColor="white"
        style={{
          gap: 20,
          marginTop: 50,
        }}>
        <Selectable>
          <TextComponent weight="bold" size="heading6">
            Talking
          </TextComponent>
          <TextComponent size="heading6">
            Learn speaking and repeting
          </TextComponent>
        </Selectable>

        <Selectable onPress={() => navigation.navigate("TrainingListening")}>
          <TextComponent weight="bold" size="heading6">
            Listening
          </TextComponent>
          <TextComponent size="heading6">
            Learn listening and understanding
          </TextComponent>
        </Selectable>

        <Selectable>
          <TextComponent weight="bold" size="heading6">
            Writing
          </TextComponent>
          <TextComponent size="heading6">
            Learn writing and spelling
          </TextComponent>
        </Selectable>

        <Selectable>
          <TextComponent weight="bold" size="heading6">
            Reading
          </TextComponent>
          <TextComponent size="heading6">
            Learn reading and understanding
          </TextComponent>
        </Selectable>
      </Container>
    </Container>
  );
};

export default TrainingScreenPresentation;
