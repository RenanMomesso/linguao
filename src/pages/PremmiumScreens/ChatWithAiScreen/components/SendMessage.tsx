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
  TextToSpeechQuery,
  TextToSpeechQueryVariables,
} from "../../../../API";
import { useAppSelector } from "@/store";
import { generateRandomValue } from "@/utils/generateRandomValue";
import {
  convertAudioToText,
  generateSpeechAndUploadToS3,
  sendMessageToOpenAI,
} from "@/services/openAi.service";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { aiReplyMutation } from "@/graphql/mutations";
import { textToSpeech } from "@/graphql/queries";

interface SendMessageProps {
  aiId?: string;
  loadingMessages: boolean;
  setLoadingMessages: (loading: boolean) => void;
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

const SendMessage = ({
  handleCreateMessage,
  aiId,
  setLoadingMessages,
  loadingMessages,
}: SendMessageProps) => {
  const color: string = useColorScheme() || "light";
  const userId = useAppSelector(state => state.user.user.id);
  const [message, setMessage] = useState("");
  const [showAudioRecording, setShowAudioRecording] = useState(false);
  const {
    startRecognizing,
    stopRecognizing,
    audioPath,
    voiceResult,
    handleResetAudio,
  } = useRecordAudio();

  const [useTextToSpeechQuery] = useLazyQuery<
    TextToSpeechQuery,
    TextToSpeechQueryVariables
  >(gql(textToSpeech));

  const handleCreateMessageTrigger = async () => {
    if (loadingMessages) return;
    try {
      setLoadingMessages(true);
      handleCreateMessage(message, false, MessageType.TEXT, 0);
      const createAiResponse = await sendMessageToOpenAI(message);
      if (!createAiResponse) return;
      const { data, error, loading } = await useTextToSpeechQuery({
        variables: {
          input: {
            convertTextToSpeech: {
              text: `${createAiResponse.choices[0].message.content}`,
              voiceID: "Russell",
            },
          },
        },
      });
      if (!data?.textToSpeech || error) return;
      handleCreateMessage(
        data?.textToSpeech,
        false,
        MessageType.AUDIO,
        20,
        createAiResponse.choices[0].message.content,
        aiId,
      );
      console.log("CRIOU MENSAGME @@@@@@@@@@@@@@@@@@@@@@@@@@@@");
      setMessage("");
    } catch (error) {
      Alert.alert("Error", "Error sending message");
    } finally {
      setLoadingMessages(false);
    }
  };

  const handleSendAudio = async () => {
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
        const { data } = await useTextToSpeechQuery({
          variables: {
            input: {
              convertTextToSpeech: {
                text: `${aiReply.choices[0].message.content}`,
                voiceID: "Russell",
              },
            },
          },
        });
        if(!data?.textToSpeech) {
          return;
        }
        handleCreateMessage(
          data?.textToSpeech,
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
          editable={!loadingMessages}
          placeholder="Type a message"
        />
      )}
      <SendButton
        onPress={
          !!message.length ? handleCreateMessageTrigger : () => setMessage("")
        }
        disabled={loadingMessages}>
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
