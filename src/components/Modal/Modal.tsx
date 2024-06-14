import React from "react";
import {
  ActivityIndicator,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";

interface ModalConfirmProps {}

const CustomModal = ({ visible = true, children, onClose }: any) => {
  const { height } = useWindowDimensions();

  return (
    <>
      <Modal visible={visible} transparent>
        <Pressable
          onPress={onClose}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2,
            backgroundColor: "rgba(0,0,0,0.5)",
            flex: 1,
          }}></Pressable>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100000000000,
            position: "absolute",
            top: height / 3 - 100,
            alignSelf: "center",
          }}>
          {children}
        </View>
      </Modal>
    </>
  );
};

export default CustomModal;
