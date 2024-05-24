import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import TextComponent from "../Text";
import { Column, Row } from "@/theme/GlobalComponents";
import { useNavigation } from "@react-navigation/native";
import {
  TrainingStack,
  TrainingStackProps,
} from "@/interface/navigation.interface";

interface VideoListeningProps {
  title: string;
  videoThumbnail: string;
}

const VideoListening = ({ title, videoThumbnail }: VideoListeningProps) => {
  const navigation = useNavigation<TrainingStack>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("TrainingVideoScreen", {
          videoUrl:
            "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
        })
      }>
      <Row
        style={{
          gap: 10,
          alignItems: "center",
          overflow: "hidden",
        }}>
        <Image
          source={{ uri: videoThumbnail }}
          style={{
            width: 150,
            height: 150,
            borderRadius: 10,
          }}
        />
        <Column>
          <TextComponent weight="black" size="text" align="left">
            {title}
          </TextComponent>
          <TextComponent weight="light" align="left">
            1:30
          </TextComponent>
        </Column>
      </Row>
    </Pressable>
  );
};

export default VideoListening;
