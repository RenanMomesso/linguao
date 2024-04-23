import DuoDragDrop, { DuoDragDropRef, Word } from "@/components/DuoDragAndDrop";
import { theme } from "@/theme/theme";
import { forwardRef, useRef } from "react";

const WordsSelectors = forwardRef<DuoDragDropRef, any>((props, ref) => {
  return (
    <DuoDragDrop
      ref={ref}
      gesturesDisabled={props.disableGesture}
      onDrop={word => {
        props.buttonDisable(ref?.current?.getWords()?.answered?.length === 0);
      }}
      renderWord={(word, index) => {
        return (
          <Word
            key={index}
            containerStyle={{
              borderRadius: 20,
              borderColor: theme.colors.greyScale300,
              elevation: 0,
              backgroundColor: "white",
              borderWidth: 1,
            }}
            textStyle={{
              fontFamily: theme.fontWeight.bold,
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
        "mother",
        "the",
        "blew",
        "wind",
        "hard",
        "abukalatauila",
      ]}
    />
  );
});

export default WordsSelectors;
