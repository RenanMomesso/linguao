import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Routes from "./src/navigation/Routes";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Routes />
    </GestureHandlerRootView>
  );
};

export default App;
