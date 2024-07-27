import { useAppDispatch } from "@/store";
import { toggleBottomNavigation } from "@/store/reducer/uiReducer";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

const useShowBottomNavigation = () => {
  const dispatch = useAppDispatch();
  useFocusEffect(
    useCallback(() => {
      dispatch(toggleBottomNavigation(true));
    }, []),
  );
};

export default useShowBottomNavigation;
