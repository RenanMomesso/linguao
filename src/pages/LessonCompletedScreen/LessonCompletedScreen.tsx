import React from "react";
import { BottomContainer, Container } from "@/theme/GlobalComponents";
import TextComponent from "@/components/Text";
import Linguo from "@/assets/images/ElingoIcon.svg"
import ItemInfo from "@/components/ItemInfo/ItemInfo";
import Button from "@/components/Button/Button";

const LessonCompletedScreen = ({navigation}:any) => {
  return (
    <Container
      backgroundColor="white"
      style={{
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        gap:20
      }}>
      <TextComponent color="primary" weight="bold" size="heading4">
        Congratulations! You have completed the lesson.
      </TextComponent>
      <Linguo width={200} height={200} />
      <ItemInfo />
      <BottomContainer>
        <Button
          buttonText="CONTINUE"
          backgroundColor="primary"
          textColor="white"
          onPressButton={() => {
            navigation.navigate("HomePlay");
          }}
        />
      </BottomContainer>
    </Container>
  );
};

export default LessonCompletedScreen;
