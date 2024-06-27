import React from "react";
import ExercicesLayout from "@/layouts/ExercicesLayout";
import Button from "@/components/Button/Button";
import { Column, Row } from "@/theme/GlobalComponents";
import SpeakerButton from "@/components/SpeakerButton/SpeakerButton";
import TextComponent from "@/components/Text";

import { speakerVoiceMessage } from "@/utils/speakerVoice";
import LoadingIcon from "@/components/Loading/Loading";
import SpeakerWithBars from "./SpeakerWithBars";
import useSelectCorrectlyAudioScreen from "./useSelectCorrectlyAudioScreen";
import Selectable from "@/components/Selectable/Selectable";

const SelectCorrectlyAudioScreen = (props: any) => {
  const {
    fakeSentences,
    loading,
    randomSentences,
    sentence,
    handleChangeSelectedAudio,
    selectedAudio,
  } = useSelectCorrectlyAudioScreen();

  // if (!sentence || !fakeSentences || loading) return <LoadingIcon />;
  return (
    <ExercicesLayout
      barProgressPercentage={80}
      pageTitle="Select the correctly Audio">
      <TextComponent
        size="heading5"
        align="center"
        numberOfLines={2}
        weight="bold">
        {sentence}
      </TextComponent>
      <Column style={{ marginTop: 20 }}>
        {randomSentences?.map((sentence, index) => (
          <Selectable
            onPress={() => handleChangeSelectedAudio(sentence)}
            style={{
              backgroundColor: selectedAudio === sentence ? "red" : "white",
            }}>
            <SpeakerWithBars sentence={sentence} />
          </Selectable>
        ))}
      </Column>
      <ExercicesLayout.Footer>
        <Button
          backgroundColor="Blue"
          buttonText="Next"
          onPressButton={() => {
            props.navigation.navigate("SelectCorrectImgTextScreen");
          }}
          touchSoundDisabled={false}
          textColor="white"
        />
      </ExercicesLayout.Footer>
    </ExercicesLayout>
  );
};

export default SelectCorrectlyAudioScreen;
