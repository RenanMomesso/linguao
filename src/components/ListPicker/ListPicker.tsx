import React, { useState } from 'react';
import {
  Modal,
  TouchableOpacity,
  FlatList,
  View,
  Text,
  StyleSheet
} from 'react-native';
import styled from 'styled-components/native';

interface PickerItem {
  label: string;
  value: string;
}

interface CustomPickerProps {
  items: PickerItem[];
  selectedValue: string;
  onValueChange: (itemValue: string) => void;
}

const CustomPicker: React.FC<CustomPickerProps> = ({
  items,
  selectedValue,
  onValueChange,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (itemValue: string) => {
    onValueChange(itemValue);
    setModalVisible(false);
  };

  return (
    <View style={{flex:1}}>
      <PickerButton onPress={() => setModalVisible(true)}>
        <PickerButtonText>{items.find(item => item.value === selectedValue)?.label || 'Select an option'}</PickerButtonText>
      </PickerButton>
      <Modal visible={modalVisible} transparent animationType="slide">
        <ModalOverlay onPress={() => setModalVisible(false)}>
          <ModalContent>
            <FlatList
              data={items}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <ModalItem onPress={() => handleSelect(item.value)}>
                  <ModalItemText>{item.label}</ModalItemText>
                </ModalItem>
              )}
            />
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </View>
  );
};

export default CustomPicker;

const PickerButton = styled.TouchableOpacity`
  height: 50px;
  border-width: 1px;
  border-color: #ccc;
  justify-content: center;
  padding-horizontal: 10px;
  border-radius: 5px;
`;

const PickerButtonText = styled.Text`
  font-size: 16px;
`;

const ModalOverlay = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.View`
  margin: 20px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  shadow-color: black;
  shadow-offset: 0px 2px;
  elevation: 5;
`;

const ModalItem = styled.TouchableOpacity`
  padding: 15px 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const ModalItemText = styled.Text`
  font-size: 16px;
`;
