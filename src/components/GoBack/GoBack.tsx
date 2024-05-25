import React from "react";
import ArrowLeftIcon from "@/assets/images/ArrowLeft.svg";
import { useNavigation } from "@react-navigation/native";

const GoBack = () => {
  const navigation = useNavigation();
  return <ArrowLeftIcon onPress={() => navigation.goBack()} />;
};

export default GoBack;
