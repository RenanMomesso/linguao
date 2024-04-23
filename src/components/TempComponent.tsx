import { GestureHandlerRootView } from "react-native-gesture-handler";
import DuoDragDrop, {
  DuoDragDropRef,
  Word,
} from "@jamsch/react-native-duo-drag-drop";
import { Pressable, Text, View } from "react-native";
import { theme } from "@/theme/theme";
import { useRef } from "react";

function App() {
  const ref = useRef<DuoDragDropRef>(null);
  console.log(ref.current?.getAnsweredWords());
  console.log(ref.current?.getWords());

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ backgroundColor: "white" }}>
        <DuoDragDrop
          ref={ref}
          renderWord={(word, index) => {
            return (
              <Word
                key={index}
                containerStyle={{
                  // backgroundColor:"red"
                  borderRadius: 20,
                  borderColor: theme.colors.greyScale300,
                  elevation: 0,
                  backgroundColor: "red",
                }}
                textStyle={{
                  fontFamily: theme.fontWeight.semibold,
                  color: theme.colors.greyScale900,
                }}
              />
            );
          }}
          wordHeight={50}
          words={[
            "Juan",
            "She",
            "apples",
            "today",
            "with",
            "eats",
            "her",
            "another",
            "test",
            "another",
            "examples",
            "ok",
          ]}
        />
      </View>
    </GestureHandlerRootView>
  );
}

export default App;
