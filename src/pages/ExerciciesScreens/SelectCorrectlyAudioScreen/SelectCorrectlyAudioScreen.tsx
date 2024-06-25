import React from "react";
import ExercicesLayout from "@/layouts/ExercicesLayout";
import Button from "@/components/Button/Button";
import { Column, Row } from "@/theme/GlobalComponents";
import SpeakerButton from "@/components/SpeakerButton/SpeakerButton";
import TextComponent from "@/components/Text";
import { useQuery } from "@apollo/client";
import { englishSentenceQuery } from "@/pages/TranslateSentenceScreen/translateSentenceQuery";
import {
  ListEnglishSentencesQuery,
  ListEnglishSentencesQueryVariables,
} from "@/API";
import { speakerVoiceMessage } from "@/utils/speakerVoice";
import LoadingIcon from "@/components/Loading/Loading";

const SelectCorrectlyAudioScreen = (props: any) => {
  const { data, loading, error } = useQuery<
    ListEnglishSentencesQuery,
    ListEnglishSentencesQueryVariables
  >(englishSentenceQuery, {
    fetchPolicy: "cache-and-network",
    onCompleted(data) {
      try {
        const cachedData = this.client?.readQuery({
          query: englishSentenceQuery,
        });
        if (cachedData) {
          console.log("cachedData", JSON.stringify(items, undefined, 3));
        } else {
          console.log("No cached data", data);
        }
      } catch (error) {
        console.log("Error", error);
      }
    },
  });

  const items = data?.listEnglishSentences?.items;
  const sentence = items && items[0]?.sentence;
  const fakeSentences = items && items[0]?.fakeSentences;
  const concatSentences = fakeSentences && sentence && fakeSentences.concat(sentence);
  const randomSentences = concatSentences && concatSentences.sort(() => Math.random() - 0.5) || [];

  if (!sentence || !fakeSentences || loading) return <LoadingIcon />;
  return (
    <ExercicesLayout
      barProgressPercentage={80}
      pageTitle="Select the correctly Audio">
      <Row
        style={{
          gap: 10,
          marginBottom: 50,
        }}>
        <SpeakerButton
          soundPlaying={false}
          handleSpeak={() => speakerVoiceMessage(sentence as string)}
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
      <Column>
        {randomSentences?.map((sentence, index) => (
          <SpeakerButton
            key={index}
            soundPlaying={false}
            handleSpeak={() => speakerVoiceMessage(sentence as string)}
          />
        ))}
      </Column>
      <ExercicesLayout.Footer>
        <Button
          backgroundColor="Blue"
          buttonText="Next"
          onPressButton={() => {}}
          touchSoundDisabled={false}
          textColor="white"
        />
      </ExercicesLayout.Footer>
    </ExercicesLayout>
  );
};

export default SelectCorrectlyAudioScreen;
