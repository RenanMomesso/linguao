import React from "react";
import CustomModal from "@/components/Modal/Modal";
import { Container } from "@/theme/GlobalComponents";
import { Pressable, View } from "react-native";
import Text from "@/components/Text";
import { theme, windowWidth } from "@/theme/theme";

interface BugProblemModalProps {
  modalVisible: boolean;
  onCloseModal: () => void;
}


const BugProblemModal = ({
  modalVisible,
  onCloseModal,
}: BugProblemModalProps) => {
  return (
    <CustomModal visible={modalVisible} onClose={onCloseModal}>
      <Container
        style={{
          height: 500,
          width: windowWidth - 40,
          zIndex: 99999999999999999,
          gap: 20,
          padding:20
        }}>
        <Text size="heading3" weight="bold">
          Report a problem
        </Text>
        <Pressable
          style={{
            alignItems: "center",
            flexDirection: "row",
            gap: 12,
            paddingLeft: 7,
          }}>
          <View
            style={{ borderWidth: 1, borderRadius: 6, height: 20, width: 20 }}
          />
          <Text size="heading6">Translate are wrong</Text>
        </Pressable>
        <Pressable
          style={{
            alignItems: "center",
            flexDirection: "row",
            gap: 20,
            paddingLeft: 7,
          }}>
          <View
            style={{ borderWidth: 1, borderRadius: 6, height: 20, width: 20 }}
          />
          <Text size="heading6">Gramatical error</Text>
        </Pressable>
      </Container>
    </CustomModal>
  );
};

export default BugProblemModal;
