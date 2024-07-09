import React, { useState, useCallback } from "react";
import {
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Pressable,
  useColorScheme,
} from "react-native";
import styled from "styled-components/native";
import { SendIcon, MicrophoneIcon } from "@/assets/images";
import { theme } from "@/theme/theme";
import useRecordAudio from "@/hooks/useRecordAudio";
import Waveform from "@/pages/Home/components/WaveForm";
import Text from "@/components/Text";
import { sendFileToStorage } from "@/services/sendFileToStorage";
import {
  AiReplyMutationMutation,
  AiReplyMutationMutationVariables,
  MessageType,
} from "../../../../API";
import { useAppSelector } from "@/store";
import { generateRandomValue } from "@/utils/generateRandomValue";
import {
  convertAudioToText,
  generateSpeechAndUploadToS3,
  sendMessageToOpenAI,
} from "@/services/openAi.service";
import { gql, useMutation } from "@apollo/client";
import { aiReplyMutation } from "@/graphql/mutations";

interface SendMessageProps {
  aiId?: string;
  handleCreateMessage: (
    text: string,
    showMenu: boolean,
    messageType: MessageType,
    audioDuration: number,
    audioMessage?: string,
    userSender?: string,
    userName?: string,
  ) => void;
}

const SendMessage = ({ handleCreateMessage, aiId }: SendMessageProps) => {
  const color: string = useColorScheme() || "light";
  const userId = useAppSelector(state => state.user.user.id);
  const [message, setMessage] = useState("");
  const [loadingMessage, setLoadingMessage] = useState(false);
  const [showAudioRecording, setShowAudioRecording] = useState(false);
  const {
    startRecognizing,
    stopRecognizing,
    audioPath,
    voiceResult,
    handleResetAudio,
  } = useRecordAudio();
  const [createMessageLambda] = useMutation<
    AiReplyMutationMutation,
    AiReplyMutationMutationVariables
  >(gql(aiReplyMutation));

  const handleCreateMessageTrigger = async () => {
    if (loadingMessage) return;
    try {
      setLoadingMessage(true);
      handleCreateMessage(message, false, MessageType.TEXT, 0);
      const createAiResponse = await sendMessageToOpenAI(message);
      if (!createAiResponse) return;
      const handleCreateAiAudio = await generateSpeechAndUploadToS3(
        createAiResponse.choices[0].message.content,
      );
      if (!handleCreateAiAudio) return;
      handleCreateMessage(
        handleCreateAiAudio,
        false,
        MessageType.AUDIO,
        20,
        createAiResponse.choices[0].message.content,
        aiId,
      );
      setMessage("");
    } catch (error) {
      Alert.alert("Error", "Error sending message");
    } finally {
      setLoadingMessage(false);
    }
  };

  const handleSendAudio = async () => {
    // const convertAiAudio = await generateSpeechAndUploadToS3(
    //   "testando teste testando please work please work",
    // );
    if (audioPath) {
      const audioName = `${userId}/${generateRandomValue(12)}-audio`;
      const audioUrl = await sendFileToStorage(audioPath, audioName);
      if (audioUrl) {
        handleCreateMessage(
          audioUrl,
          true,
          MessageType.AUDIO,
          voiceResult.duration,
          "",
          String(userId),
        );
        const text = await convertAudioToText(audioUrl);
        const aiReply = await sendMessageToOpenAI(text);
        if (!aiReply) return;
        const convertAiAudio = await generateSpeechAndUploadToS3(
          aiReply.choices[0].message.content,
        );

        if (!convertAiAudio) return;

        handleCreateMessage(
          convertAiAudio,
          false,
          MessageType.AUDIO,
          20,
          aiReply.choices[0].message.content,
          aiId,
        );
      }
    }
    handleResetAudio();
  };

  return (
    <Container>
      {audioPath && !!voiceResult.duration && (
        <View
          style={{
            backgroundColor: "red",
            bottom: 70,
            flex: 1,
            width: "100%",
            position: "absolute",
            zIndex: 99,
          }}>
          <Pressable onPress={handleSendAudio}>
            <Text>Send</Text>
          </Pressable>
          <Waveform audioPath={audioPath} duration={voiceResult.duration} />
        </View>
      )}
      {showAudioRecording ? (
        <AudioRecordingRow>
          <StopRecordingButton
            onPress={() => {
              setShowAudioRecording(false);
              stopRecognizing();
            }}
          />
        </AudioRecordingRow>
      ) : (
        <StyledTextInput
          style={{ height: 40, color: color !== "light" ? "black" : "white" }}
          value={message}
          onChangeText={text => setMessage(text)}
          multiline
          editable={!loadingMessage}
          placeholder="Type a message"
        />
      )}
      <SendButton
        onPress={
          !!message.length ? handleCreateMessageTrigger : () => setMessage("")
        }
        disabled={loadingMessage}>
        {!!message.length ? (
          <SendIcon />
        ) : (
          <MicrophoneIcon
            onPress={() => {
              setShowAudioRecording(true);
              startRecognizing();
            }}
          />
        )}
      </SendButton>
    </Container>
  );
};

export default SendMessage;

const Container = styled.View`
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: flex-end;
`;

const AudioRecordingRow = styled.View`
  background-color: lightblue;
  flex: 1;
  height: 40px;
  flex-direction: row;
`;

const StopRecordingButton = styled(Pressable)`
  width: 25px;
  height: 25px;
  background-color: red;
`;

const StyledTextInput = styled(TextInput)`
  flex: 1;
  align-items: flex-start;
  max-width: 280px;
  border-radius: 10px;
  background-color: ${theme.colors.greyScale100};
`;

const SendButton = styled(TouchableOpacity)`
  margin-left: auto;
  padding: 10px;
`;
