import React from "react";
import { View, Pressable } from "react-native";
import { SendIcon, MicrophoneIcon } from "@/assets/images";
import { deviceColorSchema, theme } from "@/theme/theme";
import Text from "@/components/Text";
import { MessageType } from "../../../../../API";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { GestureDetector } from "react-native-gesture-handler";
import { Container, SendButton, StyledTextInput } from "./SendMessage.styles";
import useSendMessage from "./useSendMessage";
import Waveform from "@/pages/Home/components/WaveForm";
import { Row } from "@/theme/GlobalComponents";

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
  loadingMessages,
  setLoadingMessages
}: SendMessageProps) => {
  const {
    animatedButtonStyle,
    handleCreateMessageTrigger,
    handleGestureEvent,
    handleSendAudio,
    isRecording,
    message,
    recordingDuration,
    audioPath,
    setMessage,
    positionX,
  } = useSendMessage({ loadingMessages, handleCreateMessage, aiId,setLoadingMessages });
  const animatedTextStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: positionX.value }],
  }));

  return (
    <Container style={{ flexDirection: "row", alignItems: "center" }}>
      {isRecording ? (
        <Row>
          <View
            style={{
              backgroundColor: "lightblue",
            }}>
            <Pressable onPress={handleSendAudio}>
              <Text>{recordingDuration}</Text>
            </Pressable>
          </View>
          <Animated.Text style={[animatedTextStyle, {marginLeft:50}]}>
            Arraste para a esquerda
          </Animated.Text>
        </Row>
      ) : (
        <>
          <StyledTextInput
            style={{
              minHeight: 50,
              color: deviceColorSchema === "light" ? "black" : "white",
              fontFamily: theme.fontWeight.semibold,
              borderRadius: 50,
            }}
            value={message}
            onChangeText={text => setMessage(text)}
            multiline
            editable={!loadingMessages}
            placeholder="Type a message"
          />
        </>
      )}

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
                  backgroundColor: theme.colors.primary,
                  borderRadius: 50,
                  width: 50,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}>
              <MicrophoneIcon color="white" height={25} />
            </Animated.View>
          </GestureDetector>
        )}
      </SendButton>
    </Container>
  );
};

export default SendMessage;
