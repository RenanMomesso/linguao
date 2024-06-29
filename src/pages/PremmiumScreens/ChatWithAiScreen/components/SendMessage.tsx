import { View, TextInput, Alert, TouchableOpacity } from "react-native";
import React, { useState, useCallback } from "react";
import Text from "@/components/Text";

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
    handleCreateMessage(message, true);
    setLoadingMessage(false);
    setMessage("");
  }, [message, loadingMessage, handleCreateMessage]);

  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "flex-end",
        marginTop: 10,
      }}>
      <TextInput
        value={message}
        onChangeText={text => setMessage(text)}
        style={{ flex: 1, alignItems: "flex-start", maxWidth: 280 }}
        multiline
        editable={!loadingMessage}
        placeholder="Type a message"
      />
      <TouchableOpacity
        onPress={handleCreateMessageTrigger}
        disabled={loadingMessage}
        style={{ marginLeft: "auto", padding: 10 }}
      >
        <Text
          size="text"
          weight="semibold"
          disabled={loadingMessage}
        >
          {loadingMessage ? "Sending..." : "Send"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SendMessage;
