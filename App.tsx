import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Routes from "./src/navigation/Routes";
import ThemeProviderComponent from "@/theme/StyledThemeProvider";
import { Provider } from "react-redux";
import store from "@/store";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <ThemeProviderComponent>
          <Routes />
        </ThemeProviderComponent>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
