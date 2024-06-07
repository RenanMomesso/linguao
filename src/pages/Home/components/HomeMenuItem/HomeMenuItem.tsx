import { View, Text, Pressable } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { selectHomeItem } from "@/store/reducer/uiReducer";

const HomeMenuItem = () => {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        position: "absolute",
        zIndex: 99,
        top: "10%",
        backgroundColor: "white",
        width: "100%",
        height: "90%",
      }}>
      <View
        style={{
          width: 0,
          height: 0,
          backgroundColor: "transparent",
          borderStyle: "solid",
          borderLeftWidth: 7.5,
          borderRightWidth: 7.5,
          borderBottomWidth: 10,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "white",
          position: "absolute",
          top: -10,
          left: 25,
        }}
      />
      <View style={{ height: "20%", backgroundColor: "white" }} />
      <Pressable
        style={{
          flex: 1,
          backgroundColor: "lightblue",
        }}
            onPress={() => dispatch(selectHomeItem(null))}
        >
        <Text>Press me</Text>
      </Pressable>
    </View>
  );
};

export default HomeMenuItem;
