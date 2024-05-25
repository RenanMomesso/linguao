import React from "react";
import { Container } from "@/theme/GlobalComponents";
import TextComponent from "@/components/Text";
import Selectable from "@/components/Selectable/Selectable";
import { TrainingStack } from "@/interface/navigation.interface";
import BarProgress from "@/components/BarProgress/BarProgress";
import VideoListening from "@/components/VideoListening/VideoListening";
import { Image } from "react-native";
import GoBack from "@/components/GoBack/GoBack";
interface TrainingVideosScreenProps {
  navigation: TrainingStack;
}
const TrainingVideosScreen = ({ navigation }: TrainingVideosScreenProps) => {
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
      <GoBack />
      <TextComponent weight="black" size="heading5" align="left">
        Pick on video
      </TextComponent>

      <VideoListening
        videoThumbnail="https://cdn.leonardo.ai/users/3345091d-ef4f-408b-a098-5e6df04a4b4f/generations/36b496cd-828f-4f11-b120-c847158a8cf9/variations/alchemyrefiner_alchemymagic_1_36b496cd-828f-4f11-b120-c847158a8cf9_0.jpg?w=512"
        title="Rustic restaurant, from view of an outside table at night. Luscious green ivy covers the red brick walls of the restaurant and Warm ambience and candle lights reflecting off glimmering of glasses. Photographic realism"
      />

      
      <Container
        backgroundColor="white"
        style={{
          gap: 20,
          marginTop: 50,
        }}></Container>
    </Container>
  );
};

export default TrainingVideosScreen;
