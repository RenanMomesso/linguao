import React, { memo, useCallback, useEffect, useRef } from "react";
import { Column } from "@/theme/GlobalComponents";
import Text from "@/components/Text";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "@/store";
import { MessageType, Message } from "../../../../API";

const BottomSheetContent = ({
  selectedChatMessage,
  setSelectedItem,
  handleCloseBottomSheet,
}: {
  selectedChatMessage: Message;
  setSelectedItem: (message: Message) => void;
  handleCloseBottomSheet: () => void;
}) => {
  console.log("Aqui tbm renderizou");
  const navigation = useNavigation<any>();
  const selectedChatMessageReducer = selectedChatMessage;
  console.log("🚀 ~ selectedChatMessageReducer:", selectedChatMessageReducer);

  const selectedChatMessageReducerRef = useRef(selectedChatMessageReducer);

  useEffect(() => {
    selectedChatMessageReducerRef.current = selectedChatMessageReducer;
  }, [selectedChatMessageReducer]);

  const handleSaveContentToFlashcard = useCallback(() => {
    const currentSelectedChatMessageReducer =
      selectedChatMessageReducerRef.current;

    if (
      !currentSelectedChatMessageReducer ||
      !currentSelectedChatMessageReducer.id
    ) {
      console.log("No message selected or message id is undefined");
      return;
    }

    const isAudio =
      currentSelectedChatMessageReducer.messageType === MessageType.AUDIO;

    const description = isAudio
      ? currentSelectedChatMessageReducer.audioText
      : currentSelectedChatMessageReducer.text;
    const title = isAudio
      ? currentSelectedChatMessageReducer.audioText
      : currentSelectedChatMessageReducer.text;
    const audioUrl = isAudio ? currentSelectedChatMessageReducer.text : "";

    navigation.navigate("CreateFlashCardModal", {
      description,
      audioUrl,
      title,
    });
  }, [navigation]);

  const handleTranscribeAudioMessage = () => {
    setSelectedItem({
      ...selectedChatMessageReducerRef.current,
      transcribe: true,
    });
    handleCloseBottomSheet();
  };

  return (
    <Column style={{ alignItems: "flex-start", padding: 10, gap: 8 }}>
      <Text onPress={handleSaveContentToFlashcard} size="text" weight="bold">
        Save in the flashcard
      </Text>
      <Text size="text" weight="bold" onPress={handleTranscribeAudioMessage}>
        Transcribe
      </Text>
      <Text size="text" weight="bold">
        Report message
      </Text>
      <Text size="text" weight="bold">
        Share
      </Text>
    </Column>
  );
};

export default memo(BottomSheetContent);
