import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Routes from "./src/navigation/Routes";
import ThemeProviderComponent from "@/theme/StyledThemeProvider";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProviderComponent>
        <Routes />
      </ThemeProviderComponent>
    </GestureHandlerRootView>
  );
};

export default App;
