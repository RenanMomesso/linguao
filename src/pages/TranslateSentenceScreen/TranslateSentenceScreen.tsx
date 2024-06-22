import React, { useCallback, useRef } from "react";
import { BottomContainer, Row } from "@/theme/GlobalComponents";
import TextComponent from "@/components/Text";
import Button from "@/components/Button/Button";
import WordsSelectors from "@/pages/TranslateSentenceScreen/components/WordsSelectors";
import ExercicesLayout from "../../layouts/ExercicesLayout";
import SpeakerButton from "@/components/SpeakerButton/SpeakerButton";
import useTranslationSentence from "./useTranslationSentence";
import BottomSheetAnswer from "../ExerciciesScreens/components/BottomSheetAnswer/BottomSheetAnswer";
import LoadingIcon from "@/components/Loading/Loading";
import BugProblemModal from "./components/BugProblemModal";
import { share } from "@/utils/share";

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
    imgUrl,
  } = useTranslationSentence();
  console.log({ sentence, wordsExample, wordsRef });

  console.log(wordsRef);

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
          handleShare={() => share("I just translated the sentence: ", imgUrl)}
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
