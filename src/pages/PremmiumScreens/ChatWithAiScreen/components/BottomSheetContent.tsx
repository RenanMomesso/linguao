import React from "react";
import { Column } from "@/theme/GlobalComponents";
import Text from "@/components/Text";
import { gql, useMutation } from "@apollo/client";
import { createFlashCards } from "@/graphql/mutations";
import {
  CreateFlashCardsMutation,
  CreateFlashCardsMutationVariables,
} from "@/API";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "@/store";
import { MessageType } from "../../../../API";

const BottomSheetContent = () => {
  const navigation = useNavigation<any>();
  const [mutationFlashCard] = useMutation<
    CreateFlashCardsMutation,
    CreateFlashCardsMutationVariables
  >(gql(createFlashCards));

  const selectedChatMessageReducer = useAppSelector(
    state => state.chatMessageReducer.messages,
  );

  const handleSaveContentToFlashcard = async () => {
    console.log("Save content to flashcard");
    const description = selectedChatMessageReducer.text;
    const title = selectedChatMessageReducer.text;
    const audioUrl =
      selectedChatMessageReducer.messageType === MessageType.AUDIO
        ? selectedChatMessageReducer.text
        : "";
    navigation.navigate("CreateFlashCardModal", {
      description,
      audioUrl,
      title,
    });
  };

  return (
    <Column style={{ alignItems: "flex-start", padding: 10, gap: 8 }}>
      <Text onPress={handleSaveContentToFlashcard} size="text" weight="bold">
        Save in the flascard
      </Text>
      <Text size="text" weight="bold">
        Translate
      </Text>
      <Text size="text" weight="bold">
        Transcribe
      </Text>
      <Text size="text" weight="bold">
        Report message
      </Text>
      <Text size="text" weight="bold">
        Share
      </Text>
      <Text size="text" weight="bold">
        Copy
      </Text>
    </Column>
  );
};

export default BottomSheetContent;
