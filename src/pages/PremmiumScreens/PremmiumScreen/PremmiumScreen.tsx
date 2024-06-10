import { View, Text, Pressable } from "react-native";
import React from "react";
import PremmiumLayout from "@/layouts/PremmiumLayout";
import { useAppSelector } from "@/store";
import { TextContainer } from "@/components/Text";
import { Row } from "@/theme/GlobalComponents";
import { ChatAiIcon, ChatIcon, NotificationIcon } from "@/assets/images";
import PressableCard from "@/components/PressableCard/PressableCard";

const PremmiumScreen = () => {
  const { user } = useAppSelector(state => state.user);
  const userIsPremium = user?.isPremium || false;

  return (
    <PremmiumLayout>
      <Row style={{ justifyContent: "space-between" }}>
        <TextContainer weight="bold" size="heading6">
          Premmium account
        </TextContainer>
        <NotificationIcon height={25} width={25} color="white" />
      </Row>

      <TextContainer
        weight="bold"
        size="heading5"
        align="center"
        style={{ marginTop: 30 }}>
        Premmium Features
      </TextContainer>
      <Row style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <PressableCard
          navigationTo={"ChatWithAi"}
          imgUrl={require("@/assets/images/chatWithAI.webp")}
          title="Chat with AI"
        />
        <PressableCard
          imgUrl={require("@/assets/images/chatWithAI.webp")}
          title="Chat with AI"
        />
        <PressableCard
          imgUrl={require("@/assets/images/chatWithAI.webp")}
          title="Chat with AI"
        />
        <PressableCard
          imgUrl={require("@/assets/images/chatWithAI.webp")}
          title="Chat with AI"
        />
      </Row>
    </PremmiumLayout>
  );
};

export default PremmiumScreen;
