import { View, Text } from "react-native";
import React from "react";

import { Column, Row } from "@/theme/GlobalComponents";
import styled from "styled-components/native";

export const SelectableItem = styled.View`
  padding: 10px 8px;
  margin: 5px;
  border-radius: 12px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  elevation: 2;
`;

const DragAndDropList = () => {
  return (
    <View style={{paddingLeft:20}}>
      <Row
        style={{
          gap: 5,
          flexWrap: "wrap",
          position: "absolute",
          zIndex: 99,
        }}>
        <SelectableItem>
          <Text style={{color:"black", fontSize:13}}>T-Shirt</Text>
        </SelectableItem>
        <SelectableItem>
          <Text style={{color:"black", fontSize:13}}>Pants</Text>
        </SelectableItem>
        <SelectableItem>
          <Text style={{color:"black", fontSize:13}}>T-Shirt</Text>
        </SelectableItem>
        <SelectableItem>
          <Text style={{color:"black", fontSize:13}}>Pants</Text>
        </SelectableItem>
        <SelectableItem>
          <Text style={{color:"black", fontSize:13}}>T-Shirt</Text>
        </SelectableItem>
        <SelectableItem>
          <Text style={{color:"black", fontSize:13}}>Pants</Text>
        </SelectableItem>
      </Row>
    </View>
  );
};

export default DragAndDropList;
