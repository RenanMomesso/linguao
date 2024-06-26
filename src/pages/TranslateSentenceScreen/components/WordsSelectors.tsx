import DuoDragDrop, { DuoDragDropRef, Word } from "@/components/DuoDragAndDrop";
import { theme } from "@/theme/theme";
import { forwardRef, memo, useRef } from "react";

interface WordsSelectorsProps {
  buttonDisable: (disable: boolean) => void;
  disableGesture?: boolean;
  wordsExample?: string[];
}
const WordsSelectors = forwardRef<DuoDragDropRef, WordsSelectorsProps>(
  (props, ref) => {
    return (
      <DuoDragDrop
        ref={ref}
        gesturesDisabled={props.disableGesture}
        onDrop={word => {
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
        words={props.wordsExample || []}
      />
    );
  },
);

export default WordsSelectors;
