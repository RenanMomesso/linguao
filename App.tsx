import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
if (__DEV__) {
  const Reactotron = require("./ReactoTronConfig");
}
import Routes from "./src/navigation/Routes";
import ThemeProviderComponent from "@/theme/StyledThemeProvider";
import { Provider } from "react-redux";
import store from "@/store";
import Client from "./src/Apollo/Client";
import StorybookUIRoot from './.storybook';
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Client>
        <Provider store={store}>
          <ThemeProviderComponent>
            <Routes />
          </ThemeProviderComponent>
        </Provider>
      </Client>
    </GestureHandlerRootView>
  );
};
export default console.tron.storybookSwitcher(StorybookUIRoot)(App);