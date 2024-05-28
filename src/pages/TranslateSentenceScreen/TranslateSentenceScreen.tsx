import { TouchableOpacity, StatusBar } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { BottomContainer, Row } from "@/theme/GlobalComponents";
import TextComponent from "@/components/Text";
import { theme } from "@/theme/theme";
import Button from "@/components/Button/Button";
import AnimatedBottom from "@/components/AnimatedBottom/AnimatedBottom";
import WordsSelectors from "@/pages/TranslateSentenceScreen/components/WordsSelectors";
import { DuoDragDropRef } from "@/components/DuoDragAndDrop";
import jsonLottie from "@/assets/json/Lc8090d9Br.json";
import LottieView from "lottie-react-native";
import ExercicesLayout from "../../layouts/ExercicesLayout";
import { useNavigation } from "@react-navigation/native";
import { ExercisesStack } from "@/interface/navigation.interface";
import { useQuery } from "@apollo/client";
import { englishSentenceQuery } from "./translateSentenceQuery";
import LoadingIcon from "@/components/Loading/Loading";

const TranslateSentenceScreen = () => {
  const wordsRef = useRef<DuoDragDropRef>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [soundPlaying, setSoundPlaying] = useState(false);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  const { data, loading } = useQuery(englishSentenceQuery);

  const sentence = data?.listEnglishSentences?.items[0]?.sentence;

  const translation = data?.listEnglishSentences?.items[0]?.translation;
  const splitWordsTranslation = translation?.split(" ")?.sort(() => Math.random() - 0.5);

  const navigation = useNavigation<ExercisesStack>();

  const handleShowAnswer = () => {
    setShowAnswer(true);
    navigation.navigate("SpeakTheSentenceScreen");
  };

  const handleChangeButtonDisable = (changeValue: boolean) => {
    setButtonIsDisabled(changeValue);
  };
  if (loading) return <LoadingIcon />;
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
          {sentence}
        </TextComponent>
      </Row>

      <WordsSelectors
        wordsExample={data?.listEnglishSentences?.items[0]?.fakeWords.concat(
          splitWordsTranslation,
        )}
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
