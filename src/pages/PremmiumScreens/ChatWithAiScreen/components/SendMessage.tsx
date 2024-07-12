import React, { useState, useEffect, useRef } from "react";
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
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

const audioRecorderPlayer = new AudioRecorderPlayer();

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
  const [createAudioMutation] = useMutation<
    AiReplyMutationMutation,
    AiReplyMutationMutationVariables
  >(gql(aiReplyMutation));
  const color: string = useColorScheme() || "light";
  const userId = useAppSelector(state => state.user.user.id);
  const [message, setMessage] = useState("");
  const [showAudioRecording, setShowAudioRecording] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState("00:00");
  const [audioPath, setAudioPath] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const buttonSize = useSharedValue(1);
  const position = useSharedValue(0);

  const startRecognizing = async () => {
    setIsRecording(true);
    const path = await audioRecorderPlayer.startRecorder();
    setAudioPath(path);
    audioRecorderPlayer.addRecordBackListener(e => {
      const minutes = Math.floor(e.currentPosition / 60000);
      const seconds = ((e.currentPosition % 60000) / 1000).toFixed(0);
      setRecordingDuration(`${minutes}:${+seconds < 10 ? "0" : ""}${seconds}`);
    });
  };

  const stopRecognizing = async () => {
    setIsRecording(false);
    await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
  };

  const handleSendAudio = async () => {
    // Implement your audio sending logic here
  };

  const handleGestureEvent = Gesture.Pan()
    .onBegin(() => {
      buttonSize.value = withTiming(1.6);
      runOnJS(startRecognizing)();
    })
    .onUpdate((event: any) => {
      position.value = event.translationX;
      if (event.translationX > 100) {
        runOnJS(stopRecognizing)();
        runOnJS(setShowAudioRecording)(false);
      }
      if (event.translationX < -10) {
        position.value = withTiming(0);
      }
    })
    .onEnd(() => {
      buttonSize.value = withTiming(1);
      position.value = withTiming(0);
    })
    .onFinalize(() => {
      buttonSize.value = withTiming(1);
    });

  const animatedButtonStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: buttonSize.value,
      },
      { translateX: position.value },
    ],
  }));

  const handleCreateMessageTrigger = async () => {
    if (loadingMessages) return;
    try {
      setLoadingMessages(true);
      handleCreateMessage(message, false, MessageType.TEXT, 0);
      const { data } = await createAudioMutation({
        variables: {
          userAudio: message,
        },
      });
      if (!data?.aiReplyMutation.audio) return;

      handleCreateMessage(
        data?.aiReplyMutation.audio,
        false,
        MessageType.AUDIO,
        20,
        data?.aiReplyMutation.text || "",
        aiId,
      );

      setMessage("");
    } catch (error) {
      Alert.alert("Error", "Error sending message");
    } finally {
      setLoadingMessages(false);
    }
  };

  return (
    <Container style={{ flexDirection: "row", alignItems: "center" }}>
      {showAudioRecording && (
        <View
          style={{
            backgroundColor: "lightblue",
            bottom: 70,
            flex: 1,
            width: "100%",
            position: "absolute",
            zIndex: 99,
          }}>
          <Pressable onPress={handleSendAudio}>
            <Text>{recordingDuration}</Text>
          </Pressable>
        </View>
      )}
      {buttonSize.value === 1.6 && <Text>AQUIAQUIQUIUQIQUIQUIQUI</Text>}
      <StyledTextInput
        style={{ height: 50, color: color !== "light" ? "black" : "white" }}
        value={message}
        onChangeText={text => setMessage(text)}
        multiline
        editable={!loadingMessages}
        placeholder="Type a message"
      />
      <SendButton
        onPress={
          !!message.length ? handleCreateMessageTrigger : () => setMessage("")
        }
        disabled={loadingMessages}>
        {!!message.length ? (
          <SendIcon />
        ) : (
          <GestureDetector gesture={handleGestureEvent}>
            <Animated.View
              style={[
                animatedButtonStyle,
                {
                  backgroundColor: theme.colors.greyScale400,
                  padding: 12,
                  borderRadius: 50,
                },
              ]}>
              <MicrophoneIcon
              // onPress={() => {
              //   startRecognizing();
              // }}
              // onPressIn={() => {
              //   startRecognizing();
              //   setShowAudioRecording(true);
              // }}
              // onPressOut={() => {
              //   if (!isDragging) {
              //     stopRecognizing();
              //     setShowAudioRecording(false);
              //   }
              // }}
              />
            </Animated.View>
          </GestureDetector>
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

const StyledTextInput = styled(TextInput)`
  flex: 1;
  align-items: flex-start;
  max-width: 85%;
  border-radius: 10px;
  background-color: ${theme.colors.greyScale100};
`;

const SendButton = styled(TouchableOpacity)`
  margin-left: auto;
  padding: 10px;
`;
