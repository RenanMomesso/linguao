import { View, Text } from "react-native";
import React from "react";
import GoBack from "../GoBack/GoBack";

const ErrorComponent = () => {
  return (
    <View>
      <GoBack />
      <Text>Error</Text>
    </View>
  );
};

export default ErrorComponent;
