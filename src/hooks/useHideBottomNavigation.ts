import { useAppDispatch } from "@/store";
import { toggleBottomNavigation } from "@/store/reducer/uiReducer";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

const useHideBottomNavigation = () => {
  const dispatch = useAppDispatch();
  useFocusEffect(
    useCallback(() => {
      dispatch(toggleBottomNavigation(false));
    }, []),
  );
};

export default useHideBottomNavigation;
