import React, { useState, useCallback } from "react";
import {
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Pressable,
} from "react-native";
import styled from "styled-components/native";
import { SendIcon, MicrophoneIcon } from "@/assets/images";
import { theme } from "@/theme/theme";
import useRecordAudio from "@/hooks/useRecordAudio";
import Waveform from "@/pages/Home/components/WaveForm";
import Text from "@/components/Text";
import { sendFileToStorage } from "@/services/sendFileToStorage";
import { MessageType } from "../../../../API";
import { useAppSelector } from "@/store";
import { generateRandomValue } from "@/utils/generateRandomValue";
import { convertAudioToText } from "@/services/openAi.service";

interface SendMessageProps {
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

const SendMessage = ({ handleCreateMessage }: SendMessageProps) => {
  const userId = useAppSelector(state => state.user.user.id);
  const [message, setMessage] = useState("");
  const [loadingMessage, setLoadingMessage] = useState(false);
  const [showAudioRecording, setShowAudioRecording] = useState(false);
  const { startRecognizing, stopRecognizing, audioPath, voiceResult, handleResetAudio } =
    useRecordAudio();

  const handleCreateMessageTrigger = useCallback(() => {
    if (message.trim().length === 0) {
      Alert.alert(
        "Please type a message",
        "Message cannot be empty " + message.length,
      );
      return;
    }
    if (loadingMessage) return;
    setLoadingMessage(true);
    handleCreateMessage(message, false, MessageType.TEXT, 0);
    setLoadingMessage(false);
    setMessage("");
  }, [message, loadingMessage, handleCreateMessage]);

  const handleSendAudio = async () => {
    if (audioPath) {
      const audioName = `${userId}/${generateRandomValue(12)}-audio`;
      const audioUrl = await sendFileToStorage(audioPath, audioName);
      if (!audioUrl) return;
      const audioMessage = await convertAudioToText(audioPath);
      console.log("🚀 ~ handleSendAudio ~ audioMessage:", audioMessage);
      if (!audioMessage) return;
      if (audioUrl) {
        handleCreateMessage(
          audioUrl,
          false,
          MessageType.AUDIO,
          voiceResult.duration,
          audioMessage,
        );
        handleResetAudio();
      }
    }
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
