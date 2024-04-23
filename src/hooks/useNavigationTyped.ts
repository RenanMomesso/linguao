import { AuthenticationStack, NavigationProps } from "@/interface/navigation.interface";
import { useNavigation } from "@react-navigation/native";

export const useTypedNavigation = () => {
  const navigation = useNavigation<NavigationProps>();
  return navigation;
};
