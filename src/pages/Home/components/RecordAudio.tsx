import React from "react";
import { View, Text, Button, Pressable } from "react-native";
import useVoiceRecognition from "@/hooks/useVoiceRecognition";
import Waveform from "./WaveForm"; // Adjust the import path as necessary
import useRecordAudio from "@/hooks/useRecordAudio";
import { gql, useQuery } from "@apollo/client";
import { textToSpeech } from "@/graphql/queries";
import {
  TextToSpeechConvertTextToSpeechInput,
  TextToSpeechQuery,
  TextToSpeechQueryVariables,
} from "@/API";

const VoiceRecognitionComponent = () => {
  const { data } = useQuery<TextToSpeechQuery, TextToSpeechQueryVariables>(
    gql(textToSpeech),
    {
      variables: {
        input: {
          convertTextToSpeech: {
            text: "Hello Joana how are you doing today ?",
            voiceID: "Nicole",
          },
        },
      },
    },
  );
  const handleSpeak = async () => {};

  return (
    <View style={{ padding: 20 }}>
      {data?.textToSpeech && (
        <Waveform audioPath={data?.textToSpeech} duration={20} />
      )}
    </View>
  );
};

export default VoiceRecognitionComponent;
