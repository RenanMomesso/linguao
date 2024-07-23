import { convertAudioToText } from "@/services/openAi.service";
import {
  AiReplyMutationMutation,
  AiReplyMutationMutationVariables,
  MessageType,
} from "../../../../../API";
import { aiReplyMutation } from "@/graphql/mutations";
import { sendFileToStorage } from "@/services/sendFileToStorage";
import { useAppSelector } from "@/store";
import { generateRandomValue } from "@/utils/generateRandomValue";
import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { Alert, useColorScheme } from "react-native";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import { Gesture, GestureHandlerRootView } from "react-native-gesture-handler";
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const audioRecorderPlayer = new AudioRecorderPlayer();

const useSendMessage = ({
  loadingMessages,
  handleCreateMessage,
  aiId,
  setLoadingMessages,
}: {
  loadingMessages: boolean;
  handleCreateMessage: (
    text: string,
    showMenu: boolean,
    messageType: MessageType,
    audioDuration: number,
    audioMessage?: string,
    userSender?: string,
    userName?: string,
  ) => void;
  setLoadingMessages: (loading: boolean) => void;
  aiId?: string;
}) => {
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
  const buttonSize = useSharedValue(1);
  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);
  const buttonPressed = useSharedValue(false);
  const maxLeftDistance = -100; // Maximum distance to the left
  const maxUpDistance = -20; // Maximum distance up
  const maxRightDistance = 1; // Maximum distance to the right

  useEffect(() => {
    let interval: any;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingDuration(prev => {
          const [minutes, seconds] = prev.split(":");
          const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
          const newSeconds = totalSeconds + 1;
          const newMinutes = Math.floor(newSeconds / 60);
          const remainingSeconds = newSeconds % 60;
          return `${newMinutes}:${
            remainingSeconds < 10 ? "0" : ""
          }${remainingSeconds}`;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

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

  const cancelRecording = async () => {
    setIsRecording(false);
    await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
  };

  const stopRecognizing = async () => {
    setIsRecording(false);
    await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    await handleSendAudio();
  };

  const handleSendAudio = async () => {
    if (audioPath) {
      console.log("🚀 ~ handleSendAudio ~ audioPath:", audioPath);
      const audioName = `${userId}/${generateRandomValue(12)}-audio`;
      const audioUrl = await sendFileToStorage(audioPath, audioName);
      console.log("🚀 ~ handleSendAudio ~ audioUrl:", audioUrl);
      console.log("🚀 ~ handleSendAudio ~ audioName:", audioName);
      if (audioUrl) {
        handleCreateMessage(
          audioUrl,
          true,
          MessageType.AUDIO,
          20,
          "",
          String(userId),
        );
        const text = await convertAudioToText(audioUrl);
        const { data } = await createAudioMutation({
          variables: {
            userAudio: text,
          },
        });
        console.log("@@@@@@@@@@@@@@@ create audio mutation", data);
        handleCreateMessage(
          data?.aiReplyMutation.audio || "",
          false,
          MessageType.AUDIO,
          20,
          data?.aiReplyMutation.text || "",
          aiId,
        );
      }
    }
  };

  const handleGestureEvent = Gesture.Pan()
    .onBegin(() => {
      buttonPressed.value = true;
      runOnJS(startRecognizing)();
    })
    .onChange((event: any) => {
      const newX = Math.max(maxLeftDistance, event.translationX);
      const newY = Math.min(Math.max(maxUpDistance, event.translationY), 0);
      if (positionX.value <= -100) {
        runOnJS(cancelRecording)();
        positionX.value = withTiming(0);
      }
      positionX.value = newX;
      positionY.value = newY;
    })
    .onEnd(() => {
      buttonPressed.value = false;
      positionX.value = withTiming(0);
      positionY.value = withTiming(0);
    })
    .onFinalize(() => {
      buttonPressed.value = false;
      positionX.value = withTiming(0);
      positionY.value = withTiming(0);
    });

  const animatedButtonStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: withTiming(buttonPressed.value ? 1.4 : 1) },
      { translateX: positionX.value },
      { translateY: positionY.value },
    ],
  }));

  const handleCreateMessageTrigger = async () => {
    if (loadingMessages) return;
    try {
      // try {
      // console.log('sending message')
      setLoadingMessages(true);
      handleCreateMessage(message, false, MessageType.TEXT, 0);
      setMessage("");
      //   console.log('msg sent')
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
    } catch (error) {
      Alert.alert("Error", "Error sending message");
    } finally {
      setLoadingMessages(false);
    }
  };

  return {
    message,
    setMessage,
    showAudioRecording,
    setShowAudioRecording,
    isRecording,
    setIsRecording,
    recordingDuration,
    setRecordingDuration,
    audioPath,
    setAudioPath,
    buttonSize,
    positionX,
    positionY,
    buttonPressed,
    maxLeftDistance,
    maxUpDistance,
    maxRightDistance,
    startRecognizing,
    stopRecognizing,
    handleSendAudio,
    handleGestureEvent,
    animatedButtonStyle,
    handleCreateMessageTrigger,
  };
};

export default useSendMessage;
