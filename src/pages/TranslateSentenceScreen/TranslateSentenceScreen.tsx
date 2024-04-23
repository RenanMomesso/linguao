import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { BottomContainer, Container, HR } from "@/theme/GlobalComponents";
import BarProgress from "@/components/BarProgress/BarProgress";
import TextComponent from "@/components/Text";
import { theme } from "@/theme/theme";
import Button from "@/components/Button/Button";
import {
  Gesture,
  GestureDetector,
  PanGestureHandler,
} from "react-native-gesture-handler";
import AnimatedBottom from "@/components/AnimatedBottom/AnimatedBottom";
import PlaySoundIcon from "@/assets/images/PlaySound.svg";
import PlaySoundIconWorking from "@/assets/images/PlaySoundIconWorking.svg";
import CloseIcon from "@/assets/images/closeIcon.svg";
import { useTypedNavigation } from "@/hooks/useNavigationTyped";
import Animated, {
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import App from "@/components/TempComponent";

const answers = {
  correctAnswer: "O rápido raposo marrom pula sobre o cão preguiçoso",
  words: [
    "O",
    "rápido",
    "raposo",
    "marrom",
    "pula",
    "sobre",
    "o",
    "cão",
    "preguiçoso",
    "devagar",
    "gato",
    "mula",
  ],
};

const shelfWords = answers.words.sort(() => Math.random() - 0.5);
const TranslateSentenceScreen = () => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [soundPlaying, setSoundPlaying] = useState(false);

  const navigation = useTypedNavigation();

  return (
    <Container
      backgroundColor="white"
      style={{
        padding: 20,
      }}>
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
        }}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}>
        <TouchableOpacity
          style={{
            padding: 10,
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
          style={{
            flex: 1,
            flexWrap: "wrap",
            maxWidth: "80%",
          }}>
          The quick brown fox jumps over the lazy dog
        </TextComponent>
      </View>

      <App />

      <BottomContainer>
        <Button
          backgroundColor="primary"
          buttonText="Check Answers"
          textColor="white"
          onPressButton={() => {
            return;
            const iscorrect = selectedWords.join(" ") === answers.correctAnswer;
            setCheckAnswer(iscorrect);
            setShowAnswer(true);
          }}
        />
      </BottomContainer>
      {showAnswer && <AnimatedBottom />}
    </Container>
  );
};

export default TranslateSentenceScreen;
