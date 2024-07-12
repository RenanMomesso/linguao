import { View, Text, Pressable } from "react-native";
import React from "react";
import SpeakerButton from "@/components/SpeakerButton/SpeakerButton";
import { speakerVoiceMessage } from "@/utils/speakerVoice";
import { gql, useMutation } from "@apollo/client";
import { aiReplyMutation } from "@/graphql/mutations";
import {
  AiReplyMutationMutation,
  AiReplyMutationMutationVariables,
} from "@/API";
import useRecordAudio from "@/hooks/useRecordAudio";

const RecordAudio = () => {
  const [useAiReplyMutation] = useMutation<
    AiReplyMutationMutation,
    AiReplyMutationMutationVariables
  >(gql(aiReplyMutation));
  const { recordAudio, stopRecorder } = useRecordAudio();

  const replyPress = async () => {
    try {
      const { data, errors } = await useAiReplyMutation({
        variables: {
          userAudio: "test",
        },
      });
      console.log("🚀 ~ replyPress ~ data:", data);
      if (errors) {
        console.log(errors);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>RecordAudio</Text>

      <Pressable
        style={{
          backgroundColor: "blue",
          width: "100%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={replyPress}>
        <Text style={{ color: "white" }}>Test Lambda Function</Text>
      </Pressable>
      <SpeakerButton
        soundPlaying={false}
        handleSpeak={() => speakerVoiceMessage("Hello World")}
      />
      <Pressable
        onPressIn={recordAudio}
        onPressOut={stopRecorder}
        style={{
          backgroundColor: "blue",
          width: "100%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text style={{ color: "white" }}>Test New Recorder</Text>
      </Pressable>
    </View>
  );
};

export default RecordAudio;
