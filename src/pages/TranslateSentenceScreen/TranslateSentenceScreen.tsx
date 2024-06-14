import React from "react";
import { BottomContainer, Container, Row } from "@/theme/GlobalComponents";
import TextComponent from "@/components/Text";
import Button from "@/components/Button/Button";
import AnimatedBottom from "@/components/AnimatedBottom/AnimatedBottom";
import WordsSelectors from "@/pages/TranslateSentenceScreen/components/WordsSelectors";
import ExercicesLayout from "../../layouts/ExercicesLayout";
import SpeakerButton from "@/components/SpeakerButton/SpeakerButton";
import useTranslationSentence from "./useTranslationSentence";
import { ShareIcon } from "@/assets/images";
import BottomSheetAnswer from "../ExerciciesScreens/components/BottomSheetAnswer/BottomSheetAnswer";
import LoadingIcon from "@/components/Loading/Loading";
import CustomModal from "@/components/Modal/Modal";
import Text from "@/components/Text";
import { Pressable } from "react-native";
import BugProblemModal from "./components/BugProblemModal";

const TranslateSentenceScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
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
    correctlyAnswered,
    translation,
    handleNavigation,
  } = useTranslationSentence();

  if (loadingQuery || !wordsExample?.length || !wordsExample)
    return <LoadingIcon />;

  return (
    <ExercicesLayout
      barProgressPercentage={40}
      pageTitle="Translate the sentence">
      <Row
        style={{
          gap: 10,
          marginBottom: 50,
        }}>
        <SpeakerButton
          soundPlaying={soundPlaying}
          handleSpeak={showAnswer ? () => {} : handleSpeak}
        />
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
      {showAnswer && (
        <BottomSheetAnswer
          correctlyAnswered={correctlyAnswered}
          translation={translation}
          handleAlert={() => setModalVisible(true)}
          handleClickContinue={handleNavigation}
        />
      )}
      <BugProblemModal
        modalVisible={modalVisible}
        onCloseModal={() => setModalVisible(false)}
      />
    </ExercicesLayout>
  );
};

export default TranslateSentenceScreen;
