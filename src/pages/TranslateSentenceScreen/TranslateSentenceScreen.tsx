import { View, TouchableOpacity, StatusBar } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { BottomContainer, Container, HR, Row } from "@/theme/GlobalComponents";
import BarProgress from "@/components/BarProgress/BarProgress";
import TextComponent from "@/components/Text";
import { theme } from "@/theme/theme";
import Button from "@/components/Button/Button";

import AnimatedBottom from "@/components/AnimatedBottom/AnimatedBottom";
import CloseIcon from "@/assets/images/closeIcon.svg";
import { useTypedNavigation } from "@/hooks/useNavigationTyped";

import WordsSelectors from "@/pages/TranslateSentenceScreen/components/WordsSelectors";
import { DuoDragDropRef } from "@/components/DuoDragAndDrop";
import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";
import ControllingAnimationProgress from "@/components/LottieAnimation/LottieAnimation";
import jsonLottie from "@/assets/json/Lc8090d9Br.json";
import LottieView from "lottie-react-native";
import ExercicesLayout from "../../layouts/ExercicesLayout";
import { useNavigation } from "@react-navigation/native";
import { ExercisesStack, ExercisesStackProps } from "@/interface/navigation.interface";

const TranslateSentenceScreen = () => {
  const wordsRef = useRef<DuoDragDropRef>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [soundPlaying, setSoundPlaying] = useState(false);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  const navigation = useNavigation<ExercisesStack>();

  const handleShowAnswer = () => {
    console.log(wordsRef.current?.getAnsweredWords());
    setShowAnswer(true); 
    navigation.navigate("SpeakTheSentenceScreen")
  };

  const handleChangeButtonDisable = (changeValue: boolean) => {
    setButtonIsDisabled(changeValue);
  };

  return (
    <ExercicesLayout
      barProgressPercentage={40}
      pageTitle="Translate the sentence">
      <Row
        style={{
          gap: 10,
          marginBottom: 50,
        }}>
        {/* <AudioPlayer /> */}
        <TouchableOpacity
          style={{
            padding: 10,
            // height: 50,
            // width: 50,
            borderRadius: 50,
            backgroundColor: theme.colors.primary,
          }}
          onPress={() => setSoundPlaying(prev => !prev)}>
          <LottieView
            progress={100}
            source={jsonLottie}
            autoPlay={soundPlaying}
            loop={false}
            style={{
              height: 30,
              width: 30,
            }}
          />
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
      </Row>

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
    </ExercicesLayout>
  );
};

export default TranslateSentenceScreen;
