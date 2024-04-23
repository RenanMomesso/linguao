import { View, TouchableOpacity, StatusBar } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { BottomContainer, Container, HR } from "@/theme/GlobalComponents";
import BarProgress from "@/components/BarProgress/BarProgress";
import TextComponent from "@/components/Text";
import { theme } from "@/theme/theme";
import Button from "@/components/Button/Button";

import AnimatedBottom from "@/components/AnimatedBottom/AnimatedBottom";
import PlaySoundIcon from "@/assets/images/PlaySound.svg";
import PlaySoundIconWorking from "@/assets/images/PlaySoundIconWorking.svg";
import CloseIcon from "@/assets/images/closeIcon.svg";
import { useTypedNavigation } from "@/hooks/useNavigationTyped";

import WordsSelectors from "@/pages/TranslateSentenceScreen/components/WordsSelectors";
import { DuoDragDropRef } from "@/components/DuoDragAndDrop";


const TranslateSentenceScreen = () => {
  const wordsRef = useRef<DuoDragDropRef>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [soundPlaying, setSoundPlaying] = useState(false);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  const navigation = useTypedNavigation();

  const handleShowAnswer = () => {
    console.log(wordsRef.current?.getAnsweredWords());
    setShowAnswer(true);
  };

  const handleChangeButtonDisable = (changeValue: boolean) => {
    setButtonIsDisabled(changeValue);
  };

  return (
    <Container
      backgroundColor="white"
      style={{
        padding: 20,
      }}>
      <StatusBar barStyle="dark-content" backgroundColor={"white"} />
      <BarProgress
        percentageStatus={10}
        icon={<CloseIcon onPress={() => navigation.goBack()} />}
      />
      <TextComponent
        size="heading5"
        weight="bold"
        align="left"
        style={{
          marginTop: 30,
        }}>
        Translate this sentence
      </TextComponent>

      <HR
        style={{
          marginVertical: 20,
          backgroundColor: theme.colors.greyScale300,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginBottom: 50,
        }}>
        <TouchableOpacity
          style={{
            padding: 20,
            borderRadius: 50,
            backgroundColor: theme.colors.primary,
          }}
          onPress={() => setSoundPlaying(prev => !prev)}>
          {soundPlaying ? <PlaySoundIconWorking /> : <PlaySoundIcon />}
        </TouchableOpacity>
        <TextComponent
          size="heading5"
          align="left"
          numberOfLines={2}
          weight="bold"
          style={{
            flex: 1,
            flexWrap: "wrap",
            maxWidth: "80%",
          }}>
          The quick brown fox jumps over the lazy dog
        </TextComponent>
      </View>
      <WordsSelectors
        disableGesture={showAnswer}
        ref={wordsRef}
        buttonDisable={handleChangeButtonDisable}
      />
      <BottomContainer>
        <Button
          backgroundColor={!buttonIsDisabled ? "primary" : "greyScale300"}
          buttonText="Check Answers"
          textColor="white"
          disabled={buttonIsDisabled}
          onPressButton={handleShowAnswer}
        />
      </BottomContainer>
      {showAnswer && <AnimatedBottom />}
    </Container>
  );
};

export default TranslateSentenceScreen;
