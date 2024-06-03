import React, { memo } from "react";
import ArrowLeftIcon from "@/assets/images/ArrowLeft.svg";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/interface/navigation.interface";

interface GoBackProps {
  lastRoute?: string | null | any;
}
const GoBack = ({ lastRoute = null }: GoBackProps) => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <ArrowLeftIcon
      onPress={
        lastRoute && lastRoute !== null
          ? () => navigation.navigate(lastRoute)
          : () => navigation.goBack()
      }
    />
  );
};

export default memo(GoBack);
