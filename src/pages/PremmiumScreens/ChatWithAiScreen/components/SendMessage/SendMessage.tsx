import React from "react";
import { View, Pressable } from "react-native";
import { SendIcon, MicrophoneIcon } from "@/assets/images";
import { deviceColorSchema, theme } from "@/theme/theme";
import Text from "@/components/Text";
import { MessageType } from "../../../../../API";
import Animated from "react-native-reanimated";
import { GestureDetector } from "react-native-gesture-handler";
import { Container, SendButton, StyledTextInput } from "./SendMessage.styles";
import useSendMessage from "./useSendMessage";

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
  } = useSendMessage({ loadingMessages, handleCreateMessage, aiId });

  return (
    <Container style={{ flexDirection: "row", alignItems: "center" }}>
      {isRecording || audioPath && (
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
      {!isRecording && (
        <>
          <StyledTextInput
            style={{
              height: 50,
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
          <Text onPress={handleCreateMessageTrigger}>{audioPath}</Text>
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
