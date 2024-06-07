import React from "react";
import { BottomContainer, Row } from "@/theme/GlobalComponents";
import TextComponent from "@/components/Text";
import Button from "@/components/Button/Button";
import AnimatedBottom from "@/components/AnimatedBottom/AnimatedBottom";
import WordsSelectors from "@/pages/TranslateSentenceScreen/components/WordsSelectors";
import ExercicesLayout from "../../layouts/ExercicesLayout";
import SpeakerButton from "@/components/SpeakerButton/SpeakerButton";
import useTranslationSentence from "./useTranslationSentence";
import LoadingIcon from "@/components/Loading/Loading";

const TranslateSentenceScreen = () => {
  const {
    buttonIsDisabled,
    handleChangeButtonDisable,
    handleShowAnswer,
    handleSpeak,
    sentence,
    showAnswer,
    soundPlaying,
    wordsExample,
    wordsRef,
    loadingQuery,
  } = useTranslationSentence();

  return (
    <ExercicesLayout
      barProgressPercentage={40}
      pageTitle="Translate the sentence">
      <Row
        style={{
          gap: 10,
          marginBottom: 50,
        }}>
        <SpeakerButton soundPlaying={soundPlaying} handleSpeak={handleSpeak} />
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
        wordsExample={wordsExample}
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
