import { View, TextInput, Alert, TouchableOpacity } from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import { SendIcon, MicrophoneIcon } from "@/assets/images";
import { theme } from "@/theme/theme";

interface SendMessageProps {
  handleCreateMessage: (text: string, showMenu: boolean) => void;
}

const SendMessage = ({ handleCreateMessage }: SendMessageProps) => {
  const [message, setMessage] = useState("");
  const [loadingMessage, setLoadingMessage] = useState(false);

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
    handleCreateMessage(message, false);
    setLoadingMessage(false);
    setMessage("");
  }, [message, loadingMessage, handleCreateMessage]);

  return (
    <View
      style={{
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "flex-end",
      }}>
      <TextInput
        value={message}
        onChangeText={text => setMessage(text)}
        style={{
          flex: 1,
          alignItems: "flex-start",
          maxWidth: 280,
          borderRadius: 10,
          backgroundColor: theme.colors.greyScale100,
        }}
        multiline
        editable={!loadingMessage}
        placeholder="Type a message"
      />
      <TouchableOpacity
        onPress={
          !!message.length ? handleCreateMessageTrigger : () => setMessage("")
        }
        disabled={loadingMessage}
        style={{ marginLeft: "auto", padding: 10 }}>
        {!!message.length ? <SendIcon /> : <MicrophoneIcon />}
      </TouchableOpacity>
    </View>
  );
};

export default SendMessage;
